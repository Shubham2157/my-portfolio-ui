"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X, Minus } from "lucide-react"

interface WindowProps {
  id: string
  title: string
  isMinimized: boolean
  isMaximized?: boolean
  zIndex: number
  onClose: () => void
  onMinimize: () => void
  onMaximize?: () => void
  onBringToFront: () => void
  children: React.ReactNode
}

export default function Window({
  id,
  title,
  isMinimized,
  isMaximized = false,
  zIndex,
  onClose,
  onMinimize,
  onMaximize,
  onBringToFront,
  children,
}: WindowProps) {
  const [position, setPosition] = useState({ x: 40 + Math.random() * 60, y: 40 + Math.random() * 60 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ width: 600, height: 500 })
  const windowRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect()
      const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX
      const clientY = "clientY" in e ? e.clientY : e.touches[0].clientY

      setDragOffset({
        x: clientX - rect.left,
        y: clientY - rect.top,
      })
      setIsDragging(true)
      onBringToFront()
    }
  }

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return

      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
      const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY

      const newX = Math.max(0, Math.min(clientX - dragOffset.x, window.innerWidth - 100))
      const newY = Math.max(0, Math.min(clientY - dragOffset.y, window.innerHeight - 100))

      setPosition({ x: newX, y: newY })
    }

    const handleEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener("mousemove", handleMove)
      window.addEventListener("touchmove", handleMove, { passive: false })
      window.addEventListener("mouseup", handleEnd)
      window.addEventListener("touchend", handleEnd)
    }

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("touchmove", handleMove)
      window.removeEventListener("mouseup", handleEnd)
      window.removeEventListener("touchend", handleEnd)
    }
  }, [isDragging, dragOffset])

  if (isMinimized) return null

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const windowWidth = isMaximized ? "100%" : isMobile ? "95vw" : `${size.width}px`
  const windowHeight = isMaximized ? "100%" : isMobile ? "70vh" : `${size.height}px`
  const windowLeft = isMaximized ? "0px" : `${position.x}px`
  const windowTop = isMaximized ? "0px" : `${position.y}px`

  return (
    <div
      ref={windowRef}
      className="window-frame fixed rounded-lg overflow-hidden shadow-2xl"
      style={{
        left: windowLeft,
        top: windowTop,
        zIndex,
        width: windowWidth,
        height: windowHeight,
        cursor: isDragging ? "grabbing" : "default",
      }}
      onMouseDown={onBringToFront}
    >
      {/* Title Bar */}
      <div
        ref={headerRef}
        className="window-header cursor-grab active:cursor-grabbing flex items-center justify-between gap-2 px-3 py-2.5 bg-gray-200 dark:bg-gray-800"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        <div className="flex gap-2">
          <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" title="Close" onClick={onClose} />
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" title="Minimize" onClick={onMinimize} />
          <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" title="Maximize" onClick={onMaximize} />
        </div>
        <span className="flex-1 text-center font-medium text-xs text-gray-800 dark:text-gray-100 truncate">{title}</span>
        <div className="w-8" />
      </div>

      {/* Content */}
      <div
        className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-y-auto"
        style={{
          height: `calc(${windowHeight} - 40px)`,
        }}
      >
        <div className="p-4 md:p-6">{children}</div>
      </div>
    </div>
  )
}
