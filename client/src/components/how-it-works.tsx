import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      number: 1,
      titleKey: "howItWorks.steps.step1.title",
      descriptionKey: "howItWorks.steps.step1.description",
      imagePosition: "right" as const,
    },
    {
      number: 2,
      titleKey: "howItWorks.steps.step2.title",
      descriptionKey: "howItWorks.steps.step2.description",
      imagePosition: "left" as const,
    },
    {
      number: 3,
      titleKey: "howItWorks.steps.step3.title",
      descriptionKey: "howItWorks.steps.step3.description",
      imagePosition: "right" as const,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-neutral-900">{t("howItWorks.title")}</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <Step 
                key={index}
                number={step.number}
                titleKey={step.titleKey}
                descriptionKey={step.descriptionKey}
                imagePosition={step.imagePosition}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type StepProps = {
  number: number;
  titleKey: string;
  descriptionKey: string;
  imagePosition: "left" | "right";
  index: number;
};

function Step({ number, titleKey, descriptionKey, imagePosition, index }: StepProps) {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={`flex flex-col ${
        imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
      } items-center`}
    >
      <motion.div 
        variants={itemVariants} 
        className={`md:w-1/2 mb-8 md:mb-0 ${
          imagePosition === "right" ? "md:pr-12 text-center md:text-right" : "md:pl-12 text-center md:text-left"
        }`}
      >
        <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2">{t(titleKey)}</h3>
        <p className="text-neutral-700">{t(descriptionKey)}</p>
      </motion.div>
      
      <motion.div variants={itemVariants} className="md:w-16 relative flex justify-center">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg z-10">
          {number}
        </div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants} 
        className={`md:w-1/2 ${imagePosition === "right" ? "md:pl-12" : "md:pr-12"}`}
      >
        <div className="rounded-lg shadow-lg overflow-hidden h-48 md:h-64 flex items-center justify-center bg-white">
          <div className="p-6 text-center">
            <div className={`w-20 h-20 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-4`}>
              {number === 1 && (
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
                </svg>
              )}
              {number === 2 && (
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              )}
              {number === 3 && (
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              )}
              {number === 4 && (
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              )}
            </div>
            <p className="text-neutral-700 font-medium">{t("howItWorks.stepLabel", { number })}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
