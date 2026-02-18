import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  image,
}: TestimonialCardProps) {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <Quote className="mb-4 h-8 w-8 text-brand-accent" />
      <p className="mb-6 text-lg italic text-gray-700">{quote}</p>
      <div className="flex items-center gap-4">
        {image && (
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
            {/* Image would go here */}
          </div>
        )}
        <div>
          <div className="font-semibold text-brand-primary">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  );
}

