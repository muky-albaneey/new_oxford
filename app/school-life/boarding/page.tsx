import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus & Facilities",
  description: "Explore our world-class campus facilities at Oxford Manor College, designed to support learning and living.",
};

export default function CampusFacilitiesPage() {
  const facilities = [
    {
      category: "Academic Facilities",
      items: [
        "Modern, technology-enabled classrooms",
        "State-of-the-art science laboratories",
        "Extensive library with digital resources",
        "Computer labs with latest technology",
        "Specialist rooms for art, music, and drama",
      ],
    },
    {
      category: "Sports & Recreation",
      items: [
        "Full-size football pitch",
        "Basketball and volleyball courts",
        "Swimming pool",
        "Tennis courts",
        "Athletics track",
        "Indoor sports hall",
      ],
    },
    {
      category: "Boarding Facilities",
      items: [
        "Comfortable, well-furnished dormitories",
        "Common rooms and study areas",
        "Dining hall with nutritious meals",
        "Medical center with qualified nurse",
        "24/7 security and supervision",
      ],
    },
    {
      category: "Other Facilities",
      items: [
        "Performing arts theatre",
        "Cafeteria and snack bar",
        "Student common areas",
        "Prayer rooms",
        "Counseling center",
      ],
    },
  ];

  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: "School Life", href: "/school-life" },
          { label: "Campus & Facilities" },
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Campus & Facilities"
            subtitle="World-class facilities designed to support learning, creativity, and wellbeing"
          />
          
          <div className="grid gap-8 md:grid-cols-2">
            {facilities.map((facility) => (
              <div key={facility.category} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 font-serif text-2xl font-bold text-brand-primary">
                  {facility.category}
                </h3>
                <ul className="space-y-2">
                  {facility.items.map((item) => (
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

