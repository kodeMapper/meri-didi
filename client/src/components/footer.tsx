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
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src="/images/logo.jpg" 
                  alt="Meri Didi Logo" 
                  className="w-full h-full object-cover"
                />
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
              <li><Link href="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/worker-terms" className="text-neutral-400 hover:text-white transition-colors">Worker Terms & Conditions</Link></li>
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
