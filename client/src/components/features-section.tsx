import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  TimerReset, 
  Tag, 
  Globe, 
  Clock, 
  ShieldCheck, 
  TrendingUp,
  Star 
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { Trash2, Droplet, Utensils, Bath, Feather, Heart, Bug } from "lucide-react";

const FeatureCard = ({ icon, titleKey, descriptionKey, index }: { 
  icon: React.ReactNode; 
  titleKey: string; 
  descriptionKey: string;
  index: number;
}) => {
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

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            delay: index * 0.1
          }
        }
      }}
      initial="hidden"
      animate={controls}
      className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow group"
    >
      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2">{t(titleKey)}</h3>
      <p className="text-neutral-700">
        {t(descriptionKey)}
      </p>
    </motion.div>
  );
};

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Trash2 className="text-secondary text-xl" />,
      titleKey: "features.services.brooming.title",
      descriptionKey: "features.services.brooming.description"
    },
    {
      icon: <Droplet className="text-secondary text-xl" />,
      titleKey: "features.services.mopping.title",
      descriptionKey: "features.services.mopping.description"
    },
    {
      icon: <Utensils className="text-secondary text-xl" />,
      titleKey: "features.services.dishwashing.title",
      descriptionKey: "features.services.dishwashing.description"
    },
    {
      icon: <Bath className="text-secondary text-xl" />,
      titleKey: "features.services.bathroomCleaning.title",
      descriptionKey: "features.services.bathroomCleaning.description"
    },
    {
      icon: <Feather className="text-secondary text-xl" />,
      titleKey: "features.services.dusting.title",
      descriptionKey: "features.services.dusting.description"
    },
    {
      icon: <Heart className="text-secondary text-xl" />,
      titleKey: "features.services.elderCare.title",
      descriptionKey: "features.services.elderCare.description"
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary/20 rounded-full p-2">
              <Star className="text-secondary h-6 w-6" />
            </div>
          </div>
          <h2 className="text-3xl font-heading font-bold text-neutral-900">{t("features.title")}</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              index={index}
              icon={feature.icon}
              titleKey={feature.titleKey}
              descriptionKey={feature.descriptionKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
