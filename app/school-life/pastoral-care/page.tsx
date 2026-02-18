import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pastoral Care",
  description: "Comprehensive pastoral care ensuring the wellbeing and personal development of every student at Oxford Manor College.",
};

export default function PastoralCarePage() {
  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: "School Life", href: "/school-life" },
          { label: "Pastoral Care" },
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Pastoral Care"
            subtitle="Supporting the holistic development and wellbeing of every student"
          />
          
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                Our Approach
              </h2>
              <p className="mb-4 text-lg text-gray-600">
                At Oxford Manor College, we believe that academic success goes hand-in-hand
                with personal wellbeing and character development. Our comprehensive pastoral
                care system ensures that every student receives the support they need to
                thrive.
              </p>
              <p className="text-lg text-gray-600">
                Our dedicated team of tutors, house parents, counselors, and support staff
                work together to create a nurturing environment where students feel safe,
                valued, and empowered to reach their full potential.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-brand-light p-6">
                <h3 className="mb-3 font-serif text-xl font-bold text-brand-primary">
                  House System
                </h3>
                <p className="text-gray-700">
                  Every student belongs to a house, creating a sense of community and
                  belonging. Houses compete in various activities while fostering
                  camaraderie and support.
                </p>
              </div>

              <div className="rounded-lg bg-brand-light p-6">
                <h3 className="mb-3 font-serif text-xl font-bold text-brand-primary">
                  Personal Tutors
                </h3>
                <p className="text-gray-700">
                  Each student has a personal tutor who monitors their academic progress,
                  provides guidance, and serves as the primary point of contact for parents.
                </p>
              </div>

              <div className="rounded-lg bg-brand-light p-6">
                <h3 className="mb-3 font-serif text-xl font-bold text-brand-primary">
                  Counseling Services
                </h3>
                <p className="text-gray-700">
                  Professional counselors are available to support students with personal,
                  social, and emotional challenges, ensuring mental health and wellbeing.
                </p>
              </div>

              <div className="rounded-lg bg-brand-light p-6">
                <h3 className="mb-3 font-serif text-xl font-bold text-brand-primary">
                  Character Education
                </h3>
                <p className="text-gray-700">
                  Regular assemblies, workshops, and activities focus on developing values
                  such as integrity, respect, responsibility, and empathy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

