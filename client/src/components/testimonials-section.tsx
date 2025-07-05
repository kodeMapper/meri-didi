import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Play, Award, Home, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TrustScoreMeter from "./trust-score-meter";
import { fadeUpVariants, pulseVariants, staggerContainer } from "@/lib/animation-utils";
import { useTranslation } from "react-i18next";

// VideoTestimonialCard component
function VideoTestimonialCard({ testimonial }: { 
  testimonial: {
    id: number;
    nameKey: string;
    roleKey: string;
    rating: number;
    contentKey: string;
    videoThumbnail: string;
  }
}) {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      variants={fadeUpVariants}
      className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={testimonial.videoThumbnail} 
          alt={`${t(testimonial.nameKey)}'s testimonial`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer"
          >
            <Play fill="white" size={24} className="text-white ml-1" />
          </motion.div>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-3">
          <div className="flex-1">
            <h4 className="font-semibold text-neutral-900">{t(testimonial.nameKey)}</h4>
            <p className="text-sm text-neutral-600">{t(testimonial.roleKey)}</p>
          </div>
          <div className="flex">
            {Array.from({ length: Math.floor(testimonial.rating) }).map((_, idx) => (
              <Star key={idx} className="text-yellow-400 fill-yellow-400 h-4 w-4" />
            ))}
            {testimonial.rating % 1 > 0 && (
              <Star className="text-yellow-400 fill-yellow-400 h-4 w-4" />
            )}
          </div>
        </div>
        <p className="text-neutral-700 line-clamp-3">{t(testimonial.contentKey)}</p>
      </div>
    </motion.div>
  );
}

// WorkerSpotlightCard component
function WorkerSpotlightCard({ worker, index }: { 
  worker: {
    id: number;
    nameKey: string;
    roleKey: string;
    yearsOfExperience: number;
    onTimePercentage: number;
    homesServed: number;
    introKey: string;
    awardTypeKey: string;
    image: string;
  };
  index: number;
}) {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      variants={fadeUpVariants}
      custom={index}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-neutral-200"
    >
      <div className="relative h-56">
        <img 
          src={worker.image} 
          alt={t(worker.nameKey)} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <motion.div 
            variants={pulseVariants}
            className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center"
          >
            <Award size={12} className="mr-1" />
            {t(worker.awardTypeKey)}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h4 className="text-white font-semibold">{t(worker.nameKey)}</h4>
          <p className="text-white/80 text-sm">{t(worker.roleKey)}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-primary/10 rounded-lg p-3 mb-4 relative">
          <motion.div 
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="text-neutral-800 italic text-sm"
          >
            "{t(worker.introKey)}"
          </motion.div>
          <div className="absolute -top-2 -left-2 text-primary text-2xl font-serif">"</div>
          <div className="absolute -bottom-2 -right-2 text-primary text-2xl font-serif">"</div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-neutral-100 rounded p-2">
            <div className="font-semibold text-lg text-neutral-900">{worker.yearsOfExperience}</div>
            <div className="text-neutral-600">{t("testimonials.workers.yearsExp")}</div>
          </div>
          <div className="bg-neutral-100 rounded p-2">
            <div className="font-semibold text-lg text-green-600">{worker.onTimePercentage}%</div>
            <div className="text-neutral-600">{t("testimonials.workers.onTime")}</div>
          </div>
          <div className="bg-neutral-100 rounded p-2">
            <div className="font-semibold text-lg text-primary">{worker.homesServed}</div>
            <div className="text-neutral-600">{t("testimonials.workers.homes")}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeWorkerIndex, setActiveWorkerIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Customer video testimonials
  const videoTestimonials = [
    {
      id: 1,
      nameKey: "testimonials.video.0.name",
      roleKey: "testimonials.video.0.role",
      rating: 5,
      contentKey: "testimonials.video.0.content",
      videoThumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      nameKey: "testimonials.video.1.name",
      roleKey: "testimonials.video.1.role",
      rating: 5,
      contentKey: "testimonials.video.1.content",
      videoThumbnail: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      nameKey: "testimonials.video.2.name",
      roleKey: "testimonials.video.2.role",
      rating: 4.5,
      contentKey: "testimonials.video.2.content",
      videoThumbnail: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      nameKey: "testimonials.video.3.name",
      roleKey: "testimonials.video.3.role",
      rating: 5,
      contentKey: "testimonials.video.3.content",
      videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      nameKey: "testimonials.video.4.name",
      roleKey: "testimonials.video.4.role",
      rating: 5,
      contentKey: "testimonials.video.4.content",
      videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      nameKey: "testimonials.video.5.name",
      roleKey: "testimonials.video.5.role",
      rating: 4.5,
      contentKey: "testimonials.video.5.content",
      videoThumbnail: "https://images.unsplash.com/photo-1559548331-f9cb98001426?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    }
  ];

  // Worker spotlight data
  const workerSpotlights = [
    {
      id: 1,
      nameKey: "testimonials.workers.0.name",
      roleKey: "testimonials.workers.0.role",
      yearsOfExperience: 5,
      onTimePercentage: 98,
      homesServed: 324,
      introKey: "testimonials.workers.0.intro",
      awardTypeKey: "testimonials.workers.0.awardType",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      nameKey: "testimonials.workers.1.name",
      roleKey: "testimonials.workers.1.role",
      yearsOfExperience: 8,
      onTimePercentage: 100,
      homesServed: 156,
      introKey: "testimonials.workers.1.intro",
      awardTypeKey: "testimonials.workers.1.awardType",
      image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      nameKey: "testimonials.workers.2.name",
      roleKey: "testimonials.workers.2.role",
      yearsOfExperience: 7,
      onTimePercentage: 99,
      homesServed: 210,
      introKey: "testimonials.workers.2.intro",
      awardTypeKey: "testimonials.workers.2.awardType",
      image: "https://images.unsplash.com/photo-1567359781514-3b964e2b01d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      nameKey: "testimonials.workers.3.name",
      roleKey: "testimonials.workers.3.role",
      yearsOfExperience: 10,
      onTimePercentage: 97,
      homesServed: 415,
      introKey: "testimonials.workers.3.intro",
      awardTypeKey: "testimonials.workers.3.awardType",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    }
  ];

  // Clean up any intervals on unmount
  useEffect(() => {
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const nextWorker = () => {
    setActiveWorkerIndex((prev) => (prev + 1) % workerSpotlights.length);
  };

  const prevWorker = () => {
    setActiveWorkerIndex((prev) => (prev - 1 + workerSpotlights.length) % workerSpotlights.length);
  };

  return (
    <section id="testimonials" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 relative overflow-hidden snap-start">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-neutral-900">{t("testimonials.title")}</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>
        
        {/* Video Testimonials */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">{t("testimonials.videoSectionTitle")}</h3>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videoTestimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/3">
                  <VideoTestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        {/* Worker Spotlights */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">{t("testimonials.workersSectionTitle")}</h3>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevWorker}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextWorker}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {workerSpotlights.map((worker, index) => (
              <WorkerSpotlightCard 
                key={worker.id} 
                worker={worker} 
                index={index} 
              />
            ))}
          </motion.div>
        </div>
        
        {/* Trust Badges */}
        <div className="bg-white rounded-xl p-8 shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{t("testimonials.trustBadges.verified.title")}</h4>
                <p className="text-neutral-600">{t("testimonials.trustBadges.verified.description")}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mr-4">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{t("testimonials.trustBadges.homes.title")}</h4>
                <p className="text-neutral-600">{t("testimonials.trustBadges.homes.description")}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mr-4">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{t("testimonials.trustBadges.satisfaction.title")}</h4>
                <p className="text-neutral-600">{t("testimonials.trustBadges.satisfaction.description")}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <TrustScoreMeter score={4.8} reviews={1200} />
        </div>
      </div>
    </section>
  );
}
