import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getFinancialAdvice(userContext: any) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Tu es Genesis, un coach financier intelligent et bienveillant pour les jeunes. 
      Voici le contexte de l'utilisateur : ${JSON.stringify(userContext)}.
      Donne-lui 3 conseils personnalisés, courts et motivants pour améliorer sa situation financière ou son apprentissage. 
      Réponds en français, avec un ton moderne et encourageant. Utilise des emojis.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error getting financial advice:", error);
    return "Désolé, je n'arrive pas à me connecter pour le moment. Réessaie plus tard !";
  }
}

export async function askFinancialQuestion(question: string, userContext: any) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Tu es Genesis, un coach financier expert. 
      Contexte de l'utilisateur : ${JSON.stringify(userContext)}.
      Question de l'utilisateur : ${question}
      Réponds de manière pédagogique, simple et précise en français.`,
      config: {
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error asking financial question:", error);
    return "Je rencontre une petite difficulté technique. Pose-moi ta question à nouveau dans un instant !";
  }
}
