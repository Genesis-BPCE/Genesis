export const MAJOR_REWARDS = [
  { xpRequired: 1000, title: "Frais de courtage offerts (1 mois)", icon: "📈", desc: "Économisez sur vos premiers ordres de bourse." },
  { xpRequired: 2500, title: "Cashback boosté (+2%)", icon: "💳", desc: "Récupérez plus d'argent sur vos achats quotidiens." },
  { xpRequired: 5000, title: "Bilan patrimonial gratuit", icon: "👨‍💼", desc: "Un expert BPCE analyse votre situation gratuitement." },
  { xpRequired: 10000, title: "Accès fonds premium", icon: "💎", desc: "Investissez dans des fonds réservés aux clients institutionnels." },
];

export const MAJOR_CHALLENGES = [
  {
    id: 'fiscalite-pea',
    title: "Optimisation Fiscale : Le PEA",
    desc: "Comprendre les avantages fiscaux du Plan d'Épargne en Actions.",
    xpReward: 500,
    content: `Le PEA est un outil puissant pour investir en actions européennes. Son principal avantage est fiscal : après 5 ans de détention, les gains (plus-values et dividendes) sont exonérés d'impôt sur le revenu. Seuls les prélèvements sociaux (17,2%) restent dus.

Attention cependant : tout retrait avant 5 ans entraîne la clôture du plan (sauf exceptions) et une fiscalité moins avantageuse. Le plafond de versement est de 150 000 €.`,
    quiz: [
      {
        question: "Après combien d'années le PEA offre-t-il son avantage fiscal maximal ?",
        options: ["2 ans", "5 ans", "8 ans", "10 ans"],
        correctAnswer: 1
      },
      {
        question: "Quel est le plafond de versement sur un PEA classique ?",
        options: ["22 950 €", "75 000 €", "150 000 €", "Illimité"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'assurance-vie-succession',
    title: "Assurance Vie & Succession",
    desc: "Pourquoi l'assurance vie est l'outil préféré des Français.",
    xpReward: 600,
    content: `L'assurance vie n'est pas seulement un produit d'épargne, c'est aussi un outil de transmission hors succession. Elle permet de transmettre jusqu'à 152 500 € par bénéficiaire sans aucun droit de succession (pour les versements effectués avant 70 ans).

Elle offre également une fiscalité allégée sur les rachats après 8 ans, avec un abattement annuel sur les intérêts de 4 600 € (personne seule) ou 9 200 € (couple).`,
    quiz: [
      {
        question: "Quel est l'abattement par bénéficiaire pour les versements avant 70 ans ?",
        options: ["30 500 €", "100 000 €", "152 500 €", "200 000 €"],
        correctAnswer: 2
      },
      {
        question: "Après combien d'années l'assurance vie devient-elle fiscalement très avantageuse ?",
        options: ["2 ans", "4 ans", "8 ans", "12 ans"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'immobilier-scpi',
    title: "L'Immobilier Papier (SCPI)",
    desc: "Investir dans l'immobilier sans les contraintes de gestion.",
    xpReward: 450,
    content: `Les SCPI (Sociétés Civiles de Placement Immobilier) permettent d'acheter des parts d'un parc immobilier géré par une société spécialisée. Vous recevez des revenus (loyers) au prorata de vos parts.

C'est une solution idéale pour diversifier son patrimoine dans l'immobilier tertiaire (bureaux, commerces) avec un ticket d'entrée faible, mais attention aux frais de souscription souvent élevés.`,
    quiz: [
      {
        question: "Que signifie l'acronyme SCPI ?",
        options: [
          "Société Civile de Placement Immobilier",
          "Service de Conseil en Patrimoine Individuel",
          "Société de Crédit pour Particuliers Investisseurs",
          "Système de Capitalisation à Plus-value Immédiate"
        ],
        correctAnswer: 0
      }
    ]
  }
];
