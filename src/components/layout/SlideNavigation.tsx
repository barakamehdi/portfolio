"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}: SlideNavigationProps) {
  return (
    <>
      {/* Dot Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              // Calculate navigation needed
              if (index > currentSlide) {
                for (let i = currentSlide; i < index; i++) onNext();
              } else if (index < currentSlide) {
                for (let i = index; i < currentSlide; i++) onPrevious();
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-text-tertiary hover:bg-text-secondary"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      {/* Navigation Buttons (hidden on mobile) */}
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

      {/* Keyboard hint on first slide */}
      {currentSlide === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="fixed bottom-8 md:hidden left-1/2 -translate-x-1/2 z-40 text-xs text-text-tertiary text-center"
        >
          <p>Use arrow keys or scroll to navigate</p>
        </motion.div>
      )}
    </>
  );
}
