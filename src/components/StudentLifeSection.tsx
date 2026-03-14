"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface StudentLifeSectionProps {
  title: string;
  subtitle: string;
  images: {
    src: string;
    alt: string;
    title?: string;
  }[];
  cta?: {
    label: string;
    href: string;
  };
}

export default function StudentLifeSection({
  title,
  subtitle,
  images,
  cta,
}: StudentLifeSectionProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{image.title}</h3>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {cta && (
          <div className="mt-12 text-center">
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-secondary"
            >
              {cta.label}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

