import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function YQuantum2024() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">YQUANTUM 2024</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            April 13th, 2024 at the Yale Quantum Institute
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">300</p>
              <p className="text-sm text-white/40 uppercase">Registrants</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">10</p>
              <p className="text-sm text-white/40 uppercase">Countries</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">32</p>
              <p className="text-sm text-white/40 uppercase">Universities</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">36</p>
              <p className="text-sm text-white/40 uppercase">Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Schedule</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Saturday, April 13th, 2024</h3>
            <div className="space-y-4">
              {[
                { time: '8:00 AM', event: 'Registration and breakfast' },
                { time: '9:00 AM', event: 'Quantum computing workshops' },
                { time: '12:00 PM', event: 'Hacking commences' },
                { time: '1:00 PM', event: 'Lunch' },
                { time: '2:00 PM', event: 'Tours of Yale Quantum Institute labs' },
                { time: '6:00 PM', event: 'Dinner' },
                { time: '8:00 PM', event: 'Night Hack begins' },
              ].map((item) => (
                <div key={item.time} className="flex gap-8 py-3 border-b border-white/10">
                  <span className="text-white/40 w-24 flex-shrink-0">{item.time}</span>
                  <span>{item.event}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Sunday, April 14th, 2024</h3>
            <div className="space-y-4">
              {[
                { time: '8:00 AM', event: 'Breakfast' },
                { time: '12:00 PM', event: 'Hacking ends' },
              ].map((item) => (
                <div key={item.time} className="flex gap-8 py-3 border-b border-white/10">
                  <span className="text-white/40 w-24 flex-shrink-0">{item.time}</span>
                  <span>{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 Challenges */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">6 Challenges</h2>
          <p className="text-white/60 mt-4">Set by industry sponsors</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Stay tuned for 2026!
          </h2>
          <Link href="/register" className="btn-primary">REGISTRATION</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
