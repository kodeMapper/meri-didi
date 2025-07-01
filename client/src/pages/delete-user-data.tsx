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
                  Back to Home
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
              Delete Your Personal Data
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
                  <h2 className="text-2xl font-bold text-neutral-900">Meri Didi Data Deletion</h2>
                </div>
                
                <p className="text-neutral-700 mb-8 leading-relaxed">
                  At Aara Green Infosolutions Private Limited, we value your privacy and give you the option to delete your personal data while keeping your Meri Didi account active.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold text-blue-900">How to Request Data Deletion</h3>
                    </div>
                    <p className="text-blue-800 mb-4">To request the deletion of your personal data:</p>
                    <ul className="space-y-3 text-blue-700">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Send an email to: <strong>support@merididi.com</strong>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Use the subject line: <strong>"Delete My Data – Meri Didi"</strong>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Include your registered mobile number in the email
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Trash2 className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="text-xl font-semibold text-green-900">What Data Will Be Deleted</h3>
                    </div>
                    <p className="text-green-800 mb-4">We will delete the following data from our systems:</p>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Your name, profile photo, and saved addresses
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Your booking and service history
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Any location or activity data associated with your usage
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-3">What Data May Be Retained</h3>
                  <p className="text-yellow-800 mb-3">Some data may be retained even after your request:</p>
                  <ul className="space-y-2 text-yellow-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Anonymized usage records that cannot be linked back to you
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Any data required by law, regulatory obligations, or fraud prevention measures
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-3">
                    <Clock className="h-6 w-6 text-purple-600 mr-2" />
                    <h3 className="text-xl font-semibold text-purple-900">Timeline</h3>
                  </div>
                  <p className="text-purple-800">
                    We will complete your data deletion request within <strong>7 business days</strong> from the date we receive your email.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Important Notes</h3>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      This does not delete your account. You will still be able to log in to the Meri Didi app.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      If you would like to delete your account along with your data, please mention that clearly in your email.
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      For any concerns or questions, feel free to contact us at <strong>support@merididi.com</strong>.
                    </li>
                  </ul>
                </div>

                <div className="text-center mt-8 pt-6 border-t border-neutral-200">
                  <p className="text-neutral-600 mb-2">Thank you for using Meri Didi.</p>
                  <p className="text-sm text-neutral-500">— Team Aara Green Infosolutions Private Limited</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
