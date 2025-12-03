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
      a: 'YQuantum is open to undergraduate and graduate students from universities around the world. No prior quantum computing experience is required — we welcome beginners and experts alike!'
    },
    {
      q: 'What are the challenge tracks?',
      a: 'We offer two tracks: the Advancement track focuses on developing new quantum algorithms and improving quantum hardware/software, while the Application track focuses on applying quantum computing to real-world problems in healthcare, logistics, finance, and more.'
    },
    {
      q: 'Is there a registration fee?',
      a: 'No, participation in YQuantum is completely free! We cover meals, swag, and provide access to quantum computing resources for all participants.'
    },
    {
      q: 'Where does YQuantum take place?',
      a: 'YQuantum takes place at Yale University in New Haven, Connecticut. The event is held on campus with access to Yale\'s world-class quantum computing facilities.'
    },
    {
      q: 'What should I bring?',
      a: 'Bring your laptop, charger, student ID, and enthusiasm for quantum computing! We\'ll provide everything else including meals, snacks, and access to quantum computing resources.'
    },
    {
      q: 'Do I need prior quantum computing experience?',
      a: 'No! YQuantum welcomes participants of all experience levels. We\'ll have workshops and mentors available to help you get started with quantum computing.'
    },
    {
      q: 'Can I participate remotely?',
      a: 'YQuantum is primarily an in-person event to foster collaboration and networking. However, please check our registration page for the latest updates on remote participation options.'
    },
    {
      q: 'How are teams formed?',
      a: 'You can register with a pre-formed team or join as an individual. We\'ll have team formation activities at the start of the event to help individuals find teammates.'
    },
    {
      q: 'What are the prizes?',
      a: 'We offer over $50,000 in prizes across various categories. Check the event page for detailed prize information closer to the event date.'
    }
  ]

  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6">Help Center</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">FAQs</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Everything you need to know about YQuantum.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-white/10">
                <summary className="py-6 cursor-pointer flex items-center justify-between text-lg font-medium list-none">
                  {faq.q}
                  <svg className="w-5 h-5 text-white/40 group-open:rotate-45 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="pb-6 text-white/60 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Still have questions?</h2>
          <p className="text-xl text-white/60 mb-12">
            We&apos;re here to help. Reach out to our team.
          </p>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

