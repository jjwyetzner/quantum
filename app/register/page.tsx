import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Register() {
  return (
    <main className="bg-sky-light min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-slate-500 tracking-[0.2em] uppercase mb-6">Join Us</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif text-yale-navy">Registration</h1>
          <p className="text-xl text-slate-700 max-w-2xl">
            Be part of Yale&apos;s premier quantum computing hackathon.
          </p>
        </div>
      </section>

      {/* Registration Status */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 border border-yale-navy/30 text-sm text-yale-navy tracking-wide uppercase font-semibold">
              Registration Open
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-yale-navy">
            Register for YQuantum 2026
          </h2>

          <p className="text-xl text-slate-700 mb-12 leading-relaxed">
            Join us April 4th-5th, 2026 at the Yale Science Building for 48 hours of quantum computing innovation.
          </p>

          <a
            href="https://forms.gle/e2vDg3WMgXuehXzU6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-5 inline-block"
          >
            APPLY NOW
          </a>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-32 px-6 lg:px-12 border-t border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center font-serif text-yale-navy">What to expect</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-yale-navy/20 bg-white/50">
              <p className="text-5xl font-bold mb-4 text-yale-navy">01</p>
              <h3 className="text-xl font-bold mb-4 text-yale-navy">Apply</h3>
              <p className="text-slate-700">
                Submit your application when registration opens. Tell us about yourself 
                and why you&apos;re interested in quantum computing.
              </p>
            </div>
            
            <div className="p-8 border border-yale-navy/20 bg-white/50">
              <p className="text-5xl font-bold mb-4 text-yale-navy">02</p>
              <h3 className="text-xl font-bold mb-4 text-yale-navy">Prepare</h3>
              <p className="text-slate-700">
                Once accepted, you&apos;ll receive resources to prepare for the hackathon. 
                No prior quantum experience required.
              </p>
            </div>
            
            <div className="p-8 border border-yale-navy/20 bg-white/50">
              <p className="text-5xl font-bold mb-4 text-yale-navy">03</p>
              <h3 className="text-xl font-bold mb-4 text-yale-navy">Compete</h3>
              <p className="text-slate-700">
                Join us at Yale for 48 hours of hacking, learning, and networking 
                with fellow quantum enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-32 px-6 lg:px-12 border-t border-yale-navy/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-serif text-yale-navy">Eligibility</h2>

          <div className="space-y-6 text-lg text-slate-700">
            <p>
              YQuantum is open to undergraduate and graduate students from accredited
              universities worldwide. <span className="font-semibold text-yale-navy">High school students are not eligible.</span>
            </p>
            <p>
              <span className="font-semibold text-yale-navy">Teams must consist of 3-5 students.</span> You can register individually
              and we&apos;ll help you find teammates.
            </p>
            <p>
              <span className="font-semibold text-yale-navy">No prior quantum computing experience is required.</span> We
              welcome participants of all skill levels and backgrounds.
            </p>
            <p>
              Participants must be available to attend the full event in person at
              Yale University in New Haven, Connecticut.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-32 px-6 lg:px-12 border-t border-yale-navy/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 font-serif text-yale-navy">Have questions?</h2>
          <p className="text-xl text-slate-700 mb-12">
            Check our FAQ or reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faqs" className="btn-outline">View FAQs</Link>
            <a href="mailto:jeffrey.wei@yale.edu" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

