'use client'

import { motion } from 'framer-motion'
import { ButtonHTMLAttributes } from 'react'

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const AnimatedButton = ({ children, ...props }: AnimatedButtonProps) => {
  return (
    <motion.button
      className="relative px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.button>
  )
}

