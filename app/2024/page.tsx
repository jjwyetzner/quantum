import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function YQuantum2024() {
  const sponsors = {
    platinum: [
      { name: 'IBM Quantum' },
    ],
    gold: [
      { name: 'Google Quantum AI' },
      { name: 'Microsoft Azure' },
    ],
    silver: [
      { name: 'IonQ' },
      { name: 'Rigetti' },
      { name: 'D-Wave' },
    ]
  }

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
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6">2024 Edition</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">YQUANTUM 2024</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            A look back at our inaugural quantum computing hackathon.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">The Beginning</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                YQuantum 2024 marked the beginning of Yale&apos;s premier quantum computing hackathon. 
                Students from top institutions gathered to explore the frontiers of quantum computing.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                From quantum algorithms to real-world applications, participants tackled 
                challenges that will shape the future of computing.
              </p>
            </div>
            <div className="aspect-video border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-white/20">2024 Highlights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '300+', label: 'Participants' },
              { number: '48', label: 'Hours' },
              { number: '75+', label: 'Projects' },
              { number: '$30K+', label: 'In Prizes' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</p>
                <p className="text-sm text-white/40 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2024 Sponsors */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6 text-center">Thank You</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">2024 Sponsors</h2>

          {/* Platinum */}
          <div className="mb-16">
            <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-8 text-center">Platinum Partner</p>
            <div className="max-w-md mx-auto">
              {sponsors.platinum.map((sponsor, i) => (
                <div
                  key={i}
                  className="aspect-[2.5/1] border-2 border-white/20 bg-white/[0.03] flex items-center justify-center hover:border-white/40 hover:bg-white/[0.05] transition-all group"
                >
                  <span className="text-2xl font-semibold text-white/50 group-hover:text-white/70 transition-colors">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gold */}
          <div className="mb-16">
            <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-8 text-center">Gold Partners</p>
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {sponsors.gold.map((sponsor, i) => (
                <div
                  key={i}
                  className="aspect-[2/1] border border-white/15 bg-white/[0.02] flex items-center justify-center hover:border-white/30 hover:bg-white/[0.04] transition-all group"
                >
                  <span className="text-xl font-medium text-white/40 group-hover:text-white/60 transition-colors">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Silver */}
          <div>
            <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-8 text-center">Silver Partners</p>
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
              {sponsors.silver.map((sponsor, i) => (
                <div
                  key={i}
                  className="aspect-[2/1] border border-white/10 bg-white/[0.01] flex items-center justify-center hover:border-white/20 transition-all group"
                >
                  <span className="text-base font-medium text-white/30 group-hover:text-white/50 transition-colors">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutions */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6 text-center">Participants From</p>
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

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready for 2026?
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Join us for the next edition of YQuantum.
          </p>
          <Link href="/register" className="btn-primary">Register Now</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
