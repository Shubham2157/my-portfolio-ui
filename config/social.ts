import { Mail, Linkedin, Github, LucideIcon } from "lucide-react"

export interface SocialLink {
  id: string
  icon: LucideIcon
  label: string
  url: string
  ariaLabel: string
}

export const socialLinks: SocialLink[] = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    url: "mailto:kumarshubhamjha2157@gmail.com",
    ariaLabel: "Send me an email",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    url: "www.linkedin.com/in/shubham-kumar-jha-528367191",
    ariaLabel: "Visit my LinkedIn profile",
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    url: "https://github.com/Shubham2157",
    ariaLabel: "Visit my GitHub profile",
  }
]
