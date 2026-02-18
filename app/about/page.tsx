"use client";

import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import LeadershipCarousel from "@/src/components/LeadershipCarousel";
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
            subtitle={brandConfig.tagline}
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
                About the School
              </h2>
              <p className="mb-4 text-lg text-gray-600">
                Oxford Manor College is a British-style secondary school located in Abuja, Nigeria. 
                Established in {brandConfig.established}, the school provides a structured, internationally 
                aligned education designed to prepare students for academic success, strong character, 
                and responsible global citizenship.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Type:</strong> British-style secondary school (Day School)</p>
                <p><strong>Established:</strong> {brandConfig.established}</p>
                <p><strong>Location:</strong> {brandConfig.contact.address}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md"
          >
            <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
              Vision Statement
            </h3>
            <p className="text-lg text-gray-600">
              We are committed to continuously striving to prepare all scholars to become lifelong learners, 
              responsible global citizens, ready to meet and provide solutions to the challenges of the future 
              in partnership with families and the wider community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section id="mission" className="py-20">
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
                Mission Statement
              </h3>
              <p className="text-gray-600">
                Our goal is to provide a world-class learning environment and opportunities for scholars, 
                both inside and outside the classroom, that help them develop the knowledge, critical thinking 
                skills, leadership, and right character essential to succeed globally using world-best dynamic approaches.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg bg-white p-8 shadow-md"
            >
              <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                Core Values
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>Manners and Respect</strong></li>
                <li>• <strong>Leadership and Character</strong></li>
                <li>• <strong>Tolerance and Inclusion</strong></li>
                <li>• <strong>Excellence and Results-Driven Learning</strong></li>
                <li>• <strong>Determination and Curiosity to Learn</strong></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section id="philosophy" className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md"
          >
            <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
              Educational Philosophy
            </h3>
            <p className="text-lg text-gray-600">
              Oxford Manor College believes that excellence is achieved through high expectations, purposeful 
              teaching, and strong character formation. The school provides a balanced, rigorous, and 
              student-centred learning environment that challenges scholars academically while nurturing 
              discipline, curiosity, leadership, and independent thinking. Education extends beyond the 
              classroom to prepare students for lifelong learning and responsible global citizenship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Leadership Team"
            subtitle="Experienced educators dedicated to student success"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <LeadershipCarousel members={leadership} />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

