"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const memoryChapters = [
  {
    title: "Fashion show",
    description: "Astha, Riya, Dona, Pallavi, Bijal, and Priyanshi—six strangers who turned Room 118 into a home.",
    image: "/first-day-room.jpg",
    side: "left",
    maskClass: "rough-edge-1",
  },
  {
    title: "Chapter 2: Midnight Maggi",
    description: "When the hostel mess closed, the electric kettle became our best friend. Best meals ever.",
    image: "/midnight-maggi.jpg",
    side: "right",
    maskClass: "rough-edge-2",
  },
  {
    title: "Chapter 3: The Exam Nights",
    description: "Fuelled by caffeine and shared panic. We survived every single one of them, together.",
    image: "/exam-panic.jpg",
    side: "left",
    maskClass: "rough-edge-1",
  },
  {
    title: "Chapter 4: The Last Walkout",
    description: "The boxes were packed, but the room stayed full of all the echoes of our four years.",
    image: "/graduation-exit.jpg",
    side: "right",
    maskClass: "rough-edge-2",
  },
]

export function TornEdgeGallery() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1000 2000">
        <path
          d="M 500 100 Q 800 400 500 700 T 500 1300 T 500 1900"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-primary journey-line"
        />
      </svg>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl handwritten text-center mb-24 text-primary">Our Journey</h2>

        <div className="space-y-48">
          {memoryChapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${chapter.side === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
            >
              <div className="flex-1 w-full relative">
                <div className={`relative aspect-[4/3] w-full shadow-2xl ${chapter.maskClass} bg-secondary/20`}>
                  <Image
                    src={chapter.image || "/placeholder.svg"}
                    alt={chapter.title}
                    fill
                    className="object-cover sepia-[.2] hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-bold text-foreground/80 uppercase tracking-widest">{chapter.title}</h3>
                <p className="handwritten text-2xl text-muted-foreground leading-relaxed">{chapter.description}</p>
                <div className="pt-4">
                  <span className="text-sm font-bold border-b-2 border-primary/40 pb-1 cursor-pointer hover:text-primary transition-colors tracking-tighter uppercase">
                    Read the Full Memory
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
