"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { socialLinks } from "@/config/social"

export default function ContactWindow() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://shubham.example.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setForm({ name: "", email: "", message: "" })
        alert("Message sent successfully!")
      }
    } catch (error) {
      console.log("[v0] Contact form submission", error)
      alert("Failed to send message")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Get In Touch</h2>

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
        <div className="flex gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="p-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors"
              title={social.label}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
