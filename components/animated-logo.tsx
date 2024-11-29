'use client'

import { motion } from 'framer-motion'

export const AnimatedLogo = () => {
  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M25 10 L40 40 L10 40 Z"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1 }
        }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

