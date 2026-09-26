import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  // AI / ML / DL first
  { name: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", url: "https://coursera.org/share/d9bd2a1d0ded0b6f76073cd8b03405ac" },
  { name: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization", issuer: "DeepLearning.AI", url: "https://coursera.org/share/d546aba79ac463389a9abe7bdd05c04f" },
  { name: "Natural Language Processing with Classification and Vector Spaces", issuer: "DeepLearning.AI", url: "https://coursera.org/share/88673a87bc61b5cb340f6fb79f9a09ae" },
  { name: "Build Basic Generative Adversarial Networks (GANs)", issuer: "DeepLearning.AI", url: "https://coursera.org/share/107312fb1c35e3098391a2cea044b175" },
  { name: "Machine Learning for Computer Vision", issuer: "MathWorks", url: "https://coursera.org/share/eebc0b2b0c421535e66ce2a817cdf101" },
  { name: "AI and Climate Change", issuer: "DeepLearning.AI", url: "https://coursera.org/share/ba960afc3169a95424557f79dd8d6553" },
  { name: "AI, Empathy & Ethics", issuer: "University of California, Santa Cruz", url: "https://coursera.org/share/d5de48663154453c736b4bc1b98fb2d1" },
  { name: "Mathematics for Machine Learning: Linear Algebra", issuer: "Imperial College London", url: "https://coursera.org/share/1a160e8ee99cf9bc1703cbd6cfa53933" },
  { name: "Machine Learning Introduction for Everyone", issuer: "IBM", url: "https://coursera.org/share/78739e226cb371eaa5ab329e838b2a39" },
  { name: "Simulation and Modeling of Natural Processes", issuer: "University of Geneva", url: "https://coursera.org/share/9da67644b5271cfdf1af2c799f86452d" },
  // Systems / HPC / Networking / SE
  { name: "Introduction to High-Performance and Parallel Computing", issuer: "University of Colorado Boulder", url: "https://coursera.org/share/9b7367093c8b41a22ab45cb0cc97a955" },
  { name: "The Bits and Bytes of Computer Networking", issuer: "Google", url: "https://coursera.org/share/a2d01a0987f0e830c9ea1dd116e7e82a" },
  { name: "Software Engineering: Software Design and Project Management", issuer: "The Hong Kong University of Science and Technology", url: "https://coursera.org/share/0a05ade709b75b175837a492690292eb" },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 md:py-32 section-gradient-4">
      <div className="container max-w-5xl mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-12 h-1 rounded-full gradient-primary mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card rounded-xl p-4 glow-hover transition-all duration-500 group flex gap-3 items-start ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.05 + i * 0.04}s` }}
              >
                <div className="p-2 rounded-lg bg-lavender/50 shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-lavender-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {cert.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary shrink-0 mt-1 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
