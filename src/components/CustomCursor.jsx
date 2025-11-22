import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="custom-cursor hidden lg:block"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <motion.div
        className="custom-cursor-dot hidden lg:block"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />
    </>
  )
}

export default CustomCursor
