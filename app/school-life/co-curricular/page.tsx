import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Co-Curricular Activities",
  description: "Explore the wide range of co-curricular activities, clubs, and societies at Oxford Manor College.",
};

export default function CoCurricularPage() {
  const activities = [
    {
      category: "Sports",
      items: [
        "Football",
        "Basketball",
        "Volleyball",
        "Badminton",
        "Handball",
      ],
    },
    {
      category: "Extra Options",
      items: [
        "Music and Dance",
        "Taekwondo",
        "Artificial Intelligence (AI) and Robotics",
        "Swimming",
        "Drama and Poetry",
      ],
    },
    {
      category: "Clubs",
      items: [
        "Cookery Club",
        "Chess Club",
        "Other enrichment clubs",
      ],
    },
  ];

  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: "School Life", href: "/school-life" },
          { label: "Co-Curricular" },
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Co-Curricular Activities"
            subtitle="Beyond the classroom, students explore passions, develop skills, and build lasting friendships"
          />
          
          <div className="grid gap-8 md:grid-cols-2">
            {activities.map((activity) => (
              <div key={activity.category} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                  {activity.category}
                </h3>
                <ul className="space-y-2">
                  {activity.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <div className="h-2 w-2 rounded-full bg-brand-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

