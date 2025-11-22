import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (formData.linkedin && !formData.linkedin.includes('linkedin.com')) {
      newErrors.linkedin = 'Please enter a valid LinkedIn URL'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      setIsSubmitting(false)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          linkedin: '',
          message: '',
        })
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'namratha343@gmail.com',
      href: 'mailto:namratha343@gmail.com',
      color: '#E91E63',
    },
    {
      icon: SiGmail,
      title: 'Gmail',
      value: 'namratha343@gmail.com',
      href: 'mailto:namratha343@gmail.com',
      color: '#EA4335',
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: '/in/namratha343',
      href: 'https://www.linkedin.com/in/namratha343/',
      color: '#0A66C2',
    },
  ]

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
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Contact Methods
            </h2>

            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="card flex items-center gap-4 group cursor-pointer"
              >
                <div
                  className="p-4 rounded-lg transition-colors"
                  style={{
                    backgroundColor: `${method.color}20`,
                    color: method.color,
                  }}
                >
                  <method.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{method.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Additional Info */}
            <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 mt-8">
              <h3 className="text-white font-semibold mb-2">
                Looking for collaboration?
              </h3>
              <p className="text-gray-400 text-sm">
                I'm always interested in hearing about new projects and
                opportunities. Feel free to reach out!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-lighter border rounded-lg focus:outline-none focus:ring-2 transition-all text-white ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-dark-lighter focus:ring-primary'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-lighter border rounded-lg focus:outline-none focus:ring-2 transition-all text-white ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-dark-lighter focus:ring-primary'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      LinkedIn URL (Optional)
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-lighter border rounded-lg focus:outline-none focus:ring-2 transition-all text-white ${
                        errors.linkedin
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-dark-lighter focus:ring-primary'
                      }`}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                    {errors.linkedin && (
                      <p className="text-red-500 text-sm mt-1">{errors.linkedin}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 bg-dark-lighter border rounded-lg focus:outline-none focus:ring-2 transition-all text-white resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-dark-lighter focus:ring-primary'
                      }`}
                      placeholder="Your message..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
