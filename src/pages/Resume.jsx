import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaSearchPlus, FaSearchMinus, FaExpand } from 'react-icons/fa'
import { resumePath } from '../data/siteConfig'

const Resume = () => {
  const [scale, setScale] = useState(1)
  const resumeUrl = resumePath // Place your resume.pdf in the public folder

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5))
  }

  const handleDownload = () => {
    // Try fetching the PDF and triggering a blob download to force save
    ;(async () => {
      try {
        const resp = await fetch(resumeUrl, { cache: 'no-cache' })
        if (!resp.ok) throw new Error('Network response was not ok')
        const blob = await resp.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'Namratha_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        link.remove()
        window.URL.revokeObjectURL(url)
      } catch (err) {
        // Fallback to simple anchor download (may open in new tab in some browsers)
        const link = document.createElement('a')
        link.href = resumeUrl
        link.download = 'Namratha_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    })()
  }

  const handleFullscreen = () => {
    const iframe = document.getElementById('resume-iframe')
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen()
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen()
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen()
    }
  }

  return (
    <div className="pt-24 min-h-screen page-transition">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Resume
          </h1>
          <p className="text-gray-400 text-lg">
            View and download my professional resume
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          <button
            onClick={handleZoomIn}
            className="btn-outline flex items-center gap-2"
            title="Zoom In"
          >
            <FaSearchPlus />
            Zoom In
          </button>

          <button
            onClick={handleZoomOut}
            className="btn-outline flex items-center gap-2"
            title="Zoom Out"
          >
            <FaSearchMinus />
            Zoom Out
          </button>

          <button
            onClick={handleFullscreen}
            className="btn-outline flex items-center gap-2"
            title="Fullscreen"
          >
            <FaExpand />
            Fullscreen
          </button>

          <button
            onClick={handleDownload}
            className="btn-primary flex items-center gap-2"
            title="Download PDF"
          >
            <FaDownload />
            Download PDF
          </button>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="card overflow-hidden">
            <div className="overflow-auto bg-gray-100" style={{ maxHeight: '80vh' }}>
              <div
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.3s ease',
                }}
              >
                <iframe
                  id="resume-iframe"
                  src={resumeUrl}
                  className="w-full h-screen border-0"
                  title="Resume PDF"
                  onError={() => {
                    // Fallback if PDF doesn't load
                    const container = document.getElementById('resume-iframe')
                    if (container) {
                      container.innerHTML = `
                        <div class="flex items-center justify-center h-full bg-dark-light text-white">
                          <div class="text-center space-y-4">
                            <p class="text-xl">Resume PDF not found</p>
                            <p class="text-gray-400">Please add your resume.pdf to the public folder</p>
                            <a href="${resumeUrl}" download class="btn-primary inline-block mt-4">
                              Download Resume
                            </a>
                          </div>
                        </div>
                      `
                    }
                  }}
                />
              </div>
            </div>

            {/* Alternative: Embed using object tag (uncomment if preferred) */}
            {/* <object
              data={resumeUrl}
              type="application/pdf"
              className="w-full"
              style={{ height: '80vh' }}
            >
              <div className="text-center p-8 text-white">
                <p className="mb-4">Unable to display PDF. Please download it instead.</p>
                <button onClick={handleDownload} className="btn-primary">
                  Download Resume
                </button>
              </div>
            </object> */}
          </div>

          {/* Instructions */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>
              Pro tip: Right-click on the PDF to access more viewing options
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
