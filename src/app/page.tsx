"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import HeroSlide from "@/components/sections/HeroSlide";
import AboutSlide from "@/components/sections/AboutSlide";
import ProjectsSlide from "@/components/sections/ProjectsSlide";
import SkillsSlide from "@/components/sections/SkillsSlide";
import ContactSlide from "@/components/sections/ContactSlide";
import SlideNavigation from "@/components/layout/SlideNavigation";

const slides = [
  { component: HeroSlide, id: "hero" },
  { component: AboutSlide, id: "about" },
  { component: ProjectsSlide, id: "projects" },
  { component: SkillsSlide, id: "skills" },
  { component: ContactSlide, id: "contact" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(Math.max(0, Math.min(index, slides.length - 1)));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Mouse wheel navigation
  useEffect(() => {
    let lastScrollTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < 400) return;
      lastScrollTime = now;
      if (e.deltaY > 0) nextSlide();
      else if (e.deltaY < 0) prevSlide();
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextSlide, prevSlide]);

  // Touch swipe for mobile
  useEffect(() => {
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 60) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-6 py-3 md:py-4 bg-bg-primary/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.a
            href="#"
            onClick={() => goToSlide(0)}
            className="text-base md:text-lg font-semibold font-mono cursor-pointer inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-accent">&gt;_</span>elbaraka
          </motion.a>
        </div>
      </header>

      {/* Slides */}
      <main className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 80 }}
            animate={
              index === currentSlide
                ? { opacity: 1, y: 0 }
                : index < currentSlide
                ? { opacity: 0, y: -60 }
                : { opacity: 0, y: 60 }
            }
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 w-full h-screen"
            style={{ pointerEvents: index === currentSlide ? "auto" : "none" }}
          >
            <slide.component />
          </motion.div>
        ))}
      </main>

      {/* Navigation */}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={prevSlide}
        onNext={nextSlide}
        onGoTo={goToSlide}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-indigo-500 z-50"
        initial={{ width: "0%" }}
        animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      />
    </>
  );
}
