import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillGroups = [
  {
    title: "Languages",
    color: "bg-lavender",
    skills: ["Python", "C++", "SQL", "JavaScript", "Bash"],
  },
  {
    title: "ML & Deep Learning",
    color: "bg-sky",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "Hugging Face", "Transformers", "BERT", "CNNs"],
  },
  {
    title: "LLMs & Agentic Systems",
    color: "bg-peach",
    skills: ["LangChain", "RAG Pipelines", "AI Agents", "Vector Databases", "Prompt Engineering", "LLM Evaluation"],
  },
  {
    title: "Core CS & Systems",
    color: "bg-rose",
    skills: ["Data Structures & Algorithms", "System Design", "Distributed Systems", "REST APIs"],
  },
  {
    title: "Backend & Data",
    color: "bg-lavender",
    skills: ["FastAPI", "Apache Spark", "Hadoop", "Pandas", "NumPy", "API Integration"],
  },
  {
    title: "DevOps & Cloud",
    color: "bg-sky",
    skills: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS SageMaker", "GCP"],
  },
  {
    title: "AI Security & Trust",
    color: "bg-peach",
    skills: ["Explainable AI", "AI Security", "LLM Security", "Secure AI Systems", "Threat Modeling", "Adversarial ML"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 md:py-32 section-gradient-4">
      <div className="container max-w-5xl mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="w-12 h-1 rounded-full gradient-primary mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, i) => (
              <div
                key={group.title}
                className={`glass-card rounded-2xl p-5 glow-hover transition-all duration-500 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${group.color}`}>
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-muted/80 text-foreground/80 font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
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

export default SkillsSection;
