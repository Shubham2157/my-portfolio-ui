"use client"

import { useEffect, useMemo, useState } from "react"
import { Loader2, Database, FileText } from "lucide-react"
import { iconMap } from "@/lib/icon-map"
import { skillsConfig, type Skill } from "@/config/skills"
import type { DataSource } from "@/lib/data-source"
import { getSkillColor } from "@/lib/color-generator"

export default function SkillsWindow() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)
  const [skillsDataSource, setSkillsDataSource] = useState<DataSource>("config")

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}skills`)
        if (response.ok) {
          const data = await response.json()
          // Extract skills array from response
          setSkills(data.skills || data)
          setSkillsDataSource("backend")
        } else {
          setSkills(skillsConfig.skills)
          setSkillsDataSource("config")
        }
      } catch (error) {
        console.log("[Portfolio] Failed to fetch skills, using config data")
        // Use skills from config
        setSkills(skillsConfig.skills)
        setSkillsDataSource("config")
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  const groupedSkills = useMemo(() => {
    const groups: Record<string, Skill[]> = {}
    skills.forEach((skill) => {
      if (!groups[skill.category]) {
        groups[skill.category] = []
      }
      groups[skill.category].push(skill)
    })
    return groups
  }, [skills])

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "expert":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
      case "advanced":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
      case "intermediate":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Skills & Technologies</h2>
        <div className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium">
          {skillsDataSource === "backend" ? (
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

      {skills.length === 0 ? (
        <p className="text-sm text-muted-foreground">No skills found</p>
      ) : (
        <>
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {categorySkills.map((skill) => {
                  const IconComponent = iconMap[skill.icon as keyof typeof iconMap]
                  const isClickable = skill.url
                  const skillColor = getSkillColor(skill.name, skill.color)

                  return (
                    <div key={skill.id}>
                      {isClickable ? (
                        <a
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={skill.name}
                          className="group relative flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700/50"
                        >
                          <div className="relative">
                            {IconComponent ? (
                              <IconComponent
                                size={40}
                                style={{ color: skillColor }}
                                className="group-hover:scale-110 transition-transform duration-200"
                              />
                            ) : (
                              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-xs font-bold">
                                {skill.name.substring(0, 2)}
                              </div>
                            )}
                          </div>

                          <div className="text-center">
                            <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 truncate max-w-[80px]">{skill.name}</p>
                            <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded mt-1 ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </span>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                              {skill.name}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="group relative flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md">
                          <div className="relative">
                            {IconComponent ? (
                              <IconComponent
                                size={40}
                                style={{ color: skillColor }}
                                className="group-hover:scale-110 transition-transform duration-200"
                              />
                            ) : (
                              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-xs font-bold">
                                {skill.name.substring(0, 2)}
                              </div>
                            )}
                          </div>

                          <div className="text-center">
                            <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 truncate max-w-[80px]">{skill.name}</p>
                            <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded mt-1 ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </span>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                              {skill.name}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
