import { motion } from 'framer-motion'
import {
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
} from 'react-icons/fa'
import {
  SiGo,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiKubernetes,
  SiJenkins,
  SiHelm,
  SiSonarqube,
  SiTerraform,
  SiAnsible,
  SiNginx,
  SiMongodb,
  SiRedis,
  SiGooglecloud,
  SiPrometheus,
  SiGrafana,
} from 'react-icons/si'

const TechStack = () => {
  const technologies = [
    // Programming Languages
    { name: 'Go', icon: SiGo, color: '#00ADD8' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'C', icon: SiC, color: '#A8B9CC' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },

    // DevOps Tools
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
    { name: 'Helm', icon: SiHelm, color: '#0F1689' },
    { name: 'SonarQube', icon: SiSonarqube, color: '#4E9BCD' },

    // Cloud & Infrastructure
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
    { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
    { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
    { name: 'Nginx', icon: SiNginx, color: '#009639' },
    { name: 'Linux', icon: FaLinux, color: '#FCC624' },

    // Databases & Caching
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },

    // Observability
    { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
    { name: 'Grafana', icon: SiGrafana, color: '#F46800' },

    // Version Control
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="section-container" id="tech-stack">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Tools & Technologies
        </h2>
        <p className="text-gray-400 text-lg">
          Technologies I work with to build amazing products
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.15,
              y: -10,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="relative card flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden"
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
              style={{
                background: `radial-gradient(circle at center, ${tech.color}40, transparent 70%)`,
              }}
            />

            {/* Icon with rotation animation */}
            <motion.div
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                scale: 1.2,
              }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <tech.icon
                className="w-16 h-16 mb-3 transition-all duration-300 drop-shadow-lg"
                style={{ color: tech.color }}
              />
            </motion.div>

            {/* Name with enhanced styling */}
            <p className="relative z-10 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              {tech.name}
            </p>

            {/* Particle effect indicator */}
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="absolute top-2 right-2 w-2 h-2 rounded-full"
              style={{ backgroundColor: tech.color }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default TechStack
