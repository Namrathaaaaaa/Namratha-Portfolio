import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiOfficeBuilding, HiCalendar, HiCheckCircle, HiLightningBolt } from 'react-icons/hi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    role: 'DevOps Lead',
    startDate: 'Sept 2025',
    endDate: 'present',
    organization: 'DSCE Bangalore',
    highlights: [
      'Led DevOps for AIML Nexus chatbot platform deployed on Kubernetes + ArgoCD with zero-downtime deployments.',
      'Architected full CI/CD pipeline with Jenkins + SonarQube + GitHub integration.',
      'Implemented end-to-end observability with Prometheus, Grafana, OpenTelemetry ensuring 99.9% uptime.',
    ],
  },
  {
    role: 'SDE Intern',
    startDate: 'Jan 2025',
    endDate: 'Oct 2025',
    organization: 'ISRO Bangalore',
    highlights: [
      'Led team of 10 improving Bhuvan national geospatial platform.',
      'Built multilingual map translation system using PostGIS, vector tiles, PostgreSQL.',
      'Containerized services with Docker, deployed APIs with Redis caching.',
      'Optimized system performance for scalable multilingual map services.',
    ],
  },
  {
    role: 'Mentor',
    startDate: 'Jan 2025',
    endDate: 'April 2025',
    organization: 'Polytechnic Internship Mentorship',
    location: 'Remote',
    highlights: [
      'Mentored 70+ students in MERN full-stack development.',
      'Led end-to-end student projects with scalable deployment, automation, monitoring.',
    ],
  },
]

const WorkExperienceEnhanced = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const timelineRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      })

      // Animate timeline line
      gsap.to(timelineRef.current, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 90%',
          end: 'bottom 20%',
          scrub: 0.5,
        },
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-dark-light/80 to-dark/80 relative overflow-hidden z-0">
      {/* Background decorations - Static for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Professional Journey
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Building scalable infrastructure and leading teams to deliver production-ready solutions
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="experience-timeline relative max-w-5xl mx-auto">
          {/* Central vertical line */}
          <div
            ref={timelineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2"
            style={{ transform: 'scaleY(0)', transformOrigin: 'top center' }}
          />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`experience-card relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-dark shadow-lg shadow-primary/50" />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-primary rounded-full"
                  />
                </motion.div>

                {/* Content */}
                <div className={`pl-20 md:pl-0 ${index % 2 === 0 ? '' : 'md:order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: index % 2 === 0 ? 10 : -10 }}
                    className="group relative bg-gradient-to-br from-dark-light to-dark-lighter rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/10 p-8"
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Lightning icon for current role */}
                    {exp.endDate === 'present' && (
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-4 right-4"
                      >
                        <HiLightningBolt className="w-6 h-6 text-primary" />
                      </motion.div>
                    )}

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="mt-1"
                        >
                          <HiOfficeBuilding className="w-8 h-8 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary transition-all duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-gray-400 text-lg font-medium mt-2">
                            {exp.organization}
                            {exp.location && (
                              <span className="text-gray-500 text-sm ml-2">• {exp.location}</span>
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Date with icon */}
                      <div className="flex items-center gap-2 mb-6 text-gray-500">
                        <HiCalendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">
                          {exp.startDate} - {exp.endDate}
                        </span>
                        {exp.endDate === 'present' && (
                          <span className="ml-2 px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/30 rounded-full text-xs font-semibold animate-pulse">
                            Current Role
                          </span>
                        )}
                      </div>

                      {/* Highlights */}
                      <div className="space-y-4">
                        {exp.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ x: 10 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <HiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                            </motion.div>
                            <p className="text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors">
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary to-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className={`hidden md:block ${index % 2 === 0 ? '' : 'md:order-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperienceEnhanced
