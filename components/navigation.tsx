"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ]

  const scrollToSection = (id: string) => {
    setMobileOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
        setActiveSection(id)
      }
    }, 100)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="fixed left-0 top-0 z-50 h-screen w-64 border-r border-gray-300/50 dark:border-gray-700/50 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 hidden lg:flex flex-col backdrop-blur-sm">
        <Link href="/" className="flex items-center px-6 py-8">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">SKJ</h1>
            <p className="text-xs text-gray-600 dark:text-gray-400">Software Engineer</p>
          </div>
        </Link>

        <div className="flex-1 px-4 py-8">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full text-left px-4 py-2 rounded-lg transition-colors",
                    activeSection === item.id
                      ? "bg-blue-500 text-white font-semibold shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-300/50 dark:border-gray-700/50 px-6 py-6">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            <span className="text-sm">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>

          <div className="space-y-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gray-50 dark:bg-gray-950 border-b border-gray-300/50 dark:border-gray-700/50 lg:hidden backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">SKJ</h1>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-border transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <>
            <div className="border-t border-gray-300/50 dark:border-gray-700/50 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-gray-100/95 dark:to-gray-950/95 shadow-xl">
              <div className="px-4 py-6 space-y-1 max-h-96 overflow-y-auto">
                {/* Navigation Items */}
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105",
                      "animate-in fade-in slide-in-from-left",
                      activeSection === item.id
                        ? "bg-blue-500 text-white font-semibold shadow-lg"
                        : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-600",
                    )}
                  >
                    <span className="block font-medium">{item.label}</span>
                  </button>
                ))}

                {/* Divider */}
                <div className="border-t border-gray-300/50 dark:border-gray-700/50 my-4 pt-4">
                  {/* Social Links */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider px-4 py-2">
                      Connect
                    </p>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800"
                    >
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800"
                    >
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800"
                    >
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Backdrop */}
            <div
              className="fixed inset-0 top-[65px] bg-black/40 lg:hidden z-30 transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            />
          </>
        )}
      </div>

      {/* Mobile Padding */}
      <div className="h-16 lg:hidden" />
    </>
  )
}
