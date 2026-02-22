import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 bg-yale-navy">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <div>
            <p className="text-xl font-bold mb-2 text-white font-serif">YQuantum 2026</p>
            <p className="text-sm text-white/70">Yale Undergraduate Quantum Computing</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <Link href="/team" className="text-sm text-white/80 hover:text-white transition-colors">TEAM</Link>
            <Link href="/archive" className="text-sm text-white/80 hover:text-white transition-colors">ARCHIVE</Link>
            <a href="https://docs.google.com/document/d/1LzGrlKlFwletT5xeNkqvp3AfMmi9PcZwDTeU_ddaz0s/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">CODE OF CONDUCT</a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/20 space-y-2">
          <p className="text-sm text-white/60">Copyright Yale Quantum Institute © 2026. All Rights Reserved.</p>
          <p className="text-sm text-white/60">
            Contact:{' '}
            <a href="mailto:jeffrey.wei@yale.edu" className="hover:text-white transition-colors">jeffrey.wei@yale.edu</a>
            {', '}
            <a href="mailto:florian.carle@yale.edu" className="hover:text-white transition-colors">florian.carle@yale.edu</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

