import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Clock, Shield, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DeleteUserData() {
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
                  {t('deleteUserData.backToHome')}
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
              {t('deleteUserData.title')}
            </motion.h1>

            <motion.div 
              className="prose prose-lg prose-neutral max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-100">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-neutral-900">{t('deleteUserData.pageTitle')}</h2>
                </div>
                
                <p className="text-neutral-700 mb-8 leading-relaxed">
                  {t('deleteUserData.intro')}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold text-blue-900">{t('deleteUserData.howToRequest.title')}</h3>
                    </div>
                    <p className="text-blue-800 mb-4">{t('deleteUserData.howToRequest.description')}</p>
                    <ul className="space-y-3 text-blue-700">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span dangerouslySetInnerHTML={{ __html: t('deleteUserData.howToRequest.step1') }} />
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span dangerouslySetInnerHTML={{ __html: t('deleteUserData.howToRequest.step2') }} />
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span dangerouslySetInnerHTML={{ __html: t('deleteUserData.howToRequest.step3') }} />
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Trash2 className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="text-xl font-semibold text-green-900">{t('deleteUserData.whatDataDeleted.title')}</h3>
                    </div>
                    <p className="text-green-800 mb-4">{t('deleteUserData.whatDataDeleted.description')}</p>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {t('deleteUserData.whatDataDeleted.item1')}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {t('deleteUserData.whatDataDeleted.item2')}
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {t('deleteUserData.whatDataDeleted.item3')}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-3">{t('deleteUserData.dataRetained.title')}</h3>
                  <p className="text-yellow-800 mb-3">{t('deleteUserData.dataRetained.description')}</p>
                  <ul className="space-y-2 text-yellow-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t('deleteUserData.dataRetained.item1')}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t('deleteUserData.dataRetained.item2')}
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-3">
                    <Clock className="h-6 w-6 text-purple-600 mr-2" />
                    <h3 className="text-xl font-semibold text-purple-900">{t('deleteUserData.timeline.title')}</h3>
                  </div>
                  <p className="text-purple-800">
                    <span dangerouslySetInnerHTML={{ __html: t('deleteUserData.timeline.description') }} />
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">{t('deleteUserData.importantNotes.title')}</h3>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t('deleteUserData.importantNotes.note1')}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {t('deleteUserData.importantNotes.note2')}
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: t('deleteUserData.importantNotes.note3') }} />
                    </li>
                  </ul>
                </div>

                <div className="text-center mt-8 pt-6 border-t border-neutral-200">
                  <p className="text-neutral-600 mb-2">{t('deleteUserData.thankYou')}</p>
                  <p className="text-sm text-neutral-500">{t('deleteUserData.teamSignature')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
