"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StaffMember } from "@/src/data/staff";

interface LeadershipCarouselProps {
  members: StaffMember[];
  autoPlayInterval?: number; // in milliseconds, default 5000 (5 seconds)
}

export default function LeadershipCarousel({ 
  members, 
  autoPlayInterval = 5000 
}: LeadershipCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
    resetAutoPlay();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
    resetAutoPlay();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
      }, autoPlayInterval);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, autoPlayInterval, members.length]);

  // Pause on hover, resume on leave
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="relative mx-auto max-w-4xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-lg bg-white p-8 shadow-lg md:p-12"
          >
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-full bg-gray-200">
                {members[currentIndex].image ? (
                  <Image
                    src={members[currentIndex].image}
                    alt={members[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-primary/20 to-brand-accent/20">
                    <span className="text-4xl font-bold text-brand-primary">
                      {members[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="mb-2 font-serif text-2xl font-bold text-brand-primary md:text-3xl">
                  {members[currentIndex].name}
                </h3>
                <p className="mb-4 text-lg font-semibold text-brand-accent">
                  {members[currentIndex].role}
                </p>
                <p className="mb-4 text-gray-600">
                  {members[currentIndex].bio}
                </p>
                {members[currentIndex].qualifications && members[currentIndex].qualifications.length > 0 && (
                  <div className="mt-4">
                    <p className="mb-2 text-sm font-semibold text-gray-700">Qualifications:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {members[currentIndex].qualifications.map((qual, idx) => (
                        <li key={idx}>• {qual}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-brand-primary hover:text-white md:-translate-x-12"
        aria-label="Previous member"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-brand-primary hover:text-white md:translate-x-12"
        aria-label="Next member"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-brand-primary w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Member Counter */}
      <div className="mt-4 text-center text-sm text-gray-500">
        {currentIndex + 1} of {members.length}
      </div>
    </div>
  );
}

