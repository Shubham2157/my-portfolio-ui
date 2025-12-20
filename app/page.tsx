"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Desktop from "@/components/desktop"
import Taskbar from "@/components/taskbar"
import WindowManager from "@/components/window-manager"
import ThemeToggle from "@/components/theme-toggle"

// Window type to title mapping
const windowTitles: Record<string, string> = {
  about: "About Me",
  projects: "My Projects",
  blog: "Blog",
  skills: "Skills & Tech",
  resume: "Download Resume",
  contact: "Get In Touch",
}

export default function Home() {
  const searchParams = useSearchParams()
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
  const [initialized, setInitialized] = useState(false)

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
      // Update URL when bringing window to front
      window.history.pushState(null, "", `?window=${type}`)
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
    // Update URL when opening new window
    window.history.pushState(null, "", `?window=${type}`)
  }

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
    // Clear URL when closing window
    window.history.pushState(null, "", "/")
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

  // Handle window focus from taskbar with URL update
  const handleWindowFocus = (type: string, postId?: string) => {
    if (postId) {
      window.history.pushState(null, "", `?window=${type}&postId=${postId}`)
    } else {
      window.history.pushState(null, "", `?window=${type}`)
    }
  }

  // Handle URL-based window opening on mount
  useEffect(() => {
    if (initialized) return

    const windowParam = searchParams.get("window")
    if (windowParam && windowTitles[windowParam]) {
      openWindow(windowParam, windowTitles[windowParam])
    }

    setInitialized(true)
  }, [searchParams, initialized])

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

      <Taskbar windows={windows} onToggleMinimize={toggleMinimize} onBringToFront={bringToFront} onWindowFocus={handleWindowFocus} />
    </div>
  )
}
