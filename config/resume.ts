// Resume configuration and interfaces
export interface ResumeData {
  fileId: string
  url?: string
  downloadUrl?: string
  quickSummary: string[]
}

export interface Skill {
  id: string
  name: string
  category: string
  icon: string
  color: string
  level: string
}

export interface SkillsData {
  skills: Skill[]
}

export const resumeConfig: ResumeData = {
  // Google Drive file ID for the resume
  fileId: "1R4w3En63rNd2l6jn8gV-2B11-tBg_YBk",

  // Direct URL to resume (if hosted elsewhere)
  url: undefined,

  // Direct download URL
  downloadUrl: undefined,

  // Quick summary points
  quickSummary: [
    "Full-stack web developer with 4+ years of experience",
    "Expertise in Spring framework and React.js",
    "Specialized in building scalable web applications",
    "Strong knowledge of databases and cloud services",
  ],
}

// Helper function to get Google Drive view URL
export function getGoogleDriveViewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`
}

// Helper function to get Google Drive download URL
export function getGoogleDriveDownloadUrl(fileId: string): string {
  return `https://drive.google.com/uc?export=download&id=${fileId}`
}
