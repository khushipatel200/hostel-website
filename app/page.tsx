import { ScrapbookHeader } from "@/components/scrapbook-header"
import { FriendsIntro } from "@/components/friends-intro"
import { PolaroidGallery } from "@/components/polaroid-gallery"
import { Guestbook } from "@/components/guestbook"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fdfaf6]">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <ScrapbookHeader />
        <FriendsIntro />
        <PolaroidGallery />
        <Guestbook />

        {/* Updated Footer with your Social Links */}
        <footer className="py-16 text-center border-t border-primary/10 bg-white/50 backdrop-blur-sm">
          <p className="handwritten text-2xl text-muted-foreground italic tracking-wide mb-8">
            Room 118 Forever • Class of 2025 • Albus Memories
          </p>
          
          <div className="flex justify-center gap-12 text-sm font-bold tracking-widest uppercase text-gray-600">
            <a href="https://www.instagram.com/dosaaaaaaa__?igsh=cmJia2xkZDU2Nmdv" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-all hover:scale-110">
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}