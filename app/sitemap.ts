import { MetadataRoute } from "next";
import { newsPosts } from "@/src/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oxfordmanorcollege.edu.ng";

  const routes = [
    "",
    "/about",
    "/admissions",
    "/admissions/how-to-apply",
    "/admissions/fees",
    "/admissions/book-a-tour",
    "/academics",
    "/academics/key-stage-3",
    "/academics/key-stage-4",
    "/academics/sixth-form",
    "/school-life",
    "/school-life/pastoral-care",
    "/school-life/co-curricular",
    "/school-life/boarding",
    "/news",
    "/events",
    "/term-dates",
    "/contact",
    "/policies",
    "/alumni",
    "/work-at-omc",
    "/portal",
  ];

  const newsRoutes = newsPosts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  return [...staticRoutes, ...newsRoutes];
}

