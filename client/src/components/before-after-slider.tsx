import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type BeforeAfterSliderProps = {
  titleKey: string;
  beforeAltKey: string;
  afterAltKey: string;
};

export default function BeforeAfterSlider({ titleKey, beforeAltKey, afterAltKey }: BeforeAfterSliderProps) {
  const { t } = useTranslation();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const position = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(position, 100)));
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const position = ((e.touches[0].clientX - sliderRect.left) / sliderRect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(position, 100)));
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={sliderRef}
      className="relative rounded-lg shadow-lg overflow-hidden h-80 cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After image (full width) */}
      <div className="w-full h-full bg-gradient-to-r from-yellow-50 to-white">
        <div className="w-full h-full flex items-center justify-center">
          <div className="p-4 text-center">
            <h3 className="font-medium text-neutral-900">{t(afterAltKey)}</h3>
            <div className="mt-2 w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Before image (partial width based on slider) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="w-full h-full bg-gradient-to-r from-neutral-200 to-neutral-100">
          <div className="w-full h-full flex items-center justify-center">
            <div className="p-4 text-center">
              <h3 className="font-medium text-neutral-900">{t(beforeAltKey)}</h3>
              <div className="mt-2 w-16 h-16 rounded-full bg-red-100 mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slider handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        whileHover={{ width: "4px" }}
        whileTap={{ width: "6px" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
          ⟷
        </div>
      </motion.div>
      
      <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
        {t(titleKey)}
      </div>
    </div>
  );
}
