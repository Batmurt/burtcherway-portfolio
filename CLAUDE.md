# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website project for showcasing professional work and skills. The repository is currently empty and ready for initial development.

## Development Setup

Since this is a new portfolio project, you'll need to initialize the appropriate framework and development environment. Common choices for portfolio sites include:

- **React/Next.js**: For dynamic, modern portfolios with SSG/SSR capabilities
- **Vue/Nuxt**: Alternative modern framework with excellent developer experience  
- **Static Site Generators**: Gatsby, Hugo, or similar for content-focused portfolios
- **Vanilla HTML/CSS/JS**: For lightweight, custom implementations

## Common Development Commands

*Note: Commands will depend on the framework chosen during initialization*

### For Next.js projects:
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks (if using TypeScript)
```

### For React projects:
```bash
npm start            # Start development server
npm run build        # Build for production
npm test             # Run tests
npm run lint         # Run linting
```

## Portfolio Architecture Considerations

When developing this portfolio, consider these key architectural decisions:

### Content Management
- **Static Content**: Hardcoded components for simple, fast-loading portfolios
- **Headless CMS**: Contentful, Strapi, or Sanity for dynamic content management
- **Markdown-based**: For blog posts and project descriptions
- **JSON/YAML**: For structured data like projects, skills, and experience

### Key Sections to Implement
- **Hero/Landing**: Professional introduction and key highlights
- **About**: Detailed background and skills
- **Projects**: Showcase of work with descriptions, technologies, and links
- **Experience**: Professional history and achievements  
- **Contact**: Contact form and social media links
- **Blog** (optional): Technical writing and insights

### Performance Considerations
- Image optimization (WebP, lazy loading, responsive images)
- Code splitting and lazy loading for sections
- SEO optimization with meta tags and structured data
- Accessibility compliance (WCAG guidelines)
- Mobile-first responsive design

### Deployment Options
- **Vercel**: Excellent for Next.js with automatic deployments
- **Netlify**: Great for static sites with form handling
- **GitHub Pages**: Free hosting for static sites
- **AWS S3/CloudFront**: For custom domain and CDN setup

## Technology Stack Recommendations

### Frontend Frameworks
- **Next.js 14+**: For modern React with App Router, SSG, and excellent performance
- **Nuxt 3**: For Vue-based development with similar benefits
- **Astro**: For content-heavy portfolios with minimal JavaScript

### Styling Solutions
- **Tailwind CSS**: Utility-first CSS with excellent developer experience
- **CSS Modules**: For component-scoped styling
- **Styled Components**: For CSS-in-JS solutions
- **SCSS/Sass**: For enhanced CSS features

### Additional Libraries
- **Framer Motion**: For smooth animations and transitions
- **React Hook Form**: For contact form handling
- **React Query/SWR**: For data fetching (if using external APIs)
- **TypeScript**: For type safety and better development experience

## Development Workflow

1. **Initialize Project**: Choose framework and set up basic structure
2. **Design System**: Establish color scheme, typography, and component patterns
3. **Content Structure**: Plan and organize portfolio content
4. **Component Development**: Build reusable UI components
5. **Page Implementation**: Create main portfolio sections
6. **Optimization**: Implement performance and SEO optimizations
7. **Testing**: Ensure cross-browser compatibility and accessibility
8. **Deployment**: Set up automated deployment pipeline

## Content Guidelines

- Keep project descriptions concise but informative
- Include live links and GitHub repositories for projects
- Use high-quality images and maintain consistent aspect ratios
- Write compelling copy that highlights achievements and impact
- Ensure all external links open in new tabs
- Include relevant keywords for SEO without keyword stuffing