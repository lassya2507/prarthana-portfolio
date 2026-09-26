import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FluidBackground from "@/components/FluidBackground";
import AskPrarthana from "@/components/AskPrarthana";

const Index = () => (
  <div className="relative min-h-screen">
    <FluidBackground />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <AchievementsSection />
    <CertificationsSection />
    <ContactSection />
    <Footer />
    <AskPrarthana />
  </div>
);

export default Index;
