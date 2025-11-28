"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
}

export function ThemeProvider({ children, defaultTheme = "system" }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem("theme") || defaultTheme
    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      document.documentElement.classList.toggle("dark", isDark)
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark")
    }
  }, [defaultTheme])

  if (!mounted) return children
  return children
}

export function useTheme() {
  const [theme, setThemeState] = useState<string>("system")

  useEffect(() => {
    setThemeState(localStorage.getItem("theme") || "system")
  }, [])

  const setTheme = (newTheme: string) => {
    localStorage.setItem("theme", newTheme)
    setThemeState(newTheme)
    if (newTheme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      document.documentElement.classList.toggle("dark", isDark)
    } else {
      document.documentElement.classList.toggle("dark", newTheme === "dark")
    }
  }

  return { theme, setTheme }
}
