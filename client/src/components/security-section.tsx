import { motion } from "framer-motion";
import { Shield, CheckCircle, BadgeCheck, Lock, UserCheck, Star, Award, Sparkles, Clock, Smile } from "lucide-react";
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

const trustBuildingFeatures = [
  {
    titleKey: "security.trust.0.title",
    descriptionKey: "security.trust.0.description",
    icon: Shield,
    color: "bg-blue-500",
  },
  {
    titleKey: "security.trust.1.title",
    descriptionKey: "security.trust.1.description",
    icon: UserCheck,
    color: "bg-green-500",
  },
  {
    titleKey: "security.trust.2.title",
    descriptionKey: "security.trust.2.description",
    icon: Award,
    color: "bg-yellow-500",
  },
  {
    titleKey: "security.trust.3.title",
    descriptionKey: "security.trust.3.description",
    icon: Star,
    color: "bg-purple-500",
  },
  {
    titleKey: "security.trust.4.title",
    descriptionKey: "security.trust.4.description",
    icon: Clock,
    color: "bg-red-500",
  },
  {
    titleKey: "security.trust.5.title",
    descriptionKey: "security.trust.5.description",
    icon: Sparkles,
    color: "bg-indigo-500",
  },
];

export default function SecuritySection() {
  const { t } = useTranslation();
  
  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Worker's Hygiene Protocol Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t("security.hygieneProtocol.title")}
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t("security.hygieneProtocol.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 bg-neutral-50 p-6 rounded-xl">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11H7V8Z" fill="currentColor" fillOpacity="0.2"/>
                  <path d="M6 11V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V11M6 11H18M6 11H4C3.44772 11 3 11.4477 3 12V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V12C21 11.4477 20.5523 11 20 11H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="font-semibold">{t("security.hygieneProtocol.items.uniform.title")}</h4>
              <p className="text-sm text-center text-neutral-600">{t("security.hygieneProtocol.items.uniform.description")}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M11 10L11 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M15 10L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 6H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4 className="font-semibold">{t("security.hygieneProtocol.items.handwash.title")}</h4>
              <p className="text-sm text-center text-neutral-600">{t("security.hygieneProtocol.items.handwash.description")}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" fill="currentColor" fillOpacity="0.2"/>
                  <path d="M3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="font-semibold">{t("security.hygieneProtocol.items.mask.title")}</h4>
              <p className="text-sm text-center text-neutral-600">{t("security.hygieneProtocol.items.mask.description")}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C8.65685 20 10 18.6569 10 17C10 15.3431 8.65685 14 7 14Z" fill="currentColor" fillOpacity="0.2"/>
                  <path d="M17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14Z" fill="currentColor" fillOpacity="0.2"/>
                  <path d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C8.65685 20 10 18.6569 10 17C10 15.3431 8.65685 14 7 14Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 15.5H14.5M7 11.5V9M17 11.5V9M16.5 7L7.5 7M14 4L18 7H6L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="font-semibold">{t("security.hygieneProtocol.items.gloves.title")}</h4>
              <p className="text-sm text-center text-neutral-600">{t("security.hygieneProtocol.items.gloves.description")}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8H19.1707C20.1788 8 20.9933 8.81553 20.9933 9.82364C20.9933 10.2473 20.8423 10.6568 20.5654 10.9805L19 12.8139" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 8H4.82932C3.82121 8 3.00668 8.81553 3.00668 9.82364C3.00668 10.2473 3.15769 10.6568 3.43461 10.9805L5 12.8139" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 8V3M12 3H10M12 3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 21H17M9 13V17C9 18.1046 8.10457 19 7 19H7M15 13V17C15 18.1046 15.8954 19 17 19H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 8C7 8 9 10 12 10C15 10 17 8 17 8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2.5 13C6 18 18 18 21.5 13" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4 className="font-semibold">{t("security.hygieneProtocol.items.sanitizer.title")}</h4>
              <p className="text-sm text-center text-neutral-600">{t("security.hygieneProtocol.items.sanitizer.description")}</p>
            </div>
          </div>
        </div>

        {/* Worker's Kit Section */}
        <motion.div
          className="mt-20 bg-neutral-50 rounded-2xl p-8 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">{t("security.workersKit.title")}</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white rounded-lg p-4 shadow-md text-center"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mx-auto w-16 h-16 mb-3 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9z" />
                </svg>
              </div>
              <h4 className="font-semibold">{t("security.workersKit.items.duster.title")}</h4>
              <p className="text-sm text-neutral-600">{t("security.workersKit.items.duster.description")}</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg p-4 shadow-md text-center"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mx-auto w-16 h-16 mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="font-semibold">{t("security.workersKit.items.mop.title")}</h4>
              <p className="text-sm text-neutral-600">{t("security.workersKit.items.mop.description")}</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg p-4 shadow-md text-center"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mx-auto w-16 h-16 mb-3 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h4 className="font-semibold">{t("security.workersKit.items.ecoSpray.title")}</h4>
              <p className="text-sm text-neutral-600">{t("security.workersKit.items.ecoSpray.description")}</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg p-4 shadow-md text-center"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mx-auto w-16 h-16 mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold">{t("security.workersKit.items.tools.title")}</h4>
              <p className="text-sm text-neutral-600">{t("security.workersKit.items.tools.description")}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Building Features */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">{t("security.whyTrust.title")}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustBuildingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex items-start"
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
          className="mt-20 bg-primary/5 rounded-2xl p-8 border border-primary/20"
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
            <div className="flex-shrink-0 bg-white p-5 rounded-xl shadow-md flex items-center justify-center">
              <Shield className="w-12 h-12 text-primary mr-4" />
              <div>
                <p className="text-sm text-neutral-500">{t("security.verifiedWorkers.title")}</p>
                <p className="text-2xl font-bold">{t("security.verifiedWorkers.value")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}