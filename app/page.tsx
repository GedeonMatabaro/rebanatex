import Image from "next/image"
import Link from "next/link"
import { Leaf, ArrowRight, Recycle, Globe, Users, ChevronRight } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[90vh] bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/man.png"
              alt="Banana fiber textile production"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <span className="text-[#28a745] uppercase tracking-wider text-sm font-medium mb-2 inline-block">
                NATURAL ENVIRONMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                From Banana Stem to Sustainable Textiles
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
                Empowering nature through innovation in textile production. We transform agricultural waste into
                beautiful, eco-friendly products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
                >
                  See Our Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Slider */}
        <section className="w-full bg-[#28a745] py-4 overflow-hidden">
          <div className="flex animate-marquee gap-8">
            {/* First set of items */}
            <div className="flex items-center justify-start gap-8 flex-shrink-0">
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Recycle className="h-5 w-5" />
                <span>Banana Farming</span>
              </div>
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Leaf className="h-5 w-5" />
                <span>Sustainable Materials</span>
              </div>
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Globe className="h-5 w-5" />
                <span>Eco-Friendly Products</span>
              </div>
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Recycle className="h-5 w-5" />
                <span>Zero Waste</span>
              </div>
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Leaf className="h-5 w-5" />
                <span>Sustainable Materials</span>
              </div>
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Globe className="h-5 w-5" />
                <span>Eco-Friendly Products</span>
              </div>
            </div>
            {/* Duplicate set of items for seamless looping */}
            <div className="flex items-center justify-start gap-8 flex-shrink-0">
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Recycle className="h-5 w-5" />
                <span>Banana Farming</span>
              </div>
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Leaf className="h-5 w-5" />
                <span>Sustainable Materials</span>
              </div>
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Globe className="h-5 w-5" />
                <span>Eco-Friendly Products</span>
              </div>
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Recycle className="h-5 w-5" />
                <span>Zero Waste</span>
              </div>
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Leaf className="h-5 w-5" />
                <span>Sustainable Materials</span>
              </div>
              <div className="flex items-center gap-2 text-white whitespace-nowrap">
                <Globe className="h-5 w-5" />
                <span>Eco-Friendly Products</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -left-4 top-0 h-full w-2 bg-[#28a745]"></div>
                <div className="absolute -left-1 top-12 h-24 w-1 bg-[#28a745]/30"></div>
                <div className="absolute -left-2 top-48 h-16 w-1 bg-[#28a745]/30"></div>
                <Image
                  src="/hero.jpeg"
                  alt="Banana fiber products"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="absolute -right-8 -bottom-8 bg-[#28a745] rounded-full p-4 shadow-lg">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">ABOUT RE-BANATEX</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Environmental Sustainable Forever Green Future
                </h2>
                <p className="text-gray-700 mb-8">
                  RE-BANATEX is a Rwandan-based green company turning banana waste into eco-friendly textiles. We
                  promote sustainability, local craftsmanship, and innovation while creating beautiful products that
                  respect our planet.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#28a745]/10 rounded-full p-3">
                      <Recycle className="h-6 w-6 text-[#28a745]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Economic Benefits</h3>
                      <p className="text-gray-600">
                        Alternative innovation that aims to reduce environmental wasteland throughout growth-based
                        value.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#28a745]/10 rounded-full p-3">
                      <Globe className="h-6 w-6 text-[#28a745]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Safe Environment</h3>
                      <p className="text-gray-600">
                        Alternative innovation that aims to reduce environmental wasteland throughout natural value.
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/about" className="inline-flex items-center text-[#28a745] font-medium mt-8 group">
                  More About
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-[#28a745] text-sm font-medium uppercase tracking-wider">OUR PROCESS</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
                From Farm to Fabric: Our 4-Phase Process
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                We transform banana stems that would otherwise go to waste into beautiful, sustainable textiles through
                our innovative process.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                  {
                    title: "Banana Trunk Sourcing",
                    description:
                      "We partner with local farmers to source banana trunks sustainably, promoting environmental responsibility and community well-being.",
                    icon: <Leaf className="h-8 w-8 text-white" />,
                  },
                  {
                    title: "Fiber Extraction",
                    description:
                      "Banana stems, typically discarded after fruit harvesting, are collected and processed using our custom-built extraction machine to obtain high-quality fibers, ensuring a zero-waste approach.",
                    icon: <Recycle className="h-8 w-8 text-white" />,
                  },
                  {
                    title: "Eco-Friendly Processing",
                    description:
                      "Natural fibers are treated using environmentally conscious methods to prepare them for production and product development.",
                    icon: <Globe className="h-8 w-8 text-white" />,
                  },
                  {
                    title: "Product Manufacturing",
                    description:
                      "We craft our own fabric by manually weaving fibers with care and skill. These textiles are then transformed into finished products by local artists, celebrating sustainable, artisanal production.",
                    icon: <Users className="h-8 w-8 text-white" />,
                  },
                ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className="bg-[#28a745] p-4 flex justify-between items-center">
                    <div className="bg-white/20 rounded-full p-3">{step.icon}</div>
                    <span className="text-white text-4xl font-bold">0{index + 1}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      Phase {index + 1}: {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-[#28a745] text-sm font-medium uppercase tracking-wider">OUR PRODUCTS</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
                Sustainable Products from Banana Fiber
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Discover our range of eco-friendly products made from banana stem fibers.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Laptop Bag",
                  description: "Sustainably designed for everyday life, this eco-friendly laptop bag keeps your tech and documents secure while making a stylish statement.",
                  image: "/laptop-bag.jpg",
                },
                {
                  title: "Carry bag",
                  description: "A stylish, sustainable bag handcrafted from banana fiber—perfect for everyday errands with eco-friendly flair.",
                  image: "/Carry-Bag.png", // Make sure this image exists in your public directory
                },
                {
                  title: "Biodegradable Fabric",
                  description: "Sustainably woven fabric made from natural banana fibers, fully biodegradable and perfect for conscious creations.",
                  image: "/banana-fabric.webp",
                },
                {
                  title: "Other Products",
                  description: "Stylish, sustainable bags crafted from banana fiber for everyday use.",
                  image: "/products_bag.JPG", // Make sure this image exists in your public directory
                },
              ].map((product, index) => (
                <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Image with gradient hover */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Text block outside the image */}
                <div className="flex h-fit items-end p-6 transition-all duration-300 bg-gradient-to-t from-white via-white/80 to-white/50 group-hover:from-black group-hover:via-black/70 group-hover:to-black/20">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-white">
                        {product.title}
                      </h3>
                      <p className="text-gray-700 group-hover:text-white/80 mb-4">
                        {product.description}
                      </p>
                    </div>
                  </div>
              </div>
              ))}
            </div>

            {/* <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
              >
                View All Products
              </Link>
            </div> */}
          </div>
        </section>

        {/* Why RE-BANATEX */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#28a745] text-sm font-medium uppercase tracking-wider">OUR VALUES</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
                  Getting A Greener Future Safe Environment
                </h2>
                <p className="text-gray-700 mb-8">
                  Our commitment to sustainability goes beyond just creating eco-friendly products. We're dedicated to
                  promoting a circular economy and supporting local communities.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#28a745] rounded-full p-2 flex-shrink-0">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">Zero Waste Production</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#28a745] rounded-full p-2 flex-shrink-0">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">Community Empowerment</span>
                  </div>
                </div>
                <div className="mt-8 space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Sustainability</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#28a745] h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Local Production</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#28a745] h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-full overflow-hidden border-8 border-white shadow-xl aspect-square">
                  <Image
                    src="/big-image.jpeg"
                    alt="Sustainable practices"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-8 -right-8 bg-white rounded-full p-4 shadow-lg">
                  <div className="bg-[#28a745] rounded-full p-2">
                    <Leaf className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#28a745] font-bold py-2 px-6 rounded-full shadow-lg text-center">
                  SAVE THE PLANET
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-[#28a745] text-sm font-medium uppercase tracking-wider">GALLERY</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">See Our Work in Action</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                From raw banana stems to finished products, explore our sustainable production process.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "JohnPicture.jpeg",
              "Janek_john.jpg",
              "Winners_Simcubator.jpg",
              "Toff.jpg",
              "Simcubator_night.heic",
            ].map((img, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-lg ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <Image
                  src={`/${img}`}
                  alt={`Gallery image ${index + 1}`}
                  width={index === 0 ? 600 : 300}
                  height={index === 0 ? 600 : 300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        {/* <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-[#28a745] text-sm font-medium uppercase tracking-wider">OUR BLOG</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Latest from Our Blog</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Stay updated with our latest news, sustainability tips, and behind-the-scenes stories.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Journey of Banana Fiber: From Waste to Wardrobe",
                  excerpt:
                    "Discover how we transform agricultural waste into beautiful, sustainable textiles that are changing the fashion industry.",
                  date: "May 15, 2023",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Supporting Local Communities Through Sustainable Practices",
                  excerpt:
                    "Learn how our commitment to sustainability is empowering local communities and creating economic opportunities.",
                  date: "April 22, 2023",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "The Environmental Impact of Banana Fiber Textiles",
                  excerpt:
                    "Explore the environmental benefits of choosing banana fiber textiles over conventional materials.",
                  date: "March 10, 2023",
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[#28a745] text-sm mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-[#28a745] transition-colors">
                      <Link href={`/blog/${index + 1}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${index + 1}`} className="inline-flex items-center text-[#28a745] font-medium">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
              >
                Visit Our Blog
              </Link>
            </div>
          </div>
        </section> */}

        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-[#28a745] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Sustainable Journey</h2>
              <p className="text-white/80 mb-8">
                Get sustainability stories and product updates in your inbox. Subscribe to our newsletter.
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
