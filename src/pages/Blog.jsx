import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaClock, FaCalendar, FaMedium } from 'react-icons/fa'
import { blogPosts } from '../data/siteConfig'

// Medium profile URL - update this with your Medium profile
const MEDIUM_URL = 'https://medium.com/@namratha343'

const Blog = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="pt-24 min-h-screen page-transition">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Blog & Articles
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Thoughts, tutorials, and insights on DevOps, Cloud Infrastructure, and scalable systems
          </p>

          {/* Medium Link Button */}
          <motion.a
            href={MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-full"
          >
            <FaMedium className="w-5 h-5" />
            <span>View All on Medium</span>
            <FaExternalLinkAlt className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Blog Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 max-w-5xl mx-auto"
        >
          {blogPosts.map((post) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="block"
            >
              <div className="card overflow-hidden group cursor-pointer p-6 md:p-8 min-h-[280px] md:min-h-[320px]">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg md:col-span-1">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full min-h-[240px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-30 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 flex flex-col justify-between py-2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-base md:text-lg mb-6 line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 bg-dark-lighter text-primary text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <FaCalendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaClock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all font-medium">
                        Read More
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Empty State (if no blogs) */}
        {blogPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">
              No blog posts yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Blog
