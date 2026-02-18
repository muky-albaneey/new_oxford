import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import DownloadButton from "@/src/components/DownloadButton";
import { termDates, getCurrentAcademicYear } from "@/src/data/termDates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Term Dates",
  description: "View the academic calendar and term dates for Oxford Manor College.",
};

export default function TermDatesPage() {
  const currentYear = getCurrentAcademicYear();
  const currentYearTerms = termDates.filter((term) => term.academicYear === currentYear);
  const nextYearTerms = termDates.filter((term) => term.academicYear !== currentYear);

  return (
    <Layout>
      <Breadcrumbs items={[{ label: "Term Dates" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Term Dates"
            subtitle="Academic calendar and important dates"
          />
          
          <div className="mb-8 flex justify-end">
            <DownloadButton />
          </div>

          <div className="mx-auto max-w-4xl space-y-12">
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold text-brand-primary">
                {currentYear} Academic Year
              </h2>
              <div className="overflow-hidden rounded-lg shadow-md">
                <table className="w-full">
                  <thead className="bg-brand-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Term</th>
                      <th className="px-6 py-4 text-left font-semibold">Start Date</th>
                      <th className="px-6 py-4 text-left font-semibold">End Date</th>
                      <th className="px-6 py-4 text-left font-semibold">Half Term</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {currentYearTerms.map((term, index) => (
                      <tr
                        key={term.term}
                        className={index % 2 === 0 ? "bg-white" : "bg-brand-light"}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {term.term}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {new Date(term.startDate).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {new Date(term.endDate).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {term.halfTermStart && term.halfTermEnd
                            ? `${new Date(term.halfTermStart).toLocaleDateString("en-GB", { day: "numeric", month: "short" })} - ${new Date(term.halfTermEnd).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}`
                            : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {nextYearTerms.length > 0 && (
              <div>
                <h2 className="mb-6 font-serif text-2xl font-bold text-brand-primary">
                  {nextYearTerms[0].academicYear} Academic Year
                </h2>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-brand-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Term</th>
                        <th className="px-6 py-4 text-left font-semibold">Start Date</th>
                        <th className="px-6 py-4 text-left font-semibold">End Date</th>
                        <th className="px-6 py-4 text-left font-semibold">Half Term</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {nextYearTerms.map((term, index) => (
                        <tr
                          key={term.term}
                          className={index % 2 === 0 ? "bg-white" : "bg-brand-light"}
                        >
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {term.term}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {new Date(term.startDate).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {new Date(term.endDate).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </td>
                          <td className="px-6 py-4 text-gray-700">
                            {term.halfTermStart && term.halfTermEnd
                              ? `${new Date(term.halfTermStart).toLocaleDateString("en-GB", { day: "numeric", month: "short" })} - ${new Date(term.halfTermEnd).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}`
                              : "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

