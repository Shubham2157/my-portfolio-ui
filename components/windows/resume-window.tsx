"use client"

import { Download, ExternalLink } from "lucide-react"
import { resumeConfig } from "@/config/resume"

export default function ResumeWindow() {
  const resumeUrl = resumeConfig.getViewUrl(resumeConfig.fileId)
  const downloadUrl = resumeConfig.getDownloadUrl(resumeConfig.fileId)

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-8">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 dark:from-red-600 dark:to-red-800 rounded-lg flex items-center justify-center shadow-lg">
            <FileIcon className="w-10 h-10 text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2 text-foreground">My Resume</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Download my professional resume in PDF format to learn more about my experience, skills, and qualifications.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => window.open(downloadUrl, "_blank")}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 dark:from-red-700 dark:to-red-800 dark:hover:from-red-600 dark:hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95"
          >
            <Download className="w-4 h-4" />
            Download Resume PDF
          </button>

          <button
            onClick={() => window.open(resumeUrl, "_blank")}
            className="w-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-foreground font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            View in Google Drive
          </button>
        </div>

        <div className="mt-8 p-4 bg-muted dark:bg-muted/50 rounded-lg text-left">
          <h3 className="font-semibold text-sm mb-2 text-foreground">Quick Summary</h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            {resumeConfig.quickSummary.map((point, index) => (
              <li key={index}>• {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// Simple PDF icon component
function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="13" x2="12" y2="17" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
  )
}

