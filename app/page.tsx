'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const faqs = [
    { q: 'What is YQuantum?', a: "YQuantum is Yale's premier quantum computing hackathon, organized by the Yale Undergraduate Quantum Computing group in partnership with the Yale Quantum Institute (YQI). It brings together students from around the world to work on cutting-edge quantum computing challenges." },
    { q: 'Who can participate?', a: 'YQuantum is open to undergraduate and graduate students from universities around the world. High school students are not eligible to participate. No prior quantum computing experience is required — we welcome beginners and experts alike!' },
    { q: 'What is the team size requirement?', a: "Teams must consist of 3-5 students. You can register with a pre-formed team or join as an individual and we'll help you find teammates during the team formation session." },
    { q: 'Where does YQuantum take place and how do I get there?', a: "YQuantum 2026 will be held at the Yale Science Building, 260 Whitney Ave, New Haven, CT on April 4th-5th, 2026. Yale is located in New Haven, CT. You can reach us by train (Amtrak/Metro-North to New Haven Union Station), bus, or car." },
    { q: 'Is there a registration fee?', a: 'No, participation in YQuantum is completely free! We cover meals, swag, and provide access to quantum computing resources for all participants.' },
    { q: 'What should I bring?', a: "Bring your laptop, charger, student ID, and enthusiasm for quantum computing! We'll provide everything else including meals, snacks, and access to quantum computing resources." },
    { q: 'Do I need prior quantum computing experience?', a: "No! YQuantum welcomes participants of all experience levels. We'll have workshops and mentors available to help you get started with quantum computing." },
  ]

  const navLinks = [
    { label: 'SCHEDULE', href: '#schedule' },
    { label: 'SPONSORS', href: '#sponsors' },
    { label: 'FAQS', href: '#faqs' },
    { label: 'TEAM', href: '#team' },
    { label: 'ARCHIVE', href: '#archive' },
  ]

  return (
    <main className="bg-sky-light min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-yale-navy shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-xl font-bold tracking-tight text-white font-serif">YQuantum 2026</a>
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
              <a
                href="https://forms.gle/e2vDg3WMgXuehXzU6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white border-2 border-white px-5 py-2 hover:bg-white hover:text-yale-navy transition-colors"
              >
                REGISTER
              </a>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
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
          <div className="md:hidden bg-yale-navy border-t border-white/10 px-6 py-8">
            <div className="flex flex-col gap-6 text-white">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-lg" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a
                href="https://forms.gle/e2vDg3WMgXuehXzU6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-white border-2 border-white px-5 py-3 text-center mt-4 hover:bg-white hover:text-yale-navy transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                REGISTER
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.15] tracking-tight mb-6 font-serif text-yale-navy">
            YQuantum 2026
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-4">Yale&apos;s premier quantum computing hackathon</p>
          <div className="text-lg md:text-xl text-slate-600 mb-8 space-y-2">
            <p><strong className="text-yale-navy">Where:</strong> Yale Science Building, 260 Whitney Ave, New Haven, CT</p>
            <p><strong className="text-yale-navy">When:</strong> April 4th-5th, 2026</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/e2vDg3WMgXuehXzU6" target="_blank" rel="noopener noreferrer" className="btn-primary">REGISTER NOW</a>
          </div>
        </div>
      </section>

      {/* About YQI */}
      <section className="py-32 px-6 lg:px-12 border-t border-yale-navy/20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              The{' '}
              <a href="https://quantuminstitute.yale.edu/" target="_blank" rel="noopener noreferrer" className="text-yale-blue hover:underline font-semibold">
                Yale Quantum Institute (YQI)
              </a>
              {' '}is a world leader in quantum information science, encompassing <span className="text-yale-navy font-semibold">30+ research groups</span> across fields including quantum engineering, quantum error correction, optics and photonics, superconducting qubits, and quantum cryptography.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Major research advancements at YQI include the first superconducting device prototype, the first superconducting quantum processor, the first demonstrated quantum algorithm on a QPU, the first realization of photonic quantum circuits, and the longest superconducting coherence time (as of 2025).
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Through YQuantum, the{' '}
              <a href="https://yuqc.yale.edu/" target="_blank" rel="noopener noreferrer" className="text-yale-blue hover:underline font-semibold">
                Yale Undergraduate Quantum Computing
              </a>
              {' '}group aims to immerse students from around the world in this hotbed of research, empowering them to take advantage of the vibrant environment of innovation, working on the cutting edge of the field and shaping its future.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="scroll-mt-20 py-32 px-6 lg:px-12 border-t border-yale-navy/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-yale-navy">Schedule</h2>
          <p className="text-xl text-slate-700">Coming soon!</p>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="scroll-mt-20 py-32 px-6 lg:px-12 border-t border-yale-navy/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-yale-navy">Sponsors</h2>
          <p className="text-xl text-slate-700 mb-6">Sponsors and challenges to be announced soon!</p>
          <p className="text-lg text-slate-600">
            Interested in sponsoring? Reach out to{' '}
            <a href="mailto:jeffrey.wei@yale.edu" className="text-yale-blue hover:underline">jeffrey.wei@yale.edu</a>
            {' '}and{' '}
            <a href="mailto:florian.carle@yale.edu" className="text-yale-blue hover:underline">florian.carle@yale.edu</a>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="scroll-mt-20 py-32 px-6 lg:px-12 border-t border-yale-navy/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-serif text-yale-navy">FAQs</h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-yale-navy/20">
                <summary className="py-6 cursor-pointer flex items-center justify-between text-lg font-medium list-none text-yale-navy">
                  {faq.q}
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-45 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="pb-6 text-slate-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-20 py-32 px-6 lg:px-12 border-t border-yale-navy/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif text-yale-navy">Team</h2>

          {/* Co-Directors */}
          <h3 className="text-2xl font-bold text-yale-navy mb-8">Co-Directors</h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            {['Jeffrey Wei', 'Jared Wyetzner'].map((name) => (
              <div key={name} className="p-6 border border-yale-navy/20 bg-white/50 sm:w-64">
                <p className="text-xl font-bold text-yale-navy">{name}</p>
              </div>
            ))}
          </div>

          {/* Committee */}
          <h3 className="text-2xl font-bold text-yale-navy mb-8">Committee</h3>
          <div className="flex flex-wrap gap-8 justify-center mb-16">
            {['Wenhe', 'Kai-shan', 'Ryan', 'Lewis', 'George', 'William', 'Ahmed', 'Henry'].map((name) => (
              <div key={name} className="p-6 border border-yale-navy/20 bg-white/50 sm:w-64">
                <p className="text-xl font-bold text-yale-navy">{name}</p>
              </div>
            ))}
          </div>

          {/* Faculty Supervisors */}
          <h3 className="text-2xl font-bold text-yale-navy mb-8">Faculty Supervisors</h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {['Florian Carle', 'Kimberly Nuzzo'].map((name) => (
              <div key={name} className="p-6 border border-yale-navy/20 bg-white/50 sm:w-64">
                <p className="text-xl font-bold text-yale-navy">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section id="archive" className="scroll-mt-20 py-32 px-6 lg:px-12 border-t border-yale-navy/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-serif text-yale-navy">Archive</h2>
          <div className="space-y-0">
            <Link href="/2025" className="flex items-center justify-between py-12 border-b border-yale-navy/20 group">
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">YQuantum</p>
                <p className="text-4xl md:text-5xl font-bold font-serif text-yale-navy">2025</p>
                <p className="text-slate-600 mt-2">April 12th, 2025 · Yale Quantum Institute</p>
              </div>
              <svg className="w-6 h-6 text-slate-400 group-hover:text-yale-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/2024" className="flex items-center justify-between py-12 border-b border-yale-navy/20 group">
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">YQuantum</p>
                <p className="text-4xl md:text-5xl font-bold font-serif text-yale-navy">2024</p>
                <p className="text-slate-600 mt-2">April 13th, 2024 · Yale University</p>
              </div>
              <svg className="w-6 h-6 text-slate-400 group-hover:text-yale-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 bg-yale-navy">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div>
              <p className="text-xl font-bold mb-2 text-white font-serif">YQuantum 2026</p>
              <p className="text-sm text-white/70">Yale Undergraduate Quantum Computing</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="https://docs.google.com/document/d/1LzGrlKlFwletT5xeNkqvp3AfMmi9PcZwDTeU_ddaz0s/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">CODE OF CONDUCT</a>
            </div>
          </div>
          <div className="pt-8 border-t border-white/20 space-y-2">
            <p className="text-sm text-white/60">Copyright Yale Quantum Institute © 2026. All Rights Reserved.</p>
            <p className="text-sm text-white/60">
              Contact:{' '}
              <a href="mailto:jeffrey.wei@yale.edu" className="hover:text-white transition-colors">jeffrey.wei@yale.edu</a>
              {', '}
              <a href="mailto:florian.carle@yale.edu" className="hover:text-white transition-colors">florian.carle@yale.edu</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
