// Social link configuration without icons (for backend compatibility)
// Icons are mapped separately in components

export interface SocialLink {
  id: string
  label: string
  url: string
  ariaLabel: string
  iconName: string // lucide-react icon name
}

export interface ContactInfo {
  email: string
  phone?: string
}

export const socialConfig = {
  links: [
    {
      id: "email",
      label: "Email",
      url: "mailto:kumarshubhamjha2157@gmail.com",
      ariaLabel: "Send me an email",
      iconName: "Mail",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/shubham-kumar-jha-528367191",
      ariaLabel: "Visit my LinkedIn profile",
      iconName: "Linkedin",
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/Shubham2157",
      ariaLabel: "Visit my GitHub profile",
      iconName: "Github",
    },
  ] as SocialLink[],
  contact: {
    email: "kumarshubhamjha2157@gmail.com",
    phone: "+91-XXXXXXXXXX",
  } as ContactInfo,
}
