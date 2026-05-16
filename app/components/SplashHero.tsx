'use client'

import { motion } from 'framer-motion'
import { Kode_Mono } from 'next/font/google'

const kodeMono = Kode_Mono({ weight: '400', subsets: ['latin'] })

const NAME = 'davidkrause'

export default function SplashHero() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Drifting gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[140px] -top-40 -left-48"
          animate={{ x: [0, 80, -30, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-violet-700/10 blur-[120px] -bottom-20 -right-24"
          animate={{ x: [0, -60, 20, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Brand name + tagline */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-8 text-center">
        <div
          className={`${kodeMono.className} flex flex-wrap justify-center items-baseline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold`}
        >
          {NAME.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
              className="text-white"
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: NAME.length * 0.06 + 0.1,
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"
          >
            .tech
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: NAME.length * 0.06 + 0.65,
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="text-slate-400 tracking-[0.25em] uppercase text-xs sm:text-sm"
        >
          Developer · Designer · Artist
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: NAME.length * 0.06 + 1.5, duration: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <path
            d="M8 3v10M3 9l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}
