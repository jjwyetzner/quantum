'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

/** 
 * HARDCODED DEBUG LOGGING (Always on for v3 fix)
 */
const DEBUG = true;
const log = (msg: string, ...args: any[]) => {
    if (DEBUG) console.log(`[MontageDebug] ${msg}`, ...args);
};

// Dynamically import all images from app/assets/images
const importAll = (r: any) => {
    return r.keys().map((key: string) => ({
        src: r(key).default || r(key),
        name: key.replace('./', '').replace(/\.[^/.]+$/, ""),
    }));
};

let images: { src: any; name: string }[] = [];
try {
    // @ts-ignore
    const context = require.context('../app/assets/images', false, /\.(png|jpe?g|webp|avif|JPG|JPEG|PNG)$/);
    images = importAll(context);
} catch (e) {
    console.error('Error loading images:', e);
}

const HackathonHighlights = ({
    montageSpeedMs = 1800,
    pauseOnHover = false,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [inView, setInView] = useState(false)
    const [isPausedByUser, setIsPausedByUser] = useState(false)
    const [hoverSide, setHoverSide] = useState<'left' | 'right' | null>(null)

    const wrapperRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const tickCountRef = useRef(0)
    const lastEntryTimeRef = useRef<number>(0)
    const shouldReduceMotion = useReducedMotion()

    const nextSlide = useCallback(() => {
        if (images.length === 0) return
        setCurrentIndex((current) => (current + 1) % images.length)
    }, [])

    const prevSlide = useCallback(() => {
        if (images.length === 0) return
        setCurrentIndex((current) => (current - 1 + images.length) % images.length)
    }, [])

    const stopAutoplay = useCallback(() => {
        if (intervalRef.current !== null) {
            log('stopAutoplay: clearing interval');
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }, [])

    const startAutoplay = useCallback(() => {
        if (shouldReduceMotion) return
        if (isPausedByUser) return
        if (!inView) return
        if (intervalRef.current !== null) return

        log('startAutoplay EXECUTE: establishing new interval');
        intervalRef.current = setInterval(nextSlide, montageSpeedMs)
    }, [inView, isPausedByUser, shouldReduceMotion, montageSpeedMs, nextSlide])

    // EFFECT: Observer with relaxed settings
    useEffect(() => {
        log('Setting up IntersectionObserver...');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    log('Observer event:', entry.isIntersecting, entry.intersectionRatio);
                    setInView(entry.isIntersecting)
                    if (entry.isIntersecting) {
                        lastEntryTimeRef.current = Date.now()
                        setIsPausedByUser(false) // Always reset on fresh entry
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px' }
        )

        if (wrapperRef.current) observer.observe(wrapperRef.current)
        return () => observer.disconnect()
    }, [])

    // EFFECT: Autoplay controller
    useEffect(() => {
        const active = inView && !isPausedByUser && !shouldReduceMotion;
        log('Controller: status change', { active, inView, isPausedByUser });

        if (active) startAutoplay()
        else stopAutoplay()

        return () => stopAutoplay()
    }, [inView, isPausedByUser, shouldReduceMotion, startAutoplay, stopAutoplay])

    // Logic: Grace period for hover-pausing
    const handleInteraction = useCallback((explicit = false) => {
        if (isPausedByUser) return

        // Grace period check: Don't allow hover-pause if we just scrolled in (<1.5s ago)
        // unless it's an explicit click/tap
        const timeSinceEntry = Date.now() - lastEntryTimeRef.current
        if (!explicit && timeSinceEntry < 1500) {
            log('Interaction ignored: within grace period');
            return
        }

        log('User interaction detected: pausing montage');
        setIsPausedByUser(true)
    }, [isPausedByUser])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        if (x < rect.width * 0.25) setHoverSide('left')
        else if (x > rect.width * 0.75) setHoverSide('right')
        else setHoverSide(null)
    }

    if (images.length === 0) return null

    return (
        <section
            ref={wrapperRef}
            className="py-8 md:py-12 px-2 sm:px-4 overflow-hidden min-h-[300px]"
        >
            <div className="max-w-7xl mx-auto relative group">

                <div
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setHoverSide(null)}
                    onClick={() => { }}
                    onMouseEnter={() => { }}
                    onFocusCapture={() => handleInteraction(true)}
                    tabIndex={0}
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute inset-0"
                            style={{ willChange: 'opacity, transform' }}
                        >
                            <Image
                                src={images[currentIndex].src}
                                alt={`Hackathon showcase ${currentIndex + 1}`}
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-w-1536px) 100vw, 1536px"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Edge Hover Arrows */}
                    <div className={`absolute left-0 inset-y-0 w-1/4 flex items-center justify-start pl-6 pointer-events-none transition-opacity duration-200 ${hoverSide === 'left' ? 'opacity-100' : 'opacity-0'}`}>
                        <button
                            onClick={(e) => { e.stopPropagation(); prevSlide(); handleInteraction(true); }}
                            className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white pointer-events-auto hover:bg-black/60 transition-all"
                            aria-label="Previous"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className={`absolute right-0 inset-y-0 w-1/4 flex items-center justify-end pr-6 pointer-events-none transition-opacity duration-200 ${hoverSide === 'right' ? 'opacity-100' : 'opacity-0'}`}>
                        <button
                            onClick={(e) => { e.stopPropagation(); nextSlide(); handleInteraction(true); }}
                            className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white pointer-events-auto hover:bg-black/60 transition-all"
                            aria-label="Next"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Dense Bars */}
                <div className="mt-8 flex justify-center w-full px-4">
                    <div className="flex gap-[1px] md:gap-[2px] w-full max-w-5xl items-center h-4">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(idx);
                                    handleInteraction(true);
                                }}
                                className={`h-1 flex-1 rounded-sm transition-all duration-300 outline-none relative overflow-hidden ${idx === currentIndex
                                    ? 'bg-white/90 scale-y-150'
                                    : 'bg-white/10 hover:bg-white/40'
                                    } focus-visible:ring-1 focus-visible:ring-white/50`}
                                aria-label={`Jump to highlight ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HackathonHighlights
