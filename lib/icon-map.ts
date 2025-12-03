import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAwslambda,
  SiVercel,
} from "react-icons/si"
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  Code,
} from "lucide-react"

export const iconMap: Record<string, React.ComponentType<any>> = {
  // react-icons (simple icons)
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAwslambda,
  SiVercel,
  
  // lucide-react icons (social and general)
  Mail,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  Code,
}

/**
 * Get icon component by name
 * Supports both react-icons and lucide-react icons
 */
export function getIconComponent(iconName: string): React.ComponentType<any> | null {
  return iconMap[iconName] || null
}

