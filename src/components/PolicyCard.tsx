"use client";

interface PolicyCardProps {
  title: string;
  description: string;
}

export default function PolicyCard({ title, description }: PolicyCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-2 font-serif text-xl font-bold text-brand-primary">
        {title}
      </h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <button
        onClick={() => alert("PDF download would be available here (demo)")}
        className="text-brand-accent font-semibold transition-colors hover:text-brand-secondary"
      >
        View Document →
      </button>
    </div>
  );
}

