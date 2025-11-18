import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import ListingGrid from './components/ListingGrid'
import Community from './components/Community'

function App() {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <ListingGrid />
        <Community />

        <section id="post" className="py-16 bg-[#0B1220]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-extrabold">Ready to list your gear?</h3>
                <p className="text-white/70 mt-1">Upload photos, set your price, and connect with verified buyers in minutes.</p>
              </div>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#0B1220] font-semibold">Post Your Gear</a>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-white/10 bg-[#0B1220]">
          <div className="max-w-7xl mx-auto px-4 text-white/70 text-sm flex flex-col sm:flex-row gap-2 items-center justify-between">
            <p>© {new Date().getFullYear()} KiteQuiver — Built by riders, for riders.</p>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#">Safety & Trust</a>
              <a className="hover:text-white" href="#">Guides</a>
              <a className="hover:text-white" href="/test">System Status</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
