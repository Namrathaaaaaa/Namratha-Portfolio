import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const ParticleBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container) => {
    console.log(container)
  }

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: true,
            mode: 'slow',
          },
          resize: true,
        },
        modes: {
          slow: {
            factor: 3,
            radius: 200,
          },
        },
      },
      particles: {
        color: {
          value: ['#880E4F', '#AD1457', '#C2185B', '#D81B60', '#6A1B9A', '#4A148C'],
        },
        links: {
          enable: true,
          distance: 120,
          color: '#880E4F',
          opacity: 0.15,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: false,
          speed: 0.8,
          straight: false,
          warp: true,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: { min: 0.1, max: 0.7 },
          animation: {
            enable: true,
            speed: 0.3,
            minimumValue: 0.05,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3.5 },
          animation: {
            enable: true,
            speed: 0.3,
            minimumValue: 0.5,
            sync: false,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.02,
            opacity: 1,
            color: {
              value: ['#ffffff', '#F8BBD9', '#CE93D8'],
            },
          },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0"
        style={{ zIndex: 1 }}
      />
    )
  }

  return <></>
}

export default ParticleBackground
