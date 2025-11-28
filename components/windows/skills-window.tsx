"use client"

import { useMemo } from "react"
import { iconMap } from "@/lib/icon-map"
import skillsData from "@/data/skills.json"

interface Skill {
  id: string
  name: string
  category: string
  icon: string
  color: string
  level: string
}

export default function SkillsWindow() {
  const skills: Skill[] = skillsData.skills

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

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Skills & Technologies</h2>
      
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categorySkills.map((skill) => {
              const IconComponent = iconMap[skill.icon as keyof typeof iconMap]
              
              return (
                <div
                  key={skill.id}
                  className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md"
                >
                  <div className="relative">
                    {IconComponent ? (
                      <IconComponent
                        size={40}
                        style={{ color: skill.color }}
                        className="group-hover:scale-110 transition-transform duration-200"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-xs font-bold">
                        {skill.name.substring(0, 2)}
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">{skill.name}</p>
                    <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded mt-1 ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
