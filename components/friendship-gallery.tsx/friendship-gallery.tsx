"use client"

const friendshipPhotos = [
  { src: "/friend1.jpg", caption: "Where it all started", rotate: "-rotate-3" },
  { src: "/friend2.jpg", caption: "Summer 2024", rotate: "rotate-2" },
  { src: "/friend3.jpg", caption: "The Best Team", rotate: "-rotate-1" },
  { src: "/friend4.jpg", caption: "Birthday Celebrations", rotate: "rotate-6" },
]

export default function FriendshipGallery() {
  return (
    <section className="py-20 bg-[#2B2838] overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-white mb-16 text-center italic">Our Journey</h2>
        
        <div className="flex flex-wrap justify-center gap-10">
          {friendshipPhotos.map((photo, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-4 pb-12 shadow-2xl transition-transform hover:scale-110 hover:z-10 cursor-pointer ${photo.rotate}`}
              style={{ width: '280px' }}
            >
              <div className="bg-gray-200 w-full h-64 overflow-hidden mb-4">
                <img 
                  src={photo.src} 
                  alt="Friendship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-800 font-medium text-center font-serif text-lg">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}