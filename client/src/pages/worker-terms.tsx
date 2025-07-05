import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, ArrowLeft, Menu, X } from "lucide-react";
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

export default function WorkerTerms() {
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
      {/* Custom Header for Worker Terms Page */}
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
                  {t("workerTerms.backToHome")}
                </Button>
              </Link>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-tight"
              style={{
              background: "linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 4px 24px rgba(6,182,212,0.12)",
              letterSpacing: "0.02em"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("workerTerms.title")}
            </motion.h1>

            <motion.div 
              className="prose prose-lg prose-neutral max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-red-800 mb-4">MERI DIDI – TERMS & CONDITIONS FOR WORKERS</h2>
                <p className="text-red-700 text-sm">
                  Please read these terms and conditions carefully before registering as a worker on the Meri Didi platform.
                </p>
              </div> */}

              <div className="space-y-8">
                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("workerTerms.sections.definitions.title")}</h2>
                  <div className="grid gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="font-semibold text-blue-900">{t("workerTerms.sections.definitions.didi.label")}</span>
                      <span className="text-blue-800 ml-2">{t("workerTerms.sections.definitions.didi.description")}</span>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="font-semibold text-green-900">{t("workerTerms.sections.definitions.company.label")}</span>
                      <span className="text-green-800 ml-2">{t("workerTerms.sections.definitions.company.description")}</span>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="font-semibold text-purple-900">{t("workerTerms.sections.definitions.platform.label")}</span>
                      <span className="text-purple-800 ml-2">{t("workerTerms.sections.definitions.platform.description")}</span>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100">
                      <span className="font-semibold text-orange-900">{t("workerTerms.sections.definitions.user.label")}</span>
                      <span className="text-orange-800 ml-2">{t("workerTerms.sections.definitions.user.description")}</span>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("workerTerms.sections.engagement.title")}</h2>
                  <div className="space-y-4">
                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border border-yellow-100">
                      <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("workerTerms.sections.engagement.notEmployment")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("workerTerms.sections.engagement.independentProvider")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("workerTerms.sections.engagement.facilitator")}</span>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("workerTerms.sections.registration.title")}</h2>
                  <div className="space-y-4">
                    <div className="flex items-start bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-100">
                      <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("workerTerms.sections.registration.genuineDocuments")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                      <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("workerTerms.sections.registration.policeVerification")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border border-red-100">
                      <span className="inline-block w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("workerTerms.sections.registration.consequences")}</span>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("workerTerms.sections.duties.title")}</h2>
                  <div className="space-y-4">
                    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("workerTerms.sections.duties.servicePlan")}</span>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border border-yellow-100">
                      <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-neutral-700">{t("workerTerms.sections.duties.noPrivateWork")}</span>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-100">
                      <span className="text-neutral-700 font-medium mb-3 block">{t("workerTerms.sections.duties.agreeToTitle")}</span>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-neutral-600">{t("workerTerms.sections.duties.agreeTo.punctuality")}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-neutral-600">{t("workerTerms.sections.duties.agreeTo.uniform")}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-neutral-600">{t("workerTerms.sections.duties.agreeTo.respectful")}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-neutral-600">{t("workerTerms.sections.duties.agreeTo.noFavors")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">{t("workerTerms.sections.payment.title")}</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{t("workerTerms.sections.payment.paymentsReleased")}</span>
                      <ul className="mt-2 ml-6 space-y-1 text-sm">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {t("workerTerms.sections.payment.weeklyMonthly")}
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {t("workerTerms.sections.payment.daily")}
                        </li>
                      </ul>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.payment.commission")}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.payment.noCash")}
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">{t("workerTerms.sections.training.title")}</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.training.trainingFee")}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.training.uniformWear")}
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-red-500 pl-4">{t("workerTerms.sections.termination.title")}</h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-800 font-medium mb-3">{t("workerTerms.sections.termination.warning")}</p>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.termination.reasons.missedDuties")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.termination.reasons.rudeAbusive")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.termination.reasons.theftAssault")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.termination.reasons.misuseProperty")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.termination.reasons.privateJobs")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.termination.reasons.confidentiality")}
                      </li>
                    </ul>
                  </div>
                  <p className="text-neutral-700 leading-relaxed text-sm bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <strong>{t("workerTerms.sections.termination.important")}</strong> {t("workerTerms.sections.termination.legalAction")}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">{t("workerTerms.sections.leave.title")}</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.leave.suddenLeave")}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.leave.uninformedAbsence")}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.leave.longLeave")}
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">{t("workerTerms.sections.confidentiality.title")}</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.confidentiality.noDisclosure")}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.confidentiality.violationConsequences")}
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">{t("workerTerms.sections.safety.title")}</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.safety.refuseUnsafe")}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.safety.reportUnsafe")}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.safety.companySupport")}
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-red-500 pl-4">{t("workerTerms.sections.prohibited.title")}</h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium mb-3">{t("workerTerms.sections.prohibited.warning")}</p>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.prohibited.items.photos")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.prohibited.items.useProperty")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.prohibited.items.substances")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.prohibited.items.unauthorizedPersons")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.prohibited.items.misbehaviour")}
                      </li>
                    </ul>
                    <p className="text-red-700 text-sm mt-3 font-medium">
                      {t("workerTerms.sections.prohibited.consequences")}
                    </p>
                  </div>
                </section>

                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("workerTerms.sections.incentives.title")}</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-green-50 to-green-25 border border-green-200 rounded-xl p-6 shadow-md">
                      <h3 className="font-bold text-green-800 mb-4 text-xl">🏆 {t("workerTerms.sections.incentives.incentivesTitle")}</h3>
                      <p className="text-green-700 mb-4">{t("workerTerms.sections.incentives.eligibleRewards")}</p>
                      <div className="space-y-3">
                        <div className="flex items-center bg-white p-3 rounded-lg border border-green-100">
                          <span className="text-green-600 mr-3">⏰</span>
                          <span className="text-green-800">{t("workerTerms.sections.incentives.punctuality")}</span>
                        </div>
                        <div className="flex items-center bg-white p-3 rounded-lg border border-green-100">
                          <span className="text-green-600 mr-3">⭐</span>
                          <span className="text-green-800">{t("workerTerms.sections.incentives.ratings")}</span>
                        </div>
                        <div className="flex items-center bg-white p-3 rounded-lg border border-green-100">
                          <span className="text-green-600 mr-3">👥</span>
                          <span className="text-green-800">{t("workerTerms.sections.incentives.referrals")}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-red-25 border border-red-200 rounded-xl p-8 shadow-md">
                      <h3 className="font-bold text-red-800 mb-4 text-xl">⚠️ {t("workerTerms.sections.incentives.penaltiesTitle")}</h3>
                      <p className="text-red-700 mb-4">{t("workerTerms.sections.incentives.applicableFines")}</p>
                      
                      <div className="bg-white rounded-lg border border-red-200 overflow-hidden">
                        <table className="w-full text-sm">
                          <thead className="bg-red-100">
                            <tr>
                              <th className="text-left py-3 px-4 font-semibold text-red-800">{t("workerTerms.sections.incentives.table.offense")}</th>
                              <th className="text-left py-3 px-4 font-semibold text-red-800">{t("workerTerms.sections.incentives.table.fine")}</th>
                              <th className="text-left py-3 px-4 font-semibold text-red-800">{t("workerTerms.sections.incentives.table.action")}</th>
                            </tr>
                          </thead>
                          <tbody className="text-red-700">
                            <tr className="hover:bg-red-50">
                              <td className="py-3 px-4">{t("workerTerms.sections.incentives.table.rows.late.offense")}</td>
                              <td className="py-3 px-4 font-semibold">{t("workerTerms.sections.incentives.table.rows.late.fine")}</td>
                              <td className="py-3 px-4">{t("workerTerms.sections.incentives.table.rows.late.action")}</td>
                            </tr>
                            <tr className="hover:bg-red-50">
                              <td className="py-3 px-4">{t("workerTerms.sections.incentives.table.rows.missed.offense")}</td>
                              <td className="py-3 px-4 font-semibold">{t("workerTerms.sections.incentives.table.rows.missed.fine")}</td>
                              <td className="py-3 px-4">{t("workerTerms.sections.incentives.table.rows.missed.action")}</td>
                            </tr>
                            <tr className="hover:bg-red-50">
                              <td className="py-3 px-4">{t("workerTerms.sections.incentives.table.rows.misuse.offense")}</td>
                              <td className="py-3 px-4 font-semibold">{t("workerTerms.sections.incentives.table.rows.misuse.fine")}</td>
                              <td className="py-3 px-4">{t("workerTerms.sections.incentives.table.rows.misuse.action")}</td>
                            </tr>
                            <tr className="hover:bg-red-50">
                              <td className="py-3 px-4">{t("workerTerms.sections.incentives.table.rows.abuse.offense")}</td>
                              <td className="py-3 px-4 font-semibold">{t("workerTerms.sections.incentives.table.rows.abuse.fine")}</td>
                              <td className="py-3 px-4">{t("workerTerms.sections.incentives.table.rows.abuse.action")}</td>
                            </tr>
                            <tr className="bg-red-50">
                              <td className="py-3 px-4 font-semibold">{t("workerTerms.sections.incentives.table.rows.serious.offense")}</td>
                              <td className="py-3 px-4 font-semibold">{t("workerTerms.sections.incentives.table.rows.serious.fine")}</td>
                              <td className="py-3 px-4 font-semibold">{t("workerTerms.sections.incentives.table.rows.serious.action")}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                        <p className="text-red-800 text-xs font-medium">
                          ⚖️ {t("workerTerms.sections.incentives.legalNote")}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">{t("workerTerms.sections.dispute.title")}</h2>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.dispute.handledBySupervisor")}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.dispute.arbitration")}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t("workerTerms.sections.dispute.jurisdiction")}
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">{t("workerTerms.sections.legal.title")}</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm leading-relaxed mb-3">
                      {t("workerTerms.sections.legal.governed")}
                    </p>
                    <p className="text-blue-800 text-sm leading-relaxed mb-3">
                      {t("workerTerms.sections.legal.seriousOffences")}
                    </p>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {t("workerTerms.sections.legal.sections.assault")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {t("workerTerms.sections.legal.sections.intimidation")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {t("workerTerms.sections.legal.sections.theft")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {t("workerTerms.sections.legal.sections.trespass")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {t("workerTerms.sections.legal.sections.harassment")}
                      </li>
                    </ul>
                    <p className="text-blue-800 text-sm mt-3 font-medium">
                      {t("workerTerms.sections.legal.companyCooperation")}
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">{t("workerTerms.sections.protection.title")}</h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm leading-relaxed mb-3">
                      {t("workerTerms.sections.protection.workerRights")}
                    </p>
                    <p className="text-green-800 text-sm leading-relaxed">
                      {t("workerTerms.sections.protection.customerAdvice")}
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">{t("workerTerms.sections.wage.title")}</h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 text-sm leading-relaxed">
                      {t("workerTerms.sections.wage.transparency")}
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-primary pl-4">{t("workerTerms.sections.acceptance.title")}</h2>
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                    <p className="text-neutral-800 text-sm leading-relaxed mb-3">
                      {t("workerTerms.sections.acceptance.confirmation")}
                    </p>
                    <ul className="space-y-2 text-neutral-700 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-neutral-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.acceptance.items.understood")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-neutral-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.acceptance.items.comply")}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-neutral-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        {t("workerTerms.sections.acceptance.items.authorize")}
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Added Refund Policy section */}
                <section className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-primary pl-4 bg-gradient-to-r from-primary/5 to-transparent py-2">{t("workerTerms.sections.refund.title")}</h2>
                  <p className="text-neutral-700 leading-relaxed">
                    {t("workerTerms.sections.refund.policy")}
                  </p>
                </section>
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
              <span className="text-lg font-heading font-bold text-white">{t("footer.companyName")}</span>
            </div>
            <p className="text-xs text-neutral-500">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}