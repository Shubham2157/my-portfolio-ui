"use client"

import { useState, useEffect } from "react"

interface Window {
  id: string
  type: string
  title: string
  isMinimized: boolean
  zIndex: number
}

interface TaskbarProps {
  windows: Window[]
  onToggleMinimize: (id: string) => void
  onBringToFront: (id: string) => void
}

export default function Taskbar({ windows, onToggleMinimize, onBringToFront }: TaskbarProps) {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      const dateStr = now.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })
      setTime(`${timeStr} | ${dateStr}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="taskbar fixed bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 px-4 py-2 bg-gradient-to-b from-gray-100/80 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-900/80 border border-gray-300/50 dark:border-gray-700/50 rounded-3xl shadow-2xl backdrop-blur-lg z-40 transition-all duration-300 max-w-[calc(100vw-2rem)]">
      <div className="flex gap-1.5 items-center overflow-x-auto scrollbar-hide max-w-[calc(100vw-8rem)]">
        {windows.length === 0 ? (
          <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap px-2">No windows open</span>
        ) : (
          windows.map((window) => (
            <button
              key={window.id}
              onClick={() => {
                if (window.isMinimized) {
                  onToggleMinimize(window.id)
                }
                onBringToFront(window.id)
              }}
              title={window.title}
              className="px-3 py-1.5 bg-gray-200/60 dark:bg-gray-700/60 hover:bg-gray-300/80 dark:hover:bg-gray-600/80 text-xs text-gray-800 dark:text-gray-100 rounded-lg transition-all truncate max-w-xs font-medium shadow-sm border border-gray-400/30 dark:border-gray-600/30 flex-shrink-0"
            >
              {window.title}
            </button>
          ))
        )}
      </div>
      {time && (
        <span className="text-xs text-gray-600 dark:text-gray-400 px-2 py-1 whitespace-nowrap font-medium flex-shrink-0">
          {time}
        </span>
      )}
    </div>
  )
}
