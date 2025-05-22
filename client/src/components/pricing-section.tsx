import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$49",
    period: "/visit",
    description: "Perfect for occasional needs",
    features: [
      "One-time cleaning service",
      "2-hour time slot",
      "Basic cleaning supplies included",
      "Online booking",
      "Customer support"
    ],
    highlighted: false,
    cta: "Choose Basic"
  },
  {
    name: "Standard",
    price: "$119",
    period: "/month",
    description: "For regular home maintenance",
    features: [
      "Bi-weekly cleaning service",
      "3-hour time slot",
      "All cleaning supplies included",
      "Priority scheduling",
      "Dedicated professional",
      "24/7 customer support"
    ],
    highlighted: true,
    cta: "Choose Standard"
  },
  {
    name: "Premium",
    price: "$299",
    period: "/month",
    description: "For comprehensive home care",
    features: [
      "Weekly cleaning service",
      "4-hour time slot",
      "Deep cleaning included",
      "Premium cleaning products",
      "Same-day scheduling",
      "Dedicated team",
      "Concierge support"
    ],
    highlighted: false,
    cta: "Choose Premium"
  }
];

export default function PricingSection() {
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
          <h2 className="text-3xl font-heading font-bold text-neutral-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Choose the service plan that fits your needs. All plans include our quality guarantee.
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
                  Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-heading font-semibold text-neutral-900">{plan.name}</h3>
                <div className="mt-4 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-neutral-600">{plan.period}</span>
                </div>
                <p className="text-sm text-neutral-700">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                    <span className="text-neutral-700">{feature}</span>
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
                {plan.cta}
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
          <h3 className="text-lg font-medium text-neutral-900 mb-2">Need custom services for your home?</h3>
          <p className="text-neutral-700 mb-4">
            We offer tailored solutions for households with specific needs.
          </p>
          <Button variant="link" className="text-secondary font-medium hover:text-secondary/80">
            <span>Contact our team</span>
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
