# 🖥️ MacBook-Themed Developer Portfolio

A modern, interactive developer portfolio website built with **Next.js**, featuring a stunning MacBook desktop aesthetic with dark/light mode support, window management system, and fully configurable content.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B6FF?logo=tailwindcss)

## ✨ Features

### 🎨 **MacBook Aesthetic**
- Authentic macOS desktop environment simulation
- Traffic light window controls (Red/Yellow/Green)
- Draggable, resizable, and maximizable windows
- Smooth animations and transitions
- Professional gradient backgrounds

### 🌓 **Theme System**
- Dark/light mode toggle with persistence
- System preference detection
- Real-time theme switching across all windows
- localStorage-based persistence
- Floating theme toggle in top-right corner

### 🎯 **Core Windows**
- **My Portfolio** - About me section with personalized "SJ" initials
- **Skills & Tech** - Categorized tech stack with icons and proficiency levels
- **Projects** - Showcase with GitHub links and tech badges
- **Blog** - Posts with markdown support and detailed view
- **Resume** - PDF download via Google Drive integration
- **Contact** - Contact form with social media links

### ⚙️ **Fully Configurable**
- **Social Links** - Customize contact and social media icons (`config/social.ts`)
- **Skills Data** - Tech stack with icons and levels (`data/skills.json`)
- **Projects** - Externalized project data (`config/projects.ts`)
- **Blog Posts** - Markdown content with detail view (`config/blog.ts`)
- **Resume** - Configurable Google Drive file ID (`config/resume.ts`)
- **API URLs** - Environment-based backend configuration (`.env.local`)

### 🚀 **Developer Experience**
- TypeScript support
- Responsive design (mobile, tablet, desktop)
- Accessible components (ARIA labels, semantic HTML)
- Error handling with fallback to demo data
- Production-ready build optimization

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.0.3 | React framework with Turbopack |
| **React** | 19.2.0 | UI library |
| **TypeScript** | 5+ | Type safety |
| **Tailwind CSS** | 4.1.9 | Styling & responsive design |
| **Lucide React** | Latest | UI icons |
| **React Icons (SI)** | 5.5.0 | Tech stack icons |

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   ├── desktop.tsx         # Desktop icon grid with "SJ" initials
│   ├── taskbar.tsx         # macOS dock-style taskbar
│   ├── theme-provider.tsx  # Dark/light mode context
│   ├── window-manager.tsx  # Window state management
│   ├── window.tsx          # Draggable window component
│   ├── theme-toggle.tsx    # Floating theme switcher
│   ├── ui/                 # UI components (button, input, etc.)
│   └── windows/            # Window components
│       ├── about-window.tsx
│       ├── projects-window.tsx
│       ├── blog-window.tsx
│       ├── blog-detail-window.tsx
│       ├── skills-window.tsx
│       ├── resume-window.tsx
│       └── contact-window.tsx
├── config/
│   ├── social.ts           # Social media links configuration
│   ├── resume.ts           # Resume file ID & summary
│   ├── projects.ts         # Projects demo data
│   └── blog.ts             # Blog posts with markdown
├── data/
│   └── skills.json         # Skills with icons and levels
├── hooks/
│   └── use-mobile.ts       # Mobile detection hook
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── .env.local              # Environment variables
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ with pnpm (or npm)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Shubham2157/my-portfolio-ui.git
cd portfolio-website
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Set up environment variables**
Create `.env.local` in the root directory:
```env
NEXT_PUBLIC_API_BASE_URL=https://your-api.com/api
```

4. **Run development server**
```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📝 Configuration Guide

### 1. Social Media Links (`config/social.ts`)

Update social media URLs and add/remove platforms:

```typescript
export const socialLinks: SocialLink[] = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    url: "mailto:your.email@example.com",
    ariaLabel: "Send me an email",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    ariaLabel: "Visit my LinkedIn profile",
  },
  // Add more social links...
]
```

### 2. Skills & Tech Stack (`data/skills.json`)

Customize your technical skills with icons and proficiency levels:

```json
{
  "categories": {
    "Languages": [
      {
        "name": "TypeScript",
        "icon": "SiTypescript",
        "color": "#3178c6",
        "level": "Expert"
      }
    ]
  }
}
```

### 3. Projects (`config/projects.ts`)

Add your portfolio projects:

```typescript
export const demoProjects: Project[] = [
  {
    id: "project-1",
    title: "Project Name",
    description: "Project description",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/yourprofile/project",
    demo: "https://project-demo.com"
  }
]
```

### 4. Blog Posts (`config/blog.ts`)

Create blog posts with markdown content:

```typescript
export const demoBlogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Blog Post Title",
    date: "2025-01-15",
    readTime: "5 min read",
    content: "# Markdown content here..."
  }
]
```

### 5. Resume (`config/resume.ts`)

Update your resume file ID and quick summary:

```typescript
export const resumeConfig = {
  fileId: "YOUR_GOOGLE_DRIVE_FILE_ID",
  quickSummary: [
    "Full-stack developer with 5+ years experience",
    "Specialized in React, Node.js, and TypeScript",
    // Add more points...
  ]
}
```

### 6. API Configuration (`.env.local`)

Set your backend API base URL:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-api.com/api
```

The portfolio will try to fetch data from the backend first, then fall back to config data if the API is unavailable.

## 🎨 Customization

### Personalize Desktop Icon

The "My Portfolio" desktop icon displays personalized text initials. Edit `components/desktop.tsx`:

```typescript
{ id: "about", icon: null, label: "My Portfolio", type: "about", title: "About Me", initials: "SJ" }
```

Change `"SJ"` to your own initials.

### Theme Colors

Modify Tailwind CSS theme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    light: "#your-color",
    dark: "#your-color"
  }
}
```

### Wallpaper Patterns

Update background patterns in `globals.css` for different developer aesthetics.

## 📦 Build & Deploy

### Development
```bash
pnpm dev
```

### Production Build
```bash
pnpm build
pnpm start
```

### Static Export (for static hosting)
```bash
pnpm build
# Output: out/
```

### Deploy to Vercel
```bash
# Install Vercel CLI
pnpm install -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms
- **Netlify**: Drag and drop the `out/` directory
- **GitHub Pages**: Configure for Next.js static export
- **Docker**: Create Dockerfile with Node.js image

## 🎯 Window Management Features

- **Drag Windows**: Click and drag title bar to move windows
- **Resize Windows**: Drag edges and corners to resize
- **Maximize**: Click green traffic light button
- **Minimize**: Click yellow traffic light button
- **Close**: Click red traffic light button
- **z-index Management**: Windows come to front when clicked
- **Focus States**: Visual feedback for active windows

## 🌐 API Integration

The portfolio supports backend API integration with fallback to config data:

```typescript
// Tries API first
const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`)

// Falls back to config if API fails
const projects = data || demoProjects
```

**Supported Endpoints:**
- `GET /api/projects` - Fetch projects list
- `GET /api/blog` - Fetch blog posts
- `POST /api/contact` - Submit contact form

## ♿ Accessibility

- ARIA labels on all interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📱 Responsive Design

- **Mobile**: Optimized for small screens with touch support
- **Tablet**: Adjusted layout for medium screens
- **Desktop**: Full featured with all capabilities
- **Dock Overflow**: Horizontal scrolling on mobile for taskbar

## 🔒 Security

- Environment variables for sensitive data
- CORS headers configured
- XSS protection with React's sanitization
- No hardcoded credentials
- Secure external link handling (`rel="noopener noreferrer"`)

## 📊 Performance

- **Turbopack**: Fast compilation and hot reload
- **Optimized Images**: Automatic Next.js image optimization
- **CSS-in-JS**: Tailwind's purged CSS
- **Code Splitting**: Automatic chunk splitting
- **Static Generation**: SSG support for blog posts

## 🐛 Troubleshooting

### Theme not persisting?
- Check localStorage is enabled in browser
- Verify `.env.local` is properly configured

### API calls failing?
- Ensure `NEXT_PUBLIC_API_BASE_URL` is set correctly
- Check CORS headers on backend
- Portfolio will fallback to config data

### Windows not dragging?
- Ensure JavaScript is enabled
- Try refreshing the page
- Check browser console for errors

### Mobile layout issues?
- Use `use-mobile` hook for responsive logic
- Test with mobile device emulation in DevTools
- Verify Tailwind breakpoints are applied

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this repository and customize it for your portfolio!

## 📧 Support

For questions or issues, please open an issue on GitHub or contact through the portfolio's contact form.

---

**Built with ❤️ using Next.js & Tailwind CSS**

[Live Demo](https://your-portfolio.com) | [GitHub](https://github.com/yourprofile/portfolio) | [Contact](mailto:your-email@example.com)
