export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
}

export const projectsConfig = {
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      link: "#",
    },
    {
      id: "2",
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses",
      technologies: ["React", "Node.js", "WebSocket", "OpenAI API"],
      link: "#",
    },
  ] as Project[],
}
