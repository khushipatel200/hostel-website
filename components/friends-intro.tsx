"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const girls = [
  { name: "Pallavi", role: "ANIME LOVER", image: "/pallavi-intro.jpg", color: "#000000ff" },
  { name: "Astha", role: "KUROMI GIRL", image: "/astha-intro.jpg", color: "rgba(0, 0, 0, 1)" },
  { name: "Riya", role: "ALWAYS HUNGRY", image: "/riya-intro.jpg", color: "#000000ff" },
  { name: "Priyanshi", role: "LABUBU", image: "/priyanshi-intro.png", color: "#000000ff" },
  { name: "Dona", role: "TAQUILA FAN", image: "/dona-intro.jpg", color: "#000000ff" },
  { name: "Bijal", role: "INTELLIGENT", image: "/bijal-intro.png", color: "#000000ff" },
]

export function FriendsIntro() {
  return (
    <section className="py-24 px-6 overflow-hidden bg-[#faf7f2]">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mb-20 text-center">
          <span className="text-sm font-bold tracking-[0.4em] uppercase text-primary/60 mb-4 block">
            LOVE IS LOVE 
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">
          {girls.map((girl, index) => (
            <motion.div
              key={girl.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-2xl">
                <Image
                  src={girl.image || "/placeholder.svg"}
                  alt={girl.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
              </div>

              <div className="absolute -left-6 top-16 flex flex-col items-center">
                <div className="w-[2px] h-16 bg-primary/40 mb-6" />
                <p className="[writing-mode:vertical-rl] text-4xl font-serif font-black tracking-tighter text-primary/90">
                  {girl.name.toUpperCase()}
                </p>
              </div>

              <div className="absolute bottom-10 right-8 text-right text-white">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-[10px] tracking-[0.5em] font-bold mb-2 opacity-60 uppercase">
                    Starring in "Life at 118"
                  </p>
                  <h3 className="text-3xl font-serif italic font-light tracking-widest">{girl.role}</h3>
                  <div className="mt-4 flex justify-end gap-2 opacity-40 text-[8px] font-mono tracking-widest">
                    <span>SCENE 118</span>
                    <span>/</span>
                    <span>TAKE 2025</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
