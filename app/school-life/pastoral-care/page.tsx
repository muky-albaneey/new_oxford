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
                Student Life & Pastoral Care
              </h2>
              <p className="mb-4 text-lg text-gray-600">
                The school provides a supportive pastoral environment that promotes positive behaviour, 
                wellbeing, and personal responsibility. Structured systems, including form tutoring and 
                behaviour monitoring, ensure that every student is guided and supported throughout their 
                school journey.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-brand-light p-6">
                <h3 className="mb-3 font-serif text-xl font-bold text-brand-primary">
                  Pastoral Structure
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>House Point System:</strong> Points are awarded or deducted based on behaviour, 
                  encouraging positive conduct and accountability.</p>
                  <p><strong>Form Tutors:</strong> Each class is assigned a form tutor who provides guidance, 
                  monitors progress, and serves as the primary point of contact.</p>
                </div>
              </div>

              <div className="rounded-lg bg-brand-light p-6">
                <h3 className="mb-3 font-serif text-xl font-bold text-brand-primary">
                  Student Wellbeing
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Counselling services available</p>
                  <p>• Open access to Vice Principal (Pastoral)</p>
                  <p>• Balanced behaviour and discipline approach</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                Student Leadership
              </h2>
              <p className="mb-4 text-lg text-gray-600">
                Oxford Manor College encourages leadership and service through student representation and 
                responsibility roles. Students are given opportunities to develop confidence, accountability, 
                and leadership skills within the school community.
              </p>
              <div className="mt-6">
                <h3 className="mb-3 font-semibold text-brand-primary">Student Council</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Head Boy</li>
                    <li>• Head Girl</li>
                    <li>• Health Prefect</li>
                    <li>• Sports Prefect</li>
                    <li>• Library Prefect</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Administrative Prefect</li>
                    <li>• Punctuality Prefect</li>
                    <li>• Disciplinary Prefect</li>
                    <li>• Other prefect roles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

