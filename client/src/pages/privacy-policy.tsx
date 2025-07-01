import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, ArrowLeft, ExternalLink, Menu, X } from "lucide-react";
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

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      {/* Custom Header for Privacy Policy Page */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-white shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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

            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/">
                  <span className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all cursor-pointer">
                    {t("footer.home")}
                  </span>
                </Link>
                <a href="/#contact" className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all">
                  {t("contact.title")}
                </a>
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
              <Link href="/">
                <span className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 cursor-pointer">
                  {t("footer.home")}
                </span>
              </Link>
              <a href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50">
                {t("contact.title")}
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="flex items-center mb-8">
              <Link href="/">
                <Button variant="ghost" size="sm" className="mr-4 text-neutral-600 hover:text-neutral-900">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t("footer.home")}
                </Button>
              </Link>
            </div>

            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("privacyPolicy.title")}
            </motion.h1>

            <motion.p className="text-center text-neutral-500 mb-12">
              {t("privacyPolicy.lastUpdated")}
            </motion.p>

            <motion.div 
              className="prose prose-lg prose-neutral max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <p className="text-blue-800 text-base leading-relaxed mb-4">
                  {t("privacyPolicy.introduction")}
                </p>
              </div>

              <div className="space-y-10">
                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.informationWeCollect.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    {t("privacyPolicy.sections.informationWeCollect.content.personalData")}
                  </p>
                  <p className="text-neutral-700 leading-relaxed mt-4">
                    {t("privacyPolicy.sections.informationWeCollect.content.usageData")}
                  </p>
                  <p className="text-neutral-700 leading-relaxed mt-4">
                    {t("privacyPolicy.sections.informationWeCollect.content.deviceInformation")}
                  </p>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.howWeUseYourInformation.title")}</h2>
                  <ul className="list-disc list-inside text-neutral-700 leading-relaxed space-y-2">
                    <li>{t("privacyPolicy.sections.howWeUseYourInformation.content.provideServices")}</li>
                    <li>{t("privacyPolicy.sections.howWeUseYourInformation.content.improveServices")}</li>
                    <li>{t("privacyPolicy.sections.howWeUseYourInformation.content.marketingCommunication")}</li>
                    <li>{t("privacyPolicy.sections.howWeUseYourInformation.content.securityAndFraudPrevention")}</li>
                  </ul>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.sharingYourInformation.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    {t("privacyPolicy.sections.sharingYourInformation.content.serviceProviders")}
                  </p>
                  <p className="text-neutral-700 leading-relaxed mt-4">
                    {t("privacyPolicy.sections.sharingYourInformation.content.legalRequirements")}
                  </p>
                  <p className="text-neutral-700 leading-relaxed mt-4">
                    {t("privacyPolicy.sections.sharingYourInformation.content.businessTransfers")}
                  </p>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.dataSecurity.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    {t("privacyPolicy.sections.dataSecurity.content")}
                  </p>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.yourRightsAndChoices.title")}</h2>
                  <ul className="list-disc list-inside text-neutral-700 leading-relaxed space-y-2">
                    <li>{t("privacyPolicy.sections.yourRightsAndChoices.content.accessAndUpdate")}</li>
                    <li>{t("privacyPolicy.sections.yourRightsAndChoices.content.optOut")}</li>
                    <li>{t("privacyPolicy.sections.yourRightsAndChoices.content.cookies")}</li>
                  </ul>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.childrensPrivacy.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    {t("privacyPolicy.sections.childrensPrivacy.content")}
                  </p>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.changesToThisPolicy.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    {t("privacyPolicy.sections.changesToThisPolicy.content")}
                  </p>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.contactUs.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    {t("privacyPolicy.sections.contactUs.content")}
                  </p>
                </section>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/logo.jpg" 
                    alt="Meri Didi Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-heading font-extrabold tracking-tight text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                      MERI
                    </span>
                    <span className="text-2xl font-heading font-light tracking-wider text-white/80 ml-1.5" style={{ letterSpacing: '0.05em' }}>
                      DIDI
                    </span>
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-neutral-400 font-medium -mt-0.5 ml-0.5">Home Services</span>
                </div>
              </div>
              <p className="text-neutral-400 text-sm">
                {t("footer.description")}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t("footer.services")}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.homeCleaning")}</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.personalChef")}</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.seniorCare")}</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.handyman")}</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t("footer.company")}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.aboutUs")}</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.careers")}</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.blog")}</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.supportCenter")}</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t("footer.legal")}</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy"><a className="text-white font-semibold hover:text-white transition-colors">{t("footer.privacyPolicy")}</a></Link></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.workerTerms")}</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.cookiePolicy")}</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">{t("footer.disclaimer")}</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">&copy; {new Date().getFullYear()} MeriDidi. {t("footer.copyright")}</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
