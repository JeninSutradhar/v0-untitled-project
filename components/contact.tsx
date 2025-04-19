"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send, Github, Linkedin, ExternalLink } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Card className="bg-zinc-800/50 border-zinc-700 card-hover">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3 mb-6">
                <Mail className="h-6 w-6 text-emerald-400 mt-1" />
                <h3 className="text-xl font-semibold">Contact Information</h3>
              </div>

              <p className="text-gray-300 mb-6">
                Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello. I'm
                always open to discussing new projects and ideas.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-zinc-700/50 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-emerald-400" />
                  </div>
                  <a
                    href="mailto:j.sutradhar@symbola.io"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    j.sutradhar@symbola.io
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-zinc-700/50 p-3 rounded-full">
                    <MessageSquare className="h-5 w-5 text-emerald-400" />
                  </div>
                  <a href="tel:+919461942951" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    +91 9461942951
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/JeninSutradhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-700/50 rounded-full hover:bg-zinc-700 transition-colors"
                  >
                    <Github className="h-5 w-5 text-emerald-400" />
                  </a>
                  <a
                    href="https://linkedin.com/in/jenin-sutradhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-700/50 rounded-full hover:bg-zinc-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-emerald-400" />
                  </a>
                  <a
                    href="https://leetcode.com/jenin-sutradhar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-700/50 rounded-full hover:bg-zinc-700 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 text-emerald-400" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800/50 border-zinc-700 card-hover">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3 mb-6">
                <Send className="h-6 w-6 text-emerald-400 mt-1" />
                <h3 className="text-xl font-semibold">Send Me a Message</h3>
              </div>

              {submitted ? (
                <div className="bg-emerald-400/20 border border-emerald-400/30 rounded-md p-4 text-center">
                  <p className="text-emerald-400 font-medium">Thank you for your message! I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-zinc-700/50 border-zinc-600 focus:border-emerald-400 focus:ring-emerald-400/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-zinc-700/50 border-zinc-600 focus:border-emerald-400 focus:ring-emerald-400/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-zinc-700/50 border-zinc-600 focus:border-emerald-400 focus:ring-emerald-400/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="bg-zinc-700/50 border-zinc-600 focus:border-emerald-400 focus:ring-emerald-400/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
