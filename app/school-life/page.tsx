"use client";

import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Building } from "lucide-react";

// Note: Metadata export removed - client components can't export metadata

export default function SchoolLifePage() {
  const areas = [
    {
      title: "Pastoral Care",
      description: "Comprehensive support for student wellbeing and personal development",
      href: "/school-life/pastoral-care",
      icon: Heart,
    },
    {
      title: "Co-Curricular",
      description: "Rich opportunities in sports, arts, clubs, and leadership activities",
      href: "/school-life/co-curricular",
      icon: Users,
    },
    {
      title: "Campus & Facilities",
      description: "State-of-the-art facilities supporting learning and living",
      href: "/school-life/boarding",
      icon: Building,
    },
  ];

  return (
    <Layout>
      <Breadcrumbs items={[{ label: "School Life" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="School Life"
            subtitle="A vibrant community where students thrive academically, socially, and personally"
          />
          
          <div className="grid gap-8 md:grid-cols-3">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={area.href}
                    className="group block rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-xl"
                  >
                    <Icon className="mb-4 h-12 w-12 text-brand-accent" />
                    <h3 className="mb-3 font-serif text-2xl font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">
                      {area.title}
                    </h3>
                    <p className="mb-4 text-gray-600">{area.description}</p>
                    <div className="flex items-center gap-2 text-brand-accent font-semibold">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

