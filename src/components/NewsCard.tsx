import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { NewsPost } from "@/src/data/news";

interface NewsCardProps {
  post: NewsPost;
  featured?: boolean;
}

export default function NewsCard({ post, featured = false }: NewsCardProps) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold text-brand-primary">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className={`mb-2 font-serif font-bold text-brand-primary ${featured ? "text-2xl" : "text-xl"} line-clamp-2 group-hover:text-brand-secondary transition-colors`}>
          {post.title}
        </h3>
        <p className="mb-4 text-gray-600 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
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
      </div>
    </Link>
  );
}

