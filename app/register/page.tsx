import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Register() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/40 tracking-[0.2em] uppercase mb-6">Join Us</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Registration</h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Be part of Yale&apos;s premier quantum computing hackathon.
          </p>
        </div>
      </section>

      {/* Registration Status */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 border border-white/20 text-sm text-white/60 tracking-wide uppercase">
              Coming Soon
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Stay tuned for 2026!
          </h2>
          
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Registration for YQuantum 2026 will open soon. Sign up below to be 
            notified when applications go live.
          </p>

          {/* Email Signup Form */}
          <form className="max-w-md mx-auto mb-16">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Notify Me
              </button>
            </div>
          </form>

          <p className="text-sm text-white/40">
            We&apos;ll only use your email to send YQuantum updates. No spam.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">What to expect</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10">
              <p className="text-5xl font-bold mb-4">01</p>
              <h3 className="text-xl font-bold mb-4">Apply</h3>
              <p className="text-white/60">
                Submit your application when registration opens. Tell us about yourself 
                and why you&apos;re interested in quantum computing.
              </p>
            </div>
            
            <div className="p-8 border border-white/10">
              <p className="text-5xl font-bold mb-4">02</p>
              <h3 className="text-xl font-bold mb-4">Prepare</h3>
              <p className="text-white/60">
                Once accepted, you&apos;ll receive resources to prepare for the hackathon. 
                No prior quantum experience required.
              </p>
            </div>
            
            <div className="p-8 border border-white/10">
              <p className="text-5xl font-bold mb-4">03</p>
              <h3 className="text-xl font-bold mb-4">Compete</h3>
              <p className="text-white/60">
                Join us at Yale for 48 hours of hacking, learning, and networking 
                with fellow quantum enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Eligibility</h2>
          
          <div className="space-y-6 text-lg text-white/60">
            <p>
              YQuantum is open to undergraduate and graduate students from accredited 
              universities worldwide.
            </p>
            <p>
              <span className="text-white">No prior quantum computing experience is required.</span> We 
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
      <section className="py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Have questions?</h2>
          <p className="text-xl text-white/60 mb-12">
            Check our FAQ or reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faqs" className="btn-outline">View FAQs</Link>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

