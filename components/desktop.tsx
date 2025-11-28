"use client"

import { FileText, Briefcase, Zap, Mail, Download } from "lucide-react"

interface DesktopProps {
  onOpenWindow: (type: string, title: string) => void
}

export default function Desktop({ onOpenWindow }: DesktopProps) {
  const icons = [
    { id: "about", icon: null, label: "My Portfolio", type: "about", title: "About Me", initials: "SJ" },
    { id: "projects", icon: Briefcase, label: "Projects", type: "projects", title: "My Projects" },
    { id: "blog", icon: FileText, label: "Blog Posts", type: "blog", title: "Blog" },
    { id: "skills", icon: Zap, label: "Skills", type: "skills", title: "Skills & Tech" },
    { id: "resume", icon: Download, label: "Resume", type: "resume", title: "Download Resume" },
    { id: "contact", icon: Mail, label: "Contact", type: "contact", title: "Get In Touch" },
  ]

  return (
    <div className="absolute inset-0 p-4 pointer-events-none md:p-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-6 w-fit">
        {icons.map((item) => (
          <button
            key={item.id}
            onClick={() => onOpenWindow(item.type, item.title)}
            className="desktop-icon pointer-events-auto group"
            title={item.label}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 dark:from-blue-600 dark:via-blue-700 dark:to-blue-800 rounded-xl shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110 group-active:scale-95">
              {item.icon ? (
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
              ) : (
                <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{item.initials}</span>
              )}
            </div>
            <span className="text-xs md:text-sm font-medium text-center max-w-20 break-words text-foreground mt-2 drop-shadow-sm dark:drop-shadow-md">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
