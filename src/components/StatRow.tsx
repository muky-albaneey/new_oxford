"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface StatRowProps {
  stats: Stat[];
}

export default function StatRow({ stats }: StatRowProps) {
  return (
    <section className="bg-brand-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center cursor-default"
              >
                <motion.div 
                  className="mb-4 flex justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <div className="rounded-full bg-brand-accent/20 p-4 transition-all hover:bg-brand-accent/30">
                    <Icon className="h-8 w-8 text-brand-accent" />
                  </div>
                </motion.div>
                <motion.div 
                  className="mb-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <AnimatedCounter value={stat.value} duration={2.5} />
                </motion.div>
                <motion.div 
                  className="text-xs sm:text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

