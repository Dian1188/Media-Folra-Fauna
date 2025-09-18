
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const buildPrompt = (code: string, language: string): string => {
  return `
You are a world-class senior software engineer and an expert code reviewer.
Your task is to provide a detailed, constructive, and actionable code review for the provided code snippet.

Analyze the following code written in ${language}:

\`\`\`${language}
${code}
\`\`\`

Please provide your review with the following structure:
1.  **Overall Summary:** A brief overview of the code's quality, purpose, and key findings.
2.  **Bugs & Potential Issues:** Identify any bugs, logic errors, or edge cases that might not be handled correctly.
3.  **Performance Suggestions:** Point out any performance bottlenecks and suggest optimizations.
4.  **Style & Readability:** Comment on coding style, naming conventions, and code clarity. Suggest improvements for better readability and maintainability.
5.  **Security Vulnerabilities:** Highlight any potential security risks (e.g., XSS, SQL injection, etc.), if applicable.
6.  **Best Practices & Refactoring:** Suggest alternative approaches or refactoring that aligns with modern best practices for ${language}.

Format your response using Markdown. Use headings (e.g., '## Bugs & Potential Issues') for each section. Be clear, concise, and professional.
`;
};

export const reviewCode = async (code: string, language: string): Promise<string> => {
  const prompt = buildPrompt(code, language);
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return Promise.reject(new Error(`Failed to get review from AI: ${error.message}`));
    }
    return Promise.reject(new Error("An unknown error occurred while communicating with the AI."));
  }
};
