"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth spring animation for the progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Responsive transform values using CSS custom properties
  const leftX = useTransform(smoothProgress, [0, 0.5], [0, -200])
  const rightX = useTransform(smoothProgress, [0, 0.5], [0, 200])
  const splitOpacity = useTransform(smoothProgress, [0, 0.3, 0.5], [1, 0.5, 0])
  const combinedOpacity = useTransform(smoothProgress, [0.3, 0.5, 0.7], [0, 0.5, 1])
  const combinedY = useTransform(smoothProgress, [0.3, 0.7], [30, 0])
  const textOpacity = useTransform(smoothProgress, [0.2, 0.5], [0, 1])
  const lineScale = useTransform(smoothProgress, [0, 0.5], [0, 1])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#030303] flex items-center justify-center overflow-hidden"
    >
      {/* Background - same as before */}
      <div className="absolute inset-0 bg-linear-to-b from-[#000000] via-[#020202] to-black" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 70%)'
        }} />
      </div>

      {/* Content with responsive classes */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
          
          {/* Split text - Fully responsive with Tailwind */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white/90 whitespace-nowrap drop-shadow-2xl"
              style={{ 
                x: leftX,
                opacity: splitOpacity
              }}
            >
              ABO
            </motion.h2>
            
            {/* Separator - Responsive height */}
            <motion.div 
              className="w-0.5 bg-linear-to-b from-amber-700/40 via-amber-500/60 to-amber-700/40 rounded-full h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24"
              style={{ 
                scaleY: lineScale,
                opacity: lineScale
              }}
            />
            
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white/90 whitespace-nowrap drop-shadow-2xl"
              style={{ 
                x: rightX,
                opacity: splitOpacity
              }}
            >
              UT
            </motion.h2>
          </div>

          {/* Combined ABOUT text */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-center px-2"
            style={{
              opacity: combinedOpacity,
              y: combinedY
            }}
          >
            <span className="bg-linear-to-r from-amber-600/90 via-amber-400 to-amber-600/90 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              ABOUT
            </span>
          </motion.h2>

          {/* Description text - Fully responsive */}
          <motion.div
            className="w-full max-w-4xl mx-auto text-center px-2 sm:px-4 mt-4 sm:mt-5 md:mt-6 lg:mt-8"
            style={{
              opacity: textOpacity,
              y: useTransform(smoothProgress, [0.2, 0.5], [20, 0])
            }}
          >
            <p className="text-gray-300/80 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed font-light tracking-wide px-2">
              AHMAD transforms businesses with AI-powered tech solutions that drive real growth. 
              We engineer intelligent systems to automate, optimize, and scale your operations — 
              delivering measurable results from day one. 
            </p>
            <motion.p 
              className="text-amber-400/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 font-medium tracking-wide"
              style={{
                opacity: textOpacity,
              }}
            >
              Let's future-proof your business together.
            </motion.p>
          </motion.div>

          {/* Decorative elements - Responsive sizing */}
          <motion.div 
            className="absolute -left-10 sm:-left-16 md:-left-20 top-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-amber-700/5 rounded-full blur-3xl"
            style={{
              opacity: useTransform(smoothProgress, [0, 0.5, 1], [0, 0.15, 0])
            }}
          />
          <motion.div 
            className="absolute -right-10 sm:-right-16 md:-right-20 bottom-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-amber-600/5 rounded-full blur-3xl"
            style={{
              opacity: useTransform(smoothProgress, [0, 0.5, 1], [0, 0.15, 0])
            }}
          />
        </div>
      </div>

      {/* Scroll indicator - Responsive */}
      <motion.div 
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-amber-700/40 flex flex-col items-center gap-1 sm:gap-2"
        style={{
          opacity: useTransform(smoothProgress, [0, 0.3, 0.5], [1, 0.4, 0])
        }}
      >
        <span className="tracking-[0.2em] text-[8px] sm:text-[10px] md:text-xs">
          DISCOVER
        </span>
        <div className="border border-amber-700/30 rounded-full flex justify-center w-3 sm:w-4 h-5 sm:h-6 md:h-7">
          <motion.div 
            className="bg-amber-700/40 rounded-full w-0.5 sm:w-1 h-1 sm:h-1.5 mt-1 sm:mt-1.5"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection