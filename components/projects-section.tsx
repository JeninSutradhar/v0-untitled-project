"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: "hexadb",
    title: "HexaDB",
    description:
      "An AI-powered in-memory relational database system made in C++ that supports SQL-like operations, enhanced with AI-based natural language processing.",
    tags: ["C++", "DBMS", "AI", "SQL"],
    link: "https://github.com/JeninSutradhar/HexaDB",
    category: "database",
  },
  {
    id: "fortifynet",
    title: "Fortifynet Proxy v2",
    description:
      "A flexible asynchronous proxy server library written in Rust, designed for performance, security, and ease of use.",
    tags: ["Rust", "Proxy Server", "Internet Security"],
    link: "https://github.com/JeninSutradhar/FortiNetProxy",
    category: "networking",
  },
  {
    id: "queri",
    title: "Queri - DNS Resolver Server",
    description:
      "A powerful DNS resolver Engine built with Rust. Designed to perform both iterative and recursive DNS lookups providing detailed information about domain names.",
    tags: ["DNS", "Rust"],
    link: "https://github.com/JeninSutradhar/Queri",
    category: "networking",
  },
  {
    id: "ipflooder",
    title: "IP Flooder/Spoofer",
    description:
      "A customizable network packet generator and testing tool written in Rust. Designed for network stress testing, security assessments, and protocol analysis.",
    tags: ["Rust", "Internet Protocol (IP)"],
    link: "https://github.com/JeninSutradhar/IP-Flooder",
    category: "networking",
  },
  {
    id: "kryptos",
    title: "Kryptos - Secure Password Wallet",
    description:
      "Password manager built with Go and Fyne, designed to provide a secure and intuitive way to store and manage your passwords locally.",
    tags: ["Go", "Fyne UI", "Cryptography"],
    link: "https://github.com/JeninSutradhar/kryptos",
    category: "security",
  },
  {
    id: "ffmpeg",
    title: "Rust based FFmpeg Media Player",
    description:
      "Lightweight audio-video player built in Rust using FFmpeg libraries. Demonstrates the usage of FFmpeg with Rust to play back video files.",
    tags: ["Rust", "FFmpeg"],
    link: "https://github.com/JeninSutradhar/Rust-based_FFmpeg_Media_Player",
    category: "media",
  },
  {
    id: "znet",
    title: "Znet Scanner",
    description:
      "A Java-based network scanning tool for fast, automated discovery of active devices and open ports within a local network subnet. Retrieves MAC addresses, identifies open ports, and provides detailed insights.",
    tags: ["Java", "Network Security"],
    link: "https://github.com/JeninSutradhar/Znet-Scanner",
    category: "networking",
  },
  {
    id: "sonic3",
    title: "sonic3 - Golang based Zip Utility",
    description:
      "A GUI application built with Go and Fyne UI for file compression, decompression, archiving, and extraction; designed for speed and efficiency.",
    tags: ["Go", "Fyne UI", "File Archiving"],
    link: "https://github.com/JeninSutradhar/sonic3",
    category: "utility",
  },
  {
    id: "cyphersec",
    title: "CypherSec",
    description: "Frontend/UX design project focused on cybersecurity solutions with a modern interface.",
    tags: ["UI/UX", "Frontend", "Design"],
    link: "#",
    category: "design",
  },
  {
    id: "palx",
    title: "Palx.in",
    description: "Frontend/UX design project with a focus on user experience and modern design principles.",
    tags: ["UI/UX", "Frontend", "Design"],
    link: "#",
    category: "design",
  },
  {
    id: "azorion",
    title: "Project Azorion",
    description: "Frontend/UX design project showcasing advanced UI techniques and responsive design.",
    tags: ["UI/UX", "Frontend", "Design"],
    link: "#",
    category: "design",
  },
  {
    id: "carbon",
    title: "Carbon Emission Footprint Tracker",
    description:
      "Winner of Spandan 2k24 Hackathon. A tool to track and analyze carbon emissions to promote environmental awareness.",
    tags: ["Hackathon", "Environmental", "Tracking"],
    link: "#",
    category: "other",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "networking", name: "Networking" },
  { id: "database", name: "Database" },
  { id: "security", name: "Security" },
  { id: "utility", name: "Utilities" },
  { id: "design", name: "UI/UX Design" },
  { id: "media", name: "Media" },
  { id: "other", name: "Other" },
]

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">My Projects</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12 overflow-x-auto pb-4 scrollbar-hide"
        >
          <div className="glass rounded-full p-1.5 flex space-x-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeCategory === category.id && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative group"
              >
                <div className="glass-card rounded-3xl p-6 h-full transform group-hover:translate-y-[-5px] transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/0 to-teal-500/0 opacity-0 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 group-hover:opacity-100 blur-xl transition-all duration-300 -z-10 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                  <p className="text-gray-300 mb-6 h-24 overflow-y-auto scrollbar-hide">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs glass bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <span>View Project</span>
                      {project.link.includes("github") ? (
                        <Github className="h-4 w-4" />
                      ) : (
                        <ExternalLink className="h-4 w-4" />
                      )}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
