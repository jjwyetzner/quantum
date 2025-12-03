import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function YQuantum2025() {
  // Sponsor data - replace with actual logos
  const sponsors = {
    platinum: [
      { name: 'IBM Quantum' },
      { name: 'Google Quantum AI' },
    ],
    gold: [
      { name: 'Microsoft Azure' },
      { name: 'Amazon Braket' },
    ],
    silver: [
      { name: 'IonQ' },
      { name: 'Rigetti' },
      { name: 'D-Wave' },
      { name: 'Quantinuum' },
    ],
    bronze: [
      { name: 'Xanadu' },
      { name: 'PsiQuantum' },
      { name: 'Atom Computing' },
      { name: 'QuEra' },
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
    { name: 'University of Maryland', abbr: 'UMD', color: '#e21833' },
    { name: 'ETH Zürich', abbr: 'ETH', color: '#1f407a' },
    { name: 'University of Oxford', abbr: 'OX', color: '#002147' },
    { name: 'University of Cambridge', abbr: 'CAM', color: '#a3c1ad' },
    { name: 'University of Waterloo', abbr: 'UW', color: '#ffd54f' },
    { name: 'TU Delft', abbr: 'TUD', color: '#00a6d6' },
  ]

  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6">2025 Edition</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">YQUANTUM 2025</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Thank you to everyone who made YQuantum 2025 an incredible success. 
            Stay tuned for 2026!
          </p>
        </div>
      </section>

      {/* Kick-Off */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">YQuantum 2025 Kick-Off</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
            Students from around the world gathered at Yale to push the boundaries 
            of quantum computing.
          </p>
          {/* Event Photo Placeholder */}
          <div className="aspect-video max-w-4xl mx-auto border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-white/20 text-lg">Event Highlights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Participants' },
              { number: '48', label: 'Hours' },
              { number: '100+', label: 'Projects' },
              { number: '$50K+', label: 'In Prizes' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</p>
                <p className="text-sm text-white/40 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Sponsors */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6 text-center">Thank You</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">2025 Sponsors</h2>

          {/* Platinum Sponsors */}
          <div className="mb-16">
            <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-8 text-center">Platinum Partners</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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

          {/* Gold Sponsors */}
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

          {/* Silver Sponsors */}
          <div className="mb-16">
            <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-8 text-center">Silver Partners</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
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

          {/* Bronze Sponsors */}
          <div>
            <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-8 text-center">Bronze Partners</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {sponsors.bronze.map((sponsor, i) => (
                <div
                  key={i}
                  className="aspect-[2/1] border border-white/5 flex items-center justify-center hover:border-white/15 transition-all group"
                >
                  <span className="text-sm font-medium text-white/20 group-hover:text-white/40 transition-colors">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Represented */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6 text-center">Global Reach</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Institutions Represented</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {institutions.map((inst) => (
              <div
                key={inst.name}
                className="group relative aspect-square border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center"
                title={inst.name}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xs transition-transform group-hover:scale-110"
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

      {/* Photo Gallery Placeholder */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6 text-center">Memories</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-center hover:border-white/20 transition-all"
              >
                <svg className="w-10 h-10 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Stay tuned for 2026!
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Register your interest to be the first to know when applications open.
          </p>
          <Link href="/register" className="btn-primary">Register Interest</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
