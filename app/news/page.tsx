import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import NewsCard from "@/src/components/NewsCard";
import { newsPosts, getNewsByCategory } from "@/src/data/news";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "Stay updated with the latest news, events, and achievements from Oxford Manor College.",
};

export default function NewsPage() {
  const categories = Array.from(new Set(newsPosts.map((post) => post.category)));

  return (
    <Layout>
      <Breadcrumbs items={[{ label: "News" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="News & Updates"
            subtitle="Stay connected with what's happening at Oxford Manor College"
          />
          
          <div className="mb-8 flex flex-wrap gap-2">
            <button className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white">
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-brand-primary hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

