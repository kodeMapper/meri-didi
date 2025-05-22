import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import HowItWorks from "@/components/how-it-works";
import TransformationSection from "@/components/transformation-section";
import TestimonialsSection from "@/components/testimonials-section";
import SecuritySection from "@/components/security-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";

export default function Home() {
  // Animate sections as they come into view
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Smooth scroll functionality
  useEffect(() => {
    const handleScrollToAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleScrollToAnchor);
    return () => document.removeEventListener('click', handleScrollToAnchor);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <FeaturesSection />
        <HowItWorks />
        <TransformationSection />
        <TestimonialsSection />
        <SecuritySection />
        <ContactForm />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
