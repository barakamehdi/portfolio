"use client";

import { useState, useEffect } from "react";
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

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(Math.max(0, Math.min(index, slides.length - 1)));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  // Handle keyboard navigation
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
  }, [currentSlide, isTransitioning]);

  // Handle mouse wheel navigation
  useEffect(() => {
    let lastScrollTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < 300) return; // Throttle
      
      lastScrollTime = now;
      if (e.deltaY > 0) {
        nextSlide();
      } else if (e.deltaY < 0) {
        prevSlide();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSlide, isTransitioning]);

  // Prevent scroll on body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* Header Logo */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <motion.a
            href="#"
            onClick={() => goToSlide(0)}
            className="text-lg font-semibold font-mono cursor-pointer inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.15 }}
          >
            <span className="text-accent">&gt;_</span>elbaraka
          </motion.a>
        </div>
      </header>

      {/* Main Content - Slide Container */}
      <main className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 100 }}
            animate={
              index === currentSlide
                ? { opacity: 1, y: 0 }
                : index < currentSlide
                ? { opacity: 0, y: -100 }
                : { opacity: 0, y: 100 }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
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
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-indigo-500 z-50"
        initial={{ width: "0%" }}
        animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
}