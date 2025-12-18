'use client'

import { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { motion } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.15,
        scale: 1.02
      })
    }
  }, [])

  return (
    <div ref={tiltRef} className={`transform-style-3d ${className}`}>
        {children}
    </div>
  )
}
