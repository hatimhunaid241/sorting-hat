"use server";
import { StudentSubject, University } from "@/lib";
import { calculateUniversityScores } from "@/lib/calculators/scoreCalculator";
import { allUniversities } from "@/lib/data/universities";
import { env } from "process";

const OLLAMA_HOST = env.OLLAMA_HOST || 'http://10.64.101.147:11434';
const OLLAMA_MODEL = env.OLLAMA_MODEL || 'llama4:16x17b'; // Change as needed

if (!env.OLLAMA_HOST) {
    console.warn('OLLAMA_HOST environment variable not set');
}
if (!env.OLLAMA_MODEL) {
    console.warn('OLLAMA_MODEL environment variable not set');
}


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
        expectedScore?: number | null;
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
    try {
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
        expectedScore?: number | null;
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
You are a university admissions counselor. Analyze this student's profile and provide personalized programme recommendations. Address the student directly and focus solely on recommending suitable degree programmes.

## YOUR PROFILE:
- **Career Goal**: ${data.career}${data.career === "Other" ? ` (${data.otherCareer})` : ''}
- **Current Year**: ${data.currentYear}
- **Personality Type**: ${data.personalityType}
- **Preferred Disciplines**: ${data.disciplinePreference ? data.disciplines.join(', ') : 'No specific preference'}
- **Interests/Hobbies**: ${data.interests.join(', ')}${data.otherInterests ? `, ${data.otherInterests}` : ''}
- **Additional Notes**: ${data.additionalNotes || 'None provided'}

${hasGrades ? `## YOUR HKDSE PERFORMANCE:
Here are your HKDSE grades:
${allSubjects.map(s => `- ${s.subject} (${s.abbreviation}): ${s.grade}`).join('\n')}

Based on your grades, I've calculated your admission scores for each programme. Higher scores indicate better admission chances.
` : `## YOUR ACADEMIC JOURNEY:
Since you haven't taken your HKDSE exams yet, I'll focus on programmes that align with your interests and career goals.
`}

## AVAILABLE PROGRAMMES:

${selectedUniversities.map(uniKey => {
    const uniName = uniKey.toUpperCase();
    const programmes = availableProgrammes[uniKey] || [];
    
    return `### ${uniName}:
${programmes.slice(0, 20).map((prog) => {
    let progInfo = `- **${prog.code}** - ${prog.name}${prog.faculty ? ` (${prog.faculty})` : ''}`;
    if (hasGrades && prog.calculatedScore !== null) {
        progInfo += `\n  Your Score: ${prog.calculatedScore.toFixed(1)}/${prog.expectedScore || 'N/A'}`;
        if (prog.comments && prog.comments.length > 0) {
            progInfo += ` | Notes: ${prog.comments.map((c) => c.message).join('; ')}`;
        }
    } else if (prog.expectedScore) {
        progInfo += `\n  Expected Score: ${prog.expectedScore}`;
    }
    return progInfo;
}).join('\n')}
${programmes.length > 20 ? `... and ${programmes.length - 20} more programmes` : ''}`;
}).join('\n\n')}

## YOUR TOP 5 PROGRAMME RECOMMENDATIONS:

Based on your career goals, ${hasGrades ? 'academic performance, ' : ''}interests, and personality type, here are my top 5 programme recommendations for you:

For each programme, I'll provide:
1. **Programme Code & Name** (University)
2. **Why It Matches You**: How it aligns with your goals, ${hasGrades ? 'scores, ' : ''}interests, and personality
3. ${hasGrades ? '**Your Admission Chances**: Based on your calculated score' : '**What You Should Focus On**: Academic preparation needed'}
4. **Career Opportunities**: Where this programme can take you
5. **Programme Strengths**: What makes this programme special

${hasGrades ? `
Note about your scores: These are based on JUPAS admission criteria. Scores close to or above the expected score indicate good admission chances. Most programmes require CSD "Attained" status.
` : ''}

Let me recommend the best programmes for you:`;
    const startTime = Date.now();

    const inference = await streamInference(OLLAMA_HOST, OLLAMA_MODEL, prompt);

    const endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds
    const tokensPerSecond = inference?.numOfTokens ? inference.numOfTokens / elapsedTime : 0;

    const summary = {
        totalExecutionTime: elapsedTime,
        numberOfTokens: inference?.numOfTokens || 0,
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
    } catch (error) {
        console.error("Error in submitSortingHatForm:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "An unexpected error occurred",
            data: {
                totalExecutionTime: 0,
                numberOfTokens: 0,
                speed: 0,
                generatedText: undefined
            }
        };
    }
}