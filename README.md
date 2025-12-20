# 🖥️ MacBook-Themed Developer Portfolio

A modern, interactive developer portfolio website built with **Next.js**, featuring a stunning MacBook desktop aesthetic with dark/light mode support, advanced window management system, and fully configurable backend-driven content.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B6FF?logo=tailwindcss)

## ✨ Features

### 🎨 **MacBook Aesthetic**
- Authentic macOS desktop environment simulation
- Traffic light window controls (Red/Yellow/Green)
- Draggable, resizable, and maximizable windows
- Windows open in **full-screen maximized mode** by default
- Smooth animations and transitions
- Professional gradient backgrounds
- Circuit pattern backgrounds for developer aesthetic

### 🌓 **Theme System**
- Dark/light mode toggle with persistence
- System preference detection
- Real-time theme switching across all windows
- localStorage-based persistence
- Floating theme toggle in top-right corner

### 🎯 **Core Windows**
- **My Portfolio** - About me with education, current company, and stats
- **Skills & Tech** - 2000+ categorized tech icons with auto-generated colors and official website links
- **Projects** - Showcase with GitHub links and tech badges
- **Blog** - Posts with markdown support and detailed view
- **Resume** - PDF download via Google Drive integration
- **Contact** - Contact form with social media links

### ⚙️ **Backend Integration (NEW)**
- **Data Source Indicators** - Visual badges showing if data is from backend or local config (🟦 Backend / 🟨 Config)
- **API Fallback** - Intelligent fallback to local config if backend unavailable
- **Configurable Windows**:
  - About window (`/api/about`)
  - Skills window (`/api/skills`)
  - Projects window (`/api/projects`)
  - Blog window (`/api/blog`)
  - Resume window (`/api/resume`)
  - Contact window (`/api/contact`)

### 🎨 **Smart Icon System**
- **Auto Icon Loading** - 2000+ icons from react-icons/si auto-loaded (no manual imports needed)
- **Icon Discovery** - Complete list available in `/public/available-icons.json`
- **Easy Backend Configuration** - Just use icon names like `SiKubernetes`, `SiGraphql`, etc.

### 🌈 **Auto Color Generation**
- **Smart Colors** - Colors auto-generated for skills if not provided in backend
- **Consistent Hashing** - Same skill always gets same color
- **40+ Color Palette** - Curated tech-friendly colors
- **Optional Override** - Provide custom colors in backend API for brand matching

### ✅ **Fully Configurable**
- **Local Configuration** - TypeScript config files for local defaults
- **Backend Configuration** - Full REST API support for all content
- **Social Links** - Customize contact and social media icons (`config/social.ts`)
- **Skills Data** - Tech stack with icons, colors, and levels (`config/skills.ts`)
- **Projects** - Project showcase data (`config/projects.ts`)
- **Blog Posts** - Markdown content with metadata (`config/blog.ts`)
- **Resume** - Google Drive file ID and quick summary (`config/resume.ts`)
- **About Data** - Personal info, stats, education, company (`config/about.ts`)
- **API URLs** - Environment-based backend configuration (`.env.local`)

### 🚀 **Developer Experience**
- TypeScript support with full type safety
- Responsive design (mobile, tablet, desktop)
- Accessible components (ARIA labels, semantic HTML)
- Error handling with intelligent fallback
- Production-ready build optimization
- No manual icon imports needed

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.0.3 | React framework with Turbopack |
| **React** | 19.2.0 | UI library |
| **TypeScript** | 5+ | Type safety |
| **Tailwind CSS** | 4.1.9 | Styling & responsive design |
| **Lucide React** | Latest | UI icons (social, controls) |
| **React Icons (SI)** | 5.5.0 | 2000+ tech stack icons |

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page with window management
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   ├── desktop.tsx         # Desktop icon grid with "SJ" initials
│   ├── taskbar.tsx         # macOS dock-style taskbar
│   ├── theme-provider.tsx  # Dark/light mode context
│   ├── window-manager.tsx  # Window state management
│   ├── window.tsx          # Draggable, resizable window component
│   ├── theme-toggle.tsx    # Floating theme switcher
│   ├── navigation.tsx      # Navigation component
│   └── windows/            # Window components
│       ├── about-window.tsx       # About with company section
│       ├── projects-window.tsx    # Projects with backend fetch
│       ├── blog-window.tsx        # Blog posts with backend fetch
│       ├── blog-detail-window.tsx # Blog detail view
│       ├── skills-window.tsx      # Skills with auto colors & tooltips
│       ├── resume-window.tsx      # Resume with backend fetch
│       └── contact-window.tsx     # Contact form with backend fetch
├── config/
│   ├── social.ts           # Social media links configuration
│   ├── resume.ts           # Resume file ID & summary
│   ├── projects.ts         # Projects demo data
│   ├── blog.ts             # Blog posts with markdown
│   ├── skills.ts           # Skills with 19+ technologies
│   └── about.ts            # About data with stats & education
├── lib/
│   ├── icon-map.ts         # Icon mapping (2000+ auto-loaded icons)
│   ├── color-generator.ts  # Smart color generation for skills
│   ├── data-source.ts      # Data source tracking utilities
│   └── utils.ts            # Utility functions
├── public/
│   ├── available-icons.json        # Complete list of 2000+ icons
│   ├── ICONS_REFERENCE.md          # Icon usage guide
│   ├── BACKEND_SKILLS_CONFIG.md    # Backend skills configuration
│   └── [other static assets]
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
cd my-portfolio-ui
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
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/
```

4. **Run development server**
```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📝 Configuration Guide

### Quick Start: Local Configuration

All windows work out of the box with default local configuration. No backend required!

### Backend Configuration (Optional)

To use backend API instead of local config:

1. **Set API URL** in `.env.local`:
```env
NEXT_PUBLIC_API_BASE_URL=https://your-api.com/api/
```

2. **Implement API endpoints** on your backend:
   - `GET /api/about` - About data
   - `GET /api/skills` - Skills list
   - `GET /api/projects` - Projects list
   - `GET /api/blog` - Blog posts
   - `GET /api/resume` - Resume data
   - `POST /api/contact` - Contact form submission

3. **Fallback behavior** - If API fails, app automatically uses local config

### 1. About Window (`config/about.ts`)

```typescript
export interface AboutData {
  name: string              // Full name
  title: string            // Job title
  bio: string              // Biography
  stats: StatItem[]        // Experience, projects, etc.
  education: EducationItem[] // Education history
  company?: CompanyItem    // Current employment
}

// Example backend response:
{
  "name": "Shubham Kumar Jha",
  "title": "Software Engineer",
  "bio": "Passionate developer...",
  "stats": [
    { "label": "Years Experience", "value": "4+" },
    { "label": "Projects", "value": "20+" }
  ],
  "education": [
    { "degree": "B.Tech", "institution": "KIIT University" }
  ],
  "company": {
    "name": "Tech Company",
    "position": "Senior Engineer"
  }
}
```

### 2. Skills Window (`config/skills.ts`)

**Features:**
- Auto-generates colors if not provided
- Clickable skills with official website URLs
- Hover tooltips showing full skill name
- Organized by category (Languages, Frontend, Backend, Database, Tools)
- 2000+ icons available

```typescript
export interface Skill {
  id: string           // Unique identifier
  name: string         // Display name
  category: string     // Category for grouping
  icon: string         // Icon name (e.g., "SiKubernetes")
  color?: string       // Optional hex color (auto-generated if not provided)
  level: string        // "Beginner" | "Intermediate" | "Advanced" | "Expert"
  url?: string         // Official website URL
}

// Example backend response:
{
  "skills": [
    {
      "id": "kubernetes",
      "name": "Kubernetes",
      "category": "Tools",
      "icon": "SiKubernetes",
      "level": "Advanced",
      "url": "https://kubernetes.io/"
      // color will be auto-generated
    },
    {
      "id": "graphql",
      "name": "GraphQL",
      "category": "Tools",
      "icon": "SiGraphql",
      "color": "#E10098",
      "level": "Advanced",
      "url": "https://graphql.org/"
    }
  ]
}
```

**Icon Discovery:**
- Find icons at: https://react-icons.github.io/react-icons/search?q=si
- Complete list: `/public/available-icons.json`
- Reference guide: `/public/ICONS_REFERENCE.md`

### 3. Projects (`config/projects.ts`)

```typescript
export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  github: string
  demo?: string
}

// Example backend response:
{
  "projects": [
    {
      "id": "project-1",
      "title": "Portfolio Website",
      "description": "MacBook-themed portfolio",
      "tech": ["Next.js", "React", "Tailwind"],
      "github": "https://github.com/user/project",
      "demo": "https://project.com"
    }
  ]
}
```

### 4. Blog Posts (`config/blog.ts`)

```typescript
export interface BlogPost {
  id: string
  title: string
  date: string
  readTime: string
  content: string  // Markdown
  image?: string
  tags?: string[]
}

// Example backend response:
{
  "blog": [
    {
      "id": "post-1",
      "title": "Getting Started with Next.js",
      "date": "2025-01-15",
      "readTime": "5 min read",
      "content": "# Blog content in markdown...",
      "tags": ["next.js", "react"]
    }
  ]
}
```

### 5. Resume (`config/resume.ts`)

```typescript
// Example backend response:
{
  "resumeUrl": "https://drive.google.com/file/d/FILE_ID/view",
  "downloadUrl": "https://drive.google.com/uc?id=FILE_ID&export=download",
  "summary": [
    "5+ years of full-stack development",
    "Expert in React and Node.js"
  ]
}
```

### 6. Contact/Social Media (`config/social.ts`)

```typescript
// Example backend response:
{
  "email": "your.email@example.com",
  "socialLinks": [
    { "icon": "Mail", "label": "Email", "url": "mailto:..." },
    { "icon": "Linkedin", "label": "LinkedIn", "url": "https://..." },
    { "icon": "Github", "label": "GitHub", "url": "https://..." }
  ]
}
```

### 7. Environment Variables (`.env.local`)

```env
# Backend API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/

# Optional: Add other environment variables as needed
```

## 🎨 Customization

### Auto Color Generation for Skills

Colors are automatically generated using a hash-based algorithm:

```typescript
// In lib/color-generator.ts
export function generateColorFromName(name: string): string {
  // Hash name → select from 40-color palette → return consistent color
}
```

**40+ Color Palette includes:**
- Official brand colors for popular tech (JavaScript Yellow, Python Blue, React Cyan, etc.)
- Vibrant tech-friendly colors (purples, teals, oranges, etc.)
- High contrast colors for dark and light modes

### Personalize Desktop Icon

Edit `components/desktop.tsx`:

```typescript
{ id: "about", label: "My Portfolio", initials: "SJ" }
// Change "SJ" to your own initials
```

### Theme Colors

Modify Tailwind CSS theme in `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... }
}
```

### Window Default Size

Change in `components/window.tsx`:

```typescript
const [size, setSize] = useState({ width: 600, height: 500 })
// Adjust width and height as needed
```

## 📊 Data Source Indicators

Each window displays a badge showing the data source:
- **🟦 Backend** - Data fetched from API
- **🟨 Config** - Data from local configuration (fallback)

This helps you verify which source is being used.

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

### Deploy to Vercel
```bash
vercel
```

### Deploy to Other Platforms
- **Netlify**: Drag and drop build output
- **Docker**: Use Node.js base image
- **GitHub Pages**: Configure for static export

## 🎯 Advanced Features

### Window Management
- **Drag**: Click and drag title bar
- **Resize**: Drag edges/corners (when not maximized)
- **Maximize**: Click green traffic light
- **Minimize**: Click yellow traffic light
- **Close**: Click red traffic light
- **Z-index**: Automatic focus management

### Skill Features
- **Clickable Skills**: Click to visit official website
- **Hover Tooltips**: Full skill name shows on hover
- **Color Consistency**: Same skill always gets same color
- **Category Grouping**: Skills organized by type
- **Icon Fallback**: Shows initials if icon not found

### About Window Features
- **Stats Display**: Years, projects, satisfaction metrics
- **Education**: Multiple education entries
- **Current Company**: Company name and position
- **Beautified UI**: Color-coded sections with icons

## 🌐 API Response Format

All endpoints should return JSON:

```json
{
  "data": { ... },
  "error": null
}
// or on error:
{
  "data": null,
  "error": "Error message"
}
```

## ♿ Accessibility

- ARIA labels on all interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Focus indicators on all controls

## 📱 Responsive Design

- **Mobile**: Touch-friendly, full-width windows
- **Tablet**: Adjusted layouts
- **Desktop**: Full featured experience
- **Taskbar**: Horizontal scroll on mobile

## 🔒 Security

- No hardcoded credentials
- Environment variables for sensitive data
- CORS headers configured
- Secure external links
- XSS protection via React

## 📊 Performance

- Turbopack for fast compilation
- Automatic code splitting
- Image optimization
- CSS purging with Tailwind
- Production-ready builds

## 🐛 Troubleshooting

### "No data found" error?
- Verify backend is running at `NEXT_PUBLIC_API_BASE_URL`
- Check CORS headers
- App will fallback to local config (check data source badge)

### Skills showing initials instead of icons?
- Verify icon name exists in react-icons/si
- Check `/public/available-icons.json` for valid names
- Use format: `SiTechName` (PascalCase)

### API not being called?
- Check console for fetch errors
- Verify `.env.local` has correct API URL
- Ensure API endpoint matches expected format

### Colors look wrong?
- Provide explicit color in backend response
- Check hex color format is valid
- Verify color contrast in dark/light modes

## 📚 Documentation

- **Icon Guide**: `/public/ICONS_REFERENCE.md`
- **Backend Config**: `/public/BACKEND_SKILLS_CONFIG.md`
- **Available Icons**: `/public/available-icons.json`

## 📝 License

Open source and available for personal and commercial use.

## 🤝 Contributing

Fork the repository and customize for your portfolio!

## 📧 Support

Open an issue on GitHub or use the contact form in the portfolio.

---

**Built with ❤️ using Next.js, React, TypeScript & Tailwind CSS**
