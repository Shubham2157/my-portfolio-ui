"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Loader2 } from "lucide-react"
import { projectsConfig, type Project } from "@/config/projects"

export default function ProjectsWindow() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}/projects`)
        if (response.ok) {
          const data = await response.json()
          setProjects(data)
        } else {
          setProjects(projectsConfig.projects)
        }
      } catch (error) {
        console.log("[Portfolio] Failed to fetch projects, using config data")
        // Use projects from config
        setProjects(projectsConfig.projects)
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
      <h2 className="text-xl font-bold">My Projects</h2>
      {projects.length === 0 ? (
        <p className="text-sm text-muted-foreground">No projects found</p>
      ) : (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {projects.map((project) => (
            <div key={project.id} className="border border-border p-3 rounded hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-sm">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a href={project.link} className="text-primary hover:text-primary/80">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
