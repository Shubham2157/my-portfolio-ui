"use client"

import { useEffect, useState } from "react"
import { Calendar, Loader2 } from "lucide-react"
import { blogConfig, type BlogPost } from "@/config/blog"
import BlogDetailWindow from "./blog-detail-window"

export default function BlogWindow() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}/blog`)
        if (response.ok) {
          const data = await response.json()
          setPosts(data)
        } else {
          setPosts(blogConfig.posts)
        }
      } catch (error) {
        console.log("[Portfolio] Failed to fetch blog posts, using config data")
        // Use posts from config
        setPosts(blogConfig.posts)
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
      <h2 className="text-xl font-bold">Blog Posts</h2>
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
