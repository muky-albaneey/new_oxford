import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import ApplyButton from "@/src/components/ApplyButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work at OMC",
  description: "Explore career opportunities at Oxford Manor College. Join our team of dedicated educators.",
};

export default function WorkAtOMCPage() {
  const vacancies = [
    {
      title: "Mathematics Teacher",
      department: "Mathematics",
      type: "Full-time",
      description: "We are seeking an experienced Mathematics teacher for Key Stage 3 and IGCSE levels.",
    },
    {
      title: "Science Laboratory Technician",
      department: "Science",
      type: "Full-time",
      description: "Support our science department with laboratory preparation and maintenance.",
    },
    {
      title: "Boarding House Parent",
      department: "Pastoral Care",
      type: "Full-time",
      description: "Join our pastoral care team supporting boarding students.",
    },
  ];

  return (
    <Layout>
      <Breadcrumbs items={[{ label: "Work at OMC" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Join Our Team"
            subtitle="Shape the future of education at Oxford Manor College"
          />
          
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-lg bg-brand-light p-8">
              <h2 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                Why Work at OMC?
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Competitive salary and benefits package</li>
                <li>• Professional development opportunities</li>
                <li>• Supportive and collaborative work environment</li>
                <li>• State-of-the-art facilities and resources</li>
                <li>• Opportunity to make a real difference in students' lives</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="mb-6 font-serif text-2xl font-bold text-brand-primary">
                Current Vacancies
              </h2>
              <div className="space-y-6">
                {vacancies.map((vacancy) => (
                  <div
                    key={vacancy.title}
                    className="rounded-lg bg-white p-6 shadow-md"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="font-serif text-xl font-bold text-brand-primary">
                        {vacancy.title}
                      </h3>
                      <span className="rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold text-brand-primary">
                        {vacancy.type}
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-brand-accent">
                      {vacancy.department}
                    </p>
                    <p className="mb-4 text-gray-600">{vacancy.description}</p>
                    <ApplyButton />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 font-serif text-xl font-bold text-brand-primary">
                General Applications
              </h3>
              <p className="mb-4 text-gray-600">
                Don't see a position that matches your skills? We welcome general
                applications from qualified educators and support staff.
              </p>
              <ApplyButton label="Submit General Application" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

