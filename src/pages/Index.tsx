import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FactsSection from "@/components/FactsSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeatureSection from "@/components/FeatureSection";

import MissionVisionSection from "@/components/MissionVisionSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize animations for elements as they appear in viewport
    const observerOptions = {
      root: null,
      rootMargin: "-30px", // Changed from '-20px' to '-30px' to trigger animation a bit later
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideUp");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Target all elements that should animate on scroll
    document
      .querySelectorAll(".glass-card, .section > .container > .text-center")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FactsSection />
      <ProblemSection />
      <SolutionSection />
      <FeatureSection />

      <MissionVisionSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
