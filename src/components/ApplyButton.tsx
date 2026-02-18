"use client";

interface ApplyButtonProps {
  label?: string;
  onClick?: () => void;
}

export default function ApplyButton({ 
  label = "Apply Now",
  onClick 
}: ApplyButtonProps) {
  const handleClick = onClick || (() => {
    alert("Application form would open here (demo)");
  });

  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-brand-primary px-6 py-2 font-semibold text-white transition-colors hover:bg-brand-secondary"
    >
      {label}
    </button>
  );
}

