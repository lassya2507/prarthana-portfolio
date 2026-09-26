import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, ArrowDown, Twitter } from "lucide-react";
import MolecularBackground from "@/components/MolecularBackground";
import { RESUME_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/links";

const FloatingShape = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full opacity-40 blur-sm ${className}`} />
);

const Sparkle = ({ className, delay }: { className?: string; delay?: string }) => (
  <div className={`absolute w-2 h-2 rounded-full bg-primary/30 ${className}`} 
    style={{ animation: 'sparkle 3s ease-in-out infinite', animationDelay: delay }} />
);

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      <MolecularBackground />
      <FloatingShape className="w-72 h-72 bg-lavender float-animation top-20 -left-20" />
      <FloatingShape className="w-56 h-56 bg-rose float-animation-delayed top-40 right-10" />
      <FloatingShape className="w-40 h-40 bg-peach float-animation-slow bottom-32 left-1/4" />
      <FloatingShape className="w-32 h-32 bg-sky float-animation bottom-20 right-1/3" />
      <FloatingShape className="w-24 h-24 bg-lavender/60 float-animation-delayed top-1/3 left-1/2" />
      
      <Sparkle className="top-1/4 left-1/3" />
      <Sparkle className="top-2/3 right-1/4" delay="1s" />
      <Sparkle className="bottom-1/4 left-1/2" delay="2s" />

      <div className="absolute w-[500px] h-[500px] rounded-full border border-primary/10 animate-gentle-spin opacity-30" />
      <div className="absolute w-[700px] h-[700px] rounded-full border border-rose/10 animate-gentle-spin opacity-20" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

      <div className="container max-w-5xl mx-auto px-4 text-center relative z-10 pt-20">
        <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-sm border border-cmu/25 text-sm font-semibold text-foreground/70 mb-8 animate-fade-up shadow-[0_2px_12px_-2px_hsl(var(--cmu)/0.15)]">
          <span className="w-2.5 h-2.5 rounded-full bg-cmu animate-pulse-soft" />
          <span className="text-cmu font-bold tracking-tight">Carnegie Mellon University</span>
          <span>· MS AI Engineering – Information Security · May 2027</span>
        </div>

        <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="gradient-text">Prarthana</span>{" "}
          <span className="gradient-text">Rout</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.25s" }}>
          Software Engineer · ML Engineer · AI Systems Builder
        </p>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/70 mb-10 animate-fade-up opacity-0 leading-relaxed" style={{ animationDelay: "0.4s" }}>
          Building <span className="font-display italic text-xl md:text-2xl text-foreground font-semibold">reliable</span> AI systems across LLMs, agents, ML infrastructure, backend engineering, and secure AI.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up opacity-0" style={{ animationDelay: "0.55s" }}>
          <Button variant="hero" size="lg" onClick={() => scrollTo("#projects")}>
            View Projects
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#contact">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full hover:bg-peach gap-2" asChild>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-lavender" asChild>
            <a href={GITHUB_URL} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-sky" asChild>
            <a href={LINKEDIN_URL} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-rose/50" asChild>
            <a href="https://x.com/RoutPrarthana" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <button
          onClick={() => scrollTo("#about")}
          className="mt-16 inline-flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors animate-fade-up opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce-gentle" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
