import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiCode, HiChip } from 'react-icons/hi'
import { projects } from '../data/siteConfig'

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  // Extract unique tags for filter buttons
  const allTags = [...new Set(projects.flatMap(p => p.tags))]
  const filters = ['All', ...allTags]

  // Filter projects based on selected tag
  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(selectedFilter))

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
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-dark via-dark-light to-dark">
      {/* Hero Section */}
      <div className="section-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring the intersection of DevOps, Cloud Infrastructure, and scalable systems.
            Each project represents a journey in building resilient, production-ready solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-gradient-primary text-white shadow-lg scale-105'
                  : 'bg-dark-lighter text-gray-400 hover:bg-dark-light hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-dark-light to-dark-lighter rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20">
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-light via-dark-light/50 to-transparent" />

                    {/* Floating Tech Stack Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-dark/90 backdrop-blur-sm text-xs font-medium text-primary border border-primary/30 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 bg-dark/90 backdrop-blur-sm text-xs font-medium text-gray-400 border border-gray-700 rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary transition-all duration-300">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="text-primary"
                      >
                        <HiChip className="w-6 h-6" />
                      </motion.div>
                    </div>

                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-dark border border-gray-700 text-gray-300 rounded hover:border-primary/50 hover:text-primary transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 btn-primary flex items-center justify-center gap-2 py-3 rounded-xl"
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
                        className="btn-outline flex items-center justify-center px-4 py-3 rounded-xl"
                      >
                        <HiExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary to-primary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500" />
                </div>
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
            <HiCode className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">No projects found with this filter.</p>
            <button
              onClick={() => setSelectedFilter('All')}
              className="mt-4 btn-outline px-6 py-2 rounded-lg"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects
