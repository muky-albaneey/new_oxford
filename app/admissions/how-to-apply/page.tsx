"use client";

import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import { motion } from "framer-motion";
import { brandConfig } from "@/src/config/brand";

export default function HowToApplyPage() {
  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: "Admissions", href: "/admissions" },
          { label: "How to Apply" },
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Admissions and Enrolment"
            subtitle={`${brandConfig.name} welcomes applications from students of all nationalities seeking a high-quality British international education in ${brandConfig.location}`}
          />
          
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Who Can Apply */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg bg-white p-8 shadow-md"
            >
              <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                Who Can Apply
              </h3>
              <p className="mb-4 text-gray-700">
                We accept applications from:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">•</span>
                  <span>Students applying for Years 7 to 11</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">•</span>
                  <span>Students transferring from British, international, or national curricula</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">•</span>
                  <span>Local and international students seeking Cambridge Checkpoint and IGCSE pathways</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Admission is based on academic readiness, age appropriateness, and the availability of places.
              </p>
            </motion.div>

            {/* How to Apply */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-lg bg-white p-8 shadow-md"
            >
              <h3 className="mb-6 font-serif text-2xl font-bold text-brand-primary">
                How to Apply
              </h3>
              <p className="mb-6 text-gray-700">
                Parents and guardians can apply to {brandConfig.name} by following these simple steps:
              </p>
              <ol className="space-y-6 text-gray-700">
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-primary text-lg">
                    1
                  </span>
                  <div>
                    <strong className="text-brand-primary">Initial Enquiry</strong>
                    <p className="mt-1">
                      Parents may contact the school through our website, email, or school office to request 
                      admissions information and arrange a school visit or consultation.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-primary text-lg">
                    2
                  </span>
                  <div>
                    <strong className="text-brand-primary">Application Submission</strong>
                    <p className="mt-1 mb-2">Complete the school application form and submit it with the required documents, which may include:</p>
                    <ul className="ml-4 space-y-1">
                      <li>○ Recent school reports or transcripts</li>
                      <li>○ A copy of the student's birth certificate or passport</li>
                      <li>○ Passport photographs</li>
                      <li>○ Transfer or recommendation letter (where applicable)</li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-primary text-lg">
                    3
                  </span>
                  <div>
                    <strong className="text-brand-primary">Entrance Assessment</strong>
                    <p className="mt-1">
                      Applicants may be invited to sit an age-appropriate entrance assessment in core subjects 
                      such as English and Mathematics. This helps us determine the most suitable year group 
                      and academic support needs.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-primary text-lg">
                    4
                  </span>
                  <div>
                    <strong className="text-brand-primary">Interview and Review</strong>
                    <p className="mt-1">
                      An interview may be conducted with the student and parents to discuss academic background, 
                      learning goals, and school expectations.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-primary text-lg">
                    5
                  </span>
                  <div>
                    <strong className="text-brand-primary">Offer of Admission</strong>
                    <p className="mt-1">
                      Successful applicants receive a formal offer of admission, including enrolment details, 
                      fee structure, and start date.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-primary text-lg">
                    6
                  </span>
                  <div>
                    <strong className="text-brand-primary">Acceptance and Enrolment</strong>
                    <p className="mt-1">
                      Admission is confirmed upon acceptance of the offer and completion of enrolment requirements.
                    </p>
                  </div>
                </li>
              </ol>
            </motion.div>

            {/* Entry Points and Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <div className="rounded-lg bg-brand-light p-6">
                <h3 className="mb-4 font-serif text-xl font-bold text-brand-primary">
                  Entry Points and Term Start
                </h3>
                <p className="text-gray-700">
                  {brandConfig.name} admits students at the beginning of each academic term, subject to space 
                  availability. Mid-year admissions may be considered on a case-by-case basis.
                </p>
              </div>
              <div className="rounded-lg bg-brand-light p-6">
                <h3 className="mb-4 font-serif text-xl font-bold text-brand-primary">
                  Support for New Students
                </h3>
                <p className="mb-3 text-gray-700">We are committed to ensuring a smooth transition for all new students. Support includes:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Academic placement guidance</li>
                  <li>• Orientation and induction programmes</li>
                  <li>• Ongoing communication with parents</li>
                </ul>
              </div>
            </motion.div>

            {/* School Visits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-lg bg-white p-8 shadow-md"
            >
              <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                School Visits and Enquiries
              </h3>
              <p className="text-gray-700">
                Parents are encouraged to visit the school to learn more about our academic programme, 
                facilities, and learning environment. Virtual or in-person consultations can be arranged upon request.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

