import * as AllSimpleIcons from "react-icons/si"
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  Code,
} from "lucide-react"

export const iconMap: Record<string, React.ComponentType<any>> = {
  // Dynamically load all SimpleIcons (react-icons/si)
  ...AllSimpleIcons,
  
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
 * Supports both react-icons/si and lucide-react icons
 * Icons are automatically discovered from react-icons/si package
 */
export function getIconComponent(iconName: string): React.ComponentType<any> | null {
  return iconMap[iconName] || null
}

