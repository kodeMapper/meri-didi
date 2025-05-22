import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedServiceCard from "./animated-service-card";
import { Link } from "wouter";

// Service professional data
const serviceProfessionals = [
  {
    id: 1,
    title: "Home Cleaning",
    description: "Professional home cleaning services to keep your space spotless.",
    icon: "broom",
  },
  {
    id: 2,
    title: "Home Cooking",
    description: "Personal chefs bring restaurant-quality meals to your home.",
    icon: "utensils",
  },
  {
    id: 3,
    title: "Senior Care",
    description: "Compassionate caregivers for elderly family members.",
    icon: "heart",
  },
  {
    id: 4,
    title: "Handyman Services",
    description: "Skilled professionals for all your home repair needs.",
    icon: "tools",
  },
  {
    id: 5,
    title: "Lawn Care",
    description: "Keep your yard beautiful with professional lawn services.",
    icon: "leaf",
  },
  {
    id: 6,
    title: "Pest Control",
    description: "Effective solutions for all types of pest problems.",
    icon: "bug",
  },
];

// Carousel component for service professionals
function ServiceCarousel() {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % serviceProfessionals.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-neutral-200 animate-float h-96">
      <div className="p-4 border-b border-neutral-200 bg-neutral-50">
        <div className="flex items-center">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-neutral-300"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-300"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-300"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="h-4 bg-neutral-200 rounded w-full max-w-xs mx-auto"></div>
          </div>
        </div>
      </div>
      
      <div className="p-6 h-full relative">
        {/* Meri Didi Branding */}
        

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full flex items-center justify-center"
          >
            <AnimatedServiceCard
              title={serviceProfessionals[current].title}
              description={serviceProfessionals[current].description}
              icon={serviceProfessionals[current].icon}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {serviceProfessionals.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === current ? "bg-primary" : "bg-neutral-300"}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 leading-tight">
              Connect with India's Best Home Service Providers
            </h1>
            <p className="mt-4 text-lg text-neutral-700 max-w-md">
              Partner with Meri Didi - India's premier platform connecting service companies with top domestic workers and helping workers find quality employment.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/register-worker">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 rounded-md font-medium transition-colors shadow-md hover:shadow-lg flex items-center justify-center h-12"
                >
                  <span>Register as Worker</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Button
                variant="outline"
                className="bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center h-12"
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                <span>Watch How It Works</span>
              </Button>
            </div>
            
            <div className="mt-6 flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-300 flex items-center justify-center">
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-600">
                Trusted by <span className="font-semibold">10,000+</span> households
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ServiceCarousel />
            
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary rounded-full opacity-20 -z-10"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-secondary rounded-full opacity-10 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
