# Developer Portfolio Site - Evan Herchek

👋 Hi! Welcome to the codebase for my developer website. Here you can see all the inner workings of my portfolio and find inspiration for your own site.

<div align="center">
<img width="85%" height="1334" alt="preview" src="https://github.com/user-attachments/assets/91f4fb21-9c70-4d81-b5e8-552cfc9a3d6b" />
</div>

## Tech Stack
![Javascript](https://img.shields.io/badge/-Javascript-000?&logo=JavaScript)
![React](https://img.shields.io/badge/-React-000?&logo=React&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/-Next.js-000?&logo=Next.js)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-000?&logo=Tailwind-CSS)
![GitHub Actions](https://img.shields.io/badge/-GitHub%20Actions-000?&logo=GitHub)

Special thanks to [DavidHDev](https://github.com/DavidHDev) for creating the incredible threads animation seen on the landing page as a part of [react-bits](https://github.com/DavidHDev/react-bits).

## Features
- Responsive design that adapts to mobile usage scenarios
- Beautifully crafted animations and graphics
- Automated deployments to Vercel through GitHub Actions

# File Structure
```
 portfolio-site/
  ├── .github/              # GitHub workflows and configurations
  ├── pages/                # Next.js pages (routes)
  │   ├── _app.js          # App wrapper
  │   ├── index.js         # Home page
  │   ├── about.js         # About page
  │   ├── contact.js       # Contact page
  │   ├── qualifications.js # Qualifications page
  │   └── inspirations.js  # Inspirations page
  ├── src/                  # Source files
  │   ├── widgets/         # Reusable React components
  │   │   ├── custom/     # Custom components (chips, windows, etc.)
  │   │   └── external/   # Third-party components (animations)
  │   └── *.css           # Global styles
  ├── public/               # Static assets
  │   ├── images/         # Images and logos
  │   ├── Resume.pdf      # Resume file
  │   └── *.json          # Manifest and config files
  ├── styles/               # Additional stylesheets
  ├── scripts/              # Build/deployment scripts
  ├── package.json          # Dependencies and scripts
  ├── tailwind.config.js    # Tailwind CSS configuration
  ├── next.config.js        # Next.js configuration
  └── next-sitemap.config.js # Sitemap configuration
```
