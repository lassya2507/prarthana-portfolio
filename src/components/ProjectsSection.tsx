import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Sales Research Copilot",
    problem: "Sales teams waste hours on manual prospect research with incomplete data",
    solution: "Systematized deep-web prospect research across LinkedIn and corporate domains using Relevance AI and Firecrawl API with scheduled scraping and enrichment pipelines",
    impact: "+20% weekly calls, 90%+ less manual lead research time",
    tech: ["Relevance AI", "Firecrawl API", "MLOps", "Data Pipelines"],
    color: "bg-lavender/30",
    github: "https://github.com/lassya2507/ai-sales-research-copilot",
  },
  {
    title: "AI Research Assistant (Lab4C)",
    problem: "Cybernetics research materials are scattered and hard to retrieve",
    solution: "Built an AI research assistant for the Lab4C platform at CMU, structuring and curating research materials for streamlined retrieval",
    impact: "Streamlined access to project knowledge across the Re-Braiding Cybernetics × AI initiative",
    tech: ["RAG", "Python", "Knowledge Systems", "NLP"],
    color: "bg-sky/30",
  },
  {
    title: "Eco-Resource Optimization",
    problem: "Energy distribution inefficiency with environmental constraints",
    solution: "Built an evolutionary optimization model for renewable energy allocation, using SHAP to surface the top generation drivers for interpretable policy decisions",
    impact: "+123% simulated power generation with improved carbon efficiency",
    tech: ["Evolutionary Optimization", "Explainable AI", "SHAP", "Python"],
    color: "bg-peach/30",
    github: "https://github.com/lassya2507/eco-resource-optimization",
  },
  {
    title: "Lung Segmentation in Medical Imaging",
    problem: "Accurate lung segmentation from chest X-rays is critical for diagnosis",
    solution: "Trained Attention U-Net on chest X-rays with preprocessing, augmentation, and class-imbalance handling",
    impact: "98.9% accuracy and 97.8% Dice score, surpassing baseline models",
    note: "Presented at AIMLE 2024",
    tech: ["PyTorch", "U-Net", "Medical Imaging", "Deep Learning"],
    color: "bg-rose/30",
    github: "https://github.com/lassya2507/lung-segmentation",
  },
  {
    title: "Deep Fake Detection",
    problem: "Proliferation of AI-generated fake media threatens trust and security",
    solution: "Built a deep learning pipeline to detect deepfake videos using frame-level analysis and CNN-based classification",
    impact: "Robust detection across multiple deepfake generation methods",
    tech: ["CNN", "Python", "OpenCV", "Deep Learning"],
    color: "bg-lavender/30",
    github: "https://github.com/lassya2507/deep-fake-detection",
  },
  {
    title: "Innergram — Social Media Analysis Platform",
    problem: "Understanding large-scale social media sentiment requires structured analysis",
    solution: "Developed a platform for social media trend and sentiment analysis, published at ICCMST 2024 (Taylor & Francis)",
    impact: "Peer-reviewed publication with novel insights into social media behavior patterns",
    tech: ["NLP", "Sentiment Analysis", "Python", "Data Visualization"],
    color: "bg-sky/30",
    github: "https://github.com/Innergram/Innergram",
    publication: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003501244-54/innergram-social-media-analysis-platform-rout-khetan-ahkam-raghuvanshi-pargai-bhardwaj",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 md:py-32 section-gradient-3">
      <div className="container max-w-5xl mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-12 h-1 rounded-full gradient-primary mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl overflow-hidden glow-hover group transition-all duration-500 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className={`h-2 ${p.color}`} />
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  {p.note && (
                    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2">
                      {p.note}
                    </span>
                  )}
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground/80">Problem:</span> {p.problem}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground/80">Built:</span> {p.solution}
                    </p>
                    <p className="text-sm font-medium text-primary/80">
                      ✦ {p.impact}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {p.github && (
                      <Button variant="ghost" size="sm" className="rounded-full hover:bg-lavender" asChild>
                        <a href={p.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" /> Code
                        </a>
                      </Button>
                    )}
                    {p.publication && (
                      <Button variant="ghost" size="sm" className="rounded-full hover:bg-sky" asChild>
                        <a href={p.publication} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" /> Publication
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
