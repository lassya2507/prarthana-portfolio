import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send, Twitter, FileText } from "lucide-react";
import { RESUME_URL } from "@/lib/links";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(`Hello from ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
    window.open(`mailto:prarthana@cmu.edu?subject=${subject}&body=${body}`, "_self");
    toast({ title: "Opening your email client…", description: "Your message details have been pre-filled." });
  };

  return (
    <section id="contact" className="py-24 md:py-32 section-gradient-2">
      <div className="container max-w-4xl mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-12 h-1 rounded-full gradient-primary mb-6 mx-auto" />
            <p className="text-muted-foreground max-w-md mx-auto">
              I'm always open to interesting conversations, collaborations, and opportunities. Let's build something meaningful together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card glow-hover transition-all"
              >
                <div className="p-3 rounded-lg bg-rose">
                  <FileText className="w-5 h-5 text-rose-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Resume</p>
                  <p className="font-medium text-sm">View my latest resume (PDF)</p>
                </div>
              </a>
              <a
                href="mailto:prarthana@cmu.edu"
                className="flex items-center gap-4 p-4 rounded-xl glass-card glow-hover transition-all"
              >
                <div className="p-3 rounded-lg bg-lavender">
                  <Mail className="w-5 h-5 text-lavender-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">prarthana@cmu.edu</p>
                </div>
              </a>
              <a
                href="https://github.com/lassya2507"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card glow-hover transition-all"
              >
                <div className="p-3 rounded-lg bg-sky">
                  <Github className="w-5 h-5 text-sky-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium text-sm">github.com/lassya2507</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/lassya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card glow-hover transition-all"
              >
                <div className="p-3 rounded-lg bg-peach">
                  <Linkedin className="w-5 h-5 text-peach-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-sm">linkedin.com/in/lassya</p>
                </div>
              </a>
              <a
                href="https://x.com/RoutPrarthana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card glow-hover transition-all"
              >
                <div className="p-3 rounded-lg bg-rose">
                  <Twitter className="w-5 h-5 text-rose-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">X / Twitter</p>
                  <p className="font-medium text-sm">x.com/RoutPrarthana</p>
                </div>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
              <Button variant="hero" className="w-full" type="submit">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
