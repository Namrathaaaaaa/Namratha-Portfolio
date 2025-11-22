import { motion } from 'framer-motion'
import { HiOfficeBuilding, HiCalendar, HiCheckCircle } from 'react-icons/hi'

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

const WorkExperience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-dark to-dark-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable infrastructure and leading teams to deliver production-ready solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-gradient-to-b from-primary to-secondary opacity-30 hidden md:block" />
              )}

              {/* Experience Card */}
              <div className="relative bg-gradient-to-br from-dark-light to-dark-lighter rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/10">
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      {/* Role & Organization */}
                      <div className="flex items-start gap-3 mb-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="mt-1"
                        >
                          <HiOfficeBuilding className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary transition-all duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-gray-400 text-lg font-medium mt-1">
                            {exp.organization}
                            {exp.location && (
                              <span className="text-gray-500 text-sm ml-2">• {exp.location}</span>
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Date Range */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 ml-9">
                        <HiCalendar className="w-4 h-4" />
                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                        {exp.endDate === 'present' && (
                          <span className="ml-2 px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/30 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <HiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-gray-300 transition-colors">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary to-primary opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience
