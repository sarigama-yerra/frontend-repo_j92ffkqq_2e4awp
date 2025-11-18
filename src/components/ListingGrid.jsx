import { Heart, MapPin, Star } from 'lucide-react'

const demoListings = [
  {
    id: '1',
    title: '2021 Duotone Rebel 9m',
    price: 780,
    location: 'Tarifa, ES',
    condition: 'excellent',
    image: 'https://images.unsplash.com/photo-1703192163788-9304b982dcfd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwyMDIxJTIwRHVvdG9uZSUyMFJlYmVsJTIwOW18ZW58MHwwfHx8MTc2MzQ4MzE5NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.9
  },
  {
    id: '2',
    title: 'F-One Trax 136x40',
    price: 290,
    location: 'Hood River, US',
    condition: 'good',
    image: 'https://images.unsplash.com/photo-1518600506278-4e8ef466b810?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7
  },
  {
    id: '3',
    title: 'Cabrinha Switchblade 12m',
    price: 520,
    location: 'Cumbuco, BR',
    condition: 'like new',
    image: 'https://images.unsplash.com/photo-1720750191560-fd659e75ba2f?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM0ODMxOTR8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 5
  },
]

export default function ListingGrid() {
  return (
    <section className="py-16 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Fresh Drops</h2>
            <p className="text-white/70 mt-2">Trending gear right now</p>
          </div>
          <a href="#" className="text-cyan-400 hover:text-cyan-300">See all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {demoListings.map((l) => (
            <article key={l.id} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={l.image} alt={l.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <button className="absolute top-3 right-3 h-9 w-9 inline-flex items-center justify-center rounded-full bg-[#0B1220]/70 text-white border border-white/10 hover:bg-[#0B1220]/90">
                  <Heart size={18} />
                </button>
              </div>
              <div className="p-4 text-white">
                <h3 className="font-semibold leading-tight line-clamp-1">{l.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-cyan-300 font-bold">${l.price}</span>
                  <span className="text-xs px-2 py-1 rounded bg-white/10 capitalize">{l.condition}</span>
                </div>
                <div className="mt-3 text-white/70 text-sm flex items-center gap-4">
                  <span className="inline-flex items-center gap-1"><MapPin size={14} /> {l.location}</span>
                  <span className="inline-flex items-center gap-1"><Star size={14} className="text-yellow-300"/> {l.rating}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
