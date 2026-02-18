import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fees & Funding",
  description: "View the fee structure for Oxford Manor College and learn about scholarship opportunities and payment options.",
};

export default function FeesPage() {
  const fees = [
    {
      level: "Key Stage 3 (Years 7-9)",
      tuition: "₦2,500,000",
      boarding: "₦1,200,000",
      total: "₦3,700,000",
    },
    {
      level: "Key Stage 4 (Years 10-11)",
      tuition: "₦2,800,000",
      boarding: "₦1,200,000",
      total: "₦4,000,000",
    },
    {
      level: "Sixth Form (Years 12-13)",
      tuition: "₦3,200,000",
      boarding: "₦1,200,000",
      total: "₦4,400,000",
    },
  ];

  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: "Admissions", href: "/admissions" },
          { label: "Fees" },
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Fees & Funding"
            subtitle="Transparent fee structure and scholarship opportunities"
          />
          
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 overflow-hidden rounded-lg shadow-md">
              <table className="w-full">
                <thead className="bg-brand-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Level</th>
                    <th className="px-6 py-4 text-left font-semibold">Tuition Fee</th>
                    <th className="px-6 py-4 text-left font-semibold">Boarding Fee</th>
                    <th className="px-6 py-4 text-left font-semibold">Total (Annual)</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {fees.map((fee, index) => (
                    <tr
                      key={fee.level}
                      className={index % 2 === 0 ? "bg-white" : "bg-brand-light"}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {fee.level}
                      </td>
                      <td className="px-6 py-4 text-gray-700">{fee.tuition}</td>
                      <td className="px-6 py-4 text-gray-700">{fee.boarding}</td>
                      <td className="px-6 py-4 font-semibold text-brand-primary">
                        {fee.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 font-serif text-xl font-bold text-brand-primary">
                  Additional Fees
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Application Fee: ₦25,000 (non-refundable)</li>
                  <li>• Entrance Assessment: ₦15,000</li>
                  <li>• Development Levy: ₦100,000 (one-time, new students)</li>
                  <li>• Uniform & Books: As per list (approximately ₦150,000)</li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 font-serif text-xl font-bold text-brand-primary">
                  Scholarships & Bursaries
                </h3>
                <p className="mb-3 text-gray-700">
                  We offer merit-based scholarships and need-based bursaries to
                  outstanding students. Scholarships are awarded based on:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Academic excellence</li>
                  <li>• Special talents (sports, arts, leadership)</li>
                  <li>• Financial need</li>
                  <li>• Sibling discounts available</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-brand-light p-6">
              <p className="text-gray-700">
                <strong>Note:</strong> Fees are subject to annual review. Payment plans
                are available. For more information about fees, scholarships, or
                payment options, please contact our admissions office.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

