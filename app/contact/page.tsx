"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message for 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <main className="flex-grow">
        <PageHeader title="Contact Us" breadcrumb={[{ title: "Contact", href: "/contact" }]} />

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">We'd Love to Hear From You</h2>
              <p className="text-gray-700">
                Whether you have questions about our products, want to place an order, or are interested in
                collaborating, we're here to help. Reach out to us using any of the methods below.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-[#28a745]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-[#28a745]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Call Us</h3>
                <p className="text-gray-600 mb-4">Our team is available to assist you during business hours.</p>
                <a href="tel:+250123456789" className="text-[#28a745] font-medium hover:underline">
                  +250 123 456 789
                </a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-[#28a745]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-[#28a745]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
                <a href="mailto:info@rebanatex.com" className="text-[#28a745] font-medium hover:underline">
                  info@rebanatex.com
                </a>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-[#28a745]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-[#28a745]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Visit Us</h3>
                <p className="text-gray-600 mb-4">Come see our production facility and showroom in person.</p>
                <address className="text-[#28a745] font-medium not-italic">Kigali, Rwanda</address>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">SEND A MESSAGE</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Contact Form</h2>
                <p className="text-gray-700 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. We value your feedback and
                  inquiries.
                </p>

                {formSubmitted && (
                  <div className="bg-[#28a745]/10 border border-[#28a745] text-[#28a745] px-4 py-3 rounded mb-6">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Wholesale">Wholesale</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">FIND US</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Location</h2>
                <p className="text-gray-700 mb-8">
                  Visit our production facility and showroom to see our sustainable textiles in person. We offer tours
                  by appointment.
                </p>
                <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Map location"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#28a745] mt-0.5" />
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p className="text-gray-600">8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#28a745] mt-0.5" />
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p className="text-gray-600">9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#28a745] mt-0.5" />
                      <div>
                        <p className="font-medium">Sunday</p>
                        <p className="text-gray-600">Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tours Section */}
        <section id="tours" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">FACILITY TOURS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Visit Our Production Facility</h2>
              <p className="text-gray-700">
                Experience our sustainable production process firsthand. We offer guided tours of our facility where you
                can see how we transform banana stems into beautiful textiles.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Facility tour"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Tour Information</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our guided tours provide an in-depth look at our sustainable production process, from raw material
                    to finished product. You'll learn about our eco-friendly practices and see our skilled artisans at
                    work.
                  </p>
                  <p>Tours are available by appointment and typically last 60-90 minutes.</p>
                </div>
                <div className="mt-8 space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">Tour Details</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 text-[#28a745] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Available Monday-Friday, with morning and afternoon sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 text-[#28a745] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Duration: 60-90 minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 text-[#28a745] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Group size: Up to 15 people</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 text-[#28a745] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Advance booking required</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                  >
                    Schedule a Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Common Questions</h2>
              <p className="text-gray-700">
                Find answers to frequently asked questions about our products, ordering process, and more.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "What payment methods do you accept?",
                    answer:
                      "We accept credit cards (Visa, Mastercard), PayPal, bank transfers, and mobile money payments. For large orders, we can discuss other payment arrangements.",
                  },
                  {
                    question: "Do you ship internationally?",
                    answer:
                      "Yes, we ship our products worldwide. Shipping costs and delivery times vary depending on your location. Please contact us for specific shipping information for your country.",
                  },
                  {
                    question: "Can I place a custom order?",
                    answer:
                      "We specialize in custom orders for businesses and individuals. Please contact us with your specific requirements, and we'll work with you to create products that meet your needs.",
                  },
                  {
                    question: "How do I care for banana fiber products?",
                    answer:
                      "Most of our banana fiber textiles can be gently hand washed with mild soap and air-dried. Specific care instructions are included with each product. For detailed care information, please refer to the product description or contact us.",
                  },
                  {
                    question: "Do you offer wholesale pricing?",
                    answer:
                      "Yes, we offer wholesale pricing for retailers and businesses. Please contact our sales team for more information about our wholesale program and minimum order quantities.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <p className="text-gray-700 mb-4">
                  Don't see your question here? Feel free to reach out to us directly.
                </p>
                <a
                  href="mailto:info@rebanatex.com"
                  className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us Your Question
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
