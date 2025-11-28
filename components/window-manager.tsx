"use client"

import type React from "react"
import Window from "@/components/window"
import AboutWindow from "@/components/windows/about-window"
import ProjectsWindow from "@/components/windows/projects-window"
import BlogWindow from "@/components/windows/blog-window"
import SkillsWindow from "@/components/windows/skills-window"
import ResumeWindow from "@/components/windows/resume-window"
import ContactWindow from "@/components/windows/contact-window"

interface WindowData {
  id: string
  type: string
  title: string
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
}

interface WindowManagerProps {
  windows: WindowData[]
  onClose: (id: string) => void
  onMinimize: (id: string) => void
  onMaximize: (id: string) => void
  onBringToFront: (id: string) => void
}

const windowComponents: Record<string, React.ComponentType<any>> = {
  about: AboutWindow,
  projects: ProjectsWindow,
  blog: BlogWindow,
  skills: SkillsWindow,
  resume: ResumeWindow,
  contact: ContactWindow,
}

export default function WindowManager({ windows, onClose, onMinimize, onMaximize, onBringToFront }: WindowManagerProps) {
  return (
    <>
      {windows.map((window) => {
        const Component = windowComponents[window.type]
        return (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            isMinimized={window.isMinimized}
            isMaximized={window.isMaximized}
            zIndex={window.zIndex}
            onClose={() => onClose(window.id)}
            onMinimize={() => onMinimize(window.id)}
            onMaximize={() => onMaximize(window.id)}
            onBringToFront={() => onBringToFront(window.id)}
          >
            {Component && <Component />}
          </Window>
        )
      })}
    </>
  )
}
