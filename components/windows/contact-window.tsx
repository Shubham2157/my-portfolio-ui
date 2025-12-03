"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Send, Loader2, Database, FileText } from "lucide-react"
import { socialConfig, type SocialLink } from "@/config/social"
import { getIconComponent } from "@/lib/icon-map"
import type { DataSource } from "@/lib/data-source"

export default function ContactWindow() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([])
  const [contactEmail, setContactEmail] = useState(socialConfig.contact.email)
  const [loadingContacts, setLoadingContacts] = useState(true)
  const [contactDataSource, setContactDataSource] = useState<DataSource>("config")

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}contact`)
        if (response.ok) {
          const data = await response.json()
          // Extract social links and contact info from backend
          if (data.socialLinks) {
            setSocialLinks(data.socialLinks)
          }
          if (data.email) {
            setContactEmail(data.email)
          }
          setContactDataSource("backend")
        } else {
          setSocialLinks(socialConfig.links)
          setContactEmail(socialConfig.contact.email)
          setContactDataSource("config")
        }
      } catch (error) {
        console.log("[Portfolio] Failed to fetch contact data, using config data")
        // Use contact data from config
        setSocialLinks(socialConfig.links)
        setContactEmail(socialConfig.contact.email)
        setContactDataSource("config")
      } finally {
        setLoadingContacts(false)
      }
    }

    fetchContactData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
      const response = await fetch(`${baseUrl}contact/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setForm({ name: "", email: "", message: "" })
        alert("Message sent successfully!")
      } else {
        alert("Failed to send message")
      }
    } catch (error) {
      console.log("[Portfolio] Contact form submission error", error)
      alert("Failed to send message")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loadingContacts) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Get In Touch</h2>
        <div className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium">
          {contactDataSource === "backend" ? (
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

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="text-xs font-semibold block mb-1">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-2 py-1 text-sm border border-border rounded bg-input"
            required
          />
        </div>
        <div>
          <label className="text-xs font-semibold block mb-1">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-2 py-1 text-sm border border-border rounded bg-input"
            required
          />
        </div>
        <div>
          <label className="text-xs font-semibold block mb-1">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-2 py-1 text-sm border border-border rounded bg-input resize-none h-20"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-3 py-1 text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white rounded hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="border-t border-border pt-3">
        <p className="text-xs font-semibold mb-2">Connect With Me</p>
        {socialLinks.length === 0 ? (
          <p className="text-xs text-muted-foreground">No social links available</p>
        ) : (
          <div className="flex gap-2">
            {socialLinks.map((social) => {
              const IconComponent = getIconComponent(social.iconName)
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="p-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors"
                  title={social.label}
                >
                  {IconComponent ? (
                    <IconComponent className="w-4 h-4" />
                  ) : (
                    <span className="text-xs">{social.label.slice(0, 1)}</span>
                  )}
                </a>
              )
            })}
          </div>
        )}
      </div>

      <div className="border-t border-border pt-3 text-xs">
        <p className="font-semibold mb-1">Quick Contact</p>
        <a
          href={`mailto:${contactEmail}`}
          className="text-primary hover:underline break-all"
        >
          {contactEmail}
        </a>
      </div>
    </div>
  )
}

