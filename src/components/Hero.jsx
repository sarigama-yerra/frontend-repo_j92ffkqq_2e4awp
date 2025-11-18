import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/40 via-[#0B1220]/60 to-[#0B1220]" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-end pb-14">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Ride More. Swap Smarter.
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            The kitesurf marketplace built by riders, for riders—buy, sell, and connect with your local wind community.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link
              to="#post"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#0B1220] font-semibold"
            >
              Post Your Gear
            </Link>
            <a
              href="#browse"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/10"
            >
              Browse Listings
            </a>
          </div>
          <div className="mt-6 text-white/70 text-sm">Secure payments • Verified profiles • Community-rated sellers</div>
        </div>
      </div>
    </section>
  )
}
