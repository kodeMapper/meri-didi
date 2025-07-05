import { motion } from "framer-motion";
import { Shield, CheckCircle, Award, Clock, UserCheck, Star, Sparkles, Smile } from "lucide-react";
import { pulseVariants } from "@/lib/animation-utils";
import { useTranslation } from "react-i18next";

const trustBuildingFeatures = [
  {
    titleKey: "security.trust.0.title",
    descriptionKey: "security.trust.0.description",
    icon: UserCheck,
    color: "bg-green-500",
  },
  {
    titleKey: "security.trust.1.title",
    descriptionKey: "security.trust.1.description",
    icon: CheckCircle,
    color: "bg-blue-500",
  },
  {
    titleKey: "security.trust.2.title",
    descriptionKey: "security.trust.2.description",
    icon: Award,
    color: "bg-purple-500",
  },
  {
    titleKey: "security.trust.3.title",
    descriptionKey: "security.trust.3.description",
    icon: Clock,
    color: "bg-orange-500",
  },
  {
    titleKey: "security.trust.4.title",
    descriptionKey: "security.trust.4.description",
    icon: Star,
    color: "bg-yellow-500",
  },
  {
    titleKey: "security.trust.5.title",
    descriptionKey: "security.trust.5.description",
    icon: Sparkles,
    color: "bg-pink-500",
  },
];

export default function TrustSection() {
  const { t } = useTranslation();

  return (
    <section id="trust" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 relative overflow-hidden snap-start">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Trust Building Features */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t("security.whyTrust.title")}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover what makes Meri Didi the most trusted household service provider in Nagpur
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustBuildingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex items-start hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.div 
                  className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mr-4 flex-shrink-0`}
                  variants={pulseVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="font-bold mb-1">{t(feature.titleKey)}</h4>
                  <p className="text-neutral-600 text-sm">{t(feature.descriptionKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resolution Promise */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-3">{t("security.resolution.title")}</h3>
              <p className="text-neutral-700">
                {t("security.resolution.description")}
              </p>
            </div>
            <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-500 p-5 rounded-xl shadow-md flex items-center justify-center text-white">
              <Shield className="w-12 h-12 mr-4" />
              <div>
                <p className="text-sm opacity-90">{t("security.verifiedWorkers.title")}</p>
                <p className="text-2xl font-bold">{t("security.verifiedWorkers.value")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
