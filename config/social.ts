import { Mail, Linkedin, Github, Twitter, LucideIcon } from "lucide-react"

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
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    url: "https://github.com/yourprofile",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    id: "twitter",
    icon: Twitter,
    label: "Twitter",
    url: "https://twitter.com/yourprofile",
    ariaLabel: "Visit my Twitter profile",
  },
]
