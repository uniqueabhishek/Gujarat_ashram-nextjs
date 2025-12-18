'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ZenPreloader({ onComplete }: { onComplete: () => void }) {
  const [exit, setExit] = useState(false)

  useEffect(() => {
    // Determine total loading time (min 2s for effect)
    const timer = setTimeout(() => {
      setExit(true)
      setTimeout(onComplete, 800) // Wait for exit animation
    }, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ashram-sand"
      initial={{ opacity: 1 }}
      animate={exit ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        {/* Mandala/Circle Animation */}
        <div className="relative w-32 h-32 mb-8">
           {[...Array(3)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute inset-0 border-2 border-ashram-amber/30 rounded-full"
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{
                 scale: [1, 1.5, 1],
                 opacity: [0.5, 0, 0.5],
                 rotate: [0, 180, 360]
               }}
               transition={{
                 duration: 3,
                 repeat: Infinity,
                 delay: i * 0.4,
                 ease: "easeInOut"
               }}
             />
           ))}
           <motion.div
             className="absolute inset-0 m-auto w-4 h-4 bg-ashram-amber rounded-full"
             animate={{ scale: [1, 1.2, 1] }}
             transition={{ duration: 2, repeat: Infinity }}
           />
        </div>

        {/* Text Reveal */}
        <motion.div
          className="overflow-hidden h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h1
            className="text-ashram-clay font-serif text-2xl tracking-[0.2em] uppercase"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Gujarat Ashram
          </motion.h1>
        </motion.div>

        <motion.div
          className="mt-2 text-ashram-stone/60 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Loading Serenity
        </motion.div>
      </div>
    </motion.div>
  )
}
