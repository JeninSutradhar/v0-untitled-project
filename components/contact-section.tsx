"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send, Github, Linkedin, ExternalLink } from "lucide-react"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <div className="flex items-start space-x-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                  <Mail className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold">Contact Information</h3>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello. I'm
                always open to discussing new projects and ideas.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <Mail className="h-5 w-5 text-emerald-400" />
                  </div>
                  <a
                    href="mailto:j.sutradhar@symbola.io"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    j.sutradhar@symbola.io
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <MessageSquare className="h-5 w-5 text-emerald-400" />
                  </div>
                  <a href="tel:+919461942951" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    +91 9461942951
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/JeninSutradhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <Github className="h-6 w-6 text-emerald-400" />
                  </a>
                  <a
                    href="https://linkedin.com/in/jenin-sutradhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-emerald-400" />
                  </a>
                  <a
                    href="https://leetcode.com/jenin-sutradhar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="h-6 w-6 text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <div className="flex items-start space-x-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                  <Send className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold">Send Me a Message</h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                      <Mail className="h-8 w-8 text-emerald-400" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold gradient-text mb-2">Message Sent!</h4>
                  <p className="text-gray-300">Thank you for your message! I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glass border-white/10 focus:border-emerald-400 focus:ring-emerald-400/20 bg-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glass border-white/10 focus:border-emerald-400 focus:ring-emerald-400/20 bg-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="glass border-white/10 focus:border-emerald-400 focus:ring-emerald-400/20 bg-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="glass border-white/10 focus:border-emerald-400 focus:ring-emerald-400/20 bg-transparent"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 rounded-full py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
