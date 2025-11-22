import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  SiGo, SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus,
  SiDocker, SiKubernetes, SiJenkins, SiHelm, SiTerraform, SiAnsible, SiGooglecloud, SiNginx, SiLinux, SiGnubash,
  SiMongodb, SiRedis, SiPostgresql, SiPrometheus, SiGrafana,
  SiGit
} from 'react-icons/si'

gsap.registerPlugin(ScrollTrigger)

const techStack = [
  // Languages
  { name: 'Go', icon: SiGo, color: '#00ADD8', category: 'Languages' },
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Languages' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Languages' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Languages' },
  { name: 'C', icon: SiC, color: '#A8B9CC', category: 'Languages' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C', category: 'Languages' },

  // DevOps
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', category: 'DevOps' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D24939', category: 'DevOps' },
  { name: 'Helm', icon: SiHelm, color: '#0F1689', category: 'DevOps' },
  { name: 'Terraform', icon: SiTerraform, color: '#7B42BC', category: 'DevOps' },
  { name: 'Ansible', icon: SiAnsible, color: '#EE0000', category: 'DevOps' },

  // Cloud
  // { name: 'AWS', icon: SiAws, color: '#FF9900', category: 'Cloud' },
  { name: 'GCP', icon: SiGooglecloud, color: '#4285F4', category: 'Cloud' },
  { name: 'Nginx', icon: SiNginx, color: '#009639', category: 'Cloud' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624', category: 'Cloud' },
  { name: 'Bash', icon: SiGnubash, color: '#4EAA25', category: 'Cloud' },

  // Databases
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Databases' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Databases' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Databases' },

  // Observability
  { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C', category: 'Observability' },
  { name: 'Grafana', icon: SiGrafana, color: '#F46800', category: 'Observability' },
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'VCS' },
]

const TechStackEnhanced = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!titleRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-gradient-to-b from-dark/80 to-dark-light/80 relative overflow-hidden z-0">
      {/* Background decorative elements - Static for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Tech Arsenal
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Mastering cutting-edge technologies to build scalable, resilient infrastructure
            </p>
          </motion.div>
        </div>

        {/* Tech Grid with 3D Tilt Effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="tech-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="tech-card"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.1}
                transitionSpeed={200}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor={tech.color}
                glarePosition="all"
                glareBorderRadius="20px"
              >
                <motion.div
                  whileHover={{
                    y: -12,
                    boxShadow: `0 20px 40px ${tech.color}40`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-6 bg-gradient-to-br from-dark-light to-dark-lighter rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center overflow-hidden"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Animated background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.color}30, transparent 60%)`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Pulse ring effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: `inset 0 0 20px ${tech.color}20`,
                    }}
                  />

                  {/* Icon with enhanced animation */}
                  <motion.div
                    whileHover={{
                      rotate: [0, -15, 15, -10, 10, 0],
                      scale: 1.3,
                    }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="relative z-10 mb-3"
                  >
                    <tech.icon
                      className="w-12 h-12 transition-all duration-300 group-hover:drop-shadow-lg"
                      style={{
                        color: tech.color,
                        filter: 'drop-shadow(0 0 0px transparent)',
                      }}
                    />
                    {/* Icon glow */}
                    <div
                      className="absolute inset-0 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                      style={{ backgroundColor: tech.color }}
                    />
                  </motion.div>

                  {/* Name with color change on hover */}
                  <span
                    className="text-xs font-medium text-gray-400 group-hover:text-white transition-all duration-300 text-center relative z-10"
                    style={{
                      textShadow: 'none',
                    }}
                  >
                    {tech.name}
                  </span>

                  {/* Category badge (shows on hover) with animation */}
                  <motion.div
                    className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span
                      className="px-2 py-1 text-[10px] text-white rounded-full font-semibold shadow-lg"
                      style={{ backgroundColor: tech.color }}
                    >
                      {tech.category}
                    </span>
                  </motion.div>

                  {/* Corner sparkle effect */}
                  <motion.div
                    className="absolute top-1 left-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: tech.color }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                  />
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
        </motion.div>
      </div>
    </section>
  )
}

export default TechStackEnhanced
