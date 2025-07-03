"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

type NavItem = {
  title: string
  href: string
  submenu?: { title: string; href: string }[]
}

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const navItems: NavItem[] = [
    { title: "Home", href: "/" },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Our Process",
      href: "/process",
    },
    {
      title: "Products",
      href: "/products",
      submenu: [
        { title: "Laptop Bag", href: "/products/laptop-bag" },
        { title: "Banana Fabric", href: "/products/banana-fabric" },
        { title: "Cary Bag", href: "/products/bags" },
        { title: "Custom Orders", href: "/products/custom-orders" },
      ],
    },
    { title: "Sustainability", href: "/sustainability" },
    { title: "Gallery", href: "/gallery" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ]

  const handleDropdownToggle = (title: string) => {
    if (openDropdown === title) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(title)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
    <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="RE-BANATEX Logo"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
        <span className="text-xl font-bold text-gray-800 hidden sm:block">REBANATEX</span>
      </Link>
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              {item.submenu ? (
                <div className="relative">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors ${
                      pathname === item.href || pathname.startsWith(`${item.href}/`) 
                        ? "bg-emerald-600 text-white" 
                        : "text-gray-800"
                    }`}
                    onClick={() => handleDropdownToggle(item.title)}
                  >
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                      <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px] border border-gray-100">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-emerald-100 transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors ${
                    pathname === item.href 
                      ? "bg-emerald-600 text-white" 
                      : "text-gray-800"
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto py-4 px-4 md:px-6">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.title} className="py-1">
                  {item.submenu ? (
                    <>
                      <button
                        className={`flex items-center justify-between w-full text-left px-4 py-2 rounded-full ${
                          pathname === item.href || openDropdown === item.title
                            ? "bg-emerald-600 text-white"
                            : "text-gray-800 hover:bg-emerald-100"
                        }`}
                        onClick={() => handleDropdownToggle(item.title)}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            openDropdown === item.title ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === item.title && (
                        <div className="pl-6 mt-1 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-800 hover:bg-emerald-100 rounded-full transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded-full ${
                        pathname === item.href 
                          ? "bg-emerald-600 text-white" 
                          : "text-gray-800 hover:bg-emerald-100"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}