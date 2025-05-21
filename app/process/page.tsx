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
                <span className="text-sm font-medium uppercase tracking-wider">FROM FARM TO FABRIC</span>
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
                  { number: "01", title: "Farming", icon: "🌱" },
                  { number: "02", title: "Harvesting", icon: "🌿" },
                  { number: "03", title: "Processing", icon: "🧵" },
                  { number: "04", title: "Manufacturing", icon: "🧶" },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-4 border-[#28a745] mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                      <span className="text-3xl">{step.icon}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Sustainable Farming</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our process begins with sustainable banana farming practices. We work with local farmers who follow
                    eco-friendly cultivation methods that respect the environment and support biodiversity.
                  </p>
                  <p>
                    Banana plants naturally produce new shoots, making them a highly renewable resource. Each plant
                    produces fruit only once, after which the stem can be harvested for fiber extraction without harming
                    future production.
                  </p>
                  <p>
                    We provide training and support to our partner farmers, helping them implement sustainable practices
                    that improve soil health, conserve water, and reduce the need for chemical inputs.
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
                      <h3 className="font-semibold text-lg mb-1">Renewable Resource</h3>
                      <p className="text-gray-600">
                        Banana plants are naturally regenerative, with each plant producing multiple shoots that grow
                        into new plants.
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
                      <h3 className="font-semibold text-lg mb-1">Eco-Friendly Practices</h3>
                      <p className="text-gray-600">
                        We promote organic farming methods that avoid harmful chemicals and preserve soil health.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
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

        {/* Phase 2: Harvesting */}
        <section id="phase-2" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Harvesting banana stems"
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Careful Harvesting</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    After the banana fruit is harvested, the stem is typically considered agricultural waste. This is
                    where our process begins to create value from what would otherwise be discarded.
                  </p>
                  <p>
                    Our trained harvesters carefully cut down the banana stems, ensuring minimal impact on the
                    surrounding plants and soil. The stems are then transported to our processing facility.
                  </p>
                  <p>
                    By utilizing these stems, we're not only creating valuable products but also helping farmers manage
                    agricultural waste in an environmentally responsible way.
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
                      <h3 className="font-semibold text-lg mb-1">Zero Waste Approach</h3>
                      <p className="text-gray-600">
                        We utilize parts of the banana plant that would otherwise be discarded, creating value from
                        agricultural byproducts.
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
                      <h3 className="font-semibold text-lg mb-1">Sustainable Timing</h3>
                      <p className="text-gray-600">
                        Harvesting occurs after fruit production, ensuring no impact on food production while maximizing
                        resource utilization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 3: Processing */}
        <section id="phase-3" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">PHASE 3</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Eco-Friendly Processing</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Once at our facility, the banana stems undergo a careful processing method to extract the valuable
                    fibers. This process is designed to minimize environmental impact while maximizing fiber quality.
                  </p>
                  <p>
                    First, the stems are stripped to separate the outer sheaths. These sheaths are then processed
                    through a mechanical scraper to remove the pulp, revealing the strong, flexible fibers within.
                  </p>
                  <p>
                    The extracted fibers are washed using rainwater collection systems and biodegradable cleaning
                    agents. They are then naturally dried in the sun, reducing energy consumption and preserving fiber
                    integrity.
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
                      <h3 className="font-semibold text-lg mb-1">Water Conservation</h3>
                      <p className="text-gray-600">
                        Our processing facility uses rainwater harvesting and water recycling systems to minimize
                        freshwater usage.
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
                      <h3 className="font-semibold text-lg mb-1">Natural Methods</h3>
                      <p className="text-gray-600">
                        We use sun drying and natural processing methods whenever possible to reduce energy consumption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Processing banana fibers"
                    width={600}
                    height={400}
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
                    src="/placeholder.svg?height=600&width=800"
                    alt="Manufacturing banana fiber products"
                    width={600}
                    height={400}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Skilled Manufacturing</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The final phase of our process transforms the processed fibers into beautiful, functional products.
                    This is where traditional craftsmanship meets modern design.
                  </p>
                  <p>
                    Our skilled artisans spin the fibers into yarn, which can then be woven into fabric or used directly
                    in various products. We combine traditional weaving techniques with contemporary designs to create
                    unique, sustainable textiles.
                  </p>
                  <p>
                    Throughout the manufacturing process, we maintain our commitment to sustainability by minimizing
                    waste, using natural dyes when possible, and ensuring fair working conditions for all our artisans.
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
                      <h3 className="font-semibold text-lg mb-1">Artisan Craftsmanship</h3>
                      <p className="text-gray-600">
                        We employ local artisans, preserving traditional skills while creating sustainable livelihoods.
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
                      <h3 className="font-semibold text-lg mb-1">Innovation & Design</h3>
                      <p className="text-gray-600">
                        We blend traditional techniques with modern design to create products that are both beautiful
                        and functional.
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
                The end result of our careful process is a range of beautiful, sustainable products that combine
                eco-friendly materials with thoughtful design and skilled craftsmanship.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Banana Yarn",
                  description: "Versatile, biodegradable yarn perfect for weaving and textile production.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Woven Fabrics",
                  description: "Beautiful textiles with natural texture and durability for fashion and home decor.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Handcrafted Products",
                  description: "Unique items that showcase the natural beauty of banana fiber materials.",
                  image: "/placeholder.svg?height=400&width=600",
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
                          href={`/products/${product.title.toLowerCase().replace(/\s+/g, "-")}`}
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