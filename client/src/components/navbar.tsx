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
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const scrollContainer = document.getElementById('main-scroll-container');
    
    if (element && scrollContainer) {
      const elementTop = element.offsetTop;
      scrollContainer.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    } else if (element) {
      // Fallback to normal scroll if scroll container not found
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

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
                <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/logo.jpg" 
                    alt="Meri Didi Logo" 
                    className="w-full h-full object-cover"
                  />
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

            <div className="hidden md:flex md:ml-6 space-x-3">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all cursor-pointer"
              >
                {t("navbar.features")}
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all cursor-pointer"
              >
                {t("navbar.howItWorks")}
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all cursor-pointer"
              >
                {t("navbar.testimonials")}
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all cursor-pointer"
              >
                {t("navbar.security")}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all cursor-pointer"
              >
                {t("navbar.contact")}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-neutral-700 hover:text-neutral-900">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{i18n.language === 'hi' ? 'HI' : 'EN'}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    className="cursor-pointer"
                    onClick={() => i18n.changeLanguage(lang.code)}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              onClick={() => window.open('https://forms.gle/kmiQkgtBdhrssNhy7', '_blank')}
              variant="outline"
              className="hidden md:block bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm hover:shadow-md"
            >
              {t("navbar.referDidi")}
            </Button>

            <Link href="/register-worker">
              <Button 
                className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg"
              >
                {t("navbar.registerWorker")}
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
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
            >
              {t("navbar.features")}
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
            >
              {t("navbar.howItWorks")}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
            >
              {t("navbar.testimonials")}
            </button>
            <button 
              onClick={() => scrollToSection('security')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
            >
              {t("navbar.security")}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
            >
              {t("navbar.contact")}
            </button>
            <div className="pt-4 pb-3 border-t border-neutral-200">
              <Button 
                onClick={() => window.open('https://forms.gle/kmiQkgtBdhrssNhy7', '_blank')}
                variant="outline"
                className="block w-full px-3 py-2 mt-1 mb-2 rounded-md text-base font-medium bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 cursor-pointer"
              >
                {t("navbar.referDidi")}
              </Button>
              <Link href="/register-worker">
                <div className="block px-3 py-2 mt-1 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
                  {t("navbar.registerWorker")}
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
