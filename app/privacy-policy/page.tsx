// pages/privacy-policy.tsx
"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow">
        {/* Page Header */}
        <PageHeader
          title="Privacy Policy"
          breadcrumb={[
            { title: "Privacy Policy", href: "/privacy-policy" },
          ]}
        />

        {/* Privacy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Privacy Policy
              </h2>
              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-4">1. Information We Collect</h3>
                  <p>
                    Re-banatex collects personal information such as your name, email address, and contact details when you
                    submit inquiries, place orders, or subscribe to our newsletter. We also collect non-personal data, such
                    as website usage statistics, to improve our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">2. How We Use Your Information</h3>
                  <p>
                    Your information is used to process orders, respond to inquiries, and send updates about our products
                    and sustainability initiatives. We may use anonymized data to analyze website performance and user
                    preferences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">3. Data Sharing</h3>
                  <p>
                    We do not sell or share your personal information with third parties, except as necessary to fulfill
                    orders (e.g., sharing shipping details with delivery services) or as required by law.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">4. Data Security</h3>
                  <p>
                    We implement reasonable security measures to protect your personal information. However, no online
                    system is completely secure, and we cannot guarantee absolute security.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">5. Cookies</h3>
                  <p>
                    Our website uses cookies to enhance your browsing experience. You can disable cookies in your browser
                    settings, but this may affect website functionality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">6. Your Rights</h3>
                  <p>
                    You have the right to access, update, or delete your personal information. Contact us via our{" "}
                    <Link href="/contact" className="text-[#28a745] hover:underline">
                      Contact Page
                    </Link>{" "}
                    to exercise these rights.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">7. Newsletter Subscriptions</h3>
                  <p>
                    By subscribing to our newsletter, you consent to receive updates about our products and sustainability
                    efforts. You can unsubscribe at any time using the link in our emails.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">8. Contact Us</h3>
                  <p>
                    For questions about our Privacy Policy, please reach out via our{" "}
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