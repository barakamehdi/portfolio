"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoTo?: (index: number) => void;
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoTo,
}: SlideNavigationProps) {
  return (
    <>
      {/* Dot Indicators */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 md:gap-3"
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onGoTo?.(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-6 md:w-8 h-2 md:h-3"
                : "bg-text-tertiary/50 hover:bg-text-secondary w-2 h-2 md:w-3 md:h-3"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-40 gap-4"
      >
        <button
          onClick={onPrevious}
          className="p-2 rounded-full border border-border hover:border-accent hover:bg-accent-glow transition-all duration-300 group"
        >
          <ChevronUp className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
        </button>
        <span className="flex items-center text-sm text-text-tertiary font-mono">
          {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </span>
        <button
          onClick={onNext}
          className="p-2 rounded-full border border-border hover:border-accent hover:bg-accent-glow transition-all duration-300 group"
        >
          <ChevronDown className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
        </button>
      </motion.div>

      {/* Keyboard hint on first slide (mobile only) */}
      {currentSlide === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="fixed bottom-8 md:hidden left-1/2 -translate-x-1/2 z-40 text-xs text-text-tertiary text-center px-4"
        >
          <p>Swipe or scroll to navigate</p>
        </motion.div>
      )}
    </>
  );
}
