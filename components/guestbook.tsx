"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"

type Note = {
  id: number
  author: string
  content: string
  date: string
}

export function Guestbook() {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, author: "Bijal", content: "I hope we're still meeting every weekend in 2030.", date: "Dec 2025" },
    { id: 2, author: "Riya", content: "Never forget the taste of the midnight Maggi in Room 118.", date: "Nov 2025" },
  ])
  const [newNote, setNewNote] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newNote || !author) return
    const note: Note = {
      id: Date.now(),
      author,
      content: newNote,
      date: "Now",
    }
    setNotes([note, ...notes])
    setNewNote("")
    setAuthor("")
  }

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-primary/10">
      <div className="bg-card/50 p-8 md:p-16 relative overflow-hidden shadow-2xl rounded-xl border border-white/20">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/handmade-paper.png")' }}
        />

        <div className="relative z-10">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-6xl md:text-7xl handwritten text-primary mb-4 text-center">
              Letters to Our Future Selves
            </h2>
            <div className="w-24 h-1 bg-primary/20 rounded-full" />
            <p className="mt-4 text-muted-foreground font-serif italic text-center">A time capsule for Room 118</p>
          </div>

          <form onSubmit={handleSubmit} className="mb-20 grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="md:col-span-1">
              <label className="text-[10px] tracking-[0.2em] font-bold uppercase text-primary/60 mb-2 block">
                The Author
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-transparent border-b border-primary/20 p-2 focus:border-primary transition-colors outline-none handwritten text-2xl"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-[10px] tracking-[0.2em] font-bold uppercase text-primary/60 mb-2 block">
                The Message
              </label>
              <textarea
                placeholder="Write a note to your future self..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="w-full bg-transparent border-b border-primary/20 p-2 focus:border-primary transition-colors outline-none handwritten text-2xl min-h-[40px] resize-none"
              />
            </div>
            <div className="md:col-span-1">
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-sm flex items-center justify-center gap-3 hover:bg-primary/90 transition-all transform hover:-translate-y-1 shadow-lg active:translate-y-0"
              >
                <span className="font-serif italic text-lg">Leave a Note</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {notes.map((note) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/50 p-8 shadow-sm rounded-lg border-t-2 border-primary/10 hover:shadow-md transition-shadow"
                >
                  <p className="handwritten text-3xl text-foreground/80 leading-relaxed mb-6">"{note.content}"</p>
                  <div className="flex justify-between items-center border-t border-primary/5 pt-4">
                    <span className="font-serif italic text-primary/80">— {note.author}</span>
                    <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                      {note.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
