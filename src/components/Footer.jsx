import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Namrathaaaaaa', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/namratha343/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/namratha343', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:namratha343@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative mt-20">
      {/* Gradient Line */}
      <div className="h-1 bg-gradient-primary" />

      <div className="bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} · Made with{' '}
              <span className="text-primary animate-pulse">❤</span> Namratha
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
