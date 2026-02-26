'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HackathonHighlights from '@/components/HackathonHighlights'
import ParticleBackground from './components/ParticleBackground'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY.current

      if (delta > 10) {
        setVisible(false)
        setMenuOpen(false)
      } else if (delta < -10) {
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date('2026-04-04T00:00:00-04:00').getTime()
    const tick = () => {
      const now = Date.now()
      const diff = Math.max(0, target - now)
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

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
    <main className="min-h-screen relative">
      <ParticleBackground />
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
          }`}
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="inline-block">
              <Image src="/logo.png" alt="YQuantum" width={50} height={50} className="block" />
            </a>
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
                className="btn-primary"
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
          <div className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10 px-6 py-8">
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
                className="btn-primary text-center mt-4"
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.15] tracking-tight mb-6 font-serif text-white">
            |Y⟩Quantum
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-4">Yale&apos;s premier quantum computing hackathon</p>
          <div className="text-lg md:text-xl text-white/70 mb-8 space-y-2">
            <p><strong className="text-white">Where:</strong> Yale Science Building, 260 Whitney Ave, New Haven, CT</p>
            <p><strong className="text-white">When:</strong> April 4th-5th, 2026</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/e2vDg3WMgXuehXzU6" target="_blank" rel="noopener noreferrer" className="btn-primary">REGISTER NOW</a>
          </div>
          <div className="mt-8 flex gap-6 justify-center text-white">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold font-serif">{String(timeLeft.days).padStart(2, '0')}</p>
              <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Days</p>
            </div>
            <p className="text-4xl md:text-5xl font-bold">:</p>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold font-serif">{String(timeLeft.hours).padStart(2, '0')}</p>
              <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Hours</p>
            </div>
            <p className="text-4xl md:text-5xl font-bold">:</p>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold font-serif">{String(timeLeft.minutes).padStart(2, '0')}</p>
              <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Minutes</p>
            </div>
            <p className="text-4xl md:text-5xl font-bold">:</p>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold font-serif">{String(timeLeft.seconds).padStart(2, '0')}</p>
              <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Seconds</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/20" />
      <HackathonHighlights />

      {/* Gradient divider — gold accent */}
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #F4D35E40, #EC893240, transparent)' }} />

      {/* About YQI */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              The{' '}
              <a href="https://quantuminstitute.yale.edu/" target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:underline font-semibold">
                Yale Quantum Institute (YQI)
              </a>
              {' '}is a world leader in quantum information science, encompassing <span className="text-white font-semibold">30+ research groups</span> across fields including quantum engineering, quantum error correction, optics and photonics, superconducting qubits, and quantum cryptography.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Major research advancements at YQI include the first superconducting device prototype, the first superconducting quantum processor, the first demonstrated quantum algorithm on a QPU, the first realization of photonic quantum circuits, and the longest superconducting coherence time (as of 2025).
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Through YQuantum, the{' '}
              <a href="https://yuqc.yale.edu/" target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:underline font-semibold">
                Yale Undergraduate Quantum Computing
              </a>
              {' '}group aims to immerse students from around the world in this hotbed of research, empowering them to take advantage of the vibrant environment of innovation, working on the cutting edge of the field and shaping its future.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient divider — gold to orange */}
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #F4D35E30, #EC893250, #F4D35E30, transparent)' }} />

      {/* Schedule */}
      <section id="schedule" className="scroll-mt-20 py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif" style={{ color: '#FDFAEC' }}>Schedule</h2>
          <p className="text-xl text-white/70">Coming soon!</p>
        </div>
      </section>

      {/* Gradient divider — warm orange */}
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #EC893240, #F4D35E50, #EC893240, transparent)' }} />

      {/* Sponsors */}
      <section id="sponsors" className="scroll-mt-20 py-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif" style={{ color: '#FDFAEC' }}>Sponsors</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { logo: '68f0ebd188cd131ca766f642_quera-logo.png', href: 'https://www.quera.com/' },
              { logo: 'Amazon_Web_Services-Logo.wine.png', href: 'https://aws.amazon.com/' },
              { logo: 'LTIMindtree_Linear_2-1-LT-Blue.png.webp', href: 'https://www.ltm.com/' },
              { logo: 'State-street-logo-final.svg.png', href: 'https://www.statestreet.com/us/en' },
              { logo: 'image-22-1024x268.png', href: 'https://alice-bob.com/' },
              { logo: 'image001.png', href: 'https://www.quantumct.org/' },
              { logo: 'quantinuum-logo_horizontal_black.png', href: 'https://www.quantinuum.com/' },
              { logo: 'rtrc-facility-logo-300x252.jpg', href: 'https://www.rtx.com/who-we-are/we-are-rtx/transformative-technologies/rtrc' },
              { logo: 'YQI-logo_YQI-cirle+name-500x499.png', href: 'https://quantuminstitute.yale.edu/' },
              { logo: 'Yale-Ventures-Logo_Two-Blues-Stacked_1.png', href: 'https://ventures.yale.edu/' },
            ].map(({ logo, href }) => (
              <a
                key={logo}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg flex items-center justify-center transition-all duration-300 h-32 hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                <Image
                  src={`/assets/2026/${logo}`}
                  alt="Sponsor Logo"
                  width={200}
                  height={100}
                  className="max-h-full w-auto object-contain"
                />
              </a>
            ))}
          </div>

          <p className="text-xl text-white/70 mb-6">More sponsors and challenges to be announced soon!</p>
          <p className="text-lg text-white/60">
            Interested in sponsoring? Reach out to{' '}
            <a href="mailto:jeffrey.wei@yale.edu" className="text-sky-300 hover:underline">jeffrey.wei@yale.edu</a>
            {' '}and{' '}
            <a href="mailto:florian.carle@yale.edu" className="text-sky-300 hover:underline">florian.carle@yale.edu</a>
          </p>
        </div>
      </section>

      {/* Gradient divider — gold */}
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #F4D35E50, transparent)' }} />

      {/* FAQs */}
      <section id="faqs" className="scroll-mt-20 py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-serif" style={{ color: '#FDFAEC' }}>FAQs</h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-white/10" style={{ borderImage: 'linear-gradient(90deg, transparent, rgba(244,211,94,0.2), transparent) 1' }}>
                <summary className="py-6 cursor-pointer flex items-center justify-between text-lg font-medium list-none text-white">
                  {faq.q}
                  <svg className="w-5 h-5 text-white/40 group-open:rotate-45 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="pb-6 text-white/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient divider — orange to red */}
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #EC893240, #ED2E0730, #EC893240, transparent)' }} />

      {/* Team */}
      <section id="team" className="scroll-mt-20 pt-16 pb-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-16 text-left">
            <p className="text-lg text-white/80 leading-relaxed">
              The YQuantum Committee is a student-led group of Yale undergraduates behind Yale's flagship quantum computing hackathon. By partnering with top researchers and industry leaders, we create opportunities for students to explore and shape the future of quantum technology.
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif" style={{ color: '#FDFAEC' }}>Team</h2>

          {/* Co-Directors */}
          <h3 className="text-2xl font-bold mb-8" style={{ color: '#F4D35E' }}>Co-Directors</h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            {['Jeffrey Wei', 'Jared Wyetzner'].map((name) => (
              <div key={name} className="p-6 border bg-white/5 hover:bg-white/10 transition-colors sm:w-64 rounded">
                <p className="text-xl font-bold text-white">{name}</p>
              </div>
            ))}
          </div>

          {/* Committee */}
          <h3 className="text-2xl font-bold mb-8" style={{ color: '#F4D35E' }}>Committee</h3>
          <div className="flex flex-wrap gap-8 justify-center mb-16">
            {['Wenhe', 'Kai-shan', 'Ryan', 'Lewis', 'George', 'William', 'Ahmed', 'Henry'].map((name) => (
              <div key={name} className="p-6 border bg-white/5 hover:bg-white/10 transition-colors sm:w-64 rounded">
                <p className="text-xl font-bold text-white">{name}</p>
              </div>
            ))}
          </div>

          {/* Faculty Supervisors */}
          <h3 className="text-2xl font-bold mb-8" style={{ color: '#F4D35E' }}>Faculty Supervisors</h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {['Florian Carle', 'Kimberly Nuzzo'].map((name) => (
              <div key={name} className="p-6 border bg-white/5 hover:bg-white/10 transition-colors sm:w-64 rounded">
                <p className="text-xl font-bold text-white">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient divider — red accent */}
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #ED2E0730, #EC893240, #ED2E0730, transparent)' }} />

      {/* Archive */}
      <section id="archive" className="scroll-mt-20 py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-serif" style={{ color: '#FDFAEC' }}>Archive</h2>
          <div className="space-y-0">
            <Link href="/2025" className="flex items-center justify-between py-12 border-b border-white/20 group">
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest mb-2">YQuantum</p>
                <p className="text-4xl md:text-5xl font-bold font-serif text-white">2025</p>
                <p className="text-white/60 mt-2">April 12th, 2025 · Yale Quantum Institute</p>
              </div>
              <svg className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/2024" className="flex items-center justify-between py-12 border-b border-white/20 group">
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest mb-2">YQuantum</p>
                <p className="text-4xl md:text-5xl font-bold font-serif text-white">2024</p>
                <p className="text-white/60 mt-2">April 13th, 2024 · Yale University</p>
              </div>
              <svg className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </main >
  )
}
