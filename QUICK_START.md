# Quick Start Guide

Get your portfolio up and running in 3 minutes!

## Step 1: Start the Development Server

```bash
npm run dev
```

Then open your browser to `http://localhost:5173`

## Step 2: Add Your Content

### Easiest Method: Edit the Config File

Edit `/src/data/siteConfig.js` to update:
- Personal info (name, bio, email, etc.)
- Projects
- Blog posts
- Resume path

### Add Your Assets

1. **Profile Photo**: Add to `/public/` folder
2. **Resume PDF**: Add to `/public/resume.pdf`

## Step 3: Customize Colors (Optional)

Edit `/tailwind.config.js` to change the theme colors:

```javascript
primary: {
  DEFAULT: '#E91E63', // Pink - change this!
},
secondary: {
  DEFAULT: '#9C27B0', // Purple - change this!
},
```

## That's It!

For detailed customization, see:
- `CUSTOMIZATION.md` - Quick customization guide
- `README.md` - Full documentation

## Build for Production

When ready to deploy:

```bash
npm run build
```

The production files will be in the `/dist` folder.

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Next Steps

1. Replace placeholder images with your own
2. Update all social media links
3. Add your actual blog posts
4. Connect the contact form to a backend service
5. Deploy to Netlify, Vercel, or GitHub Pages

Happy building!
