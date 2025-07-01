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
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
];

export default function Footer() {
  const { t, i18n } = useTranslation();
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
              {t("footer.description")}
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
            <h4 className="text-white font-medium mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.homeCleaning")}</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.personalChef")}</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.seniorCare")}</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.handyman")}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.aboutUs")}</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.careers")}</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.blog")}</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.supportCenter")}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors">{t("footer.privacyPolicy")}</Link></li>
              <li><Link href="/worker-terms" className="text-neutral-400 hover:text-white transition-colors">{t("footer.workerTerms")}</Link></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.cookiePolicy")}</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.disclaimer")}</a></li>
              <li><Link href="/delete-user-data" className="text-neutral-400 hover:text-white transition-colors">{t("footer.deleteData")}</Link></li>
              <li><Link href="/delete-user-account" className="text-neutral-400 hover:text-white transition-colors">{t("footer.deleteAccount")}</Link></li>
            </ul>
          </div>
        </div>
        
        

        <div className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Meri Didi. {t("footer.copyright")}
          </p>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-neutral-400 hover:text-white text-sm">
                  <Globe className="h-4 w-4" />
                  <span>{i18n.language === 'hi' ? 'हिन्दी' : 'English'}</span>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
