"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Cloud, Shield, Terminal, Cpu } from "lucide-react"

const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Code className="h-6 w-6 text-emerald-400" />,
    skills: [
      { name: "Rust", level: 90 },
      { name: "Go", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C++", level: 80 },
      { name: "C", level: 85 },
      { name: "PHP", level: 65 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    name: "Blockchain",
    icon: <Cpu className="h-6 w-6 text-emerald-400" />,
    skills: [
      { name: "Blockchain Fundamentals", level: 90 },
      { name: "Solana", level: 85 },
      { name: "Sui", level: 80 },
      { name: "Smart Contracts", level: 85 },
    ],
  },
  {
    name: "Networking & Security",
    icon: <Shield className="h-6 w-6 text-emerald-400" />,
    skills: [
      { name: "Networking Principles", level: 85 },
      { name: "Network Security", level: 80 },
      { name: "Internet Protocol (IP)", level: 90 },
      { name: "DNS", level: 85 },
      { name: "TCP/IP", level: 85 },
      { name: "HTTP", level: 80 },
      { name: "Firewalls", level: 75 },
      { name: "Cryptography", level: 85 },
    ],
  },
  {
    name: "Web Development",
    icon: <Globe className="h-6 w-6 text-emerald-400" />,
    skills: [
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "JavaScript", level: 80 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Tailwind", level: 80 },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6 text-emerald-400" />,
    skills: [
      { name: "Cloud Concepts", level: 75 },
      { name: "Azure (Learning)", level: 65 },
      { name: "DevOps Principles", level: 70 },
    ],
  },
  {
    name: "Databases",
    icon: <Database className="h-6 w-6 text-emerald-400" />,
    skills: [
      { name: "Database Management Systems", level: 80 },
      { name: "Relational Databases", level: 85 },
    ],
  },
  {
    name: "Operating Systems & Tools",
    icon: <Terminal className="h-6 w-6 text-emerald-400" />,
    skills: [
      { name: "Linux (Ubuntu, Debian)", level: 90 },
      { name: "Windows", level: 85 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Fyne UI", level: 80 },
      { name: "FFmpeg", level: 75 },
      { name: "Command Line Interface", level: 90 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Problem Solving", level: 90 },
    ],
  },
]

export default function Skills() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-zinc-800/50 border-zinc-700 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-emerald-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                        <div
                          className="skill-bar"
                          style={{
                            width: animate ? `${skill.level}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
