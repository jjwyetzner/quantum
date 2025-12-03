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
        </div>
      </section>

      {/* Content sections matching original site structure */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Institutions Represented</h2>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">2024 Sponsors</h2>
        </div>
      </section>

      {/* Stay tuned for 2026 */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold">
            Stay tuned for 2026!
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  )
}
