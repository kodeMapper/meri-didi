import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, AlertTriangle, UserX, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DeleteUserAccount() {
  const { t } = useTranslation();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      {/* Main Content */}
      <main className="pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <Link href="/">
                <Button variant="ghost" size="sm" className="mr-4 text-neutral-600 hover:text-neutral-900">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('deleteUserAccount.backToHome')}
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
              {t('deleteUserAccount.title')}
            </motion.h1>

            <motion.div 
              className="prose prose-lg prose-neutral max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-100">
                <div className="flex items-center mb-6">
                  <UserX className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-neutral-900">{t('deleteUserAccount.pageTitle')}</h2>
                </div>
                
                <p className="text-neutral-700 mb-8 leading-relaxed">
                  {t('deleteUserAccount.intro')}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold text-blue-900">{t('deleteUserAccount.howToRequest.title')}</h3>
                    </div>
                    <p className="text-blue-800 mb-4">{t('deleteUserAccount.howToRequest.description')}</p>
                    <ul className="space-y-3 text-blue-700">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span dangerouslySetInnerHTML={{ __html: t('deleteUserAccount.howToRequest.step1') }} />
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span dangerouslySetInnerHTML={{ __html: t('deleteUserAccount.howToRequest.step2') }} />
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span dangerouslySetInnerHTML={{ __html: t('deleteUserAccount.howToRequest.step3') }} />
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                      <h3 className="text-xl font-semibold text-red-900">{t('deleteUserAccount.whatHappens.title')}</h3>
                    </div>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {t('deleteUserAccount.whatHappens.item1')}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {t('deleteUserAccount.whatHappens.item2')}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {t('deleteUserAccount.whatHappens.item3')}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {t('deleteUserAccount.whatHappens.item4')}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-3">
                    <Shield className="h-6 w-6 text-orange-600 mr-2" />
                    <h3 className="text-xl font-semibold text-orange-900">{t('deleteUserAccount.importantNotes.title')}</h3>
                  </div>
                  <ul className="space-y-3 text-orange-800">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: t('deleteUserAccount.importantNotes.note1') }} />
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t('deleteUserAccount.importantNotes.note2')}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t('deleteUserAccount.importantNotes.note3')}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: t('deleteUserAccount.importantNotes.note4') }} />
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-1">{t('deleteUserAccount.beforeDelete.title')}</h4>
                      <p className="text-yellow-800 text-sm">
                        {t('deleteUserAccount.beforeDelete.description')}
                        <Link href="/delete-user-data" className="underline hover:text-yellow-900 ml-1">
                          {t('deleteUserAccount.beforeDelete.link')}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8 pt-6 border-t border-neutral-200">
                  <p className="text-neutral-600 mb-2">{t('deleteUserAccount.thankYou')}</p>
                  <p className="text-sm text-neutral-500">{t('deleteUserAccount.teamSignature')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
