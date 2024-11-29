'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const DynamicBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.3), rgba(244, 63, 94, 0.1), rgba(109, 40, 217, 0.05))`,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
      />
    </div>
  )
}

