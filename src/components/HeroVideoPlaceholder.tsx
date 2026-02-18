"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Animated placeholder component that simulates a video background
 * Use this if video file is not yet available
 */
export default function HeroVideoPlaceholder({ image }: { image: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Base Image */}
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority
      />
      
      {/* Animated Overlay Effects */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(114, 134, 57, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(114, 134, 57, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(114, 134, 57, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(114, 134, 57, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle Zoom Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />
    </div>
  );
}

