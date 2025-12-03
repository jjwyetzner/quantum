import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Contact() {
  const team = [
    { name: 'Pranet Sharma', role: 'Founder, Director', email: 'pranet.sharma@yale.edu' },
    { name: 'Jeffrey Wei', role: 'Co-Director', email: 'jeffrey.wei@yale.edu' },
    { name: 'Amy Badner', role: 'Logistics Lead', email: 'amy.badner@yale.edu' },
    { name: 'Florian Carle, Ph.D.', role: 'Yale Quantum Institute Lead', email: 'florian.carle@yale.edu' },
    { name: 'Claudia Reuter, MBA', role: 'Yale Ventures Lead', email: 'claudia.reuter@yale.edu' },
    { name: 'Vivek Ramakrishnan, Ph.D.', role: 'UConn Ventures Lead', email: 'vivek.ramakrishnan@uconn.edu' },
  ]

  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">CONTACT</h1>
        </div>
      </section>

      {/* Organizing Board */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Organizing Board</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.email} className="p-6 border border-white/10">
                <p className="text-xl font-bold mb-1">{member.name}</p>
                <p className="text-white/40 mb-4">{member.role}</p>
                <a 
                  href={`mailto:${member.email}`} 
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
