import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RE-BANATEX - From Banana Stem to Sustainable Textiles",
  description:
    "RE-BANATEX is a Rwandan-based green company turning banana waste into eco-friendly textiles. We promote sustainability, local craftsmanship, and innovation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
