export interface Project {
  id: string
  title: string
  description: string
  technologies: string  // CSV format from backend
  link?: string
  demo?: string
  image?: string
  featured?: boolean
  createdAt?: string
}

export const projectsConfig = {
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      technologies: "Next.js, Stripe, PostgreSQL, Tailwind CSS",
      link: "https://github.com/yourprofile/ecommerce",
      demo: "https://ecommerce-demo.com",
      image: "https://cdn.example.com/ecommerce.png",
      featured: true,
      createdAt: "2025-01-15T10:00:00",
    },
    {
      id: "2",
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses",
      technologies: "React, Node.js, WebSocket, OpenAI API",
      link: "https://github.com/yourprofile/ai-chat",
      demo: "https://ai-chat-demo.com",
      image: "https://cdn.example.com/aichat.png",
      featured: false,
      createdAt: "2025-01-10T10:00:00",
    },
  ] as Project[],
}
