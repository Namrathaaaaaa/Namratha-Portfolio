import { motion } from 'framer-motion'
import HeroSectionEnhanced from '../components/HeroSectionEnhanced'
import TechStackEnhanced from '../components/TechStackEnhanced'
import WorkExperienceEnhanced from '../components/WorkExperienceEnhanced'
import ParticleBackground from '../components/ParticleBackground'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition relative"
    >
      {/* Galaxy background across entire page */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <ParticleBackground />
      </div>
      <HeroSectionEnhanced />
      <TechStackEnhanced />
      <WorkExperienceEnhanced />
    </motion.div>
  )
}

export default Home
