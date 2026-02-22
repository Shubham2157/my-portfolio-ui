export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string; // CSV format from backend
  link?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
  createdAt?: string;
}

export const projectsConfig = {
  projects: [
    {
      id: "1",
      title: "Climate & Cigarette Tracker",
      description: "Full-stack web application that converts Air Quality Index (AQI) into equivalent cigarette consumption metrics to help users visualize health impacts of air pollution",
      technologies: "React 18, Node.js, Express.js, Tailwind CSS, Axios, Winston, Swagger, PostgreSQL (optional)",
      link: "https://github.com/Shubham2157/climate-cigarette-tracker.git",
      demo: "https://climate-cigarette-tracker.vercel.app/",
      image: "https://plus.unsplash.com/premium_vector-1714142580885-97d3f0e39f98?q=80&w=1627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
      createdAt: "2024-01-01T10:00:00",
    },
    {
      id: "2",
      title: "Finance Tracker AI",
      description: "Full-stack personal finance tracker with AI-driven insights, expense categorization, and spending analytics",
      technologies: "Next.js, React, Spring Boot, PostgreSQL, Tailwind CSS, TypeScript, Recharts",
      link: "https://github.com/Shubham2157/AI-Finance.git",
      demo: "https://github.com/Shubham2157/AI-Finance.git",
      image: "https://plus.unsplash.com/premium_photo-1676637656277-498f73258bec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
      createdAt: "2025-06-10T10:00:00",
    }
  ] as Project[],
};
