import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni",
  description: "Connect with Oxford Manor College alumni and stay updated with alumni news and events.",
};

export default function AlumniPage() {
  return (
    <Layout>
      <Breadcrumbs items={[{ label: "Alumni" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Alumni Network"
            subtitle="Stay connected with the Oxford Manor College community"
          />
          
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                Welcome, Alumni!
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                We're proud of our alumni and their achievements around the world.
                Stay connected with your alma mater and fellow graduates.
              </p>
              <div className="space-y-4">
                <div className="rounded-lg bg-brand-light p-4">
                  <h3 className="mb-2 font-semibold text-brand-primary">
                    Alumni Events
                  </h3>
                  <p className="text-gray-700">
                    Join us for reunions, networking events, and special
                    celebrations throughout the year.
                  </p>
                </div>
                <div className="rounded-lg bg-brand-light p-4">
                  <h3 className="mb-2 font-semibold text-brand-primary">
                    Update Your Information
                  </h3>
                  <p className="text-gray-700">
                    Keep us updated on your achievements, career moves, and contact
                    information.
                  </p>
                </div>
                <div className="rounded-lg bg-brand-light p-4">
                  <h3 className="mb-2 font-semibold text-brand-primary">
                    Give Back
                  </h3>
                  <p className="text-gray-700">
                    Support current students through mentoring, guest speaking, or
                    scholarship contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

