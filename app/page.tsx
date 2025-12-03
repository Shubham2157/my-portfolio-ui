"use client"

import { useState } from "react"
import Desktop from "@/components/desktop"
import Taskbar from "@/components/taskbar"
import WindowManager from "@/components/window-manager"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  const [windows, setWindows] = useState<
    Array<{
      id: string
      type: string
      title: string
      isMinimized: boolean
      isMaximized: boolean
      zIndex: number
    }>
  >([])

  const openWindow = (type: string, title: string) => {
    const existingWindow = windows.find((w) => w.type === type)
    if (existingWindow) {
      // If window exists but is minimized, restore it. Otherwise, bring it to front
      if (existingWindow.isMinimized) {
        setWindows((prev) =>
          prev.map((w) =>
            w.id === existingWindow.id
              ? { ...w, isMinimized: false, zIndex: Math.max(...prev.map((x) => x.zIndex), 0) + 1 }
              : w,
          ),
        )
      } else {
        // Just bring to front
        setWindows((prev) => {
          const maxZ = Math.max(...prev.map((w) => w.zIndex), 0)
          return prev.map((w) => (w.id === existingWindow.id ? { ...w, zIndex: maxZ + 1 } : w))
        })
      }
      return
    }

    const id = `${type}-${Date.now()}`
    setWindows((prev) => [
      ...prev,
      {
        id,
        type,
        title,
        isMinimized: false,
        isMaximized: true,
        zIndex: Math.max(...prev.map((w) => w.zIndex), 0) + 1,
      },
    ])
  }

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }

  const toggleMinimize = (id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isMinimized: !w.isMinimized } : w)))
  }

  const toggleMaximize = (id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w)))
  }

  const bringToFront = (id: string) => {
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.zIndex), 0)
      return prev.map((w) => (w.id === id ? { ...w, zIndex: maxZ + 1 } : w))
    })
  }

  return (
    <div className="w-full h-screen macbook-bg overflow-hidden relative pb-12">
      {/* Light mode background with developer aesthetic */}
      <div className="absolute inset-0 macbook-light-bg pointer-events-none" />
      <div className="absolute inset-0 circuit-pattern opacity-60 dark:opacity-0 pointer-events-none transition-opacity duration-500" />
      
      {/* Dark mode background with developer aesthetic */}
      <div className="absolute inset-0 macbook-dark-bg dark:opacity-100 opacity-0 pointer-events-none transition-opacity duration-500" />
      <div className="absolute inset-0 circuit-pattern opacity-0 dark:opacity-50 pointer-events-none transition-opacity duration-500" />

      {/* Floating Theme Toggle */}
      <ThemeToggle />

      <Desktop onOpenWindow={openWindow} />

      <WindowManager
        windows={windows}
        onClose={closeWindow}
        onMinimize={toggleMinimize}
        onMaximize={toggleMaximize}
        onBringToFront={bringToFront}
      />

      <Taskbar windows={windows} onToggleMinimize={toggleMinimize} onBringToFront={bringToFront} />
    </div>
  )
}
