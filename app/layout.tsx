import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Caveat } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-handwritten" })

export const metadata: Metadata = {
  title: "The Hostel Chronicles",
  description: "A nostalgic scrapbook for 6 best friends.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${caveat.variable}`}>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  )
}
