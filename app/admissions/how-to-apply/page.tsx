import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Apply",
  description: "Step-by-step guide to applying to Oxford Manor College. Learn about requirements, deadlines, and the application process.",
};

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
            title="How to Apply"
            subtitle="Your journey to Oxford Manor College starts here"
          />
          
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                Application Requirements
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent">•</span>
                  <span>Completed application form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent">•</span>
                  <span>Previous school reports (last 2 years)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent">•</span>
                  <span>Birth certificate or passport copy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent">•</span>
                  <span>Medical report and immunization records</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent">•</span>
                  <span>Two recent passport photographs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent">•</span>
                  <span>Entrance assessment fee receipt</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                Application Process
              </h3>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-primary">
                    1
                  </span>
                  <div>
                    <strong>Submit Application:</strong> Complete and submit the online
                    application form along with all required documents.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-primary">
                    2
                  </span>
                  <div>
                    <strong>Assessment:</strong> Students will be invited to complete
                    entrance assessments in English and Mathematics.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-primary">
                    3
                  </span>
                  <div>
                    <strong>Interview:</strong> Shortlisted candidates and parents will
                    be invited for an interview with the admissions team.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-primary">
                    4
                  </span>
                  <div>
                    <strong>Decision:</strong> Admission decisions are typically
                    communicated within 2 weeks of the interview.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-brand-primary">
                    5
                  </span>
                  <div>
                    <strong>Enrollment:</strong> Accepted students complete enrollment
                    by paying fees and submitting final documentation.
                  </div>
                </li>
              </ol>
            </div>

            <div className="rounded-lg bg-brand-light p-8">
              <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                Important Dates
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Application Deadline:</strong> Rolling admissions, but early
                  application is recommended
                </p>
                <p>
                  <strong>Assessment Dates:</strong> Scheduled on a rolling basis
                </p>
                <p>
                  <strong>Term Start:</strong> September (Autumn Term)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

