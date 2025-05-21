import Image from "next/image"
import Link from "next/link"
import { Leaf, Users, Star, Briefcase, Quote, ChevronRight } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "../../components/page-header"
import { MainNav } from "@/components/main-nav"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">  
        <MainNav />
      <main className="flex-grow">
        {/* Page Header Banner */}
        <PageHeader 
          title="About Us" 
          breadcrumb={[ 
            { title: "About Us", href: "/about" }
          ]} 
        />

        {/* Our Story Section */}
        <section id="our-story" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div  className="order-2 md:order-1">
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">OUR STORY</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Inspiration Behind RE-BANATEX</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    RE-BANATEX was born from a simple observation: Rwanda's abundant banana plantations produced not
                    only delicious fruit but also tons of agricultural waste in the form of banana stems and leaves.
                  </p>
                  <p>
                    Our founder, while walking through local farms, noticed how these materials were often discarded or
                    burned, creating environmental issues while wasting a potentially valuable resource.
                  </p>
                  <p>
                    Inspired by traditional craftsmanship and modern sustainability principles, we began experimenting
                    with processing techniques to transform these banana byproducts into durable, beautiful textiles.
                  </p>
                  <p>
                    Today, RE-BANATEX stands as a pioneer in eco-friendly textile production in Rwanda, creating
                    economic opportunities for local communities while promoting sustainable practices in agriculture
                    and manufacturing.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="RE-BANATEX story"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#28a745] rounded-full p-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission-vision" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">MISSION & VISION</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Purpose and Future Direction</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="bg-[#28a745]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#28a745"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 22v-2"></path>
                    <path d="m17 20.66-1-1.73"></path>
                    <path d="M11 10.27 7 3.34"></path>
                    <path d="m20.66 17-1.73-1"></path>
                    <path d="m3.34 7 1.73 1"></path>
                    <path d="M14 12h8"></path>
                    <path d="M2 12h2"></path>
                    <path d="m20.66 7-1.73 1"></path>
                    <path d="m3.34 17 1.73-1"></path>
                    <path d="m17 3.34-1 1.73"></path>
                    <path d="m7 20.66 1-1.73"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  To transform agricultural waste into high-quality, sustainable textiles while empowering local
                  communities, preserving traditional craftsmanship, and promoting environmental stewardship in Rwanda
                  and beyond.
                </p>
                <ul className="space-y-3">
                  {[
                    "Reduce agricultural waste",
                    "Create sustainable products",
                    "Empower local artisans",
                    "Promote eco-friendly practices",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 text-[#28a745] mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="bg-[#28a745]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#28a745"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-700 mb-6">
                  To become the leading sustainable textile company in Africa, recognized globally for our innovative
                  approach to circular economy, exceptional product quality, and positive social and environmental
                  impact.
                </p>
                <ul className="space-y-3">
                  {[
                    "Global recognition for sustainable innovation",
                    "Industry leader in circular economy",
                    "Expansion of eco-friendly product lines",
                    "Positive impact on communities and environment",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 text-[#28a745] mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section id="our-team" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">OUR TEAM</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Meet the People Behind RE-BANATEX</h2>
              <p className="text-gray-700">
                Our diverse team combines expertise in sustainable agriculture, textile production, design, and business
                management to create innovative eco-friendly products.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Mutoni",
                  role: "Founder & CEO",
                  bio: "With a background in sustainable agriculture and textile design, Sarah founded RE-BANATEX to address agricultural waste while creating beautiful products.",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Jean-Paul Uwimana",
                  role: "Head of Production",
                  bio: "Jean-Paul oversees our manufacturing process, ensuring quality and sustainability at every step from raw material to finished product.",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Marie Ingabire",
                  role: "Design Director",
                  bio: "Marie combines traditional Rwandan patterns with contemporary design to create our unique textile patterns and product designs.",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "David Mugabo",
                  role: "Sustainability Manager",
                  bio: "David ensures our processes remain environmentally friendly and works with local farmers to source materials sustainably.",
                  image: "/placeholder.svg?height=400&width=400",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full flex justify-center space-x-3">
                        {["twitter", "linkedin", "mail"].map((social, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-[#28a745] transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {social === "twitter" && (
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                              )}
                              {social === "linkedin" && (
                                <>
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                  <rect x="2" y="9" width="4" height="12"></rect>
                                  <circle cx="4" cy="4" r="2"></circle>
                                </>
                              )}
                              {social === "mail" && (
                                <>
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                  <polyline points="22,6 12,13 2,6"></polyline>
                                </>
                              )}
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#28a745] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Join Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">CAREERS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Grow With Us</h2>
                <p className="text-gray-700 mb-8">
                  Join our team of passionate individuals dedicated to sustainable innovation and positive impact. We
                  offer a collaborative environment where creativity and sustainability go hand in hand.
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Production Specialist</h3>
                    <p className="text-[#28a745] font-medium mb-3">Full-time • Kigali, Rwanda</p>
                    <p className="text-gray-600 mb-4">
                      Oversee the production of banana fiber textiles, ensuring quality and efficiency while maintaining
                      sustainable practices.
                    </p>
                    <Link
                      href="/careers/production-specialist"
                      className="inline-flex items-center text-[#28a745] font-medium hover:underline"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability Coordinator</h3>
                    <p className="text-[#28a745] font-medium mb-3">Full-time • Kigali, Rwanda</p>
                    <p className="text-gray-600 mb-4">
                      Develop and implement sustainability initiatives across our operations, from sourcing to
                      production and distribution.
                    </p>
                    <Link
                      href="/careers/sustainability-coordinator"
                      className="inline-flex items-center text-[#28a745] font-medium hover:underline"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/careers"
                    className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                  >
                    View All Opportunities
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Team member working"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Team collaboration"
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
                        alt="Office environment"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Team meeting"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#28a745] rounded-full p-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">TESTIMONIALS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What People Say About Us</h2>
              <p className="text-gray-700">
                Hear from our partners, clients, and team members about their experience working with RE-BANATEX.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "RE-BANATEX has revolutionized how we think about agricultural waste. Their banana fiber textiles are not only sustainable but also beautiful and durable.",
                  author: "Maria Johnson",
                  role: "Sustainable Fashion Designer",
                  company: "EcoStyle",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Working with RE-BANATEX has been a game-changer for our community. They've created jobs while promoting sustainable practices that benefit our environment.",
                  author: "Emmanuel Nkusi",
                  role: "Community Leader",
                  company: "Kigali Rural Development Initiative",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "The quality of RE-BANATEX products is exceptional. We've incorporated their banana fiber textiles into our hotel decor, and guests are always impressed by the story behind them.",
                  author: "Sophie Dubois",
                  role: "Procurement Manager",
                  company: "Green Leaf Hotels",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative group"
                >
                  <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                    <div className="bg-[#28a745] rounded-full p-3 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
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
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}