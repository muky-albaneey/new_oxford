"use client";

import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { allKeyStages } from "@/src/data/curriculum";

// Note: Metadata export removed - client components can't export metadata

export default function AcademicsPage() {
  return (
    <Layout>
      <Breadcrumbs items={[{ label: "Academics" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Academic Excellence"
            subtitle="Rigorous curricula designed to prepare students for success in higher education and beyond"
          />
          
          <div className="grid gap-8 md:grid-cols-3">
            {allKeyStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg bg-white p-8 shadow-md"
              >
                <h2 className="mb-3 font-serif text-2xl font-bold text-brand-primary">
                  {stage.name}
                </h2>
                <p className="mb-2 text-sm text-brand-accent">{stage.ageRange}</p>
                <p className="mb-6 text-gray-600">{stage.description}</p>
                <Link
                  href={`/academics/${stage.id}`}
                  className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-secondary transition-colors"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

