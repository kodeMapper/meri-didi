import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BeforeAfterSlider from "./before-after-slider";

const comparisons = [
  {
    id: 1,
    title: "Home Cleaning",
    before: {
      alt: "Before - Messy living room",
    },
    after: {
      alt: "After - Clean, organized living room",
    },
  },
  {
    id: 2,
    title: "Kitchen Organization",
    before: {
      alt: "Before - Cluttered kitchen",
    },
    after: {
      alt: "After - Organized kitchen",
    },
  },
];

const stats = [
  { value: "4.8 hrs", label: "Average time saved weekly" },
  { value: "98%", label: "Customer satisfaction rate" },
  { value: "3x", label: "Longer-lasting cleanliness" },
];

export default function TransformationSection() {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-neutral-900">See The Transformation</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Witness the dramatic before and after results of our professional services.
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
                title={comparison.title}
                beforeAlt={comparison.before.alt}
                afterAlt={comparison.after.alt}
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
                <p className="text-neutral-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
