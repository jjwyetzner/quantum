import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Archive() {
  return (
    <main className="bg-sky-light min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-slate-500 tracking-[0.2em] uppercase mb-6">Past Events</p>
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-yale-navy">Archive</h1>
        </div>
      </section>

      {/* Years */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-0">
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
              <p className="text-slate-600 mt-2">Yale University</p>
            </div>
            <svg className="w-6 h-6 text-slate-400 group-hover:text-yale-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
