import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Play, Award, Clock, Home, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TrustScoreMeter from "./trust-score-meter";
import { fadeUpVariants, pulseVariants, rotateVariants, staggerContainer } from "@/lib/animation-utils";

// Customer video testimonials
const videoTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Working Mom",
    rating: 5,
    content: "The cleaning service has completely transformed my home life. I no longer stress about finding time to clean between work and family commitments. The professionals are thorough and trustworthy.",
    videoThumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Tech Executive",
    rating: 5,
    content: "As someone who works long hours, having a personal chef once a week has been life-changing. The meals are delicious and I'm eating healthier than ever. Well worth the investment!",
    videoThumbnail: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Healthcare Professional",
    rating: 4.5,
    content: "I use the senior care services for my mother, and I couldn't be more satisfied. The caregivers are compassionate and professional. Mom looks forward to their visits.",
    videoThumbnail: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Remote Worker",
    rating: 5,
    content: "The handyman service saved me so much time and frustration. They handled multiple issues in one visit that would have taken me weeks to figure out on my own.",
    videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Business Owner",
    rating: 5,
    content: "I've tried several home service companies, but this one stands out for reliability and quality. The lawn care team is exceptional and my yard has never looked better.",
    videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Robert Garcia",
    role: "Attorney",
    rating: 4.5,
    content: "The pest control service was efficient and effective. They identified the source of our problem quickly and used environmentally friendly solutions. Highly recommend.",
    videoThumbnail: "https://images.unsplash.com/photo-1559548331-f9cb98001426?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

// Worker spotlight data
const workerSpotlights = [
  {
    id: 1,
    name: "Preeti Singh",
    role: "Cleaning Expert",
    yearsOfExperience: 5,
    onTimePercentage: 98,
    homesServed: 324,
    intro: "Hi! I'm trained in hygiene & care. Happy to serve!",
    awardType: "Worker of the Week",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Senior Chef",
    yearsOfExperience: 8,
    onTimePercentage: 100,
    homesServed: 156,
    intro: "Cooking is my passion. I bring restaurant quality to your home!",
    awardType: "Top Rated",
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Meera Patel",
    role: "Elder Care Specialist",
    yearsOfExperience: 7,
    onTimePercentage: 99,
    homesServed: 210,
    intro: "I treat every senior with the love and respect they deserve.",
    awardType: "Compassion Award",
    image: "https://images.unsplash.com/photo-1567359781514-3b964e2b01d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Vikram Sharma",
    role: "Handyman Professional",
    yearsOfExperience: 10,
    onTimePercentage: 97,
    homesServed: 415,
    intro: "No repair too big or small, I fix it all with a smile!",
    awardType: "Most Reliable",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

function VideoTestimonialCard({ testimonial }: { testimonial: typeof videoTestimonials[0] }) {
  return (
    <motion.div 
      variants={fadeUpVariants}
      className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={testimonial.videoThumbnail} 
          alt={`${testimonial.name}'s testimonial`} 
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
            <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
            <p className="text-sm text-neutral-600">{testimonial.role}</p>
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
        <p className="text-neutral-700 line-clamp-3">{testimonial.content}</p>
      </div>
    </motion.div>
  );
}

function WorkerSpotlightCard({ worker, index }: { worker: typeof workerSpotlights[0]; index: number }) {
  return (
    <motion.div 
      variants={fadeUpVariants}
      custom={index}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-neutral-200"
    >
      <div className="relative h-56">
        <img 
          src={worker.image} 
          alt={worker.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <motion.div 
            variants={pulseVariants}
            className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center"
          >
            <Award size={12} className="mr-1" />
            {worker.awardType}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h4 className="text-white font-semibold">{worker.name}</h4>
          <p className="text-white/80 text-sm">{worker.role}</p>
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
            "{worker.intro}"
          </motion.div>
          <div className="absolute -top-2 -left-2 text-primary text-2xl font-serif">"</div>
          <div className="absolute -bottom-2 -right-2 text-primary text-2xl font-serif">"</div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-neutral-100 rounded p-2">
            <div className="font-semibold text-lg text-neutral-900">{worker.yearsOfExperience}</div>
            <div className="text-neutral-600">Years Exp.</div>
          </div>
          <div className="bg-neutral-100 rounded p-2">
            <div className="font-semibold text-lg text-green-600">{worker.onTimePercentage}%</div>
            <div className="text-neutral-600">On Time</div>
          </div>
          <div className="bg-neutral-100 rounded p-2">
            <div className="font-semibold text-lg text-primary">{worker.homesServed}</div>
            <div className="text-neutral-600">Homes</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeWorkerIndex, setActiveWorkerIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Manual navigation only
  useEffect(() => {
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const nextVideoTestimonial = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setActiveVideoIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideoTestimonial = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setActiveVideoIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const nextWorker = () => {
    setActiveWorkerIndex((prev) => (prev + 1) % workerSpotlights.length);
  };

  const prevWorker = () => {
    setActiveWorkerIndex((prev) => (prev - 1 + workerSpotlights.length) % workerSpotlights.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-neutral-900">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Hear from people who have transformed their homes and lives with our services.
          </p>
        </motion.div>
        
        {/* Video Testimonials */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">Video Testimonials</h3>
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
            <h3 className="text-2xl font-bold">Meet Our Verified Workers</h3>
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
                <h4 className="font-semibold text-lg">100% Verified</h4>
                <p className="text-neutral-600">All workers verified and background-checked</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mr-4">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">250,000+ Homes</h4>
                <p className="text-neutral-600">Trusted by households across India</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mr-4">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Satisfaction Guaranteed</h4>
                <p className="text-neutral-600">100% money-back if you're not satisfied</p>
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
