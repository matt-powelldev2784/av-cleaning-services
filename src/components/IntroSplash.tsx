import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { INTRO_DURATION_MS, introWillPlay, markIntroPlayed } from '../lib/intro'

/**
 * Full-screen intro played once per session: the logo ring draws itself in,
 * the sparkle pops, and the "AV" letters stagger up before the overlay fades
 * away to reveal the hero.
 */
export function IntroSplash() {
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState<boolean>(() => introWillPlay())

  useEffect(() => {
    if (!visible) return
    markIntroPlayed()
    const timeout = window.setTimeout(
      () => setVisible(false),
      reduceMotion ? 500 : INTRO_DURATION_MS,
    )
    return () => window.clearTimeout(timeout)
  }, [visible, reduceMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <svg
            viewBox="94.16 71.5 291.69 215"
            className="w-48 sm:w-64"
            role="img"
            aria-label="AV Cleaning Services logo animation"
          >
            {/* Ring draws itself in */}
            <motion.circle
              cx="240"
              cy="195.5"
              r="84"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="8"
              strokeLinecap="round"
              style={{ transformOrigin: '240px 195.5px' }}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={
                reduceMotion
                  ? { duration: 0.3 }
                  : {
                      pathLength: { duration: 1.1, ease: 'easeInOut' },
                      opacity: { duration: 0.2 },
                    }
              }
            />
            {/* Sparkle pops */}
            <motion.path
              d="M300.0 111.5 L306.0 129.5 L324.0 135.5 L306.0 141.5 L300.0 159.5 L294.0 141.5 L276.0 135.5 L294.0 129.5 Z"
              fill="#1A8AD8"
              style={{ transformOrigin: '300px 135.5px' }}
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={
                reduceMotion
                  ? { duration: 0.3 }
                  : { delay: 0.9, type: 'spring', stiffness: 260, damping: 12 }
              }
            />
          </svg>

          <div
            className="mt-6 flex overflow-hidden font-display text-5xl font-bold text-white sm:text-6xl"
            aria-hidden="true"
          >
            {['A', 'V'].map((letter, index) => (
              <motion.span
                key={letter}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={
                  reduceMotion
                    ? { duration: 0.2 }
                    : {
                        delay: 1.1 + index * 0.12,
                        type: 'spring',
                        stiffness: 200,
                        damping: 20,
                      }
                }
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="mt-3 text-sm font-medium uppercase tracking-[0.35em] text-brand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : 1.5, duration: 0.5 }}
          >
            Cleaning Services
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
