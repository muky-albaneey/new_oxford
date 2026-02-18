import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import { keyStage4 } from "@/src/data/curriculum";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Stage 4 (IGCSE)",
  description: "Cambridge IGCSE program for Years 10-11, providing internationally recognized qualifications.",
};

export default function KeyStage4Page() {
  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: "Academics", href: "/academics" },
          { label: "Key Stage 4" },
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={keyStage4.name}
            subtitle={keyStage4.description}
          />
          
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-lg bg-brand-light p-6">
              <p className="text-lg text-gray-700">
                <strong>Age Range:</strong> {keyStage4.ageRange}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl font-bold text-brand-primary">
                Subject Options
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 font-serif text-xl font-bold text-brand-primary">
                    Core Subjects (Compulsory)
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {keyStage4.subjects
                      .filter((s) => s.id.startsWith("core"))
                      .map((subject) => (
                        <div key={subject.id}>
                          <h4 className="font-semibold text-gray-900">
                            {subject.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {subject.description}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 font-serif text-xl font-bold text-brand-primary">
                    Optional Subjects
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {keyStage4.subjects
                      .filter((s) => s.id.startsWith("optional"))
                      .map((subject) => (
                        <div key={subject.id}>
                          <h4 className="font-semibold text-gray-900">
                            {subject.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {subject.description}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-brand-primary">
                Key Highlights
              </h2>
              <ul className="space-y-3">
                {keyStage4.highlights.map((highlight, index) => (
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

