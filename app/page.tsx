'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const sponsors2025 = [
    'Alice & Bob',
    'LTIMindtree',
    'The Hartford',
    'Capgemini',
    'Rigetti',
    'BlueQubit',
    'Travelers',
    'Quantinuum',
    'QuEra',
    'Quantum Rings',
    'Superquantum',
    'Tahoe Quantum',
  ]

  const institutions = [
    'Yale University',
    'Stanford University',
    'Harvard University',
    'Princeton University',
    'Cornell University',
    'MIT',
    'Brown University',
    'Duke University',
    'Northwestern University',
    'Tufts University',
    'Boston University',
    'New York University',
    'Columbia University',
    'University of Toronto',
    'University of Maryland',
    'Purdue University',
    'Texas A&M University',
    'Arizona State University',
    'Northeastern University',
    'Vanderbilt University',
    'Case Western Reserve University',
    'Rensselaer Polytechnic Institute',
    'University of Connecticut',
    'University of Massachusetts',
    'Rutgers University',
    'Lehigh University',
    'City University of New York',
    'UCLA',
    'UC Davis',
    'UT Dallas',
    'Warsaw University of Technology',
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
            
            <div className="hidden md:flex items-center gap-10">
              <Link href="/2025" className="text-sm text-white/60 hover:text-white transition-colors">YQUANTUM 2025</Link>
              <Link href="/2024" className="text-sm text-white/60 hover:text-white transition-colors">YQUANTUM 2024</Link>
              <Link href="/faqs" className="text-sm text-white/60 hover:text-white transition-colors">FAQs</Link>
              <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">CONTACT</Link>
              <Link href="/register" className="btn-primary">REGISTRATION</Link>
            </div>

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

        {menuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-8">
            <div className="flex flex-col gap-6">
              <Link href="/2025" onClick={() => setMenuOpen(false)}>YQUANTUM 2025</Link>
              <Link href="/2024" onClick={() => setMenuOpen(false)}>YQUANTUM 2024</Link>
              <Link href="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
              <Link href="/register" className="btn-primary text-center mt-4" onClick={() => setMenuOpen(false)}>REGISTRATION</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight mb-8">
            <span className="text-white">YQuantum</span> is Yale&apos;s premier quantum computing hackathon.
          </h1>
          <p className="text-3xl md:text-5xl font-bold text-white/90 mb-12">
            Stay tuned for 2026!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary">REGISTRATION</Link>
          </div>
        </div>
      </section>

      {/* About YQI */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                The Yale Quantum Institute (YQI) is a world leader in quantum information science, 
                encompassing <span className="text-white font-medium">30+ research groups</span> across fields including 
                quantum engineering, quantum error correction, optics and photonics, superconducting qubits, 
                and quantum cryptography.
              </p>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Major research advancements at YQI include the first superconducting device prototype, 
                the first superconducting quantum processor, the first demonstrated quantum algorithm on a QPU, 
                the first realization of photonic quantum circuits, and the longest superconducting coherence 
                time (as of 2025).
              </p>
            </div>
            <div>
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
              <p className="text-xl text-white font-bold">
                Why quantum? Because this is the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Challenge Tracks */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Dual Challenge Tracks</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 border border-white/10">
              <h3 className="text-2xl font-bold italic mb-4">Advancement</h3>
              <p className="text-white/60 leading-relaxed">
                Design new quantum algorithms. Develop more efficient quantum computers. 
                In the <em>Advancement</em> track, the challenges will focus on programming 
                and improving cutting-edge quantum hardware and software, solving problems 
                to build the computers of tomorrow.
              </p>
            </div>

            <div className="p-10 border border-white/10">
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

      {/* Join these sponsors */}
      <section className="py-24 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Join these sponsors in 2026!</h3>
        </div>
      </section>

      {/* Institutions Represented */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Institutions Represented</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {institutions.map((inst) => (
              <span
                key={inst}
                className="px-4 py-2 border border-white/10 text-white/60 text-sm"
              >
                {inst}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Sponsors */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">2025 Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors2025.map((sponsor) => (
              <span
                key={sponsor}
                className="px-6 py-3 border border-white/20 text-white/80 font-medium"
              >
                {sponsor}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* YQuantum 2025 Kick-Off */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">YQuantum 2025 Kick-Off</h2>
        </div>
      </section>

      {/* Stay tuned marquee */}
      <section className="py-16 border-t border-white/10 overflow-hidden">
        <div className="whitespace-nowrap">
          <span className="inline-block text-4xl md:text-6xl font-bold text-white/10 animate-pulse">
            Stay tuned for 2026! 〰️ Stay tuned for 2026! 〰️ Stay tuned for 2026! 〰️
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Are you ready to change the future?
          </h2>
          <Link href="/register" className="btn-primary">REGISTRATION</Link>
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
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/30">Copyright Yale Quantum Institute © 2025</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
