'use client'

import React from 'react'
import Image from 'next/image'

interface Sponsor {
    name: string
    logo: any
}

interface SponsorsGridProps {
    sponsors: Sponsor[]
}

const SponsorsGrid: React.FC<SponsorsGridProps> = ({ sponsors }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0.5 md:gap-1 bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {sponsors.map((sponsor, idx) => (
                <div
                    key={idx}
                    className="group relative bg-white/5 h-24 sm:h-28 md:h-32 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 hover:bg-white/10"
                >
                    {/* Logo Container */}
                    <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            fill
                            className="object-contain transition-all duration-500"
                            sizes="(max-w-640px) 50vw, (max-w-768px) 33vw, (max-w-1024px) 25vw, 16vw"
                        />
                    </div>

                    {/* Tooltip-like label (visible on hover) */}
                    <div className="absolute bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <span className="text-[10px] uppercase tracking-tighter text-white/40 font-bold">
                            {sponsor.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SponsorsGrid
