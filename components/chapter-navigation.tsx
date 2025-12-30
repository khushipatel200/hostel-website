"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const chapters = [
  { id: "chapter-1", title: "The First Day ", subtitle: "New beginnings in room 118." },
  { id: "chapter-2", title: "The Exam Nights", subtitle: "Caffeine-fueled survival at Albus." },
  { id: "chapter-3", title: "Midnight Feasts", subtitle: "Maggi parties that never ended." },
  { id: "chapter-4", title: "The 2025 Finale", subtitle: "Packing bags but keeping the bonds." },
]

export function ChapterNavigation() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl handwritten text-foreground mb-12">Our Story So Far...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            whileHover={{ scale: 1.02 }}
            className="group cursor-pointer p-8 border-2 border-dashed border-primary/30 relative bg-white/50 hover:bg-white/80 transition-colors"
          >
            <span className="text-sm font-mono text-primary/60 uppercase tracking-widest block mb-2">
              Chapter {index + 1}
            </span>
            <h3 className="text-3xl font-serif text-foreground group-hover:text-primary transition-colors">
              {chapter.title}
            </h3>
            <p className="text-muted-foreground mt-2">{chapter.subtitle}</p>
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="text-primary w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
