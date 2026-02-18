"use client";

import Layout from "@/src/components/Layout";
import Hero from "@/src/components/Hero";
import StatRow from "@/src/components/StatRow";
import SectionHeading from "@/src/components/SectionHeading";
import NewsCard from "@/src/components/NewsCard";
import EventCard from "@/src/components/EventCard";
import TestimonialCard from "@/src/components/TestimonialCard";
import CTASection from "@/src/components/CTASection";
import StudentImageGallery from "@/src/components/StudentImageGallery";
import StudentLifeSection from "@/src/components/StudentLifeSection";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, GraduationCap, BookOpen, Trophy, ArrowRight } from "lucide-react";
import { brandConfig } from "@/src/config/brand";
import { newsPosts } from "@/src/data/news";
import { getUpcomingEvents } from "@/src/data/events";

export default function HomePage() {
  const stats = [
    {
      value: "850+",
      label: "Students",
      icon: Users,
    },
    {
      value: "1:12",
      label: "Teacher Ratio",
      icon: GraduationCap,
    },
    {
      value: "95%",
      label: "A*-C Grades",
      icon: BookOpen,
    },
    {
      value: "40+",
      label: "Clubs & Societies",
      icon: Trophy,
    },
  ];

  const latestNews = newsPosts.slice(0, 3);
  const upcomingEvents = getUpcomingEvents(3);

  const testimonials = [
    {
      quote: "Oxford Manor College has provided our daughter with an exceptional education. The teachers are dedicated, the facilities are outstanding, and the values instilled here will serve her well throughout life.",
      author: "Mrs. Adebayo",
      role: "Parent",
    },
    {
      quote: "The academic rigor combined with excellent pastoral care has helped me grow both intellectually and personally. I feel well-prepared for university and beyond.",
      author: "David Okonkwo",
      role: "Year 13 Student",
    },
    {
      quote: "The co-curricular opportunities here are incredible. I've discovered passions I never knew I had, and the support from teachers has been amazing.",
      author: "Amina Hassan",
      role: "Year 11 Student",
    },
  ];

  return (
    <Layout>
      <Hero
        title="Excellence Favours The Bold"
        // subtitle="THE"
        description="THE Oxford Manor College is a place of curiosity and adventure, where enthusiastic and bright young minds are encouraged to be bold and undaunted in their thoughts, actions, and dreams for the future and to discover the scope of their brilliance."
        ctaLabel="Explore Our Curriculum"
        ctaHref="/academics"
        video="/videos/hero-school.mp4"
        image="/images/hero-school.jpeg"
      />

      <StatRow stats={stats} />

      {/* Student Life in Action - Image Gallery */}
      <motion.section 
        className="bg-brand-light py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Student Life in Action"
            subtitle="Capturing moments of learning, growth, and achievement across our vibrant campus"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <StudentImageGallery
              images={[
                {
                  src: "/images/students/students-1.jpg",
                  alt: "Students in classroom",
                  category: "Learning",
                },
                {
                  src: "/images/students/students-2.jpeg",
                  alt: "Students in science lab",
                  category: "Science",
                },
                {
                  src: "/images/students/students-3.jpeg",
                  alt: "Students playing sports",
                  category: "Sports",
                },
                {
                  src: "/images/students/students-4.jpeg",
                  alt: "Students in art class",
                  category: "Arts",
                },
                {
                  src: "/images/students/students-5.jpg",
                  alt: "Students in library",
                  category: "Study",
                },
                {
                  src: "/images/students/students-6.jpeg",
                  alt: "Students at assembly",
                  category: "Community",
                },
                {
                  src: "/images/students/students-7.jpg",
                  alt: "Students in drama",
                  category: "Performing Arts",
                },
                {
                  src: "/images/students/students-8.jpeg",
                  alt: "Students working together",
                  category: "Collaboration",
                },
              ]}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Large Text Section - LEH Style */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <motion.h2 
                className="mb-6 font-serif text-5xl font-bold leading-tight text-brand-primary md:text-6xl lg:text-7xl" 
                style={{ textTransform: 'uppercase' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                >
                  Creativity
                </motion.span>
                <br />
                <motion.span 
                  className="text-3xl md:text-4xl lg:text-5xl font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Favours The
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Bold
                </motion.span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/academics"
                  className="inline-flex items-center rounded-full border-2 border-brand-primary bg-white px-8 py-4 text-base font-semibold text-brand-primary transition-all hover:bg-brand-primary hover:text-white md:text-lg"
                >
                  Junior School Curriculum
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/students/students-10.jpeg"
                  alt="Students creating"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 font-serif text-3xl font-bold text-brand-primary md:text-4xl">
              Admissions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Explore our admissions process.
            </p>
          </motion.div>
          <motion.div 
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6 text-center text-gray-700">
              Oxford Manor College is a highly selective independent school in Lagos, renowned for exceptional IGCSE and A-Level outcomes. We offer continuity from age 11, alongside entry points at Year 7 and Sixth Form. Our students benefit from outstanding academic provision enriched by co-educational opportunities.
            </p>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-primary bg-white px-8 py-4 text-base font-semibold text-brand-primary transition-all hover:bg-brand-primary hover:text-white md:text-lg"
              >
                Entry Procedure
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Large Text Section - Success */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg lg:order-2"
            >
              <Image
                src="/images/students/life.jpeg"
                alt="Student success"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="lg:order-1"
            >
              <motion.h2 
                className="mb-6 font-serif text-5xl font-bold leading-tight text-brand-primary md:text-6xl lg:text-7xl" 
                style={{ textTransform: 'uppercase' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                >
                  When Carefully Developed
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Talent And Sheer Hard Work Meet
                </motion.span>
                <br />
                <motion.span 
                  className="text-3xl md:text-4xl lg:text-5xl font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Success
                </motion.span>
                <br />
                <motion.span 
                  className="text-3xl md:text-4xl lg:text-5xl font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Favours The
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Bold
                </motion.span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/admissions"
                  className="inline-flex items-center rounded-full border-2 border-brand-primary bg-white px-8 py-4 text-base font-semibold text-brand-primary transition-all hover:bg-brand-primary hover:text-white md:text-lg"
                >
                  Admissions
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academics Preview */}
      <section className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Academic Excellence"
            subtitle="Rigorous curricula designed to prepare students for success in higher education and beyond"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Key Stage 3",
                description: "Building strong foundations across all subjects for Years 7-9",
                href: "/academics/key-stage-3",
              },
              {
                title: "Key Stage 4",
                description: "Cambridge IGCSE qualifications preparing for A-Levels",
                href: "/academics/key-stage-4",
              },
              {
                title: "Sixth Form",
                description: "A-Levels and university preparation for Years 12-13",
                href: "/academics/sixth-form",
              },
            ].map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Link
                  href={stage.href}
                  className="group block rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-xl"
                >
                  <motion.h3 
                    className="mb-3 font-serif text-2xl font-bold text-brand-primary group-hover:text-brand-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {stage.title}
                  </motion.h3>
                  <p className="mb-4 text-gray-600">{stage.description}</p>
                  <motion.div 
                    className="flex items-center gap-2 text-brand-accent font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                    >
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus / Facilities Highlight with Student Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid gap-6 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/students/biba.jpeg"
                  alt="Students on campus"
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="mb-2 text-2xl font-bold text-white">Vibrant Campus Life</h3>
                <p className="text-gray-200">Where learning meets community</p>
              </motion.div>
            </motion.div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="/images/students/learning.jpeg"
                  alt="Students in classroom"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-semibold text-white">Active Learning</h4>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
              >
        <Image
                  src="/images/students/sport.jpeg"
                  alt="Students socializing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-semibold text-white">Friendship & Community</h4>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden rounded-lg"
            >
              <Image
                src="/images/students/school-4.jpeg"
                alt="Campus facilities"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 font-serif text-3xl font-bold text-brand-primary md:text-4xl">
                World-Class Facilities
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Our campus features state-of-the-art facilities designed to support
                learning, creativity, and wellbeing.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Modern science laboratories",
                  "Extensive library and learning resources",
                  "Sports facilities and playing fields",
                  "Performing arts theatre",
                  "Technology-enabled classrooms",
                  "Boarding houses with modern amenities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-brand-accent" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/school-life"
                className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-secondary"
              >
                Explore School Life
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Co-curricular with Student Images */}
      <section className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Co-Curricular Activities"
            subtitle="Beyond the classroom, students explore passions, develop skills, and build lasting friendships"
          />
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Sports", icon: "⚽", description: "Football, basketball, swimming, athletics, and more" },
              { title: "Arts", icon: "🎭", description: "Drama, music, visual arts, and creative writing" },
              { title: "STEM", icon: "🔬", description: "Robotics, coding, science clubs, and competitions" },
              { title: "Leadership", icon: "👔", description: "Student council, prefect roles, and service projects" },
            ].map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg bg-white p-6 text-center shadow-md"
              >
                <div className="mb-4 text-4xl">{activity.icon}</div>
                <h3 className="mb-2 font-serif text-xl font-bold text-brand-primary">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Student Activity Images */}
          <div className="grid gap-4 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/images/students/students-3.jpeg"
                alt="Students playing sports"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Athletic Excellence</h3>
                <p className="text-sm text-gray-200">Competitive sports and team spirit</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/images/students/drama.jpeg"
                alt="Students in arts"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Creative Expression</h3>
                <p className="text-sm text-gray-200">Drama, music, and visual arts</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/images/students/lab.jpeg"
                alt="Students in STEM"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Innovation Lab</h3>
                <p className="text-sm text-gray-200">Robotics and technology projects</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Achievements Section */}
      <StudentLifeSection
        title="Celebrating Student Achievements"
        subtitle="Our students excel in academics, sports, arts, and leadership, making us proud every day"
        images={[
          {
            src: "/images/students/achiement-1.jpg",
            alt: "Student receiving award",
            title: "Academic Excellence",
          },
          {
            src: "/images/students/achievement-2.jpg",
            alt: "Sports champions",
            title: "Championship Winners",
          },
          {
            src: "/images/students/achievement-3.png",
            alt: "Art exhibition",
            title: "Creative Showcase",
          },
        ]}
        cta={{
          label: "View More Achievements",
          href: "/school-life",
        }}
      />

      {/* Large Text Section - Knowledge */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 font-serif text-5xl font-bold leading-tight text-brand-primary md:text-6xl lg:text-7xl" style={{ textTransform: 'uppercase' }}>
                Only Learning & Understanding
                <br />
                Can Move Our World Forward
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-normal">Knowledge</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-normal">Favours The</span>
                <br />
                Bold
              </h2>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/academics/key-stage-3"
                  className="inline-flex items-center rounded-full border-2 border-brand-primary bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition-all hover:bg-brand-primary hover:text-white md:text-base"
                >
                  Junior School
                </Link>
                <Link
                  href="/academics/key-stage-4"
                  className="inline-flex items-center rounded-full border-2 border-brand-primary bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition-all hover:bg-brand-primary hover:text-white md:text-base"
                >
                  Senior School
                </Link>
                <Link
                  href="/academics/sixth-form"
                  className="inline-flex items-center rounded-full border-2 border-brand-primary bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition-all hover:bg-brand-primary hover:text-white md:text-base"
                >
                  Sixth Form
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
                src="/images/students/learning.jpeg"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life at OMC Section */}
      <section className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-brand-primary md:text-4xl">
              Life at Oxford Manor College
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Beyond academic excellence, our students enjoy a dynamic and supportive school environment where curiosity is encouraged, individuality is celebrated, and ambition is nurtured.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/school-life"
              className="inline-flex items-center rounded-full border-2 border-brand-primary bg-white px-8 py-4 text-base font-semibold text-brand-primary transition-all hover:bg-brand-primary hover:text-white md:text-lg"
            >
              School Life
            </Link>
          </div>
        </div>
      </section>

      {/* News + Events */}
      <section className="bg-brand-light py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Latest News */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="font-serif text-3xl font-bold text-brand-primary">
                  Latest News
                </h2>
                <Link
                  href="/news"
                  className="text-brand-accent font-semibold hover:text-brand-secondary transition-colors"
                >
                  View all →
                </Link>
              </div>
              <div className="space-y-6">
                {latestNews.map((post) => (
                  <NewsCard key={post.slug} post={post} />
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="font-serif text-3xl font-bold text-brand-primary">
                  Upcoming Events
                </h2>
                <Link
                  href="/events"
                  className="text-brand-accent font-semibold hover:text-brand-secondary transition-colors"
                >
                  View all →
                </Link>
              </div>
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
    </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Begin Your Journey?"
        description="Join the Oxford Manor College community and discover your potential"
        primaryCTA={{ label: "Start Your Application", href: "/admissions/how-to-apply" }}
        secondaryCTA={{ label: "Book a Campus Tour", href: "/admissions/book-a-tour" }}
        variant="primary"
      />
    </Layout>
  );
}
