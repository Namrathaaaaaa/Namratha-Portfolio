# Namratha's Portfolio t

A beautiful, modern, and responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features a stunning pink-purple gradient theme with smooth animations and a clean, minimalist design.

## Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Animated UI**: Smooth page transitions and hover effects
- **Multi-page Application**: Home, Blog, Community, Resume, and Contact pages
- **Beautiful Theme**: Pink-purple-black gradient color scheme
- **Fast Performance**: Optimized with Vite for lightning-fast development and builds

## Pages

### 1. Home Page
- **Hero Section**: Introduction with animated background and profile photo
- **Tech Stack**: Grid of technology logos with hover animations
- **Projects Section**: Interactive carousel showcasing featured projects
- **Smooth Animations**: Fade-in and slide-up effects

### 2. Blog Page
- Horizontal blog cards with customizable images
- Links to Medium/Dev.to articles
- Tags and read time indicators
- Hover effects and smooth transitions

### 3. Community Page
- "Coming Soon" placeholder with animated elements
- Ready for future community features

### 4. Resume Page
- Embedded PDF viewer
- Zoom in/out controls
- Fullscreen mode
- Download button
- Mobile-responsive

### 5. Contact Page
- Contact form with validation
- Multiple contact methods (Email, Gmail, LinkedIn)
- Form submission with success animation
- Error handling and validation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**

```bash
cd namratha-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Adding Your Profile Photo

Replace the placeholder image in the Hero section:

1. Add your photo to `/public/placeholder-profile.jpg`
2. Or update the image path in `/src/components/HeroSection.jsx`:

```jsx
<img
  src="/your-photo.jpg"
  alt="Namratha"
  className="w-full h-full object-cover"
/>
```

### 2. Adding Blog Posts

Edit `/src/pages/Blog.jsx` and modify the `blogPosts` array:

```javascript
const blogPosts = [
  {
    id: 1,
    title: 'Your Blog Title',
    summary: 'One-line summary of your post',
    date: '2024-11-15',
    readTime: '5 min read',
    link: 'https://medium.com/@yourprofile/your-article',
    image: 'https://your-image-url.com/image.jpg',
    tags: ['React', 'JavaScript'],
  },
  // Add more posts...
]
```

### 3. Updating Projects

Edit `/src/components/ProjectsSection.jsx` and modify the `projects` array:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description of your project',
    image: 'https://your-image-url.com/project.jpg',
    link: 'https://github.com/yourprofile/project',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  // Add more projects...
]
```

### 4. Replacing the Resume PDF

1. Add your resume PDF to the `/public` folder as `resume.pdf`
2. Or update the path in `/src/pages/Resume.jsx`:

```javascript
const resumeUrl = '/your-resume.pdf'
```

### 5. Changing Theme Colors

Edit `/tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#E91E63', // Change this pink color
    light: '#F48FB1',
    dark: '#C2185B',
  },
  secondary: {
    DEFAULT: '#9C27B0', // Change this purple color
    light: '#BA68C8',
    dark: '#7B1FA2',
  },
  // ... other colors
}
```

**Available gradient themes:**
- Pink-Purple (current): `bg-gradient-primary`
- Pink-Black: `bg-gradient-dark`
- Purple-Black: `bg-gradient-purple-dark`

### 6. Updating Contact Information

Edit `/src/pages/Contact.jsx` and `/src/components/Footer.jsx`:

**Contact Page:**
```javascript
const contactMethods = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'your-email@example.com',
    href: 'mailto:your-email@example.com',
  },
  // Update other contact methods
]
```

**Footer:**
```javascript
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/yourprofile', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  // Update your social links
]
```

### 7. Customizing Personal Information

Edit `/src/components/HeroSection.jsx`:

```jsx
<h1 className="text-5xl md:text-7xl font-bold">
  <span className="gradient-text">Your Name</span>
</h1>
<p className="text-3xl md:text-4xl text-gray-300 mt-2">
</p>
<p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
  Your Role/Title
</p>
<p className="text-lg text-gray-500 mt-4">
  Your bio and description...
</p>
```

### 8. Updating Tech Stack

Edit `/src/components/TechStack.jsx`:

```javascript
const technologies = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  // Add your technologies with their icons and colors
]
```

### 9. Configuring Form Submission

The contact form currently has a dummy handler. To connect it to a real backend:

Edit `/src/pages/Contact.jsx` in the `handleSubmit` function:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()

  // Replace this with your actual API endpoint
  const response = await fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  // Handle response...
}
```

**Popular form backend services:**
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Web3Forms](https://web3forms.com/)

## Folder Structure

```
namratha-portfolio/
├── public/
│   ├── resume.pdf              # Your resume PDF
│   ├── placeholder-profile.jpg # Your profile photo
│   └── vite.svg               # Favicon
├── src/
│   ├── components/
│   │   ├── Footer.jsx         # Footer component
│   │   ├── HeroSection.jsx    # Home hero section
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── ProjectsSection.jsx # Projects carousel
│   │   └── TechStack.jsx      # Technologies grid
│   ├── pages/
│   │   ├── Blog.jsx           # Blog page
│   │   ├── Community.jsx      # Community page
│   │   ├── Contact.jsx        # Contact page
│   │   ├── Home.jsx           # Home page
│   │   └── Resume.jsx         # Resume page
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx               # App entry point
├── index.html                 # HTML template
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Icons** - Icon library

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/namratha-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions:

1. Check this README for customization guides
2. Review the code comments in each file
3. Ensure all dependencies are installed correctly

## Credits

Created with by Namratha

---

Made with React, Tailwind CSS, and Framer Motion
# Namratha-Portfolio
