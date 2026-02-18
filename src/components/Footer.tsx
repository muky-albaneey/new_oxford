"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { brandConfig } from "@/src/config/brand";

export default function Footer() {
  const quickLinks = {
    "About": [
      { label: "Our Story", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Mission & Values", href: "/about#mission" },
    ],
    "Academics": [
      { label: "Key Stage 3", href: "/academics/key-stage-3" },
      { label: "Key Stage 4", href: "/academics/key-stage-4" },
      { label: "Sixth Form", href: "/academics/sixth-form" },
    ],
    "Admissions": [
      { label: "How to Apply", href: "/admissions/how-to-apply" },
      { label: "Fees", href: "/admissions/fees" },
      { label: "Book a Tour", href: "/admissions/book-a-tour" },
    ],
    "Resources": [
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Term Dates", href: "/term-dates" },
      { label: "Policies", href: "/policies" },
    ],
  };

  const TikTokIcon = () => (
    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  const socialLinks = [
    { icon: Instagram, href: brandConfig.social.instagram, label: "Instagram", isComponent: false },
    { icon: TikTokIcon, href: brandConfig.social.tiktok, label: "TikTok", isComponent: true },
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src={brandConfig.logo.svg}
                alt={`${brandConfig.name} Logo`}
                width={180}
                height={54}
                className="h-auto w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-4 text-xs sm:text-sm text-gray-300">
              {brandConfig.motto}
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>{brandConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <a href={`tel:${brandConfig.contact.phone}`} className="hover:text-brand-accent transition-colors">
                  {brandConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <a href={`mailto:${brandConfig.contact.email}`} className="hover:text-brand-accent transition-colors">
                  {brandConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Columns */}
          {Object.entries(quickLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm sm:text-base font-semibold">{category}</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-brand-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Social */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-sm sm:text-base font-semibold">Stay Connected</h3>
              <p className="mb-4 text-xs sm:text-sm text-gray-300">
                Subscribe to our newsletter for updates and news.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Dummy form submission
                  alert("Thank you for subscribing! (This is a demo)");
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-md border border-gray-600 bg-gray-800 px-3 py-1.5 text-xs sm:text-sm text-white placeholder-gray-400 focus:border-brand-accent focus:outline-none sm:px-4 sm:py-2"
                  required
                />
                <button
                  type="submit"
                  className="rounded-md bg-brand-accent px-4 py-1.5 text-xs font-semibold text-brand-primary transition-colors hover:bg-brand-accent-light sm:px-6 sm:py-2 sm:text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-4 text-sm sm:text-base font-semibold">Follow Us</h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-brand-accent hover:text-brand-primary sm:p-3"
                    >
                      {social.isComponent ? <Icon /> : <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} {brandConfig.name}. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <Link href="/policies" className="hover:text-brand-accent transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/policies" className="hover:text-brand-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

