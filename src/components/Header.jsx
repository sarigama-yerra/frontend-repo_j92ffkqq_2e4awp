import { Link } from 'react-router-dom'
import { Menu, Search, User, PlusCircle } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B1220]/70 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-white/5 text-white">
          <Menu size={20} />
        </button>
        <Link to="/" className="text-white font-extrabold tracking-tight text-xl">
          KiteQuiver
        </Link>

        <div className="flex-1 flex items-center max-w-xl ml-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              placeholder="Search kites, boards, bars, foils..."
            />
          </div>
        </div>

        <Link
          to="#post"
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#0B1220] font-semibold px-3 py-2 rounded-lg transition-colors"
        >
          <PlusCircle size={18} />
          <span>Post Your Gear</span>
        </Link>

        <button className="p-2 rounded-lg hover:bg-white/5 text-white">
          <User size={20} />
        </button>
      </div>
    </header>
  )
}
