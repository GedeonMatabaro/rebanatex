// pages/terms-of-service.tsx
"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow">
        {/* Page Header */}
        <PageHeader
          title="Terms of Service"
          breadcrumb={[
            { title: "Terms of Service", href: "/terms-of-service" },
          ]}
        />

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Terms of Service
              </h2>
              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h3>
                  <p>
                    By accessing or using the Re-banatex website, you agree to be bound by these Terms of Service
                    ("Terms"). If you do not agree with any part of these Terms, you may not use our services or purchase
                    our products.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">2. Products and Orders</h3>
                  <p>
                    All products listed on our website, including laptop bags, carry bags, biodegradable fabrics, and
                    custom orders, are subject to availability. Prices are listed in Rwandan Francs (RWF) and may change
                    without notice. Orders can be placed by contacting our team via the contact form. We reserve the right
                    to refuse or cancel orders at our discretion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">3. Payment and Shipping</h3>
                  <p>
                    Payment terms and shipping details will be provided upon order confirmation. We strive to ensure timely
                    delivery, but we are not responsible for delays caused by third-party shipping services or unforeseen
                    circumstances.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">4. Returns and Refunds</h3>
                  <p>
                    Due to the handmade nature of our products, returns are accepted only for defective items. Please
                    contact us within 7 days of receipt to initiate a return. Refunds or replacements will be processed
                    upon inspection of the returned item.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">5. Intellectual Property</h3>
                  <p>
                    All content on this website, including images, text, and designs, is the property of Re-banatex and
                    protected by copyright laws. Unauthorized use or reproduction is prohibited.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">6. Limitation of Liability</h3>
                  <p>
                    Re-banatex is not liable for any indirect, incidental, or consequential damages arising from the use of
                    our products or website. Our liability is limited to the purchase price of the product.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">7. Contact Us</h3>
                  <p>
                    For questions about these Terms, please reach out via our{" "}
                    <Link href="/contact" className="text-[#28a745] hover:underline">
                      Contact Page
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="mt-12 flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}