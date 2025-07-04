import Image from "next/image"
import Link from "next/link"
import {  ChevronRight, ArrowRight } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "../../components/page-header"

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen">  
          <MainNav />
      <main className="flex-grow">
        {/* Page Header Banner */}
        <PageHeader 
          title="Our Process" 
          breadcrumb={[
            { title: "Our Process", href: "/process" }
          ]} 
        />

        {/* Process Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">FROM DISCARDED STEMS TO TEXTILE PRODUCTS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Sustainable 4-Phase Process</h2>
              <p className="text-gray-700">
                We transform banana stems that would otherwise go to waste into beautiful, sustainable textiles through
                our innovative process. Each step is carefully designed to minimize environmental impact while
                maximizing quality.
              </p>
            </div>

            {/* Process Flow Diagram */}
            <div className="relative mb-24">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#28a745]/20 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { number: "01", title: "Collecting Banana Stems", icon: "🌱" },
                  { number: "02", title: "Extracing Fibers", icon: "🛞" },
                  { number: "03", title: "Weaving", icon: "🧵" },
                  { number: "04", title: "Manufacturing Products", icon: "🪡" },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-4 border-[#28a745] mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                       <a href={`#phase-${index + 1}`} className="no-underline">
                          <span className="text-3xl">{step.icon}</span>
                      </a>
                      <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-[#28a745] flex items-center justify-center text-white font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <a
                      href={`#phase-${index + 1}`}
                      className="text-[#28a745] font-medium flex items-center hover:underline"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Phase 1: Farming */}
        <section id="phase-1" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">PHASE 1</span>
                </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Collecting Banana Stems</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our process begins by partnering with local farmers to collect discarded banana stems, an abundant byproduct that is often burned or thrown away. By purchasing these stems, we offer farmers an additional source of income from material that previously went to waste.
                </p>
                <p>
                  Rwanda alone produces over 2 million tonnes of bananas each year, generating massive amounts of trunk waste. Instead of contributing to air pollution through burning, we help divert these stems toward sustainable uses, reducing harmful emissions and protecting the environment.
                </p>
                <p>
                  Through this approach, we not only support local livelihoods but also play an active role in reducing climate degradation by transforming agricultural waste into valuable, eco-friendly products.
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
                        <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                        <path d="M21 12a9 9 0 0 0-9-9v9h9z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Supporting Farmers</h3>
                      <p className="text-gray-600">
                        We buy discarded banana stems directly from local farmers, providing them with extra income for material that would otherwise be burned or wasted.
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Reducing Waste & Emissions</h3>
                      <p className="text-gray-600">
                        By diverting banana stems from burning or dumping, we help reduce air pollution and environmental degradation, turning agricultural waste into sustainable products.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/Banana_Trunc.jpg"
                    alt="Sustainable banana farming"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#28a745] rounded-full p-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">01</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="phase-2" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/Fiber_Extraction.jpg"
                    alt="Extracting banana fibers"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#28a745] rounded-full p-4 shadow-lg transform group-hover:-rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">02</span>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">PHASE 2</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Extracting Fibers</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Once collected, the banana stems are brought to our facility where the transformation begins. Our team of mechanical engineers designed and built a custom fiber extractor machine specifically for this purpose.
                  </p>
                  <p>
                    This machine efficiently separates strong, flexible fibers from the trunks that would otherwise go to waste. By innovating locally, we ensure consistent quality and reduce manual labor, making the process both sustainable and scalable.
                  </p>
                  <p>
                    After extraction, the raw fibers are carefully hung in the sun to dry naturally. This gentle, chemical-free drying method preserves the fibers’ strength and color while minimizing environmental impact.
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
                        <path d="M20 7h-9"></path>
                        <path d="M14 17H5"></path>
                        <circle cx="17" cy="17" r="3"></circle>
                        <circle cx="7" cy="7" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Locally Engineered Solution</h3>
                      <p className="text-gray-600">
                        Our extractor machine was designed by local mechanical engineers to maximize fiber yield and quality while reducing waste.
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
                        <path d="M3 6a9 9 0 0 1 9 9"></path>
                        <path d="M3 6h4l2 -4"></path>
                        <path d="M3 6v4l-4 2"></path>
                        <circle cx="15" cy="15" r="6"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Natural Sun Drying</h3>
                      <p className="text-gray-600">
                        Extracted fibers are air-dried under the sun, preserving their natural quality without chemicals or energy-intensive processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Phase 3: Weaving */}
        <section id="phase-3" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">PHASE 3</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Meticulous Weaving</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Once the fibers are sun-dried, they’re ready for transformation. Our skilled artisans meticulously weave these fibers by hand, creating beautiful, durable fabric through time-honored techniques.
                  </p>
                  <p>
                    Every piece is crafted with care and heart, preserving traditional weaving knowledge while supporting sustainable livelihoods. Manual weaving ensures minimal environmental impact, avoiding the energy demands of industrial looms.
                  </p>
                  <p>
                    This artisanal process celebrates local skill and culture, turning natural banana fibers into high-quality textiles that tell a story of sustainability, community, and craftsmanship.
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
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Handcrafted Quality</h3>
                      <p className="text-gray-600">
                        Each fabric is woven manually with precision and care, ensuring unique, high-quality textiles with minimal environmental impact.
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Cultural Craftsmanship</h3>
                      <p className="text-gray-600">
                        Our process celebrates local artistry and tradition, turning natural fibers into fabrics that support communities and honor sustainable practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/Pweaving.jpg"
                    alt="Manufacturing banana fiber products"
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#28a745] rounded-full p-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">03</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 4: Manufacturing */}
        <section id="phase-4" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/products_bag.JPG"
                    alt="Manufacturing banana fiber products"
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#28a745] rounded-full p-4 shadow-lg transform group-hover:-rotate-12 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">04</span>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">PHASE 4</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Manufacturing Products</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    In the final phase, our woven banana fiber fabric is transformed into finished products. Skilled local artisans cut, stitch, and assemble each piece with care, turning raw fabric into beautiful, durable bags and accessories.
                  </p>
                  <p>
                    This hands-on manufacturing process supports local jobs and preserves traditional craftsmanship, while offering customers sustainable, high-quality alternatives to conventional products.
                  </p>
                  <p>
                    Every product reflects our commitment to thoughtful design, sustainability, and community empowerment—proving that fashion can be both beautiful and responsible.
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Local Artisan Work</h3>
                      <p className="text-gray-600">
                        We partner with local artisans to craft bags and accessories, supporting skilled jobs and fair incomes.
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
                        <path d="M12 2v4"></path>
                        <path d="M12 18v4"></path>
                        <path d="m4.93 4.93 2.83 2.83"></path>
                        <path d="m16.24 16.24 2.83 2.83"></path>
                        <path d="M2 12h4"></path>
                        <path d="M18 12h4"></path>
                        <path d="m4.93 19.07 2.83-2.83"></path>
                        <path d="m16.24 7.76 2.83-2.83"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Thoughtful Design</h3>
                      <p className="text-gray-600">
                        Our products combine sustainability with modern style, offering durable, practical, and beautiful alternatives to fast fashion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Final Products Showcase */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">THE RESULT</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">From Waste to Wonderful</h2>
              <p className="text-gray-700">
                The result of our thoughtful process is a range of sustainable, beautifully crafted products that turn agricultural waste into everyday essentials with purpose and style.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Office & Laptop Bags",
                  description: "Elegant, durable, and biodegradable bags designed for carrying laptops, documents, and everyday work essentials with style and sustainability.",
                  image: "/laptop-bag.jpg",
                  link: "/products/laptop-bag",
                },
                {
                  title: "Carry Bags & Accessories",
                  description: "Stylish, eco-friendly carry bags and versatile accessories handcrafted from banana fiber for conscious everyday use.",
                  image: "/bag.jpeg",
                  link: "/products/bags",
                },
                {
                  title: "Banana Fiber Fabric",
                  description: "Naturally textured, durable fabric made from banana fibers—perfect for custom fashion, home decor, and other sustainable designs.",
                  image: "/banana-fabric.webp",
                  link:"/products/banana-fabric",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={600}
                      height={400}
                      className="w-full aspect-[3/2] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <Link
                          href={product.link }
                          className="inline-flex items-center bg-white text-[#28a745] px-4 py-2 rounded-md font-medium"
                        >
                          Explore Products
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Link
                      href={`/products/${product.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-[#28a745] font-medium hover:underline"
                    >
                      View Products
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
              >
                Explore All Products
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}