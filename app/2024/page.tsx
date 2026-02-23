import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'
import SponsorsGrid from '../components/SponsorsGrid'
import { sponsors2024 } from '../content/sponsors'
import { universities } from '../content/universities'

export default function YQuantum2024() {
  return (
    <main className="bg-sky-light min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-yale-navy mb-8">YQUANTUM 2024</h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            April 13th, 2024 at the Yale Quantum Institute
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">300</p>
              <p className="text-sm text-slate-600 uppercase">Registrants</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">10</p>
              <p className="text-sm text-slate-600 uppercase">Countries</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">32</p>
              <p className="text-sm text-slate-600 uppercase">Universities</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">36</p>
              <p className="text-sm text-slate-600 uppercase">Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-32 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-yale-navy mb-16">2024 Sponsors</h2>
          <SponsorsGrid sponsors={sponsors2024} />
        </div>
      </section>

      {/* Institutions Represented */}
      <section className="py-32 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-yale-navy mb-16 text-center">Institutions Represented</h2>
          <SponsorsGrid sponsors={universities} />
        </div>
      </section>

      {/* 6 Challenges */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-yale-navy">6 Challenges</h2>
          <p className="text-slate-700 mt-4">Set by industry sponsors</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
