import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden shadow-lg">
                  <svg 
                    width="36" 
                    height="36" 
                    viewBox="0 0 50 50" 
                    className="text-primary-foreground drop-shadow-md"
                  >
                    <defs>
                      <linearGradient id="apron-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="#f8f8f8" />
                      </linearGradient>
                      <linearGradient id="face-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffe0bd" />
                        <stop offset="100%" stopColor="#ffcd94" />
                      </linearGradient>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1" result="blur" />
                        <feFlood floodColor="white" floodOpacity="0.3" />
                        <feComposite in2="blur" operator="in" />
                        <feComposite in="SourceGraphic" />
                      </filter>
                    </defs>
                    
                    <path d="M17 22 L33 22 L33 40 L17 40 Z" fill="url(#apron-gradient)" filter="url(#glow)" />
                    <path d="M20 22 L20 16 L23 13 L27 13 L30 16 L30 22" fill="none" stroke="url(#apron-gradient)" strokeWidth="2" />
                    
                    <circle cx="25" cy="13" r="7" fill="url(#face-gradient)" filter="url(#glow)" />
                    
                    <path d="M18 13 Q18 7, 25 6 Q32 7, 32 13" fill="#543" />
                    <path d="M20 13 Q20 9, 25 8 Q30 9, 30 13" fill="#764" className="opacity-80" />
                    
                    <circle cx="22" cy="12" r="1.2" fill="#333" />
                    <circle cx="28" cy="12" r="1.2" fill="#333" />
                    
                    <path d="M23 15 Q25 16.5, 27 15" fill="none" stroke="#333" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-heading font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                      MERI
                    </span>
                    <span className="text-2xl font-heading font-light tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/70 ml-1.5" style={{ letterSpacing: '0.05em' }}>
                      DIDI
                    </span>
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500 font-medium -mt-0.5 ml-0.5">Home Services</span>
                </div>
              </div>
            </Link>

            <div className="hidden md:flex md:ml-10 space-x-8">
              <a href="#features" className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all">
                Features
              </a>
              <a href="#how-it-works" className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all">
                How It Works
              </a>
              <a href="#testimonials" className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all">
                Testimonials
              </a>
              <a href="#security" className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all">
                Security
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-neutral-700 hover:text-neutral-900">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">EN</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} className="cursor-pointer">
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/register-worker">
              <Button 
                className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg"
              >
                Register as Worker
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="md:hidden bg-neutral-100 p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="text-neutral-700" /> : <Menu className="text-neutral-700" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50">
              Features
            </a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50">
              How It Works
            </a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50">
              Testimonials
            </a>
            <a href="#security" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50">
              Security
            </a>
            <div className="pt-4 pb-3 border-t border-neutral-200">
              <Link href="/register-worker">
                <div className="block px-3 py-2 mt-1 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                  Register as Worker
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
