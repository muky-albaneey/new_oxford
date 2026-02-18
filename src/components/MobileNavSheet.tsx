"use client";

import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

interface MobileNavSheetProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileNavSheet({
  isOpen,
  onClose,
  navItems,
}: MobileNavSheetProps) {
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  const toggleAccordion = (label: string) => {
    setOpenAccordions((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-xl lg:hidden"
          >
            <div className="flex h-16 sm:h-20 items-center justify-between border-b px-4 sm:px-6">
              <h2 className="text-base sm:text-lg font-semibold">Menu</h2>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-md p-2 hover:bg-gray-100"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            <nav className="overflow-y-auto px-4 sm:px-6 py-3 sm:py-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleAccordion(item.label)}
                        className="flex w-full items-center justify-between py-3 sm:py-4 text-left text-sm sm:text-base font-medium text-gray-900"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 sm:h-5 sm:w-5 transition-transform",
                            openAccordions.includes(item.label) && "rotate-180"
                          )}
                        />
                      </button>
                      {openAccordions.includes(item.label) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={onClose}
                                className="block py-1.5 sm:py-2 pl-4 text-xs sm:text-sm text-gray-600 hover:text-brand-primary"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900 hover:text-brand-primary"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

