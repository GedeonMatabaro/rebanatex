// pages/products/laptop-bag.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Leaf } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export default function LaptopBagPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow">
        {/* Page Header */}
        <PageHeader
          title="Laptop Bag"
          breadcrumb={[
            { title: "Products", href: "/products" },
            { title: "Laptop Bag", href: "/products/laptop-bag" },
          ]}
        />

        {/* Product Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <Image
                  src="/laptop-bag.jpg"
                  alt="Eco-Friendly Laptop Bag"
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
                  Eco-Friendly Laptop Bag
                </h2>
                <p className="text-gray-700 mb-6">
                  Sustainably designed for everyday life, this eco-friendly laptop bag is crafted from banana fiber,
                  offering durability and style. Perfect for professionals and students, it keeps your tech and documents
                  secure while reducing your environmental footprint.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#28a745]/10 rounded-full p-3">
                      <Leaf className="h-6 w-6 text-[#28a745]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Sustainable Materials</h3>
                      <p className="text-gray-600">
                        Made from 100% biodegradable banana fiber, reducing waste and environmental impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#28a745]/10 rounded-full p-3">
                      <Leaf className="h-6 w-6 text-[#28a745]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Durable Design</h3>
                      <p className="text-gray-600">
                        Built to last with reinforced stitching and water-resistant coating.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-[#28a745] font-bold text-xl mt-6">Price: RWF 15,000</p>
                <div className="mt-8 flex gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                  >
                    Contact to Order
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center rounded-md border border-[#28a745] px-6 py-3 font-medium text-[#28a745] hover:bg-[#28a745]/10 transition-colors"
                  >
                    Back to Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Explore Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
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
                      className="inline-flex items-center text-[#28a745] font-medium hover:underline"
                    >
                      View Product
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
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