"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { brandConfig } from "@/src/config/brand";
import { cn } from "@/src/lib/utils";
import MobileNavSheet from "./MobileNavSheet";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "About",
      href: "/about",
      hasDropdown: false,
    },
    {
      label: "Admissions",
      href: "/admissions",
      hasDropdown: true,
      dropdownItems: [
        { label: "Overview", href: "/admissions" },
        { label: "How to Apply", href: "/admissions/how-to-apply" },
        { label: "Fees", href: "/admissions/fees" },
        { label: "Book a Tour", href: "/admissions/book-a-tour" },
      ],
    },
    {
      label: "Academics",
      href: "/academics",
      hasDropdown: true,
      dropdownItems: [
        { label: "Overview", href: "/academics" },
        { label: "Key Stage 3", href: "/academics/key-stage-3" },
        { label: "Key Stage 4", href: "/academics/key-stage-4" },
        { label: "Sixth Form", href: "/academics/sixth-form" },
      ],
    },
    {
      label: "School Life",
      href: "/school-life",
      hasDropdown: true,
      dropdownItems: [
        { label: "Overview", href: "/school-life" },
        { label: "Pastoral Care", href: "/school-life/pastoral-care" },
        { label: "Co-Curricular", href: "/school-life/co-curricular" },
        { label: "Campus & Facilities", href: "/school-life/boarding" },
      ],
    },
    {
      label: "News & Events",
      href: "/news",
      hasDropdown: false,
    },
    {
      label: "Contact",
      href: "/contact",
      hasDropdown: false,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Top Utility Bar */}
        <div className="border-b border-gray-200 bg-brand-dark text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
              <div className="flex items-center gap-3 sm:gap-6">
                <Link href="/admissions" className="hover:text-brand-accent transition-colors text-xs sm:text-sm">
                  Admissions
                </Link>
                <Link href="/term-dates" className="hover:text-brand-accent transition-colors text-xs sm:text-sm">
                  Term Dates
                </Link>
                <Link href="/news" className="hover:text-brand-accent transition-colors text-xs sm:text-sm">
                  News
                </Link>
              </div>
              <Link
                href="/admissions/how-to-apply"
                className="rounded-md bg-brand-accent px-3 py-1 text-xs font-semibold text-brand-primary transition-colors hover:bg-brand-accent-light sm:px-4 sm:py-1.5 sm:text-sm"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-4">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src={brandConfig.logo.jpeg}
                alt={`${brandConfig.name} Logo`}
                width={60}
                height={16}
                priority
                className="h-auto w-10 sm:w-28 md:w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-brand-primary"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Link>
                  {item.hasDropdown && activeDropdown === item.label && (
                    <MegaMenu items={item.dropdownItems!} />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </nav>
      </header>

      <MobileNavSheet
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}

