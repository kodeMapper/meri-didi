import { motion } from "framer-motion";
import { 
  Utensils, 
  Fan, 
  Heart, 
  Bolt, 
  Bug, 
  Leaf
} from "lucide-react";

type AnimatedServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function AnimatedServiceCard({ title, description, icon }: AnimatedServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "utensils":
        return <Utensils className="h-6 w-6 text-primary" />;
      case "broom":
        return <Fan className="h-6 w-6 text-primary" />;
      case "heart":
        return <Heart className="h-6 w-6 text-primary" />;
      case "tools":
        return <Bolt className="h-6 w-6 text-primary" />;
      case "bug":
        return <Bug className="h-6 w-6 text-primary" />;
      case "leaf":
        return <Leaf className="h-6 w-6 text-primary" />;
      default:
        return <Fan className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl p-6 border border-neutral-200 shadow-md hover:shadow-lg transition-all w-full max-w-md mx-auto"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 221, 0, 0.2)" }}
      >
        {getIcon()}
      </motion.div>
      <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2 text-center">{title}</h3>
      <p className="text-neutral-700 text-center">{description}</p>
      <motion.button
        className="mt-4 w-full py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-md text-sm font-medium transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
}
