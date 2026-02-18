import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-brand-light py-4">
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-brand-primary transition-colors"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-brand-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={index === items.length - 1 ? "font-semibold text-brand-primary" : "text-gray-600"}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

