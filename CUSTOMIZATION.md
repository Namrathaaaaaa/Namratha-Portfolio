# Quick Customization Guide

This guide will help you quickly customize your portfolio website.

## 1. Personal Information & Content

Edit `/src/data/siteConfig.js` to update:
- Your name, nickname, and role
- Bio and description
- Contact information (email, LinkedIn, GitHub, Twitter)
- Profile image path

```javascript
export const personalInfo = {
  name: 'Your Name',
  nickname: 'Nickname',
  role: 'Your Role',
  bio: 'Your bio...',
  email: 'you@example.com',
  // ... update all fields
}
```

## 2. Add Your Photo

1. Add your photo to `/public/` folder (e.g., `profile.jpg`)
2. Update the path in `/src/data/siteConfig.js`:

```javascript
profileImage: '/profile.jpg',
```

## 3. Add Blog Posts

Edit the `blogPosts` array in `/src/data/siteConfig.js`:

```javascript
export const blogPosts = [
  {
    id: 1,
    title: 'Your Article Title',
    summary: 'Brief summary',
    date: '2024-11-15',
    readTime: '5 min read',
    link: 'https://medium.com/@you/article',
    image: 'https://your-image-url.com/image.jpg',
    tags: ['Tag1', 'Tag2'],
  },
]
```

## 4. Add Projects

Edit the `projects` array in `/src/data/siteConfig.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    image: 'https://image-url.com/project.jpg',
    link: 'https://github.com/you/project',
    tags: ['Tech1', 'Tech2'],
  },
]
```

## 5. Add Your Resume

1. Add your `resume.pdf` to the `/public/` folder
2. That's it! The resume page will automatically display it

## 6. Change Color Theme

Edit `/tailwind.config.js`:

### Option 1: Pink-Purple (Current)
Already configured!

### Option 2: Pink-Black
```javascript
primary: {
  DEFAULT: '#E91E63',
  light: '#F48FB1',
  dark: '#C2185B',
},
secondary: {
  DEFAULT: '#000000',
  light: '#1a1a1a',
  dark: '#000000',
},
```

### Option 3: Purple-Black
```javascript
primary: {
  DEFAULT: '#9C27B0',
  light: '#BA68C8',
  dark: '#7B1FA2',
},
secondary: {
  DEFAULT: '#000000',
  light: '#1a1a1a',
  dark: '#000000',
},
```

### Custom Colors
You can use any hex color code:

```javascript
primary: {
  DEFAULT: '#YOUR_COLOR',
  light: '#LIGHTER_SHADE',
  dark: '#DARKER_SHADE',
},
```

## 7. Update Social Links

Edit `/src/components/Footer.jsx`:

```javascript
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/yourprofile', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/yourprofile', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:you@example.com', label: 'Email' },
]
```

## 8. Update Tech Stack

Edit `/src/components/TechStack.jsx`:

```javascript
const technologies = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  // Add your technologies
]
```

**Finding icons:**
- Browse [React Icons](https://react-icons.github.io/react-icons/)
- Import the icon: `import { IconName } from 'react-icons/fa'`
- Use it: `icon: IconName`

## 9. Connect Contact Form

The form currently uses a dummy handler. To connect a real backend:

### Option A: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint
3. Edit `/src/pages/Contact.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  const newErrors = validateForm()
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors)
    return
  }

  setIsSubmitting(true)

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setIsSubmitted(true)
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

### Option B: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their React integration guide
3. Update the `handleSubmit` function

### Option C: Your Own API

```javascript
const response = await fetch('https://your-api.com/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
```

## 10. SEO & Meta Tags

Edit `/index.html` to update:

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your description">
```

For advanced SEO, consider adding:
- Open Graph tags
- Twitter Card tags
- Favicon
- robots.txt

## Quick Tips

- **Images**: Use high-quality images (min 1200px wide for best results)
- **Placeholders**: Replace all `placeholder` and `example.com` references
- **Testing**: Test on mobile devices after making changes
- **Performance**: Optimize images before uploading (use tools like TinyPNG)
- **Git**: Commit changes regularly as you customize

## Need Help?

- Check the main README.md for detailed documentation
- Review the code comments in each file
- Google specific React/Tailwind questions

Happy customizing!
