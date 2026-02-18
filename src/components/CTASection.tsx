import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: "primary" | "accent" | "dark";
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "primary",
}: CTASectionProps) {
  const variantClasses = {
    primary: "bg-brand-primary text-white",
    accent: "bg-brand-accent text-brand-primary",
    dark: "bg-brand-dark text-white",
  };

  return (
    <section className={`${variantClasses[variant]} py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            {description}
          </p>
        )}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryCTA.href}
            className="group flex items-center gap-2 rounded-md bg-white px-8 py-4 font-semibold text-brand-primary transition-all hover:bg-gray-100 hover:shadow-lg"
          >
            {primaryCTA.label}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="rounded-md border-2 border-white px-8 py-4 font-semibold transition-all hover:bg-white/10"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

