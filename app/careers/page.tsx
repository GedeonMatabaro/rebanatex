// pages/careers.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Leaf, Users } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow">
        {/* Page Header */}
        <PageHeader
          title="Careers at Re-banatex"
          breadcrumb={[
            { title: "Careers", href: "/careers" },
          ]}
        />

        {/* Careers Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Join Our Sustainable Mission
              </h2>
              <p className="text-gray-700">
                At Re-banatex, we’re passionate about transforming banana waste into eco-friendly textiles. Join our team
                to create innovative, sustainable products that make a difference.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Head Designer / Designer Specialist</h3>
                <p className="text-[#28a745] font-medium mb-3">Full-time • Kigali, Rwanda</p>
                <p className="text-gray-600 mb-4">
                  Fashion designer ready to fly with us! Lead the design of innovative, eco-friendly textiles and products
                  made from banana fiber. Collaborate with artisans and our team to create sustainable fashion that makes a
                  statement.
                </p>
                <Link
                  href="/careers/head-designer"
                  className="inline-flex items-center text-[#28a745] font-medium hover:underline group"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Work With Re-banatex
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainable Impact",
                  description:
                    "Contribute to a greener future by designing products that repurpose agricultural waste.",
                  icon: <Leaf className="h-8 w-8 text-white" />,
                },
                {
                  title: "Creative Freedom",
                  description:
                    "Unleash your creativity in a collaborative environment focused on innovative design.",
                  icon: <Users className="h-8 w-8 text-white" />,
                },
                {
                  title: "Community Focus",
                  description:
                    "Work alongside local artisans and farmers to empower communities through sustainable practices.",
                  icon: <Leaf className="h-8 w-8 text-white" />,
                },
              ].map((reason, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-[#28a745] p-4 flex justify-between items-center">
                    <div className="bg-white/20 rounded-full p-3">{reason.icon}</div>
                    <span className="text-white text-2xl font-bold">0{index + 1}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#28a745] transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}