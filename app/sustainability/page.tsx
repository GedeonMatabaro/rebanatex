import Image from "next/image"
import Link from "next/link"
import { Recycle, Leaf, Globe, ArrowRight } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"

export default function SustainabilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow">
        <PageHeader title="Sustainability" breadcrumb={[{ title: "Sustainability", href: "/sustainability" }]} />

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">OUR COMMITMENT</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Sustainability at the Core of Everything We Do
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    At RE-BANATEX, sustainability isn't just a buzzword—it's the foundation of our business. From how we
                    source our raw materials to our manufacturing processes and community engagement, we're committed to
                    creating positive environmental and social impact.
                  </p>
                  <p>
                    Our journey begins with transforming agricultural waste into valuable resources. By using banana
                    stems that would otherwise be discarded, we're reducing waste while creating sustainable
                    alternatives to conventional materials.
                  </p>
                  <p>
                    We believe that true sustainability encompasses environmental stewardship, social responsibility,
                    and economic viability. Our approach ensures that we're creating products that are not only
                    eco-friendly but also support local communities and provide viable livelihoods.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Sustainable practices at RE-BANATEX"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#28a745] rounded-full p-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">ENVIRONMENTAL IMPACT</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Creating Positive Change for Our Planet
              </h2>
              <p className="text-gray-700">
                Our sustainable practices help reduce waste, conserve resources, and minimize our carbon footprint.
                Here's how we're making a difference:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Waste Reduction",
                  description:
                    "By utilizing banana stems that would otherwise become waste, we're diverting agricultural byproducts from landfills and creating valuable materials.",
                  icon: <Recycle className="h-10 w-10 text-[#28a745]" />,
                },
                {
                  title: "Water Conservation",
                  description:
                    "Our processing facilities use rainwater harvesting and water recycling systems, significantly reducing freshwater consumption compared to conventional textile production.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#28a745"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v1"></path>
                      <path d="M12 21v1"></path>
                      <path d="M4.22 4.22l.77.77"></path>
                      <path d="M19.02 19.02l.77.77"></path>
                      <path d="M2 12h1"></path>
                      <path d="M21 12h1"></path>
                      <path d="M4.22 19.78l.77-.77"></path>
                      <path d="M19.02 4.97l.77-.77"></path>
                      <path d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Low Carbon Footprint",
                  description:
                    "Our production processes prioritize renewable energy and natural drying methods, reducing energy consumption and greenhouse gas emissions.",
                  icon: <Leaf className="h-10 w-10 text-[#28a745]" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Environmental Metrics</h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-[#28a745] text-5xl font-bold mb-2">85%</div>
                  <p className="text-gray-700 font-medium">
                    Less water used compared to conventional cotton processing
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-[#28a745] text-5xl font-bold mb-2">12+</div>
                  <p className="text-gray-700 font-medium">
                    Tons of agricultural waste diverted from landfills monthly
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-[#28a745] text-5xl font-bold mb-2">60%</div>
                  <p className="text-gray-700 font-medium">Reduction in carbon footprint versus synthetic textiles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Responsibility */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Community workshop"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Local artisans"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Skills training"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Community impact"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">SOCIAL RESPONSIBILITY</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Empowering Local Communities</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our commitment to sustainability extends beyond environmental concerns. We believe in creating
                    positive social impact in the communities where we operate.
                  </p>
                  <p>
                    By working with local farmers and artisans, we're creating sustainable livelihoods and preserving
                    traditional craftsmanship while introducing innovative techniques.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#28a745]/10 rounded-full p-3">
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
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Fair Compensation</h3>
                      <p className="text-gray-600">
                        We ensure that all our workers and suppliers receive fair compensation for their contributions,
                        promoting economic stability and growth.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#28a745]/10 rounded-full p-3">
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Skills Training</h3>
                      <p className="text-gray-600">
                        We provide training and skill development opportunities for our workers, ensuring they can grow
                        professionally and personally.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#28a745]/10 rounded-full p-3">
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
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Community Support</h3>
                      <p className="text-gray-600">
                        We invest in community development programs focusing on education, healthcare, and environmental
                        awareness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">CERTIFICATIONS & STANDARDS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Commitment to Transparency and Quality
              </h2>
              <p className="text-gray-700">
                We adhere to international standards and certifications that validate our sustainable practices.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Global Organic Textile Standard (GOTS)",
                  description:
                    "Certification that ensures our textiles meet strict environmental and social criteria throughout the entire supply chain.",
                  logo: "/placeholder.svg?height=100&width=200",
                },
                {
                  title: "Global Recycled Standard (GRS)",
                  description:
                    "Verifies recycled content and responsible social, environmental, and chemical practices in our production.",
                  logo: "/placeholder.svg?height=100&width=200",
                },
                {
                  title: "Fair Trade Certified",
                  description:
                    "Ensures that our products are made according to rigorous social, environmental, and economic standards.",
                  logo: "/placeholder.svg?height=100&width=200",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-20 flex items-center justify-center mb-6">
                    <Image src={cert.logo || "/placeholder.svg"} alt={cert.title} width={200} height={100} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Goals */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">LOOKING FORWARD</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Sustainability Goals</h2>
              <p className="text-gray-700">
                We're constantly working to improve our environmental and social impact. Here are our targets for the
                coming years:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#28a745]">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Short-Term Goals (1-2 Years)</h3>
                <ul className="space-y-3">
                  {[
                    "Achieve 100% renewable energy use in our processing facilities",
                    "Implement closed-loop water systems in all production phases",
                    "Expand farmer training program to reach 200+ additional banana farmers",
                    "Reduce packaging waste by 30% through innovative, biodegradable solutions",
                  ].map((goal, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-[#28a745] mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#28a745]">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Long-Term Vision (3-5 Years)</h3>
                <ul className="space-y-3">
                  {[
                    "Achieve carbon neutrality across all operations",
                    "Develop innovative technologies to utilize 100% of banana plant waste",
                    "Establish education centers in key farming communities",
                    "Create a fully transparent supply chain with blockchain technology",
                    "Expand our model to other agricultural waste streams",
                  ].map((goal, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="h-6 w-6 text-[#28a745] mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 md:py-24 bg-[#28a745] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Sustainability Journey</h2>
              <p className="text-white/80 mb-8 text-lg">
                Whether you're a customer, business partner, or supporter, there are many ways to get involved with our
                sustainability mission.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-4">Choose Sustainable Products</h3>
                <p className="text-white/80 mb-6">
                  By purchasing RE-BANATEX products, you're directly supporting sustainable practices and communities.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center text-white font-medium border-b-2 border-white pb-1 hover:border-transparent transition-colors"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-4">Business Partnerships</h3>
                <p className="text-white/80 mb-6">
                  If you're a business looking to enhance your sustainability credentials, partner with us for
                  eco-friendly materials.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-white font-medium border-b-2 border-white pb-1 hover:border-transparent transition-colors"
                >
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-4">Visit Our Facility</h3>
                <p className="text-white/80 mb-6">
                  See our sustainable practices in action with a tour of our production facility in Rwanda.
                </p>
                <Link
                  href="/contact#tours"
                  className="inline-flex items-center text-white font-medium border-b-2 border-white pb-1 hover:border-transparent transition-colors"
                >
                  Schedule a Tour
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
