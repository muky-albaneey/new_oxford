import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import { keyStage3 } from "@/src/data/curriculum";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Stage 3",
  description: "Learn about our Key Stage 3 curriculum for Years 7-9, building strong foundations across all subject areas.",
};

export default function KeyStage3Page() {
  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: "Academics", href: "/academics" },
          { label: "Key Stage 3" },
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={keyStage3.name}
            subtitle={keyStage3.description}
          />
          
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-lg bg-brand-light p-6">
              <p className="text-lg text-gray-700">
                <strong>Age Range:</strong> {keyStage3.ageRange}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl font-bold text-brand-primary">
                Subjects
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {keyStage3.subjects.map((subject) => (
                  <div
                    key={subject.id}
                    className="rounded-lg bg-white p-6 shadow-md"
                  >
                    <h3 className="mb-2 font-serif text-xl font-bold text-brand-primary">
                      {subject.name}
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
                {keyStage3.highlights.map((highlight, index) => (
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

