// pages/sustainability.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf, Recycle, Globe } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export default function SustainabilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow">
        {/* Page Header */}
        <PageHeader
          title="Sustainability"
          breadcrumb={[
            { title: "Sustainability", href: "/sustainability" },
          ]}
        />

        {/* Hero Section */}
        <section className="relative w-full h-[60vh] bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.jpeg"
              alt="Sustainable Banana Fiber Production"
              fill
              className="object-cover opacity-60"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Commitment to a Greener Future
              </h1>
              <p className="text-lg text-white/80">
                At Re-banatex, we transform banana stems into sustainable textiles, promoting a circular economy and
                supporting local communities through eco-friendly innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability Principles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Sustainability Principles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Zero Waste Production",
                  description:
                    "We utilize banana stems, typically discarded after harvest, to create high-quality fibers, ensuring no waste in our process.",
                  icon: <Recycle className="h-8 w-8 text-white" />,
                },
                {
                  title: "Community Empowerment",
                  description:
                    "Partnering with local farmers and artisans, we create economic opportunities while promoting sustainable practices.",
                  icon: <Globe className="h-8 w-8 text-white" />,
                },
                {
                  title: "Eco-Friendly Materials",
                  description:
                    "Our products are 100% biodegradable, reducing environmental impact and supporting a healthier planet.",
                  icon: <Leaf className="h-8 w-8 text-white" />,
                },
              ].map((principle, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-[#28a745] p-4 flex justify-between items-center">
                    <div className="bg-white/20 rounded-full p-3">{principle.icon}</div>
                    <span className="text-white text-2xl font-bold">0{index + 1}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#28a745] transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "500+", label: "Farmers Supported" },
                { metric: "10,000+", label: "Kilograms of Waste Repurposed" },
                { metric: "100%", label: "Biodegradable Products" },
                { metric: "50+", label: "Artisans Employed" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold text-[#28a745]">{item.metric}</h3>
                  <p className="text-gray-600 mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#28a745] text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Sustainable Journey
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Explore our eco-friendly products and learn how you can contribute to a greener future with Re-banatex.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-white text-[#28a745] px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}