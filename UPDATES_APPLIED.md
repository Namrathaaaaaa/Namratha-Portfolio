# Portfolio Updates Applied

Your portfolio has been customized with your actual professional information!

## What's Been Updated

### ✅ Personal Information
- **Name:** Namratha
- **Role:** DevOps Lead & Software Engineer
- **Bio:** Updated with your education (B.E in AI/ML @ DSCE, CGPA: 9.83), work experience (DevOps Lead @ AIML Nexus, Former SDE Intern @ ISRO)
- **Contact:** namratha343@gmail.com
- **Phone:** +91 6362807044

### ✅ Social Links
- **LinkedIn:** https://www.linkedin.com/in/namratha343/
- **GitHub:** https://github.com/Namrathaaaaaa
- **Twitter:** https://twitter.com/namratha343
- **Credly Badge:** https://www.credly.com/earner/earned/badge/3e030a80-6842-4208-a7c5-afbeed8373c2

### ✅ Projects (4 Real Projects)

1. **Three-Tier Architecture on AWS**
   - Technologies: Kubernetes, AWS EKS, Jenkins, ArgoCD, SonarQube, Trivy, Prometheus, Grafana
   - Link: https://github.com/Namrathaaaaaa/3-Tier-Full-Stack

2. **MLOps + DevSecOps Infrastructure**
   - Technologies: Kubernetes, ArgoCD, Jenkins, Docker, Terraform, Chaos Engineering
   - Link: https://github.com/Namrathaaaaaa/mlops-proj

3. **AIML Nexus - Department Chatbot**
   - Technologies: Kubernetes, ArgoCD, Prometheus, Grafana, OpenTelemetry, Jenkins

4. **Bhuvan Multilingual Maps - ISRO**
   - Technologies: Docker, PostgreSQL, PostGIS, Redis, Python, Geospatial

### ✅ Tech Stack (23 Technologies)

**Programming Languages:**
- Go, Python, JavaScript, TypeScript, C, C++

**DevOps Tools:**
- Docker, Kubernetes, Jenkins, Helm, SonarQube

**Cloud & Infrastructure:**
- AWS, GCP, Terraform, Ansible, Nginx, Linux

**Databases & Caching:**
- MongoDB, Redis

**Observability:**
- Prometheus, Grafana

**Version Control:**
- Git

### ✅ Updated Components

1. **src/data/siteConfig.js** - Central configuration file with all your data
2. **src/components/HeroSection.jsx** - Now pulls from siteConfig
3. **src/components/TechStack.jsx** - Updated with your real tech stack
4. **src/components/ProjectsSection.jsx** - Uses projects from siteConfig
5. **src/components/Footer.jsx** - Real social links
6. **src/pages/Contact.jsx** - Real contact information
7. **src/pages/Blog.jsx** - Ready for your blog posts (currently empty)
8. **src/pages/Resume.jsx** - Ready for your resume PDF

## Next Steps

### 1. Add Your Profile Photo
Place your photo in `/public/` folder and update in `siteConfig.js`:
```javascript
profileImage: '/your-photo.jpg',
```

### 2. Add Your Resume PDF
1. Place `resume.pdf` in `/public/` folder
2. Delete `/public/RESUME_INSTRUCTIONS.txt`

### 3. Add Blog Posts (Optional)
Edit `blogPosts` array in `/src/data/siteConfig.js`:
```javascript
export const blogPosts = [
  {
    id: 1,
    title: 'Your Blog Title',
    summary: 'Brief summary',
    date: '2025-11-15',
    readTime: '5 min read',
    link: 'https://medium.com/@namratha343/article',
    image: 'https://your-image-url.com/image.jpg',
    tags: ['DevOps', 'Kubernetes'],
  },
]
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Test Everything
- ✅ Home page with your intro and projects
- ✅ Blog page (will show "No blog posts" until you add some)
- ✅ Community page (Coming Soon)
- ✅ Resume page (will show instructions until you add PDF)
- ✅ Contact page with your email and LinkedIn

### 6. Build for Production
```bash
npm run build
```

## Important Files

- **Main Config:** `/src/data/siteConfig.js` - Update all content here
- **Theme Colors:** `/tailwind.config.js` - Customize colors
- **Assets:** `/public/` - Add images and resume PDF here

## Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations with Framer Motion
✅ Pink-purple gradient theme
✅ Project carousel
✅ Contact form with validation
✅ Resume PDF viewer with zoom controls
✅ Modern, minimal UI

## Support

If you need to make changes:
1. All personal data: Edit `/src/data/siteConfig.js`
2. Colors/theme: Edit `/tailwind.config.js`
3. See `CUSTOMIZATION.md` for detailed guides

---

**Ready to launch!** 🚀

Start the dev server with `npm run dev` and visit http://localhost:5173
