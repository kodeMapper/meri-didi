import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BeforeAfterSlider from "./before-after-slider";
import { useTranslation } from "react-i18next";

const comparisons = [
  {
    id: 1,
    titleKey: "transformation.comparisons.0.title",
    before: {
      src: "/images/before-2.png",
      altKey: "transformation.comparisons.0.before.alt",
    },
    after: {
      src: "/images/after-2.png",
      altKey: "transformation.comparisons.0.after.alt",
    },
  },
  {
    id: 2,
    titleKey: "transformation.comparisons.1.title",
    before: {
      src: "/images/after-1.png",
      altKey: "transformation.comparisons.1.before.alt",
    },
    after: {
      src: "/images/before-1.png",
      altKey: "transformation.comparisons.1.after.alt",
    },
  },
];

const stats = [
  { value: "4.8 hrs", labelKey: "transformation.stats.0.label" },
  { value: "98%", labelKey: "transformation.stats.1.label" },
  { value: "3x", labelKey: "transformation.stats.2.label" },
];

export default function TransformationSection() {
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
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-red-100 via-rose-50 to-pink-100 relative overflow-hidden snap-start">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-red-400 to-rose-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-neutral-900">{t("transformation.title")}</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            {t("transformation.subtitle")}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {comparisons.map((comparison) => (
            <motion.div key={comparison.id} variants={itemVariants}>
              <BeforeAfterSlider 
                titleKey={comparison.titleKey}
                beforeSrc={comparison.before.src}
                afterSrc={comparison.after.src}
                beforeAltKey={comparison.before.altKey}
                afterAltKey={comparison.after.altKey}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 bg-neutral-50 rounded-xl p-8 border border-neutral-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <p className="text-neutral-700">{t(stat.labelKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
