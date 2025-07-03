import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";

export default function CareersSection() {
  return (
    <section id="careers" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center text-[#28a745] mb-4">
              <span className="text-sm font-medium uppercase tracking-wider">CAREERS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Grow With Us</h2>
            <p className="text-gray-700 mb-8">
              Join our team of passionate individuals dedicated to sustainable innovation and positive impact. We offer a
              collaborative environment where creativity and sustainability go hand in hand.
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Head Designer / Designer Specialist</h3>
                <p className="text-[#28a745] font-medium mb-3">Full-time • Kigali, Rwanda</p>
                <p className="text-gray-600 mb-4">
                  Fashion designer ready to fly with us! Lead the design of innovative, eco-friendly textiles and products
                  made from banana fiber. Collaborate with artisans and our team to create sustainable fashion that makes a
                  statement.
                </p>
                <Link
                  href="/careers/head-designer"
                  className="inline-flex items-center text-[#28a745] font-medium hover:underline group"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                    src="/Natural-Fabric.jpg"
                    alt="Banana fiber textile design"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/laptop-bag.jpg"
                    alt="Sustainable product creation"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/Carry-Bag.png"
                    alt="Eco-friendly design process"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/hero.jpeg"
                    alt="Team collaboration"
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
  );
}