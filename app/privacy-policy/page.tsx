"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { ArrowRight, Search, Calendar, User, Tag } from "lucide-react"

export default function BlogPage() {
  // Mock blog categories
  const categories = [
    { name: "All", slug: "all", active: true },
    { name: "Sustainability", slug: "sustainability", active: false },
    { name: "Innovation", slug: "innovation", active: false },
    { name: "Community", slug: "community", active: false },
    { name: "Behind the Scenes", slug: "behind-the-scenes", active: false },
  ]

  // Mock blog posts
  const allBlogPosts = [
    {
      id: 1,
      title: "The Journey of Banana Fiber: From Waste to Wardrobe",
      excerpt:
        "Discover how we transform agricultural waste into beautiful, sustainable textiles that are changing the fashion industry.",
      date: "May 15, 2023",
      category: "innovation",
      author: "Sarah Mutoni",
      image: "/placeholder.svg?height=600&width=800",
      featured: true,
    },
    {
      id: 2,
      title: "Supporting Local Communities Through Sustainable Practices",
      excerpt:
        "Learn how our commitment to sustainability is empowering local communities and creating economic opportunities.",
      date: "April 22, 2023",
      category: "community",
      author: "Jean-Paul Uwimana",
      image: "/placeholder.svg?height=600&width=800",
      featured: true,
    },
    {
      id: 3,
      title: "The Environmental Impact of Banana Fiber Textiles",
      excerpt: "Explore the environmental benefits of choosing banana fiber textiles over conventional materials.",
      date: "March 10, 2023",
      category: "sustainability",
      author: "Marie Ingabire",
      image: "/placeholder.svg?height=600&width=800",
      featured: false,
    },
    {
      id: 4,
      title: "Behind the Scenes: Our Production Process",
      excerpt: "Take a look behind the scenes at our production facility and see how we create sustainable textiles.",
      date: "February 28, 2023",
      category: "behind-the-scenes",
      author: "David Mugabo",
      image: "/placeholder.svg?height=600&width=800",
      featured: false,
    },
    {
      id: 5,
      title: "Innovative Uses for Banana Fiber in Modern Design",
      excerpt:
        "Discover how designers are incorporating banana fiber textiles into contemporary fashion and home decor.",
      date: "January 15, 2023",
      category: "innovation",
      author: "Sarah Mutoni",
      image: "/placeholder.svg?height=600&width=800",
      featured: false,
    },
    {
      id: 6,
      title: "Sustainable Fashion: The Future of Textiles",
      excerpt: "How banana fiber and other sustainable materials are reshaping the future of the fashion industry.",
      date: "December 5, 2022",
      category: "sustainability",
      author: "Jean-Paul Uwimana",
      image: "/placeholder.svg?height=600&width=800",
      featured: false,
    },
  ]

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter blog posts based on search term and active category
  const filteredBlogPosts = allBlogPosts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = activeCategory === "all" || post.category === activeCategory

    return matchesSearch && matchesCategory
  })

  // Get featured posts after filtering
  const featuredPosts = filteredBlogPosts.filter((post) => post.featured)
  // Get non-featured posts after filtering
  const regularPosts = filteredBlogPosts.filter((post) => !post.featured)

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
      <MainNav />

      <main className="flex-grow">
        <PageHeader title="Our Blog" breadcrumb={[{ title: "Blog", href: "/blog" }]} />

        {/* Blog Search & Categories */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
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

        {filteredBlogPosts.length > 0 ? (
          <>
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="text-center mb-12">
                    <span className="text-[#28a745] text-sm font-medium uppercase tracking-wider">
                      FEATURED ARTICLES
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Latest from Our Blog</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                      Stay updated with our latest news, sustainability tips, and behind-the-scenes stories.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredPosts.map((post) => (
                      <div
                        key={post.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                      >
                        <div className="aspect-[16/9] overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={800}
                            height={450}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                              <User className="h-4 w-4 mr-1" />
                              {post.author}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-gray-900 hover:text-[#28a745] transition-colors">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/blog/${post.id}`}
                              className="inline-flex items-center text-[#28a745] font-medium"
                            >
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <span className="inline-flex items-center text-sm text-gray-500">
                              <Tag className="h-4 w-4 mr-1" />
                              {categories.find((c) => c.slug === post.category)?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* All Blog Posts */}
            {regularPosts.length > 0 && (
              <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="text-center mb-12">
                    <span className="text-[#28a745] text-sm font-medium uppercase tracking-wider">ALL ARTICLES</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Explore Our Blog</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                      Dive deeper into our sustainable journey with articles on innovation, community impact, and
                      behind-the-scenes stories.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post) => (
                      <div
                        key={post.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                      >
                        <div className="aspect-[16/9] overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={600}
                            height={338}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              {post.date}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-[#28a745] transition-colors">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/blog/${post.id}`}
                              className="inline-flex items-center text-[#28a745] font-medium"
                            >
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <span className="inline-flex items-center text-sm text-gray-500">
                              <Tag className="h-4 w-4 mr-1" />
                              {categories.find((c) => c.slug === post.category)?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg mb-4">No blog posts found matching your search criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setActiveCategory("all")
                  }}
                  className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-[#28a745] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-white/80 mb-8">
                Get the latest articles, sustainability tips, and company updates delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-[#28a745] font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-4 text-white/60">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
