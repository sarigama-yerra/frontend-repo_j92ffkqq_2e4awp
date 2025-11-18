import { ShieldCheck, Star, Camera, MessageSquare, Heart, Filter, BadgeCheck } from 'lucide-react'

const items = [
  {
    icon: Camera,
    title: 'Photo & Video Uploads',
    desc: 'Drag-and-drop uploads with clean galleries that showcase your gear.'
  },
  {
    icon: Filter,
    title: 'Advanced Search & Filters',
    desc: 'Dial in by size, year, condition, location, brand, model, and more.'
  },
  {
    icon: MessageSquare,
    title: 'Buyer–Seller Chat',
    desc: 'Ask questions, share images, make offers, and schedule meetups safely.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    desc: 'Escrow-style flow with seller payouts after delivery confirmation.'
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    desc: 'Trust badges, verified purchases, and community-driven feedback.'
  },
  {
    icon: Heart,
    title: 'Wishlist & Alerts',
    desc: 'Save favorites and get notified on price drops and new matches.'
  },
  {
    icon: BadgeCheck,
    title: 'Verified Profiles',
    desc: 'ID checks help great sellers stand out and keep waters safe.'
  },
]

export default function Features() {
  return (
    <section id="browse" className="py-16 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Built for Kitesurfers</h2>
        <p className="text-white/70 mt-2 max-w-2xl">Filters that speak your language and tools that make selling fast.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-white">
              <Icon className="text-cyan-400" />
              <h3 className="mt-3 font-semibold text-lg">{title}</h3>
              <p className="text-white/70 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
