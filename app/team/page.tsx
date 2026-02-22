import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Team() {
  const team = [
    {
      role: 'Co-Directors',
      members: ['Jeffrey Wei', 'Jared Wyetzner'],
    },
    {
      role: 'Faculty Supervisors',
      members: ['Florian Carle', 'Kimberly Nuzzo'],
    },
    {
      role: 'Committee',
      members: ['Wenhe', 'Kai-shan', 'Ryan', 'Lewis', 'George', 'William', 'Ahmed', 'Henry'],
    },
  ]

  return (
    <main className="bg-sky-light min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-yale-navy/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-slate-500 tracking-[0.2em] uppercase mb-6">The People</p>
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-yale-navy">Team</h1>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-0">
          {team.map((group) => (
            <div key={group.role} className="py-12 border-b border-yale-navy/20">
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-6">
                {group.role}
              </p>
              {group.role === 'Committee' ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {group.members.map((name) => (
                    <span key={name} className="text-lg text-yale-navy font-medium text-center py-2">{name}</span>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  {group.members.map((name) => (
                    <span key={name} className="text-lg text-yale-navy font-medium">{name}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
