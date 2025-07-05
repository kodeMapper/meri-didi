import { motion } from "framer-motion";
import { Shield, CheckCircle, BadgeCheck, Lock, UserCheck, Star } from "lucide-react";
import { fadeUpVariants, staggerContainer, pulseVariants, bounceVariants } from "@/lib/animation-utils";
import { useTranslation } from "react-i18next";

const securitySteps = [
  {
    titleKey: "security.steps.0.title",
    descriptionKey: "security.steps.0.description",
    icon: Shield,
  },
  {
    titleKey: "security.steps.1.title",
    descriptionKey: "security.steps.1.description",
    icon: BadgeCheck,
  },
  {
    titleKey: "security.steps.2.title",
    descriptionKey: "security.steps.2.description",
    icon: UserCheck,
  },
  {
    titleKey: "security.steps.3.title",
    descriptionKey: "security.steps.3.description",
    icon: CheckCircle,
  },
  {
    titleKey: "security.steps.4.title",
    descriptionKey: "security.steps.4.description",
    icon: Lock,
  },
  {
    titleKey: "security.steps.5.title",
    descriptionKey: "security.steps.5.description",
    icon: Star,
  },
];

export default function SecuritySection() {
  const { t } = useTranslation();
  
  return (
    <section id="security" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 relative overflow-hidden snap-start">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t("security.title")}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t("security.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Flow line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 transform -translate-y-1/2 hidden md:block"></div>

          {/* Security steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {securitySteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100 relative flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center absolute -top-3 -right-3 border-2 border-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{t(step.titleKey)}</h3>
                <p className="text-neutral-600">{t(step.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}