"use client";

import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import Image from "next/image";
import { motion } from "framer-motion";
import { leadership } from "@/src/data/staff";
import { brandConfig } from "@/src/config/brand";

// Note: Metadata export removed - client components can't export metadata

export default function AboutPage() {
  return (
    <Layout>
      <Breadcrumbs items={[{ label: "About" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="About Oxford Manor College"
            subtitle="Excellence Through Knowledge, Character Through Service"
          />
          
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden rounded-lg"
            >
              <Image
                src="/images/about-school.jpg"
                alt="Oxford Manor College"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 font-serif text-3xl font-bold text-brand-primary">
                Our Story
              </h2>
              <p className="mb-4 text-lg text-gray-600">
                Founded with a vision to provide world-class education that combines
                the best of British educational traditions with Nigerian values and
                global perspectives, Oxford Manor College has been nurturing young
                minds for excellence since its establishment.
              </p>
              <p className="mb-4 text-lg text-gray-600">
                We believe that education extends far beyond academic achievement.
                Our holistic approach ensures that every student develops not only
                intellectual capabilities but also strong character, leadership
                skills, and a sense of social responsibility.
              </p>
              <p className="text-lg text-gray-600">
                Today, we stand as one of Nigeria's premier educational institutions,
                recognized for our outstanding academic results, exceptional
                facilities, and commitment to developing well-rounded individuals
                prepared for success in an increasingly interconnected world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section id="mission" className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Mission & Values" />
          
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg bg-white p-8 shadow-md"
            >
              <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide an exceptional education that empowers students to achieve
                their full potential, develop strong character, and become responsible
                global citizens who contribute positively to society.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg bg-white p-8 shadow-md"
            >
              <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                Our Values
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Excellence in all endeavors</li>
                <li>• Integrity and ethical behavior</li>
                <li>• Respect for diversity</li>
                <li>• Innovation and creativity</li>
                <li>• Service to community</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Leadership Team"
            subtitle="Experienced educators dedicated to student success"
          />
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg bg-white p-6 text-center shadow-md"
              >
                <div className="mb-4 aspect-square overflow-hidden rounded-full bg-gray-200">
                  {/* Image would go here */}
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-brand-primary">
                  {member.name}
                </h3>
                <p className="mb-3 text-sm font-semibold text-brand-accent">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

