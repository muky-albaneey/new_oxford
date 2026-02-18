import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import { sixthForm } from "@/src/data/curriculum";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sixth Form (A-Levels)",
  description: "Cambridge International A-Levels program for Years 12-13, preparing students for top universities worldwide.",
};

export default function SixthFormPage() {
  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: "Academics", href: "/academics" },
          { label: "Sixth Form" },
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={sixthForm.name}
            subtitle={sixthForm.description}
          />
          
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-lg bg-brand-light p-6">
              <p className="text-lg text-gray-700">
                <strong>Age Range:</strong> {sixthForm.ageRange}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl font-bold text-brand-primary">
                Subject Areas
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {Object.entries({
                  Sciences: sixthForm.subjects.find((s) => s.id === "sciences")!,
                  "Humanities & Social Sciences": sixthForm.subjects.find(
                    (s) => s.id === "humanities"
                  )!,
                  "Languages & Literature": sixthForm.subjects.find(
                    (s) => s.id === "languages"
                  )!,
                  "Creative Arts": sixthForm.subjects.find((s) => s.id === "arts")!,
                }).map(([category, subject]) => (
                  <div key={category} className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-3 font-serif text-xl font-bold text-brand-primary">
                      {category}
                    </h3>
                    <p className="text-gray-600">{subject.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-brand-primary">
                Key Highlights
              </h2>
              <ul className="space-y-3">
                {sixthForm.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
                  >
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-brand-accent flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

