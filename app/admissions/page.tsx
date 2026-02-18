"use client";

import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Calendar, DollarSign, Users } from "lucide-react";

// Note: Metadata export removed - client components can't export metadata
// Add metadata in layout.tsx or use generateMetadata in a parent server component

export default function AdmissionsPage() {
  const steps = [
    {
      number: "1",
      title: "Inquiry & Tour",
      description: "Contact us to learn more and schedule a campus visit",
      icon: Calendar,
    },
    {
      number: "2",
      title: "Application",
      description: "Submit your application form with required documents",
      icon: FileText,
    },
    {
      number: "3",
      title: "Assessment",
      description: "Students complete entrance assessments and interviews",
      icon: Users,
    },
    {
      number: "4",
      title: "Offer & Enrollment",
      description: "Receive offer letter and complete enrollment process",
      icon: ArrowRight,
    },
  ];

  return (
    <Layout>
      <Breadcrumbs items={[{ label: "Admissions" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Join Our Community"
            subtitle="Begin your journey at Oxford Manor College"
          />
          
          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-lg bg-white p-6 text-center shadow-md"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-2xl font-bold text-brand-primary">
                      {step.number}
                    </div>
                  </div>
                  <Icon className="mx-auto mb-3 h-8 w-8 text-brand-primary" />
                  <h3 className="mb-2 font-serif text-xl font-bold text-brand-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/admissions/how-to-apply"
              className="group rounded-lg border-2 border-brand-primary bg-white p-8 transition-all hover:bg-brand-primary hover:text-white"
            >
              <FileText className="mb-4 h-10 w-10 text-brand-primary transition-colors group-hover:text-white" />
              <h3 className="mb-2 font-serif text-xl font-bold">How to Apply</h3>
              <p className="mb-4 text-gray-600 group-hover:text-gray-200">
                Step-by-step guide to the application process
              </p>
              <span className="text-brand-accent font-semibold group-hover:text-white">
                Learn more →
              </span>
            </Link>

            <Link
              href="/admissions/fees"
              className="group rounded-lg border-2 border-brand-primary bg-white p-8 transition-all hover:bg-brand-primary hover:text-white"
            >
              <DollarSign className="mb-4 h-10 w-10 text-brand-primary transition-colors group-hover:text-white" />
              <h3 className="mb-2 font-serif text-xl font-bold">Fees & Funding</h3>
              <p className="mb-4 text-gray-600 group-hover:text-gray-200">
                View our fee structure and scholarship opportunities
              </p>
              <span className="text-brand-accent font-semibold group-hover:text-white">
                Learn more →
              </span>
            </Link>

            <Link
              href="/admissions/book-a-tour"
              className="group rounded-lg border-2 border-brand-primary bg-white p-8 transition-all hover:bg-brand-primary hover:text-white"
            >
              <Calendar className="mb-4 h-10 w-10 text-brand-primary transition-colors group-hover:text-white" />
              <h3 className="mb-2 font-serif text-xl font-bold">Book a Tour</h3>
              <p className="mb-4 text-gray-600 group-hover:text-gray-200">
                Visit our campus and see what makes us special
              </p>
              <span className="text-brand-accent font-semibold group-hover:text-white">
                Book now →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

