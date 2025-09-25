"use server";
import { env } from "process";

const OLLAMA_HOST = env.OLLAMA_HOST || "http://10.64.101.147:11434";
const OLLAMA_MODEL = env.OLLAMA_MODEL || 'llama4:16x17b'; // Change as needed


function countTokens(text: string): number {
    // Normalize whitespace and split into tokens
    text = text.trim().replace(/\s+/g, ' ');
    const tokens = text.match(/\w+|[^\w\s]/g); // Matches words or standalone non-whitespace chars
    return tokens ? tokens.length : 0;
}

async function streamInference(serverUrl: string, model: string, prompt: string) {
    const endpoint = `${serverUrl}/api/generate/`;
    const headers = {
        "Content-Type": "application/json"
    };
    const payload = {
        model: model,
        prompt: prompt
    };

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        console.error(`Error: ${response.status} ${await response.text()}`);
        return null;
    }

    let generatedText = '';
    let numOfTokens = 0;

    const reader = response.body?.getReader();
    if (!reader) return null;

    const decoder = new TextDecoder();

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        if (chunk) {
            const chunkParts = chunk.split('\n'); // Assuming chunks are separated by newlines

            for (const part of chunkParts) {
                if (part.trim()) { // Check for non-empty strings
                    // console.log("Received chunk:", part);
                    // console.log("Chunk length:", part.length);

                    try {
                        console.log("Parsing chunk as JSON:", part);
                        const chunkData = JSON.parse(part);
                        if (chunkData.response && chunkData.response !== "" && chunkData.done === false) {
                            const textChunk = chunkData.response;
                            generatedText += textChunk;
                            numOfTokens += countTokens(textChunk);
                            process.stdout.write(textChunk);
                        }
                    } catch (error) {
                        console.error("Failed to parse JSON:", error);
                    }
                }
            }
        }
    }

    return { generatedText, numOfTokens };
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
}
    | undefined

export async function submitSortingHatForm(data: {
    career: string,
    otherCareer: string,
    universityPreference: boolean,
    universities: string[],
    disciplinePreference: boolean,
    disciplines: string[],
    interests: string[],
    otherInterests: string,
    currentYear: string,
    subjectsCore: { subject: string, grade: string }[],
    subjectsElective: { subject: string, grade: string }[],
    subjectsB: { subject: string, grade: string }[],
    subjectsC: { subject: string, grade: string }[],
    personalityType: string,
    additionalNotes: string
}): Promise<State> {
    console.log(data)

    const prompt = `
    I am using a degree recommendation system for secondary school students in Hong Kong. Here are the inputs I've collected from a user:
    
    The data is presented in JSON format:

    ${JSON.stringify(data, null, 2)}
    
    Based on this information, please provide recommendations for suitable university degree programmes, including a brief narrative summary for each recommendation, highlighting how they align with the user's career aspirations, academic strengths, and preferences. Include any relevant insights into potential career paths and the flexibility of the degrees.
    `
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

    return { success: true, message: "Form submitted successfully", data: summary };
}