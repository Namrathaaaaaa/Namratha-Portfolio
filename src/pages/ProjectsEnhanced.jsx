import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { HiExternalLink, HiCode, HiChip } from 'react-icons/hi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/siteConfig'

gsap.registerPlugin(ScrollTrigger)

const ProjectsEnhanced = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Extract unique tags for filter buttons
  const allTags = [...new Set(projects.flatMap(p => p.tags))]
  const filters = ['All', ...allTags]

  // Filter projects based on selected tag
  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(selectedFilter))

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [filteredProjects])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <div ref={sectionRef} className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden z-0">
      {/* Background decorations - Static for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-60" />
      </div>

      {/* Hero Section */}
      <div className="section-container mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Featured Projects
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Exploring the intersection of DevOps, Cloud Infrastructure, and scalable systems.
            Each project represents a journey in building resilient, production-ready solutions.
          </motion.p>
        </motion.div>

        {/* Filter Buttons with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50'
                  : 'bg-dark-lighter text-gray-400 hover:bg-dark-light hover:text-white border border-gray-800 hover:border-primary/30'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with 3D effects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                className="project-card"
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  scale={1.01}
                  transitionSpeed={300}
                  glareEnable={false}
                >
                  <motion.div
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="group relative h-full bg-gradient-to-br from-dark-light to-dark-lighter rounded-3xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:shadow-primary/30"
                    whileHover={{ y: -10 }}
                  >
                    {/* Gradient overlay - Static */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Project Image with parallax */}
                    <div className="relative h-72 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                        style={{
                          transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

                      {/* Floating badges with enhanced animation */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1.5 bg-dark/95 backdrop-blur-md text-xs font-semibold text-primary border border-primary/40 rounded-full shadow-lg"
                          >
                            {tag}
                          </motion.span>
                        ))}
                        {project.tags.length > 3 && (
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1.5 bg-dark/95 backdrop-blur-md text-xs font-semibold text-gray-400 border border-gray-700 rounded-full"
                          >
                            +{project.tags.length - 3}
                          </motion.span>
                        )}
                      </div>

                    </div>

                    {/* Project Info */}
                    <div className="p-8 relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300 flex-1">
                          {project.title}
                        </h3>
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.2 }}
                          className="text-primary"
                        >
                          <HiChip className="w-8 h-8" />
                        </motion.div>
                      </div>

                      <p className="text-gray-400 text-base mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1.5 text-xs bg-dark border border-gray-700 text-gray-300 rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Action Buttons with enhanced effects */}
                      <div className="flex gap-4">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(233, 30, 99, 0.5)' }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center gap-2 py-4 rounded-xl font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300"
                        >
                          <HiCode className="w-5 h-5" />
                          View Code
                        </motion.a>
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="border-2 border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all duration-300"
                        >
                          <HiExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Decorative accents - Simplified */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary to-primary opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <HiCode className="w-20 h-20 mx-auto text-gray-600 mb-6" />
            <p className="text-gray-400 text-xl mb-4">No projects found with this filter.</p>
            <motion.button
              onClick={() => setSelectedFilter('All')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-primary text-white rounded-full font-semibold shadow-lg"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ProjectsEnhanced
