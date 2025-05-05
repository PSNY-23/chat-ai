// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
    GoogleGenAI,
  } from '@google/genai';
  
export async function generateAIResponse(inputText: string): Promise<string[]> {
    const ai = new GoogleGenAI({
      apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    });
  
    const config = {
      responseMimeType: 'text/plain',
    };
  
    const model = 'gemini-1.5-flash';
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: inputText,
          },
        ],
      },
  ];
  
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });
  
    const result: string[] = [];
    for await (const chunk of response) {
      if (chunk.text !== undefined) {
        result.push(chunk.text);
      }
  }  
    return result;
  }
  