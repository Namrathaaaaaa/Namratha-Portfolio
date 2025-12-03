// Site Configuration
// Update this file to customize your portfolio content

// Import blog posts from JSON file
import blogPostsData from './blogs/blogs.json'

export const personalInfo = {
  name: 'Namratha',
  nickname: 'Nam',
  role: 'DevOps Lead & Software Engineer',
  bio: 'DevSecOps Engineer passionate about automating security, securing cloud-native systems, and building resilient infrastructures.',
  phone: '+91 6362807044',
  email: 'namratha343@gmail.com',
  gmail: 'namratha343@gmail.com',
  linkedin: 'https://www.linkedin.com/in/namratha343/',
  github: 'https://github.com/Namrathaaaaaa',
  twitter: 'https://twitter.com/namratha343',
  profileImage: '/profile.jpg', // Add your image to /public folder
  credlyBadge: 'https://www.credly.com/earner/earned/badge/3e030a80-6842-4208-a7c5-afbeed8373c2',
}

export const projects = [
  {
    id: 1,
    title: 'Three-Tier Architecture on AWS',
    description: 'Deployed a 3-tier full-stack application on AWS EKS with CI/CD pipelines using Jenkins and ArgoCD. Achieved 90% uptime with DevSecOps integration (SonarQube, Trivy) and monitoring via Prometheus & Grafana.',
    image: '/3-tier.png',
    link: 'https://github.com/Namrathaaaaaa/3-Tier-Full-Stack',
    tags: ['Kubernetes', 'AWS EKS', 'Jenkins', 'ArgoCD', 'SonarQube', 'Trivy', 'Prometheus', 'Grafana'],
  },
  {
    id: 2,
    title: 'MLOps + DevSecOps Infrastructure',
    description: 'Managed Kubernetes clusters on personal servers with GitOps deployments through ArgoCD. Implemented chaos testing with Chaos Monkey for resilience and enhanced observability with Prometheus and Grafana.',
    image: '',
    link: 'https://github.com/Namrathaaaaaa/mlops-proj',
    tags: ['Kubernetes', 'ArgoCD', 'Jenkins', 'Docker', 'Terraform', 'Chaos Engineering'],
  },
  {
    id: 3,
    title: 'AIML Nexus - Department Chatbot',
    description: 'Led DevOps for AIML Nexus, an AI-driven chatbot platform. Deployed scalable workloads on Kubernetes with ArgoCD for zero-downtime deployments. Implemented full observability achieving 99.9% uptime.',
    image: 'https://via.placeholder.com/600x400/E91E63/FFFFFF?text=AIML+Nexus',
    link: 'https://github.com/Namrathaaaaaa',
    tags: ['Kubernetes', 'ArgoCD', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Jenkins'],
  },
  {
    id: 4,
    title: 'Bhuvan Multilingual Maps - ISRO',
    description: 'Led a team of 10 to enhance ISRO\'s Bhuvan geospatial platform. Built multilingual map translation system (English to Kannada) using PostGIS, vector tiles, and PostgreSQL with Redis caching for high-speed performance.',
    image: '/isro.png',
    link: 'https://github.com/Namrathaaaaaa',
    tags: ['Docker', 'PostgreSQL', 'PostGIS', 'Redis', 'Python', 'Geospatial'],
  },
]

export const blogPosts = blogPostsData

export const resumePath = '/namratha-portfolio-resume.pdf' // Add your resume.pdf to /public folder
