import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles, Brain, Shield, Bot } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Machine Learning", color: "bg-lavender text-lavender-foreground" },
  { icon: Bot, label: "Agentic AI", color: "bg-sky text-sky-foreground" },
  { icon: Sparkles, label: "Trustworthy AI", color: "bg-peach text-peach-foreground" },
  { icon: Shield, label: "Security-Aware AI", color: "bg-rose text-rose-foreground" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 section-gradient-1 relative">
      <div className="container max-w-5xl mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-12 h-1 rounded-full gradient-primary mb-8" />

          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3 space-y-5">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm a Master's student in <span className="text-foreground font-medium">Artificial Intelligence Engineering (Information Security)</span> at Carnegie Mellon University, with a GPA of 3.7/4.0. My coursework spans Deep Learning, ML with Adversaries in Mind, and Systems for AI Engineers.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Previously, I earned my B.Tech in Computer Science from Bennett University (GPA: 9/10, Merit Scholar) with an exchange semester at HSE University, Russia. My work spans <span className="text-foreground font-medium">LLM-powered applications, agentic AI systems, and NLP research</span> — always with an eye on making AI reliable, explainable, and secure.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                From building AI sales copilots to publishing research on medical imaging and sentiment analysis, I love taking ideas from prototype to production.
              </p>
            </div>

            <div className="md:col-span-2 space-y-3">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`flex items-center gap-3 p-3 rounded-xl glass-card glow-hover transition-all duration-500 ${
                    isVisible ? "animate-slide-in-right" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className={`p-2 rounded-lg ${h.color}`}>
                    <h.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
