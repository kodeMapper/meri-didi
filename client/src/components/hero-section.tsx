import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

// Service professional data
const getServiceProfessionals = (t: any) => [
  {
    id: 1,
    title: t("hero.services.homeCleaning.title"),
    description: t("hero.services.homeCleaning.description"),
    icon: "broom",
    image: "/images/Cleaner.jpg"
  },
  {
    id: 2,
    title: t("hero.services.cooking.title"),
    description: t("hero.services.cooking.description"),
    icon: "utensils",
    image: "/images/Cook.jpg"
  },
  {
    id: 3,
    title: t("hero.services.elderlyCare.title"),
    description: t("hero.services.elderlyCare.description"),
    icon: "heart",
    image: "/images/Elder%20care.jpg"
  },
  {
    id: 4,
    title: t("hero.services.babyCare.title"),
    description: t("hero.services.babyCare.description"),
    icon: "baby",
    image: "/images/Baby%20Care.jpg"
  },
];

// Carousel component for service professionals
function ServiceCarousel() {
  const { t } = useTranslation();
  const serviceProfessionals = getServiceProfessionals(t);
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
        <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="h-80 relative flex items-end justify-center w-full rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${serviceProfessionals[current].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Text content */}
          <div className="relative z-10 text-center text-white pb-4 px-6 w-full">
            <motion.h3 
              className="text-3xl font-extrabold mb-2 text-yellow-300 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.7)' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {serviceProfessionals[current].title}
            </motion.h3>
            <motion.p 
              className="text-white text-base leading-relaxed font-medium drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] mb-4"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.9)' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {serviceProfessionals[current].description}
            </motion.p>
            <motion.button
              className="px-6 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-md text-sm font-medium transition-all border border-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t("hero.learnMore")}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation dots moved outside and below the image */}
      <div className="mt-4 flex justify-center">
        <div className="flex space-x-2">
          {serviceProfessionals.map((_: any, index: number) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current 
                  ? "bg-primary shadow-lg scale-110" 
                  : "bg-gray-700 hover:bg-gray-600 shadow-md"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="min-h-screen flex items-center pt-16 pb-20 bg-gradient-to-br from-primary/5 via-purple-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-red-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 leading-tight">
              <span className="text-lg md:text-xl font-normal text-neutral-600 block mb-2">{t("hero.introText")}</span>
              <span className="gradient-text font-black tracking-tight text-5xl md:text-7xl drop-shadow-lg block my-4">{t("hero.highlightText")}</span>
              <span className="text-base md:text-lg font-normal text-neutral-600 block mt-3">{t("hero.supportingText")}</span>
            </h1>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/register-worker">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 rounded-md font-medium transition-colors shadow-md hover:shadow-lg flex items-center justify-center h-12"
                >
                  <span>{t("navbar.registerWorker")}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Button
                variant="outline"
                className="bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center h-12"
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                <span>{t("hero.watchDemo")}</span>
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
              <p className="text-sm text-neutral-600" dangerouslySetInnerHTML={{ __html: t("hero.trustedBy") }}></p>
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
