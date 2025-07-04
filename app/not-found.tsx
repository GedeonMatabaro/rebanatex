// pages/404.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Leaf } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.jpeg"
              alt="Banana Fiber Textiles"
              fill
              className="object-cover opacity-60"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">404 - Page Not Found</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              Oops! It looks like this page has wandered off into the banana fields. Let’s get you back to our sustainable journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors transform hover:scale-105"
              >
                Back to Home
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors transform hover:scale-105"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">LOST BUT NOT ALONE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Discover Our Sustainable Products
              </h2>
              <p className="text-gray-700 mb-8">
                While you’re here, explore our range of eco-friendly products made from banana fiber, crafted to support a greener future.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Laptop Bag",
                    description: "Sustainably designed for everyday life, this eco-friendly laptop bag keeps your tech secure.",
                    image: "/laptop-bag.jpg",
                    link: "/products/laptop-bag",
                  },
                  {
                    title: "Carry Bag",
                    description: "A stylish, sustainable bag handcrafted from banana fiber—perfect for everyday errands.",
                    image: "/Carry-Bag.png",
                    link: "/products/bags",
                  },
                  {
                    title: "Biodegradable Fabric",
                    description: "Sustainably woven fabric made from natural banana fibers, fully biodegradable.",
                    image: "/Natural-Fabric.jpg",
                    link: "/products/banana-fabric",
                  },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#28a745] transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <Link
                        href={product.link}
                        className="inline-flex items-center text-[#28a745] font-medium hover:underline group"
                      >
                        View Product
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}