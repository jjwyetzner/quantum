import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function YQuantum2025() {
  const sponsors = [
    'Alice & Bob',
    'LTIMindtree',
    'The Hartford',
    'Capgemini',
    'Rigetti',
    'BlueQubit',
    'Travelers',
    'Quantinuum',
    'QuEra',
    'Quantum Rings',
    'Superquantum',
    'Tahoe Quantum',
  ]

  const challenges = [
    { sponsor: 'Alice & Bob', description: 'Reconstruct quantum states from Wigner functions.' },
    { sponsor: 'The Hartford, Capgemini, Rigetti', description: 'Use quantum optimization to minimize risk in correlated insurance portfolios.' },
    { sponsor: 'BlueQubit', description: 'Find hidden messages within peaked circuits.' },
    { sponsor: 'Travelers, Capgemini, Quantinuum', description: 'Use quantum-accelerated graph coloring to minimize wildfire risk.' },
    { sponsor: 'QuEra', description: 'Advance digital quantum computing with state-of-the-art neutral atom gatesets.' },
    { sponsor: 'Travelers, LTIMindtree, QuEra', description: 'Optimize claim processing for insurance using quantum-accelerated algorithms.' },
    { sponsor: 'Quantum Rings', description: 'Use Shor\'s algorithm to semiclassically factor large numbers.' },
    { sponsor: 'Superquantum', description: 'Develop quantum-enhanced hash functions for blockchain and crypto applications.' },
    { sponsor: 'Tahoe Quantum', description: 'Leverage quantum optimization to improve wildfire response.' },
  ]

  const institutions = [
    'Yale University',
    'Stanford University',
    'Harvard University',
    'Princeton University',
    'Cornell University',
    'MIT',
    'Brown University',
    'Duke University',
    'Northwestern University',
    'Tufts University',
    'Boston University',
    'New York University',
    'Columbia University',
    'University of Toronto',
    'University of Maryland',
    'Purdue University',
    'Texas A&M University',
    'Arizona State University',
    'Northeastern University',
    'Vanderbilt University',
    'Case Western Reserve University',
    'Rensselaer Polytechnic Institute',
    'University of Connecticut',
    'University of Massachusetts',
    'Rutgers University',
    'Lehigh University',
    'City University of New York',
    'UCLA',
    'UC Davis',
    'UT Dallas',
    'Warsaw University of Technology',
  ]

  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">YQUANTUM 2025</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            April 12th, 2025 at the Yale Quantum Institute
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">700</p>
              <p className="text-sm text-white/40 uppercase">Registrants</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">29</p>
              <p className="text-sm text-white/40 uppercase">Countries</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">104</p>
              <p className="text-sm text-white/40 uppercase">Universities</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">79</p>
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
            <h3 className="text-2xl font-bold mb-8">Saturday, April 12th, 2025</h3>
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
            <h3 className="text-2xl font-bold mb-8">Sunday, April 13th, 2025</h3>
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

      {/* Challenges */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">9 Challenges</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <div key={i} className="p-6 border border-white/10">
                <p className="text-sm text-white/40 mb-2">{challenge.sponsor}</p>
                <p className="text-white/80">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winners */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Winners</h2>
          
          <div className="mb-12 p-8 border border-white/20">
            <p className="text-sm text-white/40 mb-2">First Place</p>
            <p className="text-xl font-bold mb-4">Alexander Pfau, Jojo Dayelise Keller, Elijah DeSarro-Raynal</p>
            <p className="text-white/60">Prize: Expenses-paid trip to Lake Tahoe to present in front of the fire chief.</p>
          </div>

          <div className="p-8 border border-white/10">
            <p className="text-sm text-white/40 mb-2">Honorable Mention</p>
            <p className="text-xl font-bold mb-2">Superposition Seekers</p>
            <p className="text-white/60">Artem Tikhonov, Félix Wilhelmy, Grace Pang, Gabriel Lemay, Albin Franzén</p>
          </div>
        </div>
      </section>

      {/* Institutions Represented */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Institutions Represented</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {institutions.map((inst) => (
              <span key={inst} className="px-4 py-2 border border-white/10 text-white/60 text-sm">
                {inst}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Sponsors */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">2025 Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.map((sponsor) => (
              <span key={sponsor} className="px-6 py-3 border border-white/20 text-white/80 font-medium">
                {sponsor}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* YQuantum 2025 Kick-Off */}
      <section className="py-32 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">YQuantum 2025 Kick-Off</h2>
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
