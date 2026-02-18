"use client";

import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import { motion } from "framer-motion";
import { facultyByDepartment } from "@/src/data/faculty";

export default function FacultyPage() {
  return (
    <Layout>
      <Breadcrumbs
        items={[
          { label: "Academics", href: "/academics" },
          { label: "Faculty" },
        ]}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Faculty and Staff Members"
            subtitle="Dedicated educators committed to student success"
          />
          
          <div className="space-y-12">
            {Object.entries(facultyByDepartment).map(([department, members], deptIndex) => (
              <motion.div
                key={department}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: deptIndex * 0.1 }}
                className="rounded-lg bg-white p-8 shadow-md"
              >
                <h2 className="mb-6 font-serif text-2xl font-bold text-brand-primary">
                  {department}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {members.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (deptIndex * 0.1) + (index * 0.05) }}
                      className="rounded-lg bg-brand-light p-4 text-center"
                    >
                      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/10 mx-auto">
                        <span className="text-2xl font-bold text-brand-primary">
                          {member.name.split(' ').pop()?.charAt(0) || member.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{department}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

