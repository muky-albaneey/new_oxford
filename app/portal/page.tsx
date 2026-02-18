"use client";

import { useState } from "react";
import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import FormInput from "@/src/components/forms/FormInput";
import { Lock, User } from "lucide-react";

export default function PortalPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Portal login would be processed here (demo)");
  };

  return (
    <Layout>
      <Breadcrumbs items={[{ label: "Portal" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md">
            <SectionHeading
              title="Parent & Student Portal"
              subtitle="Access your account to view grades, assignments, and school information"
            />
            
            <div className="rounded-lg bg-white p-8 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email / Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                      placeholder="Enter your email or username"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-brand-accent hover:text-brand-secondary transition-colors">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-brand-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-secondary"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 border-t pt-6 text-center">
                <p className="text-sm text-gray-600">
                  Need help accessing your account?{" "}
                  <a href="/contact" className="text-brand-accent hover:text-brand-secondary transition-colors">
                    Contact Support
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

