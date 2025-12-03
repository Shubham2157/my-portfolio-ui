"use client"

import { useEffect, useState } from "react"
import { Calendar, Loader2, Database, FileText } from "lucide-react"
import { blogConfig, type BlogPost } from "@/config/blog"
import BlogDetailWindow from "./blog-detail-window"
import type { DataSource } from "@/lib/data-source"

export default function BlogWindow() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)
  const [dataSource, setDataSource] = useState<DataSource>("config")

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}/blog`)
        if (response.ok) {
          const data = await response.json()
          setPosts(data)
          setDataSource("backend")
        } else {
          setPosts(blogConfig.posts)
          setDataSource("config")
        }
      } catch (error) {
        console.log("[Portfolio] Failed to fetch blog posts, using config data")
        // Use posts from config
        setPosts(blogConfig.posts)
        setDataSource("config")
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>
    )
  }

  if (selectedPostId) {
    return <BlogDetailWindow postId={selectedPostId} onBack={() => setSelectedPostId(null)} />
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-bold">Blog Posts</h2>
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
      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">No blog posts found</p>
      ) : (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {posts.map((post) => (
            <button
              key={post.id}
              onClick={() => setSelectedPostId(post.id)}
              className="w-full text-left border border-border p-3 rounded hover:bg-muted/50 transition-colors cursor-pointer group"
            >
              <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                {post.readTime && <span>{post.readTime} min read</span>}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
