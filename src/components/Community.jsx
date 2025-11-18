import { Users, Map, CalendarDays, Trophy } from 'lucide-react'

export default function Community() {
  const items = [
    { icon: Users, title: 'Forum', desc: 'Gear talk, repairs, spots, tricks, and safety.', cta: 'Start a Topic' },
    { icon: Map, title: 'Spot Map', desc: 'Wind overlays, hazards, and user tips.', cta: 'Explore Spots' },
    { icon: CalendarDays, title: 'Events', desc: 'Meetups, demos, clinics, competitions.', cta: 'View Calendar' },
    { icon: Trophy, title: 'Leaderboard', desc: 'Badges and achievements for community heroes.', cta: 'See Rankings' },
  ]

  return (
    <section className="py-16 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ride Together</h2>
        <p className="text-white/70 mt-2 max-w-2xl">Join local groups, plan sessions, and share stoke with riders near you.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {items.map(({ icon: Icon, title, desc, cta }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-white">
              <Icon className="text-cyan-400" />
              <h3 className="mt-3 font-semibold text-lg">{title}</h3>
              <p className="text-white/70 text-sm mt-1">{desc}</p>
              <button className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm">{cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
