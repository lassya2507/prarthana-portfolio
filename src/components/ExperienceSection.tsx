import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Trust Infrastructure, SWE Intern",
    company: "GoSentrix (GSX) — Sunnyvale, CA",
    period: "Jun 2026 – Aug 2026",
    bullets: [
      "Unblocked the GA release by patching an SSRF vulnerability (CWE-918) with DNS-resolving URL validation and enforcing fail-closed JWT auth across 3 services.",
      "Sped up the core security-scan pipeline 2.3x on BOM scanning (6.2 → 2.7 min) by parallelizing 14 scanners, precompiling regex hot loops, and cutting file I/O 19x — with byte-identical output.",
      "Migrated the RAG vector store from Chroma to PostgreSQL/pgvector (bge-base-en-v1.5, HNSW cosine index), removing a third-party dependency.",
    ],
    metrics: ["2.3x faster scans", "19x less file I/O", "3 services secured"],
    tags: ["Python", "PostgreSQL", "pgvector", "RAG", "JWT", "AppSec"],
    color: "border-l-primary",
  },
  {
    role: "Research Assistant",
    company: "Carnegie Mellon University — Laboratory for Cybernetics",
    period: "Feb 2026 – Jul 2026",
    bullets: [
      "Supporting the Re-Braiding Cybernetics × AI initiative on the Lab4C platform.",
    ],
    metrics: [],
    tags: ["AI Research", "Lab4C"],
    color: "border-l-primary/80",
  },
  {
    role: "AI Engineering Intern",
    company: "Mashdemy — Bangalore, India",
    period: "Jun 2024 – May 2025",
    bullets: [
      "Increased lead-to-meeting conversion 35% by automating prospect discovery with an AI-driven sales pipeline built in n8n.",
      "Cut sales response time 60% by deploying LLM-based classifiers and orchestrating reply workflows with OpenAI APIs.",
      "Taught AI agent orchestration, RAG pipelines, and API integration to 50+ students, lifting course completion 25%.",
    ],
    metrics: ["+35% conversion", "−60% response time"],
    tags: ["AI Agents", "LLMs", "n8n", "OpenAI API", "RAG"],
    color: "border-l-primary/60",
  },
  {
    role: "NLP Research Intern",
    company: "Indian Institute of Technology Roorkee",
    period: "Apr 2024 – May 2024",
    bullets: [
      "Boosted multimodal classification accuracy 30% by fine-tuning BERT and Vision Transformers with PyTorch and Hugging Face.",
      "Shortened model iteration cycles 50% by streamlining data loading and batching on 10GB+ datasets.",
    ],
    metrics: ["+30% accuracy", "50% faster iteration"],
    tags: ["BERT", "ViT", "PyTorch", "Hugging Face"],
    color: "border-l-primary/40",
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 md:py-32 section-gradient-2">
      <div className="container max-w-5xl mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-12 h-1 rounded-full gradient-primary mb-10" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-6 border-l-4 ${exp.color} glow-hover transition-all duration-500 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.15 + i * 0.12}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-lavender">
                      <Briefcase className="w-4 h-4 text-lavender-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0 font-medium">{exp.period}</span>
                </div>
                {exp.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.metrics.map((m) => (
                      <span key={m} className="px-3 py-1 text-xs font-bold rounded-full bg-rose text-rose-foreground">{m}</span>
                    ))}
                  </div>
                )}
                <ul className="space-y-1.5 mb-4">
                  {exp.bullets.map((b) => (
                    <li key={b} className="text-sm text-foreground/75 leading-relaxed flex gap-2">
                      <span className="text-primary mt-0.5">✦</span><span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-lavender/50 text-lavender-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
