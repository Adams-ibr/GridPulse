import { GoogleGenAI } from "@google/genai";
import { GridAsset, AlertData } from '../types';

const getGridSummary = async (gridData: GridAsset[], alerts: AlertData[]): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    You are an AI assistant for an electricity distribution company.
    Your task is to provide a concise, professional summary of the current grid status based on the data provided.
    Highlight critical issues and suggest one or two potential actions.
    The summary should be in clear, easy-to-understand language for a control room operator.
    Do not use markdown formatting.

    Current Grid Data:
    ${gridData.map(asset => `- ${asset.name} (${asset.id}): Status ${asset.status}, Load ${asset.load} MW`).join('\n')}

    Active Alerts:
    ${alerts.map(alert => `- ${alert.level}: ${alert.title}`).join('\n')}

    Please provide your summary and recommendations now.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Error: Could not retrieve insights from AI assistant. Please check your connection and API key.";
  }
};

export { getGridSummary };
