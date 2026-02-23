'use client'

import { useEffect, useState, useRef } from 'react'

// Natural star colors — warm whites, blue-whites, yellows, and faint reds
const STAR_COLORS = [
    'rgba(255, 255, 255, 0.9)',   // pure white
    'rgba(200, 220, 255, 0.9)',   // blue-white
    'rgba(170, 200, 255, 0.85)',  // cool blue
    'rgba(255, 240, 200, 0.9)',   // warm yellow-white
    'rgba(255, 220, 180, 0.85)',  // warm orange-white
    'rgba(255, 200, 180, 0.8)',   // faint reddish
    'rgba(220, 240, 255, 0.9)',   // icy blue
]

interface Particle {
    id: number
    x: number
    baseY: number
    size: number
    duration: number
    delay: number
    driftX: number
    driftY: number
    opacity: number
    speed: number // always negative so stars drift UP as you scroll down (parallax)
    color: string
    glowColor: string
}

export default function ParticleBackground() {
    const [particles, setParticles] = useState<Particle[]>([])
    const containerRef = useRef<HTMLDivElement>(null)
    const [shootingStar, setShootingStar] = useState<{ id: number; x: number; y: number; angle: number } | null>(null)

    useEffect(() => {
        const count = 70
        const generated: Particle[] = Array.from({ length: count }, (_, i) => {
            const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]
            const sizeRoll = Math.random()
            let size: number
            if (sizeRoll < 0.6) size = Math.random() * 1.5 + 0.8
            else if (sizeRoll < 0.85) size = Math.random() * 2 + 2.5
            else size = Math.random() * 2 + 4.5

            return {
                id: i,
                x: Math.random() * 100,
                baseY: Math.random() * 100,
                size,
                duration: Math.random() * 6 + 4,
                delay: Math.random() * -10,
                driftX: (Math.random() - 0.5) * 40,
                driftY: (Math.random() - 0.5) * 40,
                opacity: Math.random() * 0.4 + 0.3,
                speed: -(0.1 + (size / 6.5) * 0.6 + Math.random() * 0.15),
                color,
                glowColor: color.replace(/[\d.]+\)$/, '0.3)'),
            }
        })
        setParticles(generated)
    }, [])

    // Shooting star: 10% chance every 5 minutes
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() < 0.04) {
                const star = {
                    id: Date.now(),
                    x: Math.random() * 60 + 10,   // start 10-70% from left
                    y: Math.random() * 40 + 5,     // start 5-45% from top
                    angle: Math.random() * 30 + 15, // 15-45 degree angle
                }
                setShootingStar(star)
                // Remove after animation completes
                setTimeout(() => setShootingStar(null), 1500)
            }
        }, 5 * 1000) // every 5 seconds

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                ticking = true
                requestAnimationFrame(() => {
                    if (containerRef.current) {
                        containerRef.current.style.setProperty('--scroll', `${window.scrollY}`)
                    }
                    ticking = false
                })
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (particles.length === 0) return null

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ '--scroll': '0' } as React.CSSProperties}>
            {particles.map((p) => (
                <span
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `calc(${p.baseY}% + var(--scroll) * ${p.speed}px)`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: p.opacity,
                        background: `radial-gradient(circle, ${p.color} 0%, ${p.glowColor} 60%, transparent 100%)`,
                        boxShadow: `0 0 ${p.size * 3}px ${p.size}px ${p.glowColor}`,
                        animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite, particlePulse ${p.duration * 0.7}s ease-in-out ${p.delay}s infinite`,
                        '--drift-x': `${p.driftX}px`,
                        '--drift-y': `${p.driftY}px`,
                    } as React.CSSProperties}
                />
            ))}

            {/* Shooting star */}
            {shootingStar && (
                <div
                    key={shootingStar.id}
                    className="absolute"
                    style={{
                        left: `${shootingStar.x}%`,
                        top: `${shootingStar.y}%`,
                        transform: `rotate(${shootingStar.angle}deg)`,
                    }}
                >
                    {/* Animated mover — translates along local X axis */}
                    <div style={{ animation: 'shootingStar 1.5s ease-out forwards' }}>
                        {/* Star head */}
                        <div
                            style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: 'white',
                                boxShadow: '0 0 8px 3px rgba(255,255,255,1), 0 0 25px 8px rgba(100,200,255,0.7), 0 0 50px 15px rgba(100,180,255,0.3)',
                            }}
                        />
                        {/* Trail */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '100%',
                                width: '120px',
                                height: '2px',
                                transform: 'translateY(-50%)',
                                background: 'linear-gradient(to left, rgba(255,255,255,0.9), rgba(100,200,255,0.6), rgba(160,100,255,0.3), transparent)',
                                borderRadius: '1px',
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

