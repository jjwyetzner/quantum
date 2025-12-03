import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function YQuantum2024() {
  // Institutions that participated in 2024
  const institutions = [
    { name: 'Yale University', abbr: 'Y', color: '#00356b' },
    { name: 'MIT', abbr: 'MIT', color: '#a31f34' },
    { name: 'Stanford University', abbr: 'S', color: '#8c1515' },
    { name: 'Harvard University', abbr: 'H', color: '#a51c30' },
    { name: 'Princeton University', abbr: 'P', color: '#e77500' },
    { name: 'Caltech', abbr: 'CIT', color: '#ff6c0c' },
    { name: 'UC Berkeley', abbr: 'Cal', color: '#003262' },
    { name: 'Columbia University', abbr: 'C', color: '#b9d9eb' },
    { name: 'Cornell University', abbr: 'CU', color: '#b31b1b' },
    { name: 'University of Chicago', abbr: 'UC', color: '#800000' },
  ]

  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">YQUANTUM 2024</h1>
        </div>
      </section>

      {/* Event Photo */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Event Photo Placeholder */}
          <div className="aspect-video max-w-4xl mx-auto border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-white/20 text-lg">Event Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Represented */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Institutions Represented</h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-4 max-w-5xl mx-auto">
            {institutions.map((inst) => (
              <div
                key={inst.name}
                className="group relative aspect-square border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center"
                title={inst.name}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xs transition-transform group-hover:scale-110"
                  style={{ backgroundColor: inst.color }}
                >
                  {inst.abbr}
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] text-white/50">
                  {inst.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2024 Sponsors */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">2024 Sponsors</h2>

          {/* Sponsor Logo Grid - Placeholders for actual sponsor logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[3/2] border border-white/10 bg-white/[0.02] flex items-center justify-center hover:border-white/20 transition-all"
              >
                <svg className="w-12 h-12 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Stay tuned for 2026!
          </h2>
          <Link href="/register" className="btn-primary">Register Interest</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
