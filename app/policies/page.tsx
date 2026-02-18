import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import PolicyCard from "@/src/components/PolicyCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies",
  description: "View important policies and documents for Oxford Manor College.",
};

export default function PoliciesPage() {
  const policies = [
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
    },
    {
      title: "Terms of Service",
      description: "Terms and conditions for using our website and services",
    },
    {
      title: "Admissions Policy",
      description: "Our admissions process, criteria, and procedures",
    },
    {
      title: "Safeguarding Policy",
      description: "Our commitment to child protection and student safety",
    },
    {
      title: "Anti-Bullying Policy",
      description: "Our zero-tolerance approach to bullying and harassment",
    },
    {
      title: "Code of Conduct",
      description: "Expected behavior and standards for all members of our community",
    },
  ];

  return (
    <Layout>
      <Breadcrumbs items={[{ label: "Policies" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Policies & Documents"
            subtitle="Important policies and documents for our school community"
          />
          
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {policies.map((policy) => (
                <PolicyCard
                  key={policy.title}
                  title={policy.title}
                  description={policy.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

