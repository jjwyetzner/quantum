'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Sponsor data - replace src with actual logos
  const sponsors2025 = [
    { name: 'IBM Quantum', tier: 'platinum' },
    { name: 'Google Quantum AI', tier: 'platinum' },
    { name: 'Microsoft Azure', tier: 'gold' },
    { name: 'Amazon Braket', tier: 'gold' },
    { name: 'IonQ', tier: 'silver' },
    { name: 'Rigetti', tier: 'silver' },
    { name: 'D-Wave', tier: 'silver' },
    { name: 'Quantinuum', tier: 'silver' },
  ]

  // Institution data with abbreviations for logo-style display
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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-xl font-bold tracking-tight">
              YQuantum
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <Link href="/2025" className="text-sm text-white/60 hover:text-white transition-colors link-hover">YQUANTUM 2025</Link>
              <Link href="/2024" className="text-sm text-white/60 hover:text-white transition-colors link-hover">YQUANTUM 2024</Link>
              <Link href="/faqs" className="text-sm text-white/60 hover:text-white transition-colors link-hover">FAQs</Link>
              <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors link-hover">CONTACT</Link>
              <Link href="/register" className="btn-primary">REGISTRATION</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-8">
            <div className="flex flex-col gap-6">
              <Link href="/2025" className="text-lg" onClick={() => setMenuOpen(false)}>YQUANTUM 2025</Link>
              <Link href="/2024" className="text-lg" onClick={() => setMenuOpen(false)}>YQUANTUM 2024</Link>
              <Link href="/faqs" className="text-lg" onClick={() => setMenuOpen(false)}>FAQs</Link>
              <Link href="/contact" className="text-lg" onClick={() => setMenuOpen(false)}>CONTACT</Link>
              <Link href="/register" className="btn-primary text-center mt-4" onClick={() => setMenuOpen(false)}>REGISTRATION</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="fade-in fade-in-delay-1 text-sm text-white/40 tracking-[0.3em] uppercase mb-8">
            Yale Quantum Institute
          </p>
          <h1 className="fade-in fade-in-delay-2 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight mb-8">
            <span className="text-white">YQuantum</span> is Yale&apos;s premier quantum computing hackathon.
          </h1>
          <p className="fade-in fade-in-delay-3 text-3xl md:text-5xl font-bold text-white/90 mb-12">
            Stay tuned for 2026!
          </p>
          <div className="fade-in fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary">REGISTRATION</Link>
            <a href="#about" className="btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* About YQI */}
      <section id="about" className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6">Yale Quantum Institute</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                A world leader in quantum information science.
              </h2>
            </div>
            <div className="lg:pt-8">
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                The Yale Quantum Institute (YQI) is a world leader in quantum information science, 
                encompassing <span className="text-white font-medium">30+ research groups</span> across fields including 
                quantum engineering, quantum error correction, optics and photonics, superconducting qubits, 
                and quantum cryptography.
              </p>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Through YQuantum, the Yale Undergraduate Quantum Computing group aims to immerse students 
                from around the world in this hotbed of research, empowering them to take advantage of 
                the vibrant environment of innovation, working on the cutting edge of the field and 
                shaping its future.
              </p>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Program on quantum computers. Design the solutions of tomorrow. Advance quantum computation 
                — or design novel quantum solutions to the world&apos;s hardest problems.
              </p>
              <p className="text-xl text-white font-medium">
                Why quantum? Because this is the <span className="underline">future</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Research Advancements */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6">Research Advancements</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Historic firsts at YQI.</h2>

          <div className="space-y-0">
            {[
              'First superconducting device prototype',
              'First superconducting quantum processor',
              'First demonstrated quantum algorithm on a QPU',
              'First realization of photonic quantum circuits',
              'Longest superconducting coherence time (as of 2025)',
            ].map((item, i) => (
              <div key={i} className="py-6 border-b border-white/10 flex items-center gap-6">
                <span className="text-sm text-white/20 w-8">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-lg md:text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Challenge Tracks */}
      <section id="tracks" className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6">Challenge Tracks</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Dual Challenge Tracks</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Advancement Track */}
            <div className="group p-10 border border-white/10 hover:border-white/30 transition-colors">
              <h3 className="text-2xl font-bold italic mb-4">Advancement</h3>
              <p className="text-white/60 leading-relaxed">
                Design new quantum algorithms. Develop more efficient quantum computers. 
                In the <em>Advancement</em> track, the challenges will focus on programming 
                and improving cutting-edge quantum hardware and software, solving problems 
                to build the computers of tomorrow.
              </p>
            </div>

            {/* Application Track */}
            <div className="group p-10 border border-white/10 hover:border-white/30 transition-colors">
              <h3 className="text-2xl font-bold italic mb-4">Application</h3>
              <p className="text-white/60 leading-relaxed">
                Use quantum algorithms to solve unique problems. Design solutions to leverage 
                quantum advantage. In the <em>Application</em> track, the challenges will focus 
                on using quantum computers to make a difference today, with diverse applications 
                ranging from healthcare to logistics to finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor CTA */}
      <section className="py-24 px-6 lg:px-12 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Join these sponsors in 2026!</h3>
          <Link href="/contact" className="btn-outline">Become a Sponsor</Link>
        </div>
      </section>

      {/* Institutions Represented */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6 text-center">Global Reach</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Institutions Represented</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {institutions.map((inst) => (
              <div
                key={inst.name}
                className="group relative aspect-square border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
                title={inst.name}
              >
                {/* Logo placeholder with institution color */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110"
                  style={{ backgroundColor: inst.color }}
                >
                  {inst.abbr}
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-white/60">
                  {inst.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Sponsors */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6 text-center">Thank You</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">2025 Sponsors</h2>
          <p className="text-center text-white/40 mb-16">YQuantum 2025 Kick-Off</p>

          {/* Platinum Sponsors */}
          <div className="mb-12">
            <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6 text-center">Platinum</p>
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {sponsors2025.filter(s => s.tier === 'platinum').map((sponsor, i) => (
                <div
                  key={i}
                  className="aspect-[2/1] border border-white/20 bg-white/[0.02] flex items-center justify-center hover:border-white/40 hover:bg-white/[0.04] transition-all group"
                >
                  <span className="text-xl font-semibold text-white/40 group-hover:text-white/60 transition-colors">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-12">
            <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6 text-center">Gold</p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-xl mx-auto">
              {sponsors2025.filter(s => s.tier === 'gold').map((sponsor, i) => (
                <div
                  key={i}
                  className="aspect-[2/1] border border-white/15 bg-white/[0.01] flex items-center justify-center hover:border-white/30 hover:bg-white/[0.03] transition-all group"
                >
                  <span className="text-lg font-medium text-white/30 group-hover:text-white/50 transition-colors">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6 text-center">Silver</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {sponsors2025.filter(s => s.tier === 'silver').map((sponsor, i) => (
                <div
                  key={i}
                  className="aspect-[2/1] border border-white/10 flex items-center justify-center hover:border-white/20 transition-all group"
                >
                  <span className="text-sm font-medium text-white/20 group-hover:text-white/40 transition-colors">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-16 border-t border-b border-white/10 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="inline-block text-4xl md:text-6xl font-bold text-white/[0.06] mx-8">
                Stay tuned for 2026! 〰️
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Are you ready to change the future?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary">Register for 2026</Link>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div>
              <p className="text-xl font-bold mb-2">YQuantum</p>
              <p className="text-sm text-white/40">Yale Undergraduate Quantum Computing</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <Link href="/2025" className="text-sm text-white/60 hover:text-white transition-colors">YQUANTUM 2025</Link>
              <Link href="/2024" className="text-sm text-white/60 hover:text-white transition-colors">YQUANTUM 2024</Link>
              <Link href="/faqs" className="text-sm text-white/60 hover:text-white transition-colors">FAQs</Link>
              <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-sm text-white/30">Copyright Yale Quantum Institute © 2025</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
