"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface DropdownItem {
  label: string;
  href: string;
}

interface MegaMenuProps {
  items: DropdownItem[];
}

export default function MegaMenu({ items }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.15 }}
      className="absolute left-0 top-full w-56 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/10"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-brand-light hover:text-brand-primary"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
}

