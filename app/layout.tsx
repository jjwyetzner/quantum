import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YQuantum | Yale\'s Premier Quantum Computing Hackathon',
  description: 'YQuantum is Yale\'s premier quantum computing hackathon. Program on quantum computers. Design the solutions of tomorrow.',
  keywords: 'quantum computing, hackathon, Yale, YQI, quantum algorithms, quantum hardware',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

