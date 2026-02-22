'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-yale-navy shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-bold tracking-tight text-white font-serif">
            YQuantum 2026
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/team" className="text-sm text-white/80 hover:text-white transition-colors">TEAM</Link>
            <Link href="/archive" className="text-sm text-white/80 hover:text-white transition-colors">ARCHIVE</Link>
            <a href="https://forms.gle/e2vDg3WMgXuehXzU6" target="_blank" rel="noopener noreferrer" className="btn-primary">REGISTRATION</a>
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
        <div className="md:hidden bg-yale-navy border-t border-white/10 px-6 py-8">
          <div className="flex flex-col gap-6 text-white">
            <Link href="/team" className="text-lg" onClick={() => setMenuOpen(false)}>TEAM</Link>
            <Link href="/archive" className="text-lg" onClick={() => setMenuOpen(false)}>ARCHIVE</Link>
            <a href="https://forms.gle/e2vDg3WMgXuehXzU6" target="_blank" rel="noopener noreferrer" className="btn-primary text-center mt-4" onClick={() => setMenuOpen(false)}>REGISTRATION</a>
          </div>
        </div>
      )}
    </nav>
  )
}

