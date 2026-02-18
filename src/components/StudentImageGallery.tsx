"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface StudentImageGalleryProps {
  images: {
    src: string;
    alt: string;
    category?: string;
  }[];
}

export default function StudentImageGallery({ images }: StudentImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="group relative aspect-square overflow-hidden rounded-lg"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {image.category && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-sm font-semibold text-white">
                  {image.category}
                </span>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

