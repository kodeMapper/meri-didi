import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function PricingSection() {
  const { t } = useTranslation();

  const plans = [
    {
      nameKey: "pricing.plans.basic.name",
      priceKey: "pricing.plans.basic.price",
      periodKey: "pricing.plans.basic.period",
      descriptionKey: "pricing.plans.basic.description",
      featuresKeys: [
        "pricing.plans.basic.features.0",
        "pricing.plans.basic.features.1",
        "pricing.plans.basic.features.2",
        "pricing.plans.basic.features.3",
        "pricing.plans.basic.features.4"
      ],
      highlighted: false,
      ctaKey: "pricing.plans.basic.cta"
    },
    {
      nameKey: "pricing.plans.standard.name",
      priceKey: "pricing.plans.standard.price",
      periodKey: "pricing.plans.standard.period",
      descriptionKey: "pricing.plans.standard.description",
      featuresKeys: [
        "pricing.plans.standard.features.0",
        "pricing.plans.standard.features.1",
        "pricing.plans.standard.features.2",
        "pricing.plans.standard.features.3",
        "pricing.plans.standard.features.4",
        "pricing.plans.standard.features.5"
      ],
      highlighted: true,
      ctaKey: "pricing.plans.standard.cta"
    },
    {
      nameKey: "pricing.plans.premium.name",
      priceKey: "pricing.plans.premium.price",
      periodKey: "pricing.plans.premium.period",
      descriptionKey: "pricing.plans.premium.description",
      featuresKeys: [
        "pricing.plans.premium.features.0",
        "pricing.plans.premium.features.1",
        "pricing.plans.premium.features.2",
        "pricing.plans.premium.features.3",
        "pricing.plans.premium.features.4",
        "pricing.plans.premium.features.5",
        "pricing.plans.premium.features.6"
      ],
      highlighted: false,
      ctaKey: "pricing.plans.premium.cta"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-neutral-900">{t("pricing.title")}</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${plan.highlighted 
                  ? "bg-white rounded-xl p-6 border-2 border-primary shadow-lg relative" 
                  : "bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow"
                }
              `}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 uppercase transform translate-y-(-50%)">
                  {t("pricing.popular")}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-heading font-semibold text-neutral-900">{t(plan.nameKey)}</h3>
                <div className="mt-4 mb-4">
                  <span className="text-4xl font-bold">{t(plan.priceKey)}</span>
                  <span className="text-neutral-600">{t(plan.periodKey)}</span>
                </div>
                <p className="text-sm text-neutral-700">{t(plan.descriptionKey)}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.featuresKeys.map((featureKey, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                    <span className="text-neutral-700">{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${
                  plan.highlighted 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg" 
                    : "bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300"
                }`}
              >
                {t(plan.ctaKey)}
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-neutral-100 rounded-lg p-6 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-lg font-medium text-neutral-900 mb-2">{t("pricing.custom.title")}</h3>
          <p className="text-neutral-700 mb-4">
            {t("pricing.custom.description")}
          </p>
          <Button variant="link" className="text-secondary font-medium hover:text-secondary/80">
            <span>{t("pricing.custom.cta")}</span>
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
