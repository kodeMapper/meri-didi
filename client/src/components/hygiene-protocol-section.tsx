import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HygieneProtocolSection() {
  const { t } = useTranslation();

  return (
    <section id="hygiene" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-cyan-100 via-sky-50 to-blue-100 relative overflow-hidden snap-start">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t("security.hygieneProtocol.title")}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t("security.hygieneProtocol.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <motion.div 
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11H7V8Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M6 11V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V11M6 11H18M6 11H4C3.44772 11 3 11.4477 3 12V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V12C21 11.4477 20.5523 11 20 11H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="font-semibold text-center mb-2">{t("security.hygieneProtocol.items.uniform.title")}</h4>
            <p className="text-sm text-center text-neutral-600">{t("security.hygieneProtocol.items.uniform.description")}</p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M11 10L11 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 10L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 6H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h4 className="font-semibold text-center mb-2">{t("security.hygieneProtocol.items.handwash.title")}</h4>
            <p className="text-sm text-center text-neutral-600">{t("security.hygieneProtocol.items.handwash.description")}</p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="font-semibold text-center mb-2">{t("security.hygieneProtocol.items.mask.title")}</h4>
            <p className="text-sm text-center text-neutral-600">{t("security.hygieneProtocol.items.mask.description")}</p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C8.65685 20 10 18.6569 10 17C10 15.3431 8.65685 14 7 14Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C8.65685 20 10 18.6569 10 17C10 15.3431 8.65685 14 7 14Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 15.5H14.5M7 11.5V9M17 11.5V9M16.5 7L7.5 7M14 4L18 7H6L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="font-semibold text-center mb-2">{t("security.hygieneProtocol.items.gloves.title")}</h4>
            <p className="text-sm text-center text-neutral-600">{t("security.hygieneProtocol.items.gloves.description")}</p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
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
            <h4 className="font-semibold text-center mb-2">{t("security.hygieneProtocol.items.sanitizer.title")}</h4>
            <p className="text-sm text-center text-neutral-600">{t("security.hygieneProtocol.items.sanitizer.description")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
