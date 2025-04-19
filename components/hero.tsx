"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Code2, ExternalLink } from "lucide-react"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Blockchain Developer & Rust Enthusiast"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-6 relative">
            <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-3xl opacity-20"></div>
            <div className="relative bg-zinc-800/50 p-4 rounded-full border border-zinc-700">
              <Code2 className="h-16 w-16 md:h-20 md:w-20 text-emerald-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">Jenin Sutradhar</h1>

          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl text-emerald-400 font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Newbie Software Developer specializing in Rust and Blockchain development, with experience in Go, C/C++,
            Java, and Python.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" className="border-emerald-600 text-emerald-400">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="ghost" className="flex items-center gap-2">
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/JeninSutradhar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800/50 rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/jenin-sutradhar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800/50 rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/jenin-sutradhar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800/50 rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
