import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Globe, 
  QrCode,
  AppleIcon,
  Smartphone 
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animation-utils";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 50 50" 
                  className="text-primary-foreground"
                >
                  <defs>
                    <linearGradient id="apron-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="white" />
                      <stop offset="100%" stopColor="#f0f0f0" />
                    </linearGradient>
                    <linearGradient id="face-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffe0bd" />
                      <stop offset="100%" stopColor="#ffcd94" />
                    </linearGradient>
                    <linearGradient id="dress-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#444" />
                      <stop offset="100%" stopColor="#222" />
                    </linearGradient>
                  </defs>
                  
                  {/* Dress base */}
                  <path d="M15 20 L15 42 L35 42 L35 20 Z" fill="url(#dress-gradient-footer)" />
                  
                  {/* Apron */}
                  <path d="M17 22 L33 22 L33 40 L17 40 Z" fill="url(#apron-gradient-footer)" />
                  <path d="M20 22 L20 16 L23 13 L27 13 L30 16 L30 22" fill="none" stroke="url(#apron-gradient-footer)" strokeWidth="1.5" />
                  
                  {/* Head/face */}
                  <circle cx="25" cy="13" r="7" fill="url(#face-gradient-footer)" />
                  
                  {/* Hair with highlights */}
                  <path d="M18 13 Q18 7, 25 6 Q32 7, 32 13" fill="#543" />
                  <path d="M20 13 Q20 9, 25 8 Q30 9, 30 13" fill="#764" />
                  
                  {/* Eyes */}
                  <ellipse cx="22" cy="12" rx="1" ry="1.5" fill="#333" />
                  <ellipse cx="28" cy="12" rx="1" ry="1.5" fill="#333" />
                  
                  {/* Smile */}
                  <path d="M23 15 Q25 17, 27 15" fill="none" stroke="#333" strokeWidth="0.7" />
                </svg>
              </div>
              <span className="text-lg font-heading font-bold text-white">Meri Didi</span>
            </div>
            <p className="text-sm text-neutral-400 mb-4">
              India's premier platform connecting service companies with top domestic workers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Home Cleaning</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Personal Chef</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Senior Care</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Handyman</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Support Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        

        <div className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Meri Didi. All rights reserved.
          </p>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-neutral-400 hover:text-white text-sm">
                  <Globe className="h-4 w-4" />
                  <span>English</span>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
