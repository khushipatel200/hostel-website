"use client"

import { motion } from "framer-motion"

export function ScrapbookHeader() {
  return (
    <header className="py-16 px-6 text-center relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-6xl md:text-8xl handwritten text-primary mb-4 rotate-[-2deg]">A ROOM 118 PRODUCTION</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto italic">
          "6 hearts, 4 walls, and a lifetime of stories tucked away in room 118."
        </p>
      </motion.div>

      {/* Decorative "Taped" element */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-primary/20 backdrop-blur-sm -rotate-2 z-10" />
    </header>
  )
}
