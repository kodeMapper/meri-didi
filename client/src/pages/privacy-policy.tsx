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
                    {t("navbar.home")}
                  </span>
                </Link>
                <a href="/#contact" className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all">
                  {t("navbar.contact")}
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
                  {t("navbar.home")}
                </span>
              </Link>
              <a href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50">
                {t("navbar.contact")}
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
                  {t("privacyPolicy.backToHome")}
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

            <motion.div 
              className="prose prose-lg prose-neutral max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <p className="text-blue-800 text-base leading-relaxed mb-4">
                  {t("privacyPolicy.introduction.para1")}
                </p>
                
                <p className="text-blue-800 text-base leading-relaxed mb-4">
                  {t("privacyPolicy.introduction.para2")}
                </p>
                
                <p className="text-blue-800 text-base leading-relaxed">
                  {t("privacyPolicy.introduction.para3")}
                </p>
              </div>

              <div className="space-y-10">
                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.objective.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    {t("privacyPolicy.sections.objective.content")}
                  </p>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.scope.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    {t("privacyPolicy.sections.scope.content")}
                  </p>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.whatWeCollect.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {t("privacyPolicy.sections.whatWeCollect.intro")}
                  </p>
                  <div className="grid gap-3">
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.contactData")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.userContent")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.personalInfo")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.contacts")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.identityData")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.marketingData")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.smsAccess")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.storage")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.deviceInfo")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.technicalData")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.transactionData")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.foodData")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.usageData")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.aggregatedData")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.govtIdentifiers")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.surveyData")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.locationData")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.thirdPartyIntegration")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeCollect.items.thirdPartyData")}</span>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.howWeCollect.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {t("privacyPolicy.sections.howWeCollect.intro")}
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-25 border border-blue-200 rounded-lg p-5">
                      <h3 className="font-bold text-blue-900 mb-3 text-lg">{t("privacyPolicy.sections.howWeCollect.directInteractions.title")}</h3>
                      <p className="text-blue-800 mb-3">{t("privacyPolicy.sections.howWeCollect.directInteractions.description")}</p>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.howWeCollect.directInteractions.items.createAccount")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.howWeCollect.directInteractions.items.useServices")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.howWeCollect.directInteractions.items.enterPromotion")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.howWeCollect.directInteractions.items.requestMarketing")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.howWeCollect.directInteractions.items.reportProblem")}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-green-25 border border-green-200 rounded-lg p-5">
                      <h3 className="font-bold text-green-900 mb-3 text-lg">{t("privacyPolicy.sections.howWeCollect.automatedTechnologies.title")}</h3>
                      <p className="text-green-800">{t("privacyPolicy.sections.howWeCollect.automatedTechnologies.description")}</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-purple-25 border border-purple-200 rounded-lg p-5">
                      <h3 className="font-bold text-purple-900 mb-3 text-lg">{t("privacyPolicy.sections.howWeCollect.thirdParties.title")}</h3>
                      <p className="text-purple-800 mb-3">{t("privacyPolicy.sections.howWeCollect.thirdParties.description")}</p>
                      <ul className="space-y-2 text-purple-700">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.howWeCollect.thirdParties.items.analyticsProviders")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.howWeCollect.thirdParties.items.serviceProviders")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.howWeCollect.thirdParties.items.affiliateEntities")}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm leading-relaxed mb-3">
                      {t("privacyPolicy.sections.howWeCollect.thirdPartyAnalytics")}
                    </p>
                    
                    <p className="text-yellow-800 text-sm leading-relaxed mb-3">
                      {t("privacyPolicy.sections.howWeCollect.businessPartners")}
                    </p>
                    
                    <p className="text-yellow-800 text-sm leading-relaxed mb-3">
                      {t("privacyPolicy.sections.howWeCollect.signInServices")}
                    </p>
                    
                    <p className="text-yellow-800 text-sm leading-relaxed mb-3">
                      {t("privacyPolicy.sections.howWeCollect.userDataCollection")}
                    </p>
                    
                    <p className="text-yellow-800 text-sm leading-relaxed">
                      {t("privacyPolicy.sections.howWeCollect.automaticCollection")}
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.whatWeDo.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {t("privacyPolicy.sections.whatWeDo.intro")}
                  </p>
                  
                  <div className="grid gap-3">
                    <div className="flex items-start bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-100">
                      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.verifyIdentity")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.provideServices")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.enableHelper")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.monitorTrends")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.improveFunctionality")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-100">
                      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.customerService")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.trackTransactions")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.improveProducts")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.sendPromotional")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.marketResearch")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-100">
                      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.facilitateHelper")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-100">
                      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.marketServices")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.manageBusiness")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("privacyPolicy.sections.whatWeDo.purposes.notifyUpdates")}</span>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.cookies.title")}</h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <p className="text-orange-800 text-base leading-relaxed mb-6">
                      {t("privacyPolicy.sections.cookies.intro")}
                    </p>
                    
                    <div className="text-orange-800 mb-6">
                      <p className="font-semibold mb-3">{t("privacyPolicy.sections.cookies.dataCollection.title")}</p>
                      <p className="mb-4">{t("privacyPolicy.sections.cookies.dataCollection.content")}</p>
                    </div>
                    
                    <div className="text-orange-800 mb-6">
                      <p className="font-semibold mb-3">{t("privacyPolicy.sections.cookies.management.title")}</p>
                      <p className="mb-4">{t("privacyPolicy.sections.cookies.management.content")}</p>
                    </div>

                    <div className="text-orange-800">
                      <p className="font-semibold mb-3">{t("privacyPolicy.sections.cookies.purposes.title")}</p>
                      <ul className="space-y-3 ml-5">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.cookies.purposes.items.estimateUsage")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.cookies.purposes.items.storePreferences")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.cookies.purposes.items.speedSearches")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.cookies.purposes.items.distinguish")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.cookies.purposes.items.recognize")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.cookies.purposes.items.analytics")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.cookies.purposes.items.studyTraffic")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.cookies.purposes.items.security")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.cookies.purposes.items.saveCredentials")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{t("privacyPolicy.sections.cookies.purposes.items.fraud")}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.security.title")}</h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <p className="text-green-800 text-base leading-relaxed">
                      {t("privacyPolicy.sections.security.content")}
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.yourRights.title")}</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <ul className="space-y-6">
                      <li>
                        <h3 className="font-bold text-blue-800 mb-2">{t("privacyPolicy.sections.yourRights.items.inaccurate.title")}</h3>
                        <p className="text-blue-700">{t("privacyPolicy.sections.yourRights.items.inaccurate.content")}</p>
                      </li>
                      <li>
                        <h3 className="font-bold text-blue-800 mb-2">{t("privacyPolicy.sections.yourRights.items.optOut.title")}</h3>
                        <p className="text-blue-700">{t("privacyPolicy.sections.yourRights.items.optOut.content")}</p>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.obligations.title")}</h2>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <p className="text-purple-800 text-base leading-relaxed mb-4">
                      {t("privacyPolicy.sections.obligations.intro")}
                    </p>
                    <div className="ml-8 space-y-6">
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">{t("privacyPolicy.sections.obligations.items.noRight")}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">{t("privacyPolicy.sections.obligations.items.defamatory")}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">{t("privacyPolicy.sections.obligations.items.harmfulChild")}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">{t("privacyPolicy.sections.obligations.items.infringes")}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">{t("privacyPolicy.sections.obligations.items.violatesLaw")}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">{t("privacyPolicy.sections.obligations.items.deceives")}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">{t("privacyPolicy.sections.obligations.items.impersonates")}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">{t("privacyPolicy.sections.obligations.items.threatens")}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">{t("privacyPolicy.sections.obligations.items.virus")}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-purple-700">{t("privacyPolicy.sections.obligations.items.falseUntrue")}</span>
                      </div>
                    </div>
                    <p className="mt-6 text-purple-800 text-base leading-relaxed">
                      {t("privacyPolicy.sections.obligations.termination")}
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.transfers.title")}</h2>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <p className="text-indigo-800 text-base leading-relaxed mb-4">
                      {t("privacyPolicy.sections.transfers.intro")}
                    </p>
                    
                    <p className="text-indigo-800 font-semibold mb-3">{t("privacyPolicy.sections.transfers.shareWith")}</p>
                    
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-indigo-700">
                          <p className="font-semibold mb-1">{t("privacyPolicy.sections.transfers.items.authorizedProviders.title")}</p>
                          <p>{t("privacyPolicy.sections.transfers.items.authorizedProviders.content")}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-indigo-700">
                          <p className="font-semibold mb-1">{t("privacyPolicy.sections.transfers.items.businessPartners.title")}</p>
                          <p>{t("privacyPolicy.sections.transfers.items.businessPartners.content")}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-indigo-700">
                          <p className="font-semibold mb-1">{t("privacyPolicy.sections.transfers.items.thirdPartyAdvertisers.title")}</p>
                          <p>{t("privacyPolicy.sections.transfers.items.thirdPartyAdvertisers.content")}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.accountDeletion.title")}</h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <p className="text-red-800 text-base leading-relaxed">
                      {t("privacyPolicy.sections.accountDeletion.content")}
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.externalLinks.title")}</h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <p className="text-orange-800 text-base leading-relaxed">
                      {t("privacyPolicy.sections.externalLinks.content")}
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.dataRetention.title")}</h2>
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                    <p className="text-teal-800 text-base leading-relaxed mb-4">
                      {t("privacyPolicy.sections.dataRetention.intro")}
                    </p>
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-teal-800">
                          <p className="font-semibold mb-1">{t("privacyPolicy.sections.dataRetention.items.retentionPeriod.title")}</p>
                          <p>{t("privacyPolicy.sections.dataRetention.items.retentionPeriod.content")}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-teal-800">
                          <p className="font-semibold mb-1">{t("privacyPolicy.sections.dataRetention.items.aggregatedData.title")}</p>
                          <p>{t("privacyPolicy.sections.dataRetention.items.aggregatedData.content")}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-teal-800">
                          <p className="font-semibold mb-1">{t("privacyPolicy.sections.dataRetention.items.securityMeasures.title")}</p>
                          <p>{t("privacyPolicy.sections.dataRetention.items.securityMeasures.content")}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <div className="text-teal-800">
                          <p className="font-semibold mb-1">{t("privacyPolicy.sections.dataRetention.items.userConsent.title")}</p>
                          <p>{t("privacyPolicy.sections.dataRetention.items.userConsent.content")}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.disputeResolution.title")}</h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <p className="text-yellow-800 text-base leading-relaxed">
                      {t("privacyPolicy.sections.disputeResolution.content")}
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.contactUs.title")}</h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <p className="text-green-800 text-base leading-relaxed">
                      {t("privacyPolicy.sections.contactUs.content")}
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("privacyPolicy.sections.grievanceOfficer.title")}</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-blue-800 text-base leading-relaxed">
                      {t("privacyPolicy.sections.grievanceOfficer.content")}
                    </p>
                  </div>
                </section>

                <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <strong>{t("privacyPolicy.footer.lastUpdated")}</strong> {new Date().toLocaleDateString(i18n.language === 'hi' ? 'hi-IN' : 'en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-sm text-neutral-600 mt-2">
                    {t("privacyPolicy.footer.effectiveNotice")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-800 text-neutral-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src="/images/logo.jpg" 
                  alt="Meri Didi Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-heading font-bold text-white">Meri Didi</span>
            </div>
            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} Meri Didi. {t("privacyPolicy.footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}