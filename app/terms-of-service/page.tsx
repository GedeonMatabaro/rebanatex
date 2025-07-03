"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { Send, CheckCircle, FileText, MessageSquare, Package, Truck, BarChart, Users } from "lucide-react"

export default function GetAQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    productType: "",
    quantity: "",
    timeline: "",
    requirements: "",
    budget: "",
    orderFrequency: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.phone.trim()) errors.phone = "Phone number is required"
    if (!formData.businessType) errors.businessType = "Please select a business type"
    if (!formData.productType) errors.productType = "Please select a product type"
    if (!formData.quantity.trim()) errors.quantity = "Quantity is required"
    if (!formData.timeline) errors.timeline = "Please select a timeline"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    // Here you would normally send the form data to your backend
    console.log("Quote request submitted:", formData)
    setFormSubmitted(true)

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      businessType: "",
      productType: "",
      quantity: "",
      timeline: "",
      requirements: "",
      budget: "",
      orderFrequency: "",
    })

    // Show success message for 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <main className="flex-grow">
        <PageHeader title="Request Product Pricing" breadcrumb={[{ title: "Get A Quote", href: "/get-a-quote" }]} />

        {/* Business Quote Request Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">BUSINESS INQUIRY</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Request Pricing for Sustainable Textiles
                </h2>
                <p className="text-gray-700 mb-8">
                  Whether you're a retailer, manufacturer, or business looking for sustainable materials, we offer
                  competitive pricing for both standard and custom products. Complete this form to receive a detailed
                  quote tailored to your specific requirements.
                </p>

                {formSubmitted && (
                  <div className="bg-[#28a745]/10 border border-[#28a745] text-[#28a745] px-4 py-3 rounded mb-6 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Thank you for your business inquiry! Our sales team will prepare a custom quote and contact you
                    within 24-48 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Person <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          formErrors.name ? "border-red-500" : "border-gray-300"
                        } focus:ring-2 focus:ring-[#28a745] focus:border-transparent`}
                      />
                      {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          formErrors.email ? "border-red-500" : "border-gray-300"
                        } focus:ring-2 focus:ring-[#28a745] focus:border-transparent`}
                      />
                      {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          formErrors.phone ? "border-red-500" : "border-gray-300"
                        } focus:ring-2 focus:ring-[#28a745] focus:border-transparent`}
                      />
                      {formErrors.phone && <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          formErrors.company ? "border-red-500" : "border-gray-300"
                        } focus:ring-2 focus:ring-[#28a745] focus:border-transparent`}
                      />
                      {formErrors.company && <p className="mt-1 text-sm text-red-500">{formErrors.company}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        formErrors.businessType ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-[#28a745] focus:border-transparent`}
                    >
                      <option value="">Select your business type</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Interior Designer">Interior Designer</option>
                      <option value="Fashion Brand">Fashion Brand</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Packaging Company">Packaging Company</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.businessType && <p className="mt-1 text-sm text-red-500">{formErrors.businessType}</p>}
                  </div>
                  <div>
                    <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                      Product Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="productType"
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        formErrors.productType ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-[#28a745] focus:border-transparent`}
                    >
                      <option value="">Select a product type</option>
                      <option value="Banana Yarn">Banana Yarn</option>
                      <option value="Banana Fabric">Banana Fabric</option>
                      <option value="Rugs & Mats">Rugs & Mats</option>
                      <option value="Bioplastics">Bioplastics</option>
                      <option value="Sustainable Packaging">Sustainable Packaging</option>
                      <option value="Custom Product">Custom Product</option>
                      <option value="Multiple Products">Multiple Products</option>
                    </select>
                    {formErrors.productType && <p className="mt-1 text-sm text-red-500">{formErrors.productType}</p>}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated Quantity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 100 meters, 50 kg, etc."
                        className={`w-full px-4 py-2 rounded-md border ${
                          formErrors.quantity ? "border-red-500" : "border-gray-300"
                        } focus:ring-2 focus:ring-[#28a745] focus:border-transparent`}
                      />
                      {formErrors.quantity && <p className="mt-1 text-sm text-red-500">{formErrors.quantity}</p>}
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                        Delivery Timeline <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          formErrors.timeline ? "border-red-500" : "border-gray-300"
                        } focus:ring-2 focus:ring-[#28a745] focus:border-transparent`}
                      >
                        <option value="">Select timeline</option>
                        <option value="As soon as possible">As soon as possible</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                      </select>
                      {formErrors.timeline && <p className="mt-1 text-sm text-red-500">{formErrors.timeline}</p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="orderFrequency" className="block text-sm font-medium text-gray-700 mb-1">
                        Order Frequency
                      </label>
                      <select
                        id="orderFrequency"
                        name="orderFrequency"
                        value={formData.orderFrequency}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                      >
                        <option value="">Select frequency</option>
                        <option value="One-time order">One-time order</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Bi-weekly">Bi-weekly</option>
                        <option value="Weekly">Weekly</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                      Product Specifications & Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Please provide specific details about your product requirements, such as color, texture, dimensions, certifications needed, etc."
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#28a745] focus:border-transparent"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Submit Business Inquiry
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Business Pricing Process</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#28a745]/10 rounded-full p-3 mt-1">
                        <FileText className="h-6 w-6 text-[#28a745]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">1. Submit Business Requirements</h4>
                        <p className="text-gray-600">
                          Provide detailed information about your product needs, quantities, and specifications.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#28a745]/10 rounded-full p-3 mt-1">
                        <Package className="h-6 w-6 text-[#28a745]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">2. Sample Production</h4>
                        <p className="text-gray-600">
                          For custom orders, we'll produce samples for your approval before full production.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#28a745]/10 rounded-full p-3 mt-1">
                        <MessageSquare className="h-6 w-6 text-[#28a745]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">3. Business Consultation</h4>
                        <p className="text-gray-600">
                          Our sales team will discuss volume pricing, lead times, and customization options.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#28a745]/10 rounded-full p-3 mt-1">
                        <Truck className="h-6 w-6 text-[#28a745]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">4. Production & Delivery</h4>
                        <p className="text-gray-600">
                          Once terms are agreed upon, we'll schedule production and coordinate delivery logistics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Business Advantages</h3>
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
                      <span>Volume discounts starting at 100kg/200m orders</span>
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
                      <span>Dedicated account manager for orders over $10,000</span>
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
                      <span>Custom product development services</span>
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
                      <span>Flexible payment terms for established businesses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">BUSINESS PRICING</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Volume-Based Pricing Tiers</h2>
              <p className="text-gray-700">
                We offer competitive pricing based on order volume. The following tiers provide a general guideline for
                our pricing structure.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Standard",
                  description: "For small businesses and initial orders",
                  quantity: "10-99 kg / 20-199 meters",
                  features: [
                    "Standard product range",
                    "Basic customization options",
                    "Standard lead times",
                    "Sample availability (charged)",
                  ],
                  icon: <Package className="h-10 w-10 text-[#28a745]" />,
                },
                {
                  title: "Business",
                  description: "For medium-sized orders and regular customers",
                  quantity: "100-499 kg / 200-999 meters",
                  features: [
                    "5-10% volume discount",
                    "Extended customization options",
                    "Priority production scheduling",
                    "Complimentary samples with orders",
                  ],
                  icon: <BarChart className="h-10 w-10 text-[#28a745]" />,
                  highlighted: true,
                },
                {
                  title: "Enterprise",
                  description: "For large businesses and wholesale orders",
                  quantity: "500+ kg / 1000+ meters",
                  features: [
                    "10-20% volume discount",
                    "Full customization capabilities",
                    "Dedicated account manager",
                    "Flexible payment terms",
                  ],
                  icon: <Users className="h-10 w-10 text-[#28a745]" />,
                },
              ].map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                    tier.highlighted ? "border-2 border-[#28a745] bg-white transform scale-105" : "bg-white"
                  }`}
                >
                  <div className={`p-6 ${tier.highlighted ? "bg-[#28a745] text-white" : "bg-gray-50"}`}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">{tier.title}</h3>
                      <div className={`${tier.highlighted ? "bg-white/20" : "bg-[#28a745]/10"} rounded-full p-3`}>
                        {tier.icon}
                      </div>
                    </div>
                    <p className={`mt-2 ${tier.highlighted ? "text-white/80" : "text-gray-600"}`}>{tier.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-500">TYPICAL QUANTITY</span>
                      <p className="text-lg font-bold text-gray-900">{tier.quantity}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className="h-5 w-5 text-[#28a745] mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className={`w-full py-2 rounded-md font-medium ${
                        tier.highlighted
                          ? "bg-[#28a745] text-white hover:bg-[#218838]"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 text-gray-600">
              <p>
                * Actual pricing depends on specific product requirements, customization, and current market conditions.
              </p>
              <p>Contact our sales team for a personalized quote.</p>
            </div>
          </div>
        </section>

        {/* Business Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center text-[#28a745] mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">BUSINESS PARTNERS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Our Business Customers Say</h2>
              <p className="text-gray-700">
                Hear from businesses that have incorporated our sustainable banana fiber products into their operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "RE-BANATEX has been an invaluable supplier for our sustainable fashion line. Their banana fiber textiles have exceptional quality, and their business terms are flexible and accommodating.",
                  author: "Sarah Johnson",
                  role: "Procurement Director",
                  company: "EcoStyle Fashion",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "We've been ordering custom banana fiber packaging from RE-BANATEX for over a year. Their pricing is competitive, and they consistently deliver on time, even for our large wholesale orders.",
                  author: "Michael Chen",
                  role: "Operations Manager",
                  company: "Green Packaging Solutions",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "The volume discounts and dedicated account management have made RE-BANATEX our preferred supplier for sustainable materials. Their business pricing structure works perfectly for our hotel chain's needs.",
                  author: "Emma Rodriguez",
                  role: "Sustainability Director",
                  company: "Eco Resorts International",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative"
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

        {/* Sample Request Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#28a745]/20 rounded-xl -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Product samples"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center text-[#28a745] mb-4">
                  <span className="text-sm font-medium uppercase tracking-wider">BEFORE YOU ORDER</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Request Product Samples</h2>
                <p className="text-gray-700 mb-6">
                  Before placing a large order, we recommend requesting samples to evaluate our product quality and
                  suitability for your specific needs.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#28a745]/10 rounded-full p-3 mt-1">
                      <Package className="h-6 w-6 text-[#28a745]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Sample Kits</h3>
                      <p className="text-gray-600">
                        We offer standard sample kits for each product category, allowing you to experience our range of
                        materials, textures, and colors.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#28a745]/10 rounded-full p-3 mt-1">
                      <FileText className="h-6 w-6 text-[#28a745]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Custom Samples</h3>
                      <p className="text-gray-600">
                        For custom products, we can produce small-batch samples based on your specifications before
                        committing to a full production run.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="font-bold text-lg mb-3">Sample Pricing</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Standard Sample Kit:</span>
                      <span className="font-medium">$75 (credited toward first order)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Custom Sample Development:</span>
                      <span className="font-medium">Starting at $150</span>
                    </li>
                    <li className="flex justify-between">
                      <span>International Shipping:</span>
                      <span className="font-medium">$25-$50 depending on location</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center justify-center rounded-md bg-[#28a745] px-6 py-3 font-medium text-white hover:bg-[#218838] transition-colors"
                >
                  Request Samples
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#28a745] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with a Sustainable Supplier?</h2>
              <p className="text-white/80 mb-8 text-lg">
                Join the growing number of businesses choosing sustainable banana fiber materials. Our team is ready to
                provide competitive pricing and flexible terms for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center justify-center rounded-md bg-white text-[#28a745] px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
                >
                  Request Business Pricing
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Contact Sales Team
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
