export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime?: number
}

export const blogConfig = {
  posts: [
    {
      id: "1",
      title: "Getting Started with Next.js 15",
      excerpt: "Explore the new features and improvements in Next.js 15",
      content: `# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements to make web development even better.

## Key Features

### 1. Improved Performance
- Faster build times with optimized compilation
- Better runtime performance with enhanced bundling
- Reduced bundle sizes with tree-shaking improvements

### 2. Enhanced Developer Experience
- Better error messages and debugging
- Improved TypeScript support
- Faster refresh times during development

### 3. New APIs
- Advanced routing capabilities
- Improved middleware system
- Better API route handling

## Getting Started

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Conclusion

Next.js 15 is a major step forward in React framework development.`,
      date: "2024-01-15",
      readTime: 5,
    },
    {
      id: "2",
      title: "Web Performance Optimization Tips",
      excerpt: "Essential techniques to improve your web application's performance",
      content: `# Web Performance Optimization Tips

Web performance is crucial for user experience and SEO.

## 1. Image Optimization
- Use modern formats like WebP
- Implement lazy loading
- Serve responsive images

## 2. Code Splitting
- Split code into logical chunks
- Load code on demand
- Reduce initial bundle size

## 3. Caching Strategies
\`\`\`javascript
self.addEventListener('install', event => {
  event.waitUntil(caches.open('v1'));
});
\`\`\`

## 4. Database Optimization
- Create proper indexes
- Use query optimization
- Implement caching layers

## Results

By implementing these optimizations, you can expect faster page loads and better SEO.`,
      date: "2024-01-10",
      readTime: 8,
    },
  ] as BlogPost[],
}
