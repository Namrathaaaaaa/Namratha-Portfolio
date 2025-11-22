import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/siteConfig'

const ProjectsSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="section-container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg">
          Some of my recent work and side projects
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Carousel */}
        <div className="relative overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="card"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg group">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-400">
                    {projects[currentIndex].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-dark-lighter text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 w-fit"
                  >
                    View Overview
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            className="p-3 bg-dark-light rounded-full text-primary hover:bg-gradient-primary hover:text-white transition-all"
          >
            <FaChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Indicators */}
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-primary'
                    : 'w-2 bg-dark-lighter'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="p-3 bg-dark-light rounded-full text-primary hover:bg-gradient-primary hover:text-white transition-all"
          >
            <FaChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
