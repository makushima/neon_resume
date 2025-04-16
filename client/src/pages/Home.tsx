import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    // Set title and description for the page
    document.title = "John Doe - Junior DevOps Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navigation />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <GallerySection />
        <ContactSection />
      </motion.main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}
