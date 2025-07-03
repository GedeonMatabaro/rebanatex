"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Leaf, ChevronRight, Search } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "../../components/page-header"
import { MainNav } from "@/components/main-nav"

export default function ProductsPage() {
  // Mock product categories for filtering
  const categories = [
    { name: "All Products", slug: "all", active: true },
    { name: "Laptop Bag", slug: "laptop-bag", active: false },
    { name: "Banana Fabric", slug: "banana-fabric", active: false },
    { name: "Carry Bags", slug: "bags", active: false },
    { name: "Custom Order", slug: "custom-orders", active: false },
  ]

  // Mock product data
  const allProducts = [
    {
      title: "Laptop Bags",
      description: "Sustainably designed for everyday life, this eco-friendly laptop bag keeps your tech and documents secure while making a stylish statement.",
      image: "/laptop-bag.jpg",
      link: "/products/laptop-bag",
      category: "laptop-bag"
    },
    {
      title: "Carry bag",
      description: "A stylish, sustainable bag handcrafted from banana fiber—perfect for everyday errands with eco-friendly flair.",
      image: "/Carry-Bag.png",
      link: "/products/bags",
      category: "bags"
    },
    {
      title: "Biodegradable Fabric",
      description: "Sustainably woven fabric made from natural banana fibers, fully biodegradable and perfect for conscious creations.",
      image: "/Natural-Fabric.jpg",
      link: "/products/banana-fabric",
      category: "banana-fabric"
    },
    {
      title: "Other Products",
      description: "Eco-friendly packaging solutions made from banana fiber. These products provide sustainable alternatives to plastic and paper packaging for various industries.",
      image: "/products_bag.jpg",
      link: "/products/bags",
      category: "bags"
    },
    {
      title: "Custom Orders",
      description: "Tailored solutions for businesses seeking sustainable materials. We work closely with partners to develop custom products that meet specific requirements.",
      image: "/Custom-orders.jpg",
      link: "/products/custom-orders",
      category: "custom"
    },
  ]

  // Featured products data
  const featuredProducts = [
    {
      title: "Laptop Bag",
      category: "Office Bags",
      price: "RWF 15,000",
      image: "/laptop-bag.jpg",
      link: "/products/laptop-bag",
    },
    {
      title: "Handwoven Fabric",
      category: "Banana Fabric",
      price: "RWF 7,000 / 1m X 50cm",
      image: "/Natural-Fabric.jpg",
      link: "/products/banana-fabric",
    },
    {
      title: "Other Bags",
      category: "Other Products",
      price: "RWF 8000",
      image: "products_bag.jpg",
      link: "/products/bags",
    },
    {
      title: "Custom Order",
      category: "Custom Order",
      price: "from RWF 15,000",
      image: "/Custom-orders.jpg",
      link: "/products/sustainable-packaging/gift-boxes",
    },
  ]

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter products based on search term and active category
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = 
      searchTerm === "" || 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = 
      activeCategory === "all" || 
      product.category === activeCategory
    
    return matchesSearch && matchesCategory
  })

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  // Handle category filter click
  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug)
  }

  return (
    <div className="flex flex-col min-h-screen">
       <MainNav></MainNav>
      <main className="flex-grow">
        {/* Page Header Banner */}
        <PageHeader 
          title="Our Products" 
          breadcrumb={[
            { title: "Products", href: "/products" }
          ]} 
        />

        {/* Product Search & Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full md:w-80 px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => handleCategoryClick(category.slug)}
                    className={`px-4 py-2 rounded-md ${
                      activeCategory === category.slug
                        ? "bg-[#28a745] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } font-medium transition-colors`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">PRODUCT CATEGORIES</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Sustainable Solutions from Banana Fiber
              </h2>
              <p className="text-gray-700">
                Explore our range of eco-friendly products made from banana stem fibers. Each product represents our
                commitment to sustainability, quality craftsmanship, and innovative design.
              </p>
            </div>

            {/* Category Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((category, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <Link
                            href={category.link}
                            className="inline-flex items-center bg-white text-[#28a745] px-4 py-2 rounded-md font-medium"
                          >
                            Explore Category
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#28a745] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <Link
                        href={category.link}
                        className="inline-flex items-center text-[#28a745] font-medium hover:underline"
                      >
                        View Products
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg mb-4">No products found matching your search criteria.</p>
                <button 
                  onClick={() => {setSearchTerm(""); setActiveCategory("all");}}
                  className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">FEATURED PRODUCTS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Best Sellers</h2>
              <p className="text-gray-700">
                Discover our most popular products, loved by customers for their quality, sustainability, and beautiful
                design.
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-[#28a745] text-white text-xs font-medium px-2 py-1 rounded-md">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={product.link}
                        className="bg-white text-[#28a745] px-4 py-2 rounded-md font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#28a745] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-[#28a745] font-medium">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products/all"
                className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* B2B Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">BUSINESS SOLUTIONS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Custom Solutions for Businesses</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Looking for sustainable materials for your business? We offer custom solutions tailored to your
                    specific needs, whether you're in fashion, interior design, packaging, or any other industry.
                  </p>
                  <p>
                    Our team works closely with business partners to develop innovative products that meet your
                    requirements while maintaining our commitment to sustainability and quality.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#28a745]/10 rounded-full p-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#28a745"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Bulk Orders</h3>
                      <p className="text-gray-600">
                        We offer competitive pricing for bulk orders of our standard products, with options for
                        customization.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#28a745]/10 rounded-full p-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#28a745"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Custom Development</h3>
                      <p className="text-gray-600">
                        Work with our team to develop entirely new products that meet your specific requirements and
                        sustainability goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                  >
                    Contact Our B2B Team
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/Natural-Fabric.jpg"
                    alt="B2B Solutions"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">CUSTOMER FEEDBACK</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Our Customers Say</h2>
              <p className="text-gray-700">
                Hear from businesses and individuals who have incorporated our sustainable banana fiber products into
                their lives and operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The quality of RE-BANATEX's banana fiber textiles is exceptional. Our customers love the story behind our products and the natural aesthetic they bring to their homes.",
                  author: "Emma Rodriguez",
                  role: "Founder",
                  company: "EcoHome Decor",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Switching to banana fiber packaging has been a game-changer for our brand. Not only are we reducing our environmental footprint, but our customers appreciate our commitment to sustainability.",
                  author: "Michael Chen",
                  role: "Sustainability Director",
                  company: "Green Beauty Co.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "The custom banana fiber textiles RE-BANATEX developed for our hotel chain perfectly align with our eco-friendly values. The durability and beauty of these products have exceeded our expectations.",
                  author: "Sarah Johnson",
                  role: "Procurement Manager",
                  company: "Eco Resorts International",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative"
                >
                  <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                    <div className="bg-[#28a745] rounded-full p-3 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-[#28a745]">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-16 md:py-24 bg-[#28a745] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Make the Switch to Sustainable Materials?
                </h2>
                <p className="text-white/80 mb-8 text-lg">
                  Whether you're an individual looking for eco-friendly products or a business seeking sustainable
                  solutions, we're here to help. Contact us today to discuss your needs or place an order.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-white text-[#28a745] px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/products/all"
                    className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    Browse All Products
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Sustainable products"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg">
                  <Leaf className="h-8 w-8 text-[#28a745]" />
                </div>
              </div>
            </div>
          </div>
        </section>  */}
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}