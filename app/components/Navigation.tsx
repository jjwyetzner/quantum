'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
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
  )
}

