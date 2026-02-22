'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function FAQs() {
  const faqs = [
    {
      q: 'What is YQuantum?',
      a: 'YQuantum is Yale\'s premier quantum computing hackathon, organized by the Yale Undergraduate Quantum Computing group in partnership with the Yale Quantum Institute (YQI). It brings together students from around the world to work on cutting-edge quantum computing challenges.'
    },
    {
      q: 'Who can participate?',
      a: 'YQuantum is open to undergraduate and graduate students from universities around the world. High school students are not eligible to participate. No prior quantum computing experience is required — we welcome beginners and experts alike!'
    },
    {
      q: 'What is the team size requirement?',
      a: 'Teams must consist of 3-5 students. You can register with a pre-formed team or join as an individual and we\'ll help you find teammates during the team formation session.'
    },
    {
      q: 'How do I get to Yale?',
      a: 'Yale is located in New Haven, CT. You can reach us by train (Amtrak/Metro-North to New Haven Union Station), bus, or car. The Yale Science Building is at 260 Whitney Ave, New Haven, CT. We recommend checking Yale\'s visitor information page for detailed directions and parking information.'
    },
    {
      q: 'Where does YQuantum take place?',
      a: 'YQuantum 2026 will be held at the Yale Science Building, 260 Whitney Ave, New Haven, CT on April 4th-5th, 2026.'
    },
    {
      q: 'Is there a registration fee?',
      a: 'No, participation in YQuantum is completely free! We cover meals, swag, and provide access to quantum computing resources for all participants.'
    },
    {
      q: 'What should I bring?',
      a: 'Bring your laptop, charger, student ID, and enthusiasm for quantum computing! We\'ll provide everything else including meals, snacks, and access to quantum computing resources.'
    },
    {
      q: 'Do I need prior quantum computing experience?',
      a: 'No! YQuantum welcomes participants of all experience levels. We\'ll have workshops and mentors available to help you get started with quantum computing.'
    }
  ]

  return (
    <main className="bg-sky-light min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-slate-500 tracking-[0.2em] uppercase mb-6">Help Center</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif text-yale-navy">FAQs</h1>
          <p className="text-xl text-slate-700 max-w-2xl">
            Everything you need to know about YQuantum.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
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

      {/* Still Have Questions */}
      <section className="py-32 px-6 lg:px-12 border-t border-yale-navy/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-serif text-yale-navy">Still have questions?</h2>
          <p className="text-xl text-slate-700 mb-12">
            We&apos;re here to help. Reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:jeffrey.wei@yale.edu" className="btn-primary">Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

