// About configuration
export interface StatItem {
  label: string
  value: string
}

export interface EducationItem {
  degree: string
  institution: string
}

export interface CompanyItem {
  name: string
  position: string
}

export interface AboutData {
  name: string
  title: string
  bio: string
  stats: StatItem[]
  education: EducationItem[]
  company?: CompanyItem
}

export const aboutConfig: AboutData = {
  name: "Shubham Kumar Jha",
  title: "Software Engineer",
  bio: "Passionate software engineer with expertise in full-stack web development, cloud technologies, and modern frameworks. I love building scalable applications and solving complex problems.",
  stats: [
    {
      label: "Years Experience",
      value: "4+",
    },
    {
      label: "Projects Completed",
      value: "10+",
    }
  ],
  education: [
    {
      degree: "B.Tech in Electronics & Computer Science",
      institution: "KIIT University",
    },
  ],
  company: {
    name: "Cognizant Technology Solutions",
    position: "Software Engineer",
  },
}
