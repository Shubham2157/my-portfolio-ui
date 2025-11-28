// Resume configuration
export const resumeConfig = {
  // Google Drive file ID for the resume
  fileId: "17BQ-M1gDH_Cf0dZGQACwlTbpuU0z1qbv",

  // Get the view URL
  getViewUrl: (fileId: string) =>
    `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,

  // Get the direct download URL
  getDownloadUrl: (fileId: string) =>
    `https://drive.google.com/uc?export=download&id=${fileId}`,

  // Quick summary points
  quickSummary: [
    "Full-stack web developer with 5+ years of experience",
    "Expertise in React, Next.js, Node.js, and TypeScript",
    "Specialized in building scalable web applications",
    "Strong knowledge of databases and cloud services",
  ],
}
