"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ExternalLink, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Blockchain Developer & Rust Enthusiast"
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px] animate-float animation-delay-2000" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 blur-3xl opacity-20"
              style={{
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              }}
            />
            <div className="relative glass rounded-full p-6 border border-white/10">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-white/10 border-dashed"
              />
              <motion.div
                style={{
                  transform: `rotateY(${mousePosition.x * 20}deg) rotateX(${-mousePosition.y * 20}deg)`,
                }}
                className="relative z-10"
              >
                <Code2Icon className="h-16 w-16 md:h-24 md:w-24 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter"
          >
            Jenin Sutradhar
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-8 mb-8"
          >
            <p className="text-xl md:text-2xl font-medium">
              <span className="gradient-text">{typedText}</span>
              <span className="animate-pulse ml-1">|</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
          >
            Newbie Software Developer specializing in Rust and Blockchain development, with experience in Go, C/C++,
            Java, and Python.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.div variants={buttonVariants} initial="initial" animate="animate" whileHover="hover" custom={0}>
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 px-6 py-6 text-lg rounded-full"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} initial="initial" animate="animate" whileHover="hover" custom={1}>
              <Button
                asChild
                variant="outline"
                className="glass border-white/10 hover:bg-white/10 text-white px-6 py-6 text-lg rounded-full"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} initial="initial" animate="animate" whileHover="hover" custom={2}>
              <Button asChild variant="ghost" className="text-white hover:bg-white/5 px-6 py-6 text-lg rounded-full">
                <a href="/resume.pdf" download className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  <span>Resume</span>
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex items-center space-x-6"
          >
            <SocialLink href="https://github.com/JeninSutradhar" icon={<Github className="h-5 w-5" />} />
            <SocialLink href="https://linkedin.com/in/jenin-sutradhar" icon={<Linkedin className="h-5 w-5" />} />
            <SocialLink href="https://leetcode.com/jenin-sutradhar/" icon={<ExternalLink className="h-5 w-5" />} />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 glass rounded-full hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}

function Code2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  )
}
