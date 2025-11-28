"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Loader2, Calendar, Clock } from "lucide-react"
import { blogConfig, type BlogPost } from "@/config/blog"

interface BlogDetailWindowProps {
  postId: string
  onBack: () => void
}

export default function BlogDetailWindow({ postId, onBack }: BlogDetailWindowProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}/blog/${postId}`)
        if (response.ok) {
          const data = await response.json()
          setPost(data)
        } else {
          // Fallback to config
          const configPost = blogConfig.posts.find((p) => p.id === postId)
          if (configPost) {
            setPost(configPost)
          } else {
            setError(true)
          }
        }
      } catch (error) {
        console.log("[Portfolio] Failed to fetch blog post, using config data")
        // Use post from config
        const configPost = blogConfig.posts.find((p) => p.id === postId)
        if (configPost) {
          setPost(configPost)
        } else {
          setError(true)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [postId])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="space-y-3 p-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Posts
        </button>
        <p className="text-sm text-muted-foreground">Post not found</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 h-full overflow-y-auto p-4">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Posts
      </button>

      <article className="prose prose-sm dark:prose-invert max-w-none">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 pb-4 border-b">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString()}
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
          )}
        </div>

        <div className="prose-content whitespace-pre-wrap text-sm leading-relaxed text-foreground space-y-3">
          {post.content.split("\n").map((line, index) => {
            // Handle markdown headers
            if (line.startsWith("# ")) {
              return (
                <h1 key={index} className="text-xl font-bold mt-4 mb-2">
                  {line.replace(/^# /, "")}
                </h1>
              )
            }
            if (line.startsWith("## ")) {
              return (
                <h2 key={index} className="text-lg font-semibold mt-3 mb-2">
                  {line.replace(/^## /, "")}
                </h2>
              )
            }
            if (line.startsWith("### ")) {
              return (
                <h3 key={index} className="text-base font-semibold mt-2 mb-1">
                  {line.replace(/^### /, "")}
                </h3>
              )
            }
            // Handle lists
            if (line.startsWith("- ")) {
              return (
                <li key={index} className="ml-4 mb-1">
                  {line.replace(/^- /, "")}
                </li>
              )
            }
            // Handle code blocks
            if (line.includes("```")) {
              return null
            }
            // Empty lines
            if (line.trim() === "") {
              return <br key={index} />
            }
            // Regular paragraphs
            if (line.trim()) {
              return (
                <p key={index} className="mb-2">
                  {line}
                </p>
              )
            }
            return null
          })}
        </div>
      </article>
    </div>
  )
}
