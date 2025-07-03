// pages/careers/head-designer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Leaf } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export default function HeadDesignerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow">
        {/* Page Header */}
        <PageHeader
          title="Head Designer / Designer Specialist"
          breadcrumb={[
            { title: "Careers", href: "/careers" },
            { title: "Head Designer", href: "/careers/head-designer" },
          ]}
        />

        {/* Job Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <Image
                  src="/Fashion_Designer.webp"
                  alt="Banana Fiber Textile Design"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#28a745] rounded-full p-4 shadow-lg">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Head Designer / Designer Specialist
                </h2>
                <p className="text-gray-700 mb-6">
                  Fashion designer ready to fly with us! As our Head Designer, you’ll lead the creation of innovative,
                  eco-friendly textiles and products made from banana fiber, shaping the future of sustainable fashion.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Lead the design and development of banana fiber-based textiles and products.</li>
                      <li>Collaborate with artisans to create sustainable, high-quality fashion items.</li>
                      <li>Innovate new product lines that align with Re-banatex’s eco-friendly mission.</li>
                      <li>Oversee design processes, ensuring quality and sustainability standards.</li>
                      <li>Conduct market research to identify trends in sustainable fashion.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Bachelor’s degree in Fashion Design, Textile Design, or related field.</li>
                      <li>5+ years of experience in fashion or textile design, preferably with sustainable materials.</li>
                      <li>Strong portfolio showcasing innovative and eco-conscious designs.</li>
                      <li>Ability to work collaboratively with artisans and cross-functional teams.</li>
                      <li>Passion for sustainability and circular economy principles.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-600">Kigali, Rwanda (Full-time, on-site)</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">How to Apply</h3>
                    <p className="text-gray-600">
                      Submit your resume, portfolio, and a cover letter detailing your passion for sustainable design to{" "}
                      <a href="mailto:careers@rebanatex.com" className="text-[#28a745] hover:underline">
                        careers@rebanatex.com
                      </a>
                      . We can’t wait to see how you’ll help us soar!
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/careers"
                    className="inline-flex items-center justify-center rounded-md border border-[#28a745] px-6 py-3 font-medium text-[#28a745] hover:bg-[#28a745]/10 transition-colors"
                  >
                    Back to Careers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}