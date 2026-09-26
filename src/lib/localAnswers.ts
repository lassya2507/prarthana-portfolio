// Free, offline answers for Mini Prarthana — no AI credits used.
// Edit the text below to change what she says.
type Topic = { keys: string[]; answer: string };

const TOPICS: Topic[] = [
  { keys: ["gosentrix", "gsx", "trust infrastructure", "ssrf", "jwt", "pgvector", "scan", "bom", "sunnyvale", "summer 2026"],
    answer: "At GoSentrix (Jun–Aug 2026) I was an AI Trust Infrastructure SWE Intern:\n• Patched an SSRF vulnerability (CWE-918) and enforced fail-closed JWT auth across 3 services, unblocking the GA release\n• Made the security-scan pipeline 2.3x faster (BOM scanning 6.2 → 2.7 min) and cut file I/O 19x\n• Migrated the RAG vector store from Chroma to PostgreSQL/pgvector" },
  { keys: ["role", "looking", "job", "hire", "hiring", "new grad", "2027", "internship", "open to", "position", "opportunit"],
    answer: "I'm looking for 2027 new-grad roles in Software Engineering, ML Engineering, Applied AI, AI/ML Infrastructure, LLM Systems, AI Agents, Backend AI Systems and AI Security / Trustworthy AI. Reach me at prarthana@cmu.edu!" },
  { keys: ["lab4c", "cybernetic", "research assistant", "cmu research"],
    answer: "I was a Research Assistant at CMU's Laboratory for Cybernetics (Feb 2026 – Jul 2026), working on the Re-Braiding Cybernetics x AI initiative and the Lab4C platform." },
  { keys: ["mashdemy", "n8n", "sales pipeline", "bangalore"],
    answer: "At Mashdemy (Jun 2024 – May 2025) I built an n8n AI sales pipeline that lifted lead-to-meeting conversion 35%, cut sales response time 60% with LLM classifiers, and taught AI agents & RAG to 50+ students." },
  { keys: ["iit", "roorkee", "nlp", "bert", "vision transformer", "multimodal"],
    answer: "At IIT Roorkee (Apr–May 2024) I fine-tuned BERT and Vision Transformers for multimodal classification, improving accuracy 30% and halving iteration cycles on 10GB+ datasets." },
  { keys: ["experience", "worked", "work history", "internships", "career"],
    answer: "My experience:\n• GoSentrix — AI Trust Infrastructure SWE Intern (2026)\n• CMU Lab for Cybernetics — Research Assistant (Feb–Jul 2026)\n• Mashdemy — AI Engineering Intern (2024–25)\n• IIT Roorkee — NLP Research Intern (2024)\nAsk me about any of them!" },
  { keys: ["copilot", "relevance", "firecrawl", "sales research"],
    answer: "My AI Sales Research Copilot (Relevance AI + Firecrawl) automates lead research — 90%+ less manual work and 20% more weekly calls." },
  { keys: ["eco", "renewable", "energy", "evolutionary", "shap"],
    answer: "Eco-Resource Optimization uses evolutionary optimization to allocate renewable energy, with +123% simulated power generation and SHAP explainability." },
  { keys: ["lung", "segmentation", "u-net", "unet", "x-ray", "medical", "aimle"],
    answer: "My Lung Segmentation project uses an Attention U-Net on chest X-rays — 98.9% accuracy and 97.8% Dice. I presented it at AIMLE 2024." },
  { keys: ["deepfake", "deep fake"], answer: "Deep Fake Detection is one of my computer-vision projects — the code is on my GitHub: github.com/lassya2507/deep-fake-detection." },
  { keys: ["innergram", "publication", "paper", "iccmst", "published", "social media"],
    answer: "Innergram is a social media analysis platform; the work became a peer-reviewed paper at ICCMST 2024 (Taylor & Francis)." },
  { keys: ["project", "built", "build", "strongest", "portfolio"],
    answer: "Some projects I'm proud of:\n• AI Sales Research Copilot — 90%+ less manual research\n• Lung Segmentation — 98.9% accuracy, presented at AIMLE\n• Eco-Resource Optimization — +123% simulated power\n• Innergram — published at ICCMST 2024\nPlus Deep Fake Detection!" },
  { keys: ["skill", "stack", "tech", "language", "tools", "python", "framework", "know"],
    answer: "My stack: Python, C++, SQL, JavaScript · PyTorch, TensorFlow, Hugging Face · LangChain, RAG, AI Agents, vector DBs · FastAPI, React, PostgreSQL, Docker, Kubernetes, AWS, GCP · AI/LLM security, AppSec and threat modeling." },
  { keys: ["security", "secure", "trustworthy", "safety", "adversar"],
    answer: "Security is my differentiator: I study AI Engineering – Information Security at CMU, and at GoSentrix I fixed SSRF and JWT auth issues in production AI trust infrastructure." },
  { keys: ["cmu", "carnegie", "education", "study", "school", "degree", "gpa", "bennett", "university", "hse", "college"],
    answer: "I'm doing an MS in AI Engineering – Information Security at Carnegie Mellon (2025–2027, GPA 3.7). Before that, a B.Tech in CS at Bennett University (GPA 9/10, Merit Scholar), with an exchange at HSE University, Russia." },
  { keys: ["certif", "coursera", "course"], answer: "I have 13 certifications, including Machine Learning for Computer Vision (MathWorks) and Google's Bits and Bytes of Computer Networking — see the Certifications section!" },
  { keys: ["resume", "cv"], answer: "You can open my resume with the Resume button at the top of the page 📄" },
  { keys: ["contact", "email", "reach", "linkedin", "github", "twitter", "connect"],
    answer: "Email: prarthana@cmu.edu\nLinkedIn: linkedin.com/in/lassya\nGitHub: github.com/lassya2507\nX: x.com/RoutPrarthana" },
  { keys: ["who are you", "about you", "yourself", "introduce", "tell me about"],
    answer: "I'm Prarthana — a Software + ML engineer at CMU building reliable AI systems across LLMs, agents, ML infrastructure and secure AI 👓" },
  { keys: ["hi", "hello", "hey"], answer: "Hi there! 👋 Ask me about my experience, projects, skills, or what roles I'm looking for." },
];

export function localAnswer(q: string): string {
  const text = ` ${q.toLowerCase()} `;
  let best: Topic | null = null, score = 0;
  for (const t of TOPICS) {
    const s = t.keys.reduce((n, k) => (k.length <= 3 ? new RegExp(`\\b${k}\\b`).test(text) : text.includes(k)) ? n + k.length : n, 0);
    if (s > score) { score = s; best = t; }
  }
  return best?.answer ?? "Great question! I don't have that one handy — email me at prarthana@cmu.edu and I'll get back to you 💌";
}
