import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function YQuantum2025() {
  const sponsors = [
    { name: 'Alice & Bob', logo: 'https://logo.clearbit.com/alice-bob.com' },
    { name: 'LTIMindtree', logo: 'https://logo.clearbit.com/ltimindtree.com' },
    { name: 'The Hartford', logo: 'https://logo.clearbit.com/thehartford.com' },
    { name: 'Capgemini', logo: 'https://logo.clearbit.com/capgemini.com' },
    { name: 'Rigetti', logo: 'https://logo.clearbit.com/rigetti.com' },
    { name: 'BlueQubit', logo: 'https://logo.clearbit.com/bluequbit.io' },
    { name: 'Travelers', logo: 'https://logo.clearbit.com/travelers.com' },
    { name: 'Quantinuum', logo: 'https://logo.clearbit.com/quantinuum.com' },
    { name: 'QuEra', logo: 'https://logo.clearbit.com/quera.com' },
    { name: 'Quantum Rings', logo: null },
    { name: 'Superquantum', logo: null },
    { name: 'Tahoe Quantum', logo: null },
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
    'Yale University', 'Stanford University', 'Harvard University', 'Princeton University',
    'Cornell University', 'MIT', 'Brown University', 'Duke University', 'Northwestern University',
    'Tufts University', 'Boston University', 'New York University', 'Columbia University',
    'University of Toronto', 'University of Maryland', 'Purdue University', 'Texas A&M University',
    'Arizona State University', 'Northeastern University', 'Vanderbilt University',
    'Case Western Reserve University', 'Rensselaer Polytechnic Institute', 'University of Connecticut',
    'University of Massachusetts', 'Rutgers University', 'Lehigh University',
    'City University of New York', 'UCLA', 'UC Davis', 'UT Dallas', 'Warsaw University of Technology',
  ]

  return (
    <main className="bg-sky-light min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif text-yale-navy">YQUANTUM 2025</h1>
          <p className="text-xl text-slate-700">April 12th, 2025 at the Yale Quantum Institute</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">700</p>
              <p className="text-sm text-slate-600 uppercase">Registrants</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">29</p>
              <p className="text-sm text-slate-600 uppercase">Countries</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">104</p>
              <p className="text-sm text-slate-600 uppercase">Universities</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2">79</p>
              <p className="text-sm text-slate-600 uppercase">Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-32 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-yale-navy mb-16 text-center">Schedule</h2>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-yale-navy mb-8">Saturday, April 12th, 2025</h3>
            <div className="space-y-0">
              {[
                { time: '8:00 AM', event: 'Registration and breakfast' },
                { time: '9:00 AM', event: 'Quantum computing workshops' },
                { time: '12:00 PM', event: 'Hacking commences' },
                { time: '1:00 PM', event: 'Lunch' },
                { time: '2:00 PM', event: 'Tours of Yale Quantum Institute labs' },
                { time: '6:00 PM', event: 'Dinner' },
                { time: '8:00 PM', event: 'Night Hack begins' },
              ].map((item) => (
                <div key={item.time} className="flex gap-8 py-4 border-b border-yale-navy/20">
                  <span className="text-slate-600 w-24 flex-shrink-0">{item.time}</span>
                  <span>{item.event}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-yale-navy mb-8">Sunday, April 13th, 2025</h3>
            <div className="space-y-0">
              {[
                { time: '8:00 AM', event: 'Breakfast' },
                { time: '12:00 PM', event: 'Hacking ends' },
              ].map((item) => (
                <div key={item.time} className="flex gap-8 py-4 border-b border-yale-navy/20">
                  <span className="text-slate-600 w-24 flex-shrink-0">{item.time}</span>
                  <span>{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Devpost */}
      <section className="py-16 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-4xl mx-auto text-center">
          <a href="https://yquantum-2025.devpost.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">VIEW YQUANTUM 2025 DEVPOST</a>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-32 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-yale-navy mb-16 text-center">9 Challenges</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <div key={i} className="p-6 border border-yale-navy/20">
                <p className="text-sm text-slate-600 mb-2">{challenge.sponsor}</p>
                <p className="text-slate-700">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winners */}
      <section className="py-32 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-yale-navy mb-16 text-center">Winners</h2>
          <div className="mb-8 p-8 border border-white/20">
            <p className="text-sm text-slate-600 mb-2">First Place</p>
            <p className="text-xl font-bold text-yale-navy mb-4">Alexander Pfau, Jojo Dayelise Keller, Elijah DeSarro-Raynal</p>
            <p className="text-slate-700">Prize: Expenses-paid trip to Lake Tahoe to present in front of the fire chief.</p>
          </div>
          <div className="p-8 border border-yale-navy/20">
            <p className="text-sm text-slate-600 mb-2">Honorable Mention</p>
            <p className="text-xl font-bold text-yale-navy mb-2">Superposition Seekers</p>
            <p className="text-slate-700">Artem Tikhonov, Félix Wilhelmy, Grace Pang, Gabriel Lemay, Albin Franzén</p>
          </div>
        </div>
      </section>

      {/* Institutions */}
      <section className="py-32 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-yale-navy mb-16 text-center">Institutions Represented</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {institutions.map((inst) => (
              <span key={inst} className="px-4 py-2 text-slate-700 text-base">{inst}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Sponsors */}
      <section className="py-32 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-yale-navy mb-16 text-center">2025 Sponsors</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="bg-white h-20 flex items-center justify-center px-3">
                {sponsor.logo ? (
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                ) : (
                  <span className="text-black/70 text-xs font-semibold text-center leading-tight">{sponsor.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
