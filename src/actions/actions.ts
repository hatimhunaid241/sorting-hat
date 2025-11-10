"use server";
import { StudentSubject, University } from "@/lib";
import { calculateUniversityScores } from "@/lib/calculators/scoreCalculator";
import { allUniversities } from "@/lib/data/universities";
import { env } from "process";

const OLLAMA_HOST = env.OLLAMA_HOST || "http://10.64.101.147:11434";
const OLLAMA_MODEL = env.OLLAMA_MODEL || 'llama4:16x17b'; // Change as needed


function countTokens(text: string): number {
    // Normalize whitespace and split into tokens
    text = text.trim().replace(/\s+/g, ' ');
    const tokens = text.match(/\w+|[^\w\s]/g); // Matches words or standalone non-whitespace chars
    return tokens ? tokens.length : 0;
}

let currentAbortController: AbortController | null = null;

async function streamInference(serverUrl: string, model: string, prompt: string) {
    // Abort any previous request
    if (currentAbortController) {
        console.log("Aborting previous request");
        currentAbortController.abort();
    }
    
    // Create new abort controller for this request
    currentAbortController = new AbortController();
    
    const endpoint = `${serverUrl}/api/generate/`;
    const headers = {
        "Content-Type": "application/json"
    };
    const payload = {
        model: model,
        prompt: prompt
    };

    let response;
    try {
        response = await fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload),
            signal: currentAbortController.signal
        });

        if (!response.ok) {
            console.error(`Error: ${response.status} ${await response.text()}`);
            return null;
        }
    } catch (error: unknown) {
        if (error instanceof Error && error.name === 'AbortError') {
            console.log("Request was aborted");
            return null;
        }
        console.error("Error in streamInference:", error);
        return null;
    }

    let generatedText = '';
    let numOfTokens = 0;

    const reader = response.body?.getReader();
    if (!reader) return null;

    const decoder = new TextDecoder();

    let buffer = '';
    
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;
        
        // Split by newlines and process complete JSON objects
        const lines = buffer.split('\n');
        // Keep the last incomplete line in the buffer
        buffer = lines.pop() || '';
        
        for (const line of lines) {
            if (line.trim()) {
                try {
                    const chunkData = JSON.parse(line);
                    
                    // Check if the generation is complete
                    if (chunkData.done === true) {
                        console.log("Generation complete");
                        return { generatedText, numOfTokens };
                    }
                    
                    // Process response chunks
                    if (chunkData.response) {
                        const textChunk = chunkData.response;
                        generatedText += textChunk;
                        numOfTokens += countTokens(textChunk);
                        process.stdout.write(textChunk);
                    }
                } catch (error) {
                    console.error("Failed to parse JSON:", error);
                    console.error("Problematic line:", line);
                }
            }
        }
    }
    
    // Process any remaining data in buffer
    if (buffer.trim()) {
        try {
            const chunkData = JSON.parse(buffer);
            if (chunkData.response) {
                generatedText += chunkData.response;
                numOfTokens += countTokens(chunkData.response);
            }
        } catch (error) {
            console.error("Failed to parse final buffer:", error);
        }
    }

    return { generatedText, numOfTokens };
}

interface UniversityScores {
    [universityKey: string]: ProgrammeScore[];
}

interface ProgrammeScore {
    programme: {
        programmeDetails: {
            id: string;
            name: string;
            faculty?: string;
        };
        expectedScore?: number;
        method?: string;
    };
    totalScore: number;
    csdStatus: string;
    breakdown: ScoreBreakdownItem[];
    comments: Comment[];
}

interface ScoreBreakdownItem {
    subject: string;
    abbreviation: string;
    grade: string;
    rawScore: number;
    calculatedScore: number;
    variable?: string;
}

interface Comment {
    message: string;
    type: 'error' | 'warning' | 'info';
}

export type State = | {
    success?: boolean
    message?: string
    data: {
        totalExecutionTime: number
        numberOfTokens: number
        speed: number
        generatedText?: string
    }
    calculatedScores?: UniversityScores
    hasGrades?: boolean
    selectedUniversities?: University[]
}
    | undefined

export async function submitSortingHatForm(data: {
    career: string,
    otherCareer: string,
    universityPreference: boolean,
    universities: University[],
    disciplinePreference: boolean,
    disciplines: string[],
    interests: string[],
    otherInterests: string,
    currentYear: string,
    subjectsCore: StudentSubject[],
    subjectsElective: StudentSubject[],
    subjectsB: StudentSubject[],
    subjectsC: StudentSubject[],
    personalityType: string,
    additionalNotes: string
}): Promise<State> {
    console.log("Received form data:", data);

    // Determine which universities to process
    const selectedUniversities: University[] = data.universityPreference 
        ? data.universities 
        : (Object.keys(allUniversities) as University[]);

    console.log("Selected universities:", selectedUniversities);

    // Collect all subjects with grades (filter out empty grades)
    const allSubjects = [
        ...data.subjectsCore,
        ...data.subjectsElective,
        ...data.subjectsB,
        ...data.subjectsC
    ].filter(subject => subject.grade && subject.grade.trim() !== '');

    console.log("Subjects with grades:", allSubjects.length);

    // Calculate scores if student has provided grades
    let calculatedScores: UniversityScores | undefined = undefined;
    const hasGrades = allSubjects.length > 0;

    if (hasGrades) {
        console.log("Calculating scores for subjects...");
        calculatedScores = calculateUniversityScores(selectedUniversities, allSubjects);
        console.log("Scores calculated successfully");
    }

    // Build available programmes list for each selected university
    const availableProgrammes: Record<string, Array<{
        code: string;
        name: string;
        faculty?: string;
        method?: string;
        expectedScore?: number;
        calculatedScore: number | null;
        csdStatus: string | null;
        comments: Comment[] | null;
    }>> = {};
    for (const uniKey of selectedUniversities) {
        const university = allUniversities[uniKey];
        if (university) {
            availableProgrammes[uniKey] = university.map((prog) => ({
                code: prog.programmeDetails.id,
                name: prog.programmeDetails.name,
                faculty: prog.programmeDetails.faculty,
                method: prog.method,
                expectedScore: prog.expectedScore,
                calculatedScore: hasGrades && calculatedScores?.[uniKey] 
                    ? calculatedScores[uniKey].find((p) => 
                        p.programme.programmeDetails.id === prog.programmeDetails.id)?.totalScore ?? null
                    : null,
                csdStatus: hasGrades && calculatedScores?.[uniKey]
                    ? calculatedScores[uniKey].find((p) => 
                        p.programme.programmeDetails.id === prog.programmeDetails.id)?.csdStatus ?? null
                    : null,
                comments: hasGrades && calculatedScores?.[uniKey]
                    ? calculatedScores[uniKey].find((p) => 
                        p.programme.programmeDetails.id === prog.programmeDetails.id)?.comments ?? null
                    : null
            }));
        }
    }

    // Build comprehensive prompt
    const prompt = `
You are an expert university admissions counselor for Hong Kong universities. You are helping a secondary school student find suitable degree programmes.

## STUDENT PROFILE:
- **Career Goal**: ${data.career}${data.career === "Other" ? ` (${data.otherCareer})` : ''}
- **Current Year**: ${data.currentYear}
- **MBTI Personality Type**: ${data.personalityType}
- **Preferred Disciplines**: ${data.disciplinePreference ? data.disciplines.join(', ') : 'No specific preference'}
- **Interests/Hobbies**: ${data.interests.join(', ')}${data.otherInterests ? `, ${data.otherInterests}` : ''}
- **Additional Notes**: ${data.additionalNotes || 'None'}

${hasGrades ? `## ACADEMIC PERFORMANCE:
The student has provided their HKDSE grades:
${allSubjects.map(s => `- ${s.subject} (${s.abbreviation}): ${s.grade}`).join('\n')}

### CALCULATED ADMISSION SCORES:
Based on these grades, we've calculated admission scores for each programme. Higher scores indicate better chances of admission.
` : `## ACADEMIC PERFORMANCE:
The student has not yet taken their HKDSE exams or has not provided grades. Please provide general guidance based on their interests and career goals.
`}

## AVAILABLE PROGRAMMES BY UNIVERSITY:

${selectedUniversities.map(uniKey => {
    const uniName = uniKey.toUpperCase();
    const programmes = availableProgrammes[uniKey] || [];
    
    return `### ${uniName}:
${programmes.slice(0, 20).map((prog) => {
    let progInfo = `- **${prog.code}** - ${prog.name}${prog.faculty ? ` (${prog.faculty})` : ''}`;
    if (hasGrades && prog.calculatedScore !== null) {
        progInfo += `\n  Score: ${prog.calculatedScore.toFixed(1)}/${prog.expectedScore || 'N/A'}`;
        if (prog.comments && prog.comments.length > 0) {
            progInfo += ` | Issues: ${prog.comments.map((c) => c.message).join('; ')}`;
        }
    } else if (prog.expectedScore) {
        progInfo += `\n  Expected Score: ${prog.expectedScore}`;
    }
    return progInfo;
}).join('\n')}
${programmes.length > 20 ? `... and ${programmes.length - 20} more programmes` : ''}`;
}).join('\n\n')}

## YOUR TASK:
Analyze the student's profile and ${hasGrades ? 'calculated scores to ' : ''}recommend the **TOP 5 PROGRAMMES** that best match their:
1. Career aspirations
2. ${hasGrades ? 'Academic performance/scores' : 'Interests and potential fit'}
3. Personality type and interests
4. Discipline preferences

For each recommendation, provide:
1. **Programme Code & Name** (University)
2. **Why It's a Good Match**: Explain how it aligns with their career goals, ${hasGrades ? 'scores, ' : ''}interests, and personality
3. ${hasGrades ? '**Admission Likelihood**: Based on their calculated score vs expected score' : '**What They Should Focus On**: Academic subjects/skills to develop'}
4. **Career Prospects**: Potential career paths after graduation
5. **Programme Highlights**: Key features, unique opportunities, or strengths

${hasGrades ? `
IMPORTANT SCORING CONTEXT:
- Scores are calculated based on JUPAS admission criteria (Best 5/6 subjects method)
- A score close to or above the "Expected Score" indicates good chances
- Consider CSD status (Attained/Not Attained) - most programmes require "Attained"
- Warning/error comments indicate potential eligibility issues
` : ''}

Please structure your response clearly with headings for each recommendation. Be encouraging but realistic about admission prospects.`;
    const startTime = Date.now();

    const inference = await streamInference(OLLAMA_HOST, OLLAMA_MODEL, prompt);

    const endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds
    const tokensPerSecond = inference!.numOfTokens ? inference!.numOfTokens / elapsedTime : 0;

    const summary = {
        totalExecutionTime: elapsedTime,
        numberOfTokens: inference!.numOfTokens,
        speed: tokensPerSecond,
        generatedText: inference?.generatedText,
    };

    console.log(inference?.generatedText)

    return { 
        success: true, 
        message: "Form submitted successfully", 
        data: summary,
        calculatedScores: hasGrades ? calculatedScores : undefined,
        hasGrades,
        selectedUniversities
    };
}