import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeaderProps {
  title: string
  breadcrumb?: {
    title: string
    href: string
  }[]
}

export function PageHeader({ title, breadcrumb = [] }: PageHeaderProps) {
  return (
    <section className="w-full bg-[#28a745] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#28a745] opacity-90 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 animate-fadeIn">
          {title}
        </h1>
        {breadcrumb.length > 0 && (
          <div className="flex items-center justify-center text-white/80 gap-2">
            <Link href="/" className="hover:text-white transition-colors flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Home
            </Link>
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1" />
                {index === breadcrumb.length - 1 ? (
                  <span className="text-white">{item.title}</span>
                ) : (
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}