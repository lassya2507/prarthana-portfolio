import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { RESUME_URL } from "@/lib/links";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/80 backdrop-blur-lg shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <button
          onClick={() => handleClick("#hero")}
          className="font-heading font-bold text-xl gradient-text"
        >
          PR
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-[14px] font-bold font-heading text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full gradient-primary text-primary-foreground text-[14px] font-bold font-heading shadow-sm hover:shadow-md transition-shadow">
            <FileText className="w-3.5 h-3.5" /> Resume
          </a>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border/50 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="block w-full text-left text-sm font-bold font-heading text-foreground/70 hover:text-foreground py-2"
              >
                {item.label}
              </button>
            ))}
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold font-heading text-primary py-2">
              <FileText className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
