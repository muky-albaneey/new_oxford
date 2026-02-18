"use client";

import { useState } from "react";
import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import FormInput from "@/src/components/forms/FormInput";
import FormTextarea from "@/src/components/forms/FormTextarea";
import Toast from "@/src/components/Toast";
import { brandConfig } from "@/src/config/brand";
import { Mail, Phone, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [toast, setToast] = useState({ isVisible: false, message: "", type: "success" as "success" | "error" });

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) return;
    
    if (!validate()) return;
    
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    submissions.push({
      ...formData,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
    
    setToast({
      isVisible: true,
      message: "Thank you for your message! We'll get back to you soon.",
      type: "success",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      honeypot: "",
    });
  };

  return (
    <Layout>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Contact Us"
            subtitle="We'd love to hear from you. Get in touch with any questions or inquiries."
          />
          
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold text-brand-primary">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 text-brand-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">{brandConfig.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-brand-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href={`tel:${brandConfig.contact.phone}`} className="text-gray-600 hover:text-brand-primary transition-colors">
                      {brandConfig.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-brand-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href={`mailto:${brandConfig.contact.email}`} className="text-gray-600 hover:text-brand-primary transition-colors">
                      {brandConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-brand-light p-6">
                <h3 className="mb-3 font-semibold text-brand-primary">Office Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-8 shadow-md">
                <FormInput
                  label="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                  required
                />
                <FormInput
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                  required
                />
                <FormInput
                  label="Phone (Optional)"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <FormInput
                  label="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  error={errors.subject}
                  required
                />
                <FormTextarea
                  label="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  error={errors.message}
                  required
                />
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
                  Send Message
                </button>
              </form>
            </div>
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

