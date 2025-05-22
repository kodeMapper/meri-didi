import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

type TrustScoreMeterProps = {
  score: number;
  reviews: number;
};

export default function TrustScoreMeter({ score, reviews }: TrustScoreMeterProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate the score meter on mount
    const timer = setTimeout(() => {
      const scorePercentage = (score / 5) * 100;
      setWidth(scorePercentage);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="inline-block">
      <div className="flex justify-center mb-2">
        {Array.from({ length: 5 }).map((_, index) => {
          // Full stars for whole numbers, half star for .5
          if (index < Math.floor(score)) {
            return <Star key={index} className="text-yellow-400 fill-yellow-400 h-5 w-5" />;
          } else if (index === Math.floor(score) && score % 1 >= 0.5) {
            return (
              <svg
                key={index}
                className="text-yellow-400 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            );
          } else {
            return <Star key={index} className="text-yellow-100 h-5 w-5" />;
          }
        })}
      </div>
      <div className="trust-score-meter w-64 mx-auto mb-2">
        <motion.div 
          className="trust-score-value" 
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <p className="text-sm text-neutral-700">
        <span className="font-medium">{score}/5</span> average rating from{" "}
        <span className="font-medium">{reviews.toLocaleString()}+</span> reviews
      </p>
    </div>
  );
}
