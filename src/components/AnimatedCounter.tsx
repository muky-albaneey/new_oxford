"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  value: string; // e.g., "850+", "95%", "1:12", "40+"
  duration?: number; // Duration in seconds for one cycle
  className?: string;
}

export default function AnimatedCounter({ value, duration = 3, className = "" }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Extract numeric value and suffix
  const extractNumber = (val: string): { num: number; suffix: string } => {
    // Handle ratio like "1:12"
    if (val.includes(":")) {
      const parts = val.split(":");
      return { num: parseFloat(parts[1]) || 0, suffix: val };
    }
    
    // Handle percentage like "95%"
    if (val.includes("%")) {
      const num = parseFloat(val.replace("%", ""));
      return { num: isNaN(num) ? 0 : num, suffix: "%" };
    }
    
    // Handle numbers with + like "850+", "40+"
    const match = val.match(/(\d+)(\+?)/);
    if (match) {
      const num = parseFloat(match[1]);
      const suffix = match[2] || "";
      return { num: isNaN(num) ? 0 : num, suffix };
    }
    
    // Handle plain numbers
    const num = parseFloat(val);
    return { num: isNaN(num) ? 0 : num, suffix: "" };
  };

  useEffect(() => {
    if (!isInView) {
      setDisplayValue("0");
      setIsAnimating(false);
      return;
    }

    const { num, suffix } = extractNumber(value);
    if (num === 0) {
      setDisplayValue(value);
      return;
    }

    setIsAnimating(true);
    let animationFrame: number;
    let cycleStartTime: number | null = null;
    let isCountingUp = true;
    let timeoutId: NodeJS.Timeout | null = null;

    const formatValue = (currentNum: number): string => {
      if (value.includes(":")) {
        const parts = value.split(":");
        return `1:${currentNum}`;
      } else if (value.includes("%")) {
        return `${currentNum}%`;
      } else {
        return `${currentNum}${suffix}`;
      }
    };

    const animate = (currentTime: number) => {
      if (cycleStartTime === null) {
        cycleStartTime = currentTime;
      }

      const elapsed = (currentTime - cycleStartTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      if (isCountingUp) {
        // Counting up from 0 to target
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentNum = Math.floor(easeOutQuart * num);
        setDisplayValue(formatValue(currentNum));

        if (progress >= 1) {
          // Reached target, wait then start counting down
          if (timeoutId) clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            isCountingUp = false;
            cycleStartTime = null;
            animationFrame = requestAnimationFrame(animate);
          }, 800);
        } else {
          animationFrame = requestAnimationFrame(animate);
        }
      } else {
        // Counting down from target to 0
        const easeInQuart = Math.pow(progress, 4);
        const currentNum = Math.floor((1 - easeInQuart) * num);
        setDisplayValue(formatValue(currentNum));

        if (progress >= 1) {
          // Reached 0, wait then start counting up again
          if (timeoutId) clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            isCountingUp = true;
            cycleStartTime = null;
            animationFrame = requestAnimationFrame(animate);
          }, 500);
        } else {
          animationFrame = requestAnimationFrame(animate);
        }
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className={className}>
      {displayValue}
    </div>
  );
}

