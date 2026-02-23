import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SponsorsGrid from '../components/SponsorsGrid'
import { sponsors2025 } from '../content/sponsors'
import { universities } from '../content/universities'

export default function YQuantum2025() {
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
          <a href="https://yquantum-2025.devpost.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-yale-navy text-white px-8 py-4 rounded font-bold hover:bg-yale-navy/90 transition-colors">VIEW YQUANTUM 2025 DEVPOST</a>
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
          <div className="mb-8 p-8 border border-yale-navy/20">
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

      {/* Institutions Represented */}
      <section className="py-32 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-yale-navy mb-16 text-center">Institutions Represented</h2>
          <SponsorsGrid sponsors={universities} />
        </div>
      </section>

      {/* 2025 Sponsors */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-yale-navy mb-16 text-center">2025 Sponsors</h2>
          <SponsorsGrid sponsors={sponsors2025} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
