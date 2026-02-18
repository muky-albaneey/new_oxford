import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsBySlug, newsPosts } from "@/src/data/news";
import { Calendar, User } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return newsPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getNewsBySlug(params.slug);
  if (!post) {
    return {
      title: "News Not Found",
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getNewsBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: "News", href: "/news" },
          { label: post.title },
        ]}
      />
      
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <span className="rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold text-brand-primary">
                {post.category}
              </span>
            </div>

            <h1 className="mb-6 font-serif text-4xl font-bold text-brand-primary md:text-5xl">
              {post.title}
            </h1>

            <div className="mb-8 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700">{post.excerpt}</p>
              <div className="mt-6 text-gray-700 whitespace-pre-line">
                {post.content}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

