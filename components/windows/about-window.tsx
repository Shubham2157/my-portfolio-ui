"use client"

import { useEffect, useState } from "react"
import { Loader2, Database, FileText, Briefcase, BookOpen, Code2 } from "lucide-react"
import { aboutConfig, type AboutData } from "@/config/about"
import type { DataSource } from "@/lib/data-source"

export default function AboutWindow() {
  const [about, setAbout] = useState<AboutData | null>(null)
  const [loading, setLoading] = useState(true)
  const [aboutDataSource, setAboutDataSource] = useState<DataSource>("config")

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}about`)
        if (response.ok) {
          const data = await response.json()
          setAbout(data)
          setAboutDataSource("backend")
        } else {
          setAbout(aboutConfig)
          setAboutDataSource("config")
        }
      } catch (error) {
        console.log("[Portfolio] Failed to fetch about data, using config data")
        setAbout(aboutConfig)
        setAboutDataSource("config")
      } finally {
        setLoading(false)
      }
    }

    fetchAbout()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>
    )
  }

  if (!about) {
    return <p className="text-sm text-muted-foreground">No about data found</p>
  }
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-start justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">{about.name}</h2>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{about.title}</p>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium">
          {aboutDataSource === "backend" ? (
            <>
              <Database className="w-3 h-3 text-blue-500" />
              <span className="text-blue-600 dark:text-blue-400">Backend</span>
            </>
          ) : (
            <>
              <FileText className="w-3 h-3 text-amber-500" />
              <span className="text-amber-600 dark:text-amber-400">Config</span>
            </>
          )}
        </div>
      </div>

      {/* Bio Section */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          About Me
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{about.bio}</p>
      </div>

      {/* Stats Section */}
      {about.stats && about.stats.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Highlights
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {about.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800/50 hover:shadow-md transition-shadow"
              >
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education Section */}
      {about.education && about.education.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            Education
          </h3>
          <div className="space-y-3">
            {about.education.map((edu, index) => (
              <div
                key={index}
                className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800/50"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{edu.degree}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Company Section */}
      {about.company && (
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-green-600 dark:text-green-400" />
            Current Company
          </h3>
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800/50">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{about.company.name}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">{about.company.position}</p>
          </div>
        </div>
      )}
    </div>
  )
}
