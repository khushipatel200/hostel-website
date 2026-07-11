"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const photos = [
  { id: 1, src: "/polo02.jpeg", caption: "Moment", rotation: -3, size: "large" },
  { id: 2, src: "/polo03.jpeg", caption: "Fun Times", rotation: 4, size: "medium" },
  { id: 3, src: "/polo04.jpeg", caption: "Memories", rotation: -2, size: "small" },
  { id: 4, src: "/polo05.jpeg", caption: "Good Times", rotation: 5, size: "medium" },
  { id: 5, src: "/polo06.JPG", caption: "Cherish", rotation: -4, size: "wide" },
  { id: 6, src: "/polo07.jpg", caption: "Together", rotation: 3, size: "medium" },
  { id: 7, src: "/polo/20250405_184413.jpg", caption: "Memory Lane", rotation: -5, size: "large" },
  { id: 8, src: "/polo/Groupphoto.jpg", caption: "Group Photo", rotation: 2, size: "wide" },
  { id: 9, src: "/polo/IMG_3410.jpg", caption: "Smile", rotation: -3, size: "medium" },
  { id: 10, src: "/polo/IMG_4007.jpg", caption: "Lovely", rotation: -4, size: "small" },
  { id: 11, src: "/polo/IMG_4987.jpg", caption: "Precious", rotation: 4, size: "medium" },
  { id: 12, src: "/polo/IMG_E4334.jpg", caption: "Forever", rotation: 5, size: "medium" },
  { id: 13, src: "/polo/Screenshot (530).png", caption: "Snapshot", rotation: -2, size: "small" },
  { id: 14, src: "/polo/Screenshot (534).png", caption: "Moment", rotation: 3, size: "small" },
  { id: 15, src: "/polo/Screenshot (537).png", caption: "Memory", rotation: -4, size: "small" },
]

export function PolaroidGallery() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl handwritten text-center mb-16">Faded Polaroids</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ rotate: `${photo.rotation}deg` }}
              className={`polaroid break-inside-avoid inline-block w-full mb-8 shadow-xl hover:shadow-2xl transition-shadow`}
            >
              <div className={`relative overflow-hidden bg-white p-3 pb-12`}>
                <div
                  className={`relative ${
                    photo.size === "wide" ? "aspect-[3/2]" : photo.size === "tall" ? "aspect-[2/3]" : "aspect-square"
                  } mb-4 overflow-hidden bg-gray-100 shadow-inner`}
                >
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.caption}
                    fill
                    className="object-cover sepia-[.3] contrast-[1.1] hover:scale-105 transition-transform duration-500"
                  />
                  {photo.id % 3 === 0 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/40 backdrop-blur-sm -rotate-2 z-10 border border-white/20" />
                  )}
                </div>
                <p className="handwritten text-center text-xl text-gray-700 absolute bottom-3 left-0 right-0">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
