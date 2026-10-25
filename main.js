// English lives in the HTML; this holds French. English strings are read from the page on load.
const fr = {
  title: "Cyberia Consulting : conseil en IA, automatisation et logiciels à Tunis",
  navServices: "Services",
  navApproach: "Méthode",
  navContact: "Contact",
  kicker: "Les questions auxquelles nous vous aidons à répondre",
  q1: "Faut-il automatiser cette tâche\u00a0?",
  q2: "Quel outil choisir\u00a0?",
  q3: "Développer ou acheter\u00a0?",
  q4: "Ce devis est-il raisonnable\u00a0?",
  q5: "Où l'IA sera-t-elle vraiment rentable\u00a0?",
  heroTitle: "Cyberia Consulting est un cabinet de conseil à Tunis pour vos décisions en IA, automatisation et logiciels. Quand la bonne réponse est un outil sur mesure, nous le développons aussi.",
  ctaContact: "Nous parler",
  ctaServices: "Nos services",
  servicesTitle: "Nos services",
  s1Title: "Stratégie IA et automatisation",
  s1Text: "Où l'IA vaut vraiment la peine dans votre entreprise, dans quel ordre et pour quel coût. Vous repartez avec un plan que votre équipe peut suivre sans nous.",
  s2Title: "Audit des processus et des systèmes",
  s2Text: "Nous observons comment le travail circule entre vos équipes et vos outils, et vous montrons où se perdent le temps et l'argent.",
  s3Title: "Choix de logiciels et de prestataires",
  s3Text: "Un second avis sur les plateformes, les prestataires et les devis de développement avant d'y engager votre budget.",
  s4Title: "Développement, si nécessaire",
  s4Text: "Si la bonne réponse est un outil sur mesure, une automatisation ou une intégration, nous la développons et la remettons à votre équipe.",
  approachTitle: "Notre méthode",
  a1Title: "Échange",
  a1Text: "Vous nous expliquez ce que vous cherchez à résoudre. Nous posons des questions jusqu'à bien comprendre la décision à prendre.",
  a2Title: "Analyse",
  a2Text: "Nous étudions vos processus, vos outils et vos contraintes, et échangeons avec les personnes qui font le travail.",
  a3Title: "Recommandation",
  a3Text: "Une recommandation écrite avec les options, les coûts et les compromis, pour décider en confiance.",
  a4Title: "Réalisation, si vous le souhaitez",
  a4Text: "Nous développons la solution nous-mêmes, ou accompagnons votre équipe ou votre prestataire pendant qu'ils la réalisent.",
  contactTitle: "Contact",
  cEmail: "E-mail",
  cPhone: "Téléphone",
  cOffice: "Bureau",
  cCity: "Tunis, Tunisie",
};

const nodes = document.querySelectorAll("[data-i18n]");
const en = { title: document.title };
nodes.forEach((el) => (en[el.dataset.i18n] = el.textContent.trim()));

const toggle = document.getElementById("lang-toggle");

function setLang(lang) {
  const t = lang === "fr" ? fr : en;
  nodes.forEach((el) => (el.textContent = t[el.dataset.i18n]));
  document.title = t.title;
  document.documentElement.lang = lang;
  toggle.textContent = lang === "fr" ? "EN" : "FR";
  toggle.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
  try { localStorage.setItem("lang", lang); } catch {}
}

let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
const initial = saved || (navigator.language.startsWith("fr") ? "fr" : "en");
if (initial === "fr") setLang("fr");

toggle.addEventListener("click", () => setLang(document.documentElement.lang === "fr" ? "en" : "fr"));
