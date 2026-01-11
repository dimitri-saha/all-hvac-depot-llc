
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a helpful and professional AI assistant for "All HVAC Depot LLC", an HVAC contractor located in San Ramon, California.
Your goal is to answer questions about HVAC services, provide basic maintenance tips, and encourage users to book a service.

Business details:
- Name: All HVAC Depot LLC
- Address: 2661 Derby Dr, San Ramon, CA 94583
- Phone: +1 (925) 310-2505
- Services: Residential & Commercial HVAC, installation, repair, maintenance, AC repair, furnace installation, system upgrades, air duct cleaning.
- Availability: 24/7 Emergency services.
- Vibe: Modern, reliable, premium, professional, eco-friendly.

CRITICAL RULES:
1. DO NOT use any markdown formatting, especially asterisks (*) for bold or italic text. Respond in plain text only.
2. Keep responses extremely concise and short (maximum 2 sentences). 
3. If a user needs detailed help, tell them to call (925) 310-2505.
4. Be friendly but brief.
5. IMPORTANT: Do not provide or invent an email address. The business handles all inquiries via phone or the website contact form.
`;

export const getGeminiResponse = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Please call us at (925) 310-2505.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our assistant is currently offline. Please call us directly at (925) 310-2505.";
  }
};
