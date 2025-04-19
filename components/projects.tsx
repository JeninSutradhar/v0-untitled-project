"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Projects</h2>

        <Tabs defaultValue="all" className="mt-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-zinc-800/50 p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="data-[state=active]:bg-emerald-400/20 data-[state=active]:text-emerald-400"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="bg-zinc-800/50 border-zinc-700 card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-emerald-400">{project.title}</h3>
                    <p className="text-gray-300 mb-4 h-24 overflow-y-auto">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-end">
                      <Button asChild variant="ghost" size="sm" className="text-emerald-400">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          <span>View Project</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
