"use client";

import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Award, Globe, Users, Briefcase, Heart } from "lucide-react";
import { allKeyStages } from "@/src/data/curriculum";
import { brandConfig } from "@/src/config/brand";
import Link from "next/link";

export default function AcademicsPage() {
  return (
    <Layout>
      <Breadcrumbs items={[{ label: "Academics" }]} />
      
      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Academic Programme"
            subtitle="A high-quality, globally recognised education preparing students for academic excellence, global citizenship, and lifelong learning"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-4xl rounded-lg bg-white p-8 shadow-md"
          >
            <p className="text-lg text-gray-700">
              {brandConfig.name} is a British international school located in the heart of {brandConfig.location}, 
              committed to delivering a high-quality, globally recognised education. Our academic programme is 
              carefully structured to combine the strengths of the British curriculum with international best 
              practices, preparing students for academic excellence, global citizenship, and lifelong learning.
            </p>
          </motion.div>

          {/* Curriculum Framework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="mb-6 font-serif text-3xl font-bold text-brand-primary">
              Curriculum Framework
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              {brandConfig.name} follows the Cambridge International Education framework, offering a coherent 
              and progressive academic pathway from lower secondary to upper secondary education:
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3 mb-16">
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

          {/* Teaching and Learning Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-lg bg-brand-light p-8"
          >
            <h2 className="mb-6 font-serif text-3xl font-bold text-brand-primary">
              Teaching and Learning Approach
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              Teaching at {brandConfig.name} is student-centred and inquiry-based, with a strong emphasis on:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <BookOpen className="mt-1 h-6 w-6 text-brand-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Conceptual Understanding</h3>
                  <p className="text-gray-600">Academic rigour and deep understanding of concepts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 h-6 w-6 text-brand-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Critical Thinking</h3>
                  <p className="text-gray-600">Problem-solving and communication skills development</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="mt-1 h-6 w-6 text-brand-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Practical Learning</h3>
                  <p className="text-gray-600">Experimental and project-based learning experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="mt-1 h-6 w-6 text-brand-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Digital Tools</h3>
                  <p className="text-gray-600">Use of modern instructional resources and technology</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-700">
              Lessons are aligned with Cambridge learning objectives and assessment criteria, ensuring 
              consistency, quality, and international benchmarking.
            </p>
          </motion.div>

          {/* Assessment and Academic Monitoring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-lg bg-white p-8 shadow-md"
          >
            <h2 className="mb-6 font-serif text-3xl font-bold text-brand-primary">
              Assessment and Academic Monitoring
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              Student progress is monitored through a combination of:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span>Continuous assessment (classwork, tests, projects, coursework)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span>Internal examinations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span>External Cambridge assessments (Checkpoint and IGCSE)</span>
              </li>
            </ul>
            <p className="mt-6 text-gray-700">
              Regular feedback is provided to students and parents to support academic growth and 
              informed subject choices.
            </p>
          </motion.div>

          {/* Academic Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg bg-brand-light p-8"
          >
            <h2 className="mb-6 font-serif text-3xl font-bold text-brand-primary">
              Academic Outcomes and Global Preparation
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              The academic programme at {brandConfig.name} is designed to:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span>Equip students with internationally recognised qualifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span>Prepare learners for success in higher education worldwide</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">•</span>
                <span>Develop confident, responsible, and reflective global citizens</span>
              </li>
            </ul>
            <p className="mt-6 text-lg text-gray-700">
              By combining academic excellence with character development, {brandConfig.name} ensures that 
              students are well prepared for future academic and professional challenges.
            </p>
          </motion.div>

          {/* Academic Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-lg bg-white p-8 shadow-md"
          >
            <h2 className="mb-6 font-serif text-3xl font-bold text-brand-primary">
              Academic Options
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              {brandConfig.name} provides flexible academic options designed to meet the diverse goals, 
              abilities, and future pathways of our students. Our programmes are structured to support 
              academic progression, international mobility, career readiness, and community engagement.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-brand-light p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Award className="h-8 w-8 text-brand-accent" />
                  <h3 className="font-serif text-xl font-bold text-brand-primary">
                    International Certificates and Qualifications
                  </h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Students at {brandConfig.name} work towards internationally recognised Cambridge 
                  qualifications, which open doors to universities and colleges worldwide.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Cambridge Lower Secondary Checkpoint (Year 9):</strong> Assesses student 
                  achievement in key subjects and provides an international benchmark of performance.</li>
                  <li>• <strong>Cambridge IGCSE Certificates (Year 11):</strong> Students receive 
                  subject-specific Cambridge IGCSE certificates, widely accepted by universities, 
                  colleges, and employers globally.</li>
                </ul>
              </div>

              <div className="rounded-lg bg-brand-light p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Globe className="h-8 w-8 text-brand-accent" />
                  <h3 className="font-serif text-xl font-bold text-brand-primary">
                    Transfer and International Mobility
                  </h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Our curriculum supports seamless transfer opportunities for students moving between 
                  British and international schools.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Alignment with the British and Cambridge curriculum allows easy transfer to 
                  schools in the UK and other international destinations.</li>
                  <li>• Students joining from other British or international schools are supported 
                  through structured academic assessment and placement.</li>
                  <li>• Academic records and Cambridge certification enable confident transition into 
                  A Level, IB, or equivalent post-IGCSE programmes worldwide.</li>
                </ul>
              </div>

              <div className="rounded-lg bg-brand-light p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Briefcase className="h-8 w-8 text-brand-accent" />
                  <h3 className="font-serif text-xl font-bold text-brand-primary">
                    Career Preparation and Skills Development
                  </h3>
                </div>
                <p className="mb-4 text-gray-700">
                  {brandConfig.name} recognises the importance of preparing students for future careers 
                  alongside academic achievement.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Career guidance and academic counselling to help students make informed subject 
                  choices aligned with career interests.</li>
                  <li>• Development of transferable skills such as critical thinking, communication, 
                  collaboration, digital literacy, and research skills.</li>
                  <li>• Exposure to career pathways in science, technology, humanities, creative arts, 
                  and social sciences through subject integration and project-based learning.</li>
                </ul>
              </div>

              <div className="rounded-lg bg-brand-light p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Heart className="h-8 w-8 text-brand-accent" />
                  <h3 className="font-serif text-xl font-bold text-brand-primary">
                    Community Engagement and Enrichment
                  </h3>
                </div>
                <p className="mb-4 text-gray-700">
                  We believe education extends beyond the classroom. Students are encouraged to engage 
                  meaningfully with their school and wider community.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Participation in community service initiatives that promote social responsibility 
                  and leadership.</li>
                  <li>• Involvement in sports, creative arts, clubs, and academic societies to support 
                  holistic development.</li>
                  <li>• Opportunities for collaborative projects, presentations, and public engagement 
                  that build confidence and real-world skills.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-white p-6 border-2 border-brand-primary">
              <h3 className="mb-4 font-serif text-xl font-bold text-brand-primary">
                Personalised Academic Pathways
              </h3>
              <p className="text-gray-700">
                {brandConfig.name} offers a supportive environment where each student's academic journey 
                is valued. This includes individual academic monitoring and support, guidance for students 
                with diverse learning needs and aspirations, and structured preparation for post-IGCSE 
                pathways, including sixth-form education and other international programmes.
              </p>
            </div>
          </motion.div>

          {/* Faculty Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/academics/faculty"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-brand-secondary"
            >
              <Users className="h-5 w-5" />
              Meet Our Faculty
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

