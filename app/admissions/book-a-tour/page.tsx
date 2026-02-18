"use client";

import { useState } from "react";
import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import FormInput from "@/src/components/forms/FormInput";
import FormSelect from "@/src/components/forms/FormSelect";
import FormTextarea from "@/src/components/forms/FormTextarea";
import Toast from "@/src/components/Toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  studentYear: string;
  message: string;
  honeypot: string;
}

export default function BookTourPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    studentYear: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [toast, setToast] = useState({ isVisible: false, message: "", type: "success" as "success" | "error" });

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.preferredDate) newErrors.preferredDate = "Preferred date is required";
    if (!formData.preferredTime) newErrors.preferredTime = "Preferred time is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      return; // Bot detected, silently fail
    }
    
    if (!validate()) return;
    
    // Save to localStorage
    const submissions = JSON.parse(localStorage.getItem("tourBookings") || "[]");
    submissions.push({
      ...formData,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem("tourBookings", JSON.stringify(submissions));
    
    // Show success
    setToast({
      isVisible: true,
      message: "Thank you! Your tour request has been submitted. We'll contact you soon.",
      type: "success",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      studentYear: "",
      message: "",
      honeypot: "",
    });
  };

  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: "Admissions", href: "/admissions" },
          { label: "Book a Tour" },
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Book a Campus Tour"
            subtitle="Experience Oxford Manor College firsthand. Schedule your visit today."
          />
          
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-8 shadow-md">
              <div className="grid gap-6 md:grid-cols-2">
                <FormInput
                  label="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  error={errors.firstName}
                  required
                />
                <FormInput
                  label="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  error={errors.lastName}
                  required
                />
              </div>

              <FormInput
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
                required
              />

              <FormInput
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                error={errors.phone}
                required
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormInput
                  label="Preferred Date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  error={errors.preferredDate}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
                <FormSelect
                  label="Preferred Time"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  error={errors.preferredTime}
                  options={[
                    { value: "", label: "Select time" },
                    { value: "09:00", label: "9:00 AM" },
                    { value: "10:00", label: "10:00 AM" },
                    { value: "11:00", label: "11:00 AM" },
                    { value: "14:00", label: "2:00 PM" },
                    { value: "15:00", label: "3:00 PM" },
                  ]}
                  required
                />
              </div>

              <FormSelect
                label="Student's Current Year (if applicable)"
                value={formData.studentYear}
                onChange={(e) => setFormData({ ...formData, studentYear: e.target.value })}
                options={[
                  { value: "", label: "Select year" },
                  { value: "year-6", label: "Year 6" },
                  { value: "year-7", label: "Year 7" },
                  { value: "year-8", label: "Year 8" },
                  { value: "year-9", label: "Year 9" },
                  { value: "year-10", label: "Year 10" },
                  { value: "year-11", label: "Year 11" },
                  { value: "other", label: "Other" },
                ]}
              />

              <FormTextarea
                label="Additional Message (Optional)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Any specific areas you'd like to see or questions you have..."
              />

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                className="w-full rounded-md bg-brand-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-secondary"
              >
                Submit Tour Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />
    </Layout>
  );
}

