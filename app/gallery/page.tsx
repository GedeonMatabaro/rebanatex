import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"

export default function GalleryPage() {
  // Mock gallery categories
  const categories = [
    { name: "All", slug: "all", active: true },
    { name: "Raw Materials", slug: "raw-materials", active: false },
    { name: "Production Process", slug: "production-process", active: false },
    { name: "Finished Products", slug: "finished-products", active: false },
    { name: "Community Impact", slug: "community-impact", active: false },
  ]

  // Mock gallery images
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Gallery Image ${i + 1}`,
    category:
      i % 4 === 0
        ? "raw-materials"
        : i % 4 === 1
          ? "production-process"
          : i % 4 === 2
            ? "finished-products"
            : "community-impact",
    image: `/placeholder.svg?height=600&width=800`,
    aspect: i % 5 === 0 ? "aspect-square" : "aspect-[4/3]",
    featured: i < 3,
  }))

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <main className="flex-grow">
        <PageHeader title="Gallery" breadcrumb={[{ title: "Gallery", href: "/gallery" }]} />

        {/* Gallery Categories */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  className={`px-4 py-2 rounded-md ${
                    category.active ? "bg-[#28a745] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  } font-medium transition-colors`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Images */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-[#28a745] text-sm font-medium uppercase tracking-wider">FEATURED</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
                Banana Fiber Production Highlights
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Explore our visual journey from banana stems to sustainable textiles. See our eco-friendly processes and
                beautiful products in action.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {galleryImages
                .filter((img) => img.featured)
                .slice(0, 2)
                .map((image) => (
                  <div key={image.id} className="overflow-hidden rounded-lg shadow-lg group">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={image.image || "/placeholder.svg"}
                        alt={image.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <h3 className="text-xl font-bold text-white">{image.title}</h3>
                          <p className="text-white/80">{categories.find((c) => c.slug === image.category)?.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-[#28a745] text-sm font-medium uppercase tracking-wider">OUR COLLECTION</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
                From Farming to Finished Products
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Explore our complete gallery showcasing the journey of sustainable banana fiber textiles.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-lg shadow-md group">
                  <div className={`relative ${image.aspect}`}>
                    <Image
                      src={image.image || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <h3 className="text-xl font-bold text-white">{image.title}</h3>
                        <p className="text-white/80">{categories.find((c) => c.slug === image.category)?.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Patterns Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-[#28a745] text-sm font-medium uppercase tracking-wider">PATTERNS</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
                Traditional & Contemporary Designs
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our banana fiber textiles feature both traditional Rwandan patterns and contemporary designs, showcasing
                the versatility and beauty of this sustainable material.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md group">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt={`Pattern ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Your Photos */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#28a745] text-sm font-medium uppercase tracking-wider">PARTICIPATE</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
                Share Your RE-BANATEX Experience
              </h2>
              <p className="text-gray-700 mb-8">
                Are you using our products? We'd love to see how you incorporate sustainable banana fiber textiles into
                your life or business. Share your photos with us for a chance to be featured in our gallery!
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                      placeholder="Tell us about your photo and how you're using our products..."
                    ></textarea>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <div className="space-y-2">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-sm text-gray-600">Drag and drop your image here, or click to browse</p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <input type="file" className="hidden" />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                    >
                      Submit Your Photo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
