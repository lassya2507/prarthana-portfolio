import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, GraduationCap, Mic } from "lucide-react";

const achievements = [
  {
    icon: BookOpen,
    title: "Published Research — ICCMST 2024",
    description: "Authored peer-reviewed paper on large-scale social media sentiment and trend analysis, published at ICCMST 2024 (Taylor & Francis).",
    color: "bg-lavender text-lavender-foreground",
  },
  {
    icon: Mic,
    title: "Conference Presentation — AIMLE 2024",
    description: "Presented \"U-Net-Based Approaches for Effective Lung Segmentation in Medical Imaging\" at AIMLE 2024.",
    color: "bg-sky text-sky-foreground",
  },
  {
    icon: GraduationCap,
    title: "Merit Scholar & Exchange Program",
    description: "Merit Scholarship at Bennett University (GPA: 9/10). Full Scholar exchange at HSE University, Saint Petersburg, Russia.",
    color: "bg-peach text-peach-foreground",
  },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-24 md:py-32 section-gradient-1">
      <div className="container max-w-5xl mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
            <span className="gradient-text">Achievements</span> & Publications
          </h2>
          <div className="w-12 h-1 rounded-full gradient-primary mb-10" />

          <div className="grid sm:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-6 glow-hover transition-all duration-500 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-xl ${a.color} mb-4`}>
                  <a.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
