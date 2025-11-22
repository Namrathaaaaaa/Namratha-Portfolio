import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import gsap from 'gsap'
import { personalInfo } from '../data/siteConfig'

const HeroSectionEnhanced = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cursorRef = useRef(null)
  const imageRef = useRef(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  // Typing effect roles
  const roles = ['DevSecOps Engineer', 'Kubernetes Enthusiast', 'SRE', 'Infrastructure Architect']
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.substring(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1))
          } else {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 150
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  // GSAP Animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance
      gsap.from('.hero-title', {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power4.out',
      })

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power4.out',
      })

      gsap.from('.hero-bio', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power4.out',
      })

      gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.7,
        ease: 'power4.out',
      })

      gsap.from('.hero-socials', {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.9,
        stagger: 0.1,
        ease: 'power4.out',
      })

      // Removed floating animation for better performance
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Magnetic effect for cursor
  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Parallax effect for image
  const handleImageMouseMove = (e) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const moveX = (x - centerX) / 20
    const moveY = (y - centerY) / 20

    gsap.to(imageRef.current, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleImageMouseLeave = () => {
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark/90 via-dark-light/90 to-dark/90 z-0"
    >

      {/* Animated Gradient Orbs - Simplified */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="hero-title">
              <motion.div
                className="inline-block"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <span className="text-4xl">👋</span>
              </motion.div>
              <h2 className="text-2xl md:text-3xl text-primary font-medium mt-2">
                Hi there, I'm
              </h2>
            </div>

            {/* Name with gradient */}
            <div className="hero-title">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Typing effect subtitle */}
            <div className="hero-subtitle">
              <h2 className="text-3xl md:text-4xl text-gray-300 font-semibold min-h-[3rem]">
                <span className="text-primary">&gt;</span> {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </h2>
            </div>

            {/* Bio */}
            <div className="hero-bio">
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                {personalInfo.bio}
              </p>
            </div>

            {/* CTA Buttons with hover effects */}
            <div className="hero-buttons flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(233, 30, 99, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              {[
                { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
                { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: SiGmail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="hero-socials w-12 h-12 flex items-center justify-center rounded-full bg-dark-lighter border border-gray-800 text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Image */}
          <div className="relative lg:order-last order-first">
            <div
              ref={imageRef}
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
              className="relative w-full aspect-square max-w-lg mx-auto cursor-pointer"
            >
              {/* Gradient ring - Static for better performance */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-2xl opacity-30" />
              <div className="absolute inset-4 bg-gradient-to-l from-primary to-secondary rounded-full blur-xl opacity-20" />

              {/* Image Container with 3D effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 bg-dark-light shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay" />
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/500x500/9C27B0/FFFFFF?text=N'
                  }}
                />
              </motion.div>

              {/* Tech badges - Static for performance */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg">
                <span className="text-white font-semibold text-sm">DevSecOps</span>
              </div>

              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-secondary to-primary rounded-full shadow-lg">
                <span className="text-white font-semibold text-sm">Cloud</span>
              </div>

              <div className="absolute top-1/2 -right-8 px-4 py-2 bg-dark border-2 border-primary/50 rounded-full shadow-lg">
                <span className="text-primary font-semibold text-sm">K8s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSectionEnhanced
