"use client";

import { Download } from "lucide-react";

interface DownloadButtonProps {
  label?: string;
}

export default function DownloadButton({ label = "Download PDF" }: DownloadButtonProps) {
  return (
    <a
      href="#"
      className="flex items-center gap-2 rounded-md bg-brand-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-secondary"
      onClick={(e) => {
        e.preventDefault();
        alert("PDF download would be available here (demo)");
      }}
    >
      <Download className="h-5 w-5" />
      {label}
    </a>
  );
}

