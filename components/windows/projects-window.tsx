"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Loader2, Database, FileText } from "lucide-react"
import { projectsConfig, type Project } from "@/config/projects"
import type { DataSource } from "@/lib/data-source"

export default function ProjectsWindow() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState<DataSource>("config")

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}projects`)
        if (response.ok) {
          const data = await response.json()
          // Extract projects from API response wrapper
          setProjects(data.data || [])
          setDataSource("backend")
        } else {
          setProjects(projectsConfig.projects)
          setDataSource("config")
        }
      } catch (error) {
        // Use projects from config
        setProjects(projectsConfig.projects)
        setDataSource("config")
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-bold">My Projects</h2>
        <div className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium">
          {dataSource === "backend" ? (
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
      {projects.length === 0 ? (
        <p className="text-sm text-muted-foreground">No projects found</p>
      ) : (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {projects.map((project) => (
            <div key={project.id} className="border border-border p-3 rounded hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-sm">{project.title}</h3>
                    {project.featured && (
                      <span className="text-xs bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 px-1.5 py-0.5 rounded">★ Featured</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.split(",").map((tech) => (
                      <span key={tech.trim()} className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-1">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" title="View Demo" className="text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" title="View on GitHub" className="text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
