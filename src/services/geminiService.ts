// Gemini service calls the backend API to keep the API key secure

export async function getFinancialAdvice(userContext: any) {
  try {
    const response = await fetch("/api/advice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userContext }),
    });

    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error getting financial advice:", error);
    return "Désolé, je n'arrive pas à me connecter pour le moment. Réessaie plus tard !";
  }
}

export async function askFinancialQuestion(question: string, userContext: any) {
  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, userContext }),
    });

    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error asking financial question:", error);
    return "Je rencontre une petite difficulté technique. Pose-moi ta question à nouveau dans un instant !";
  }
}
