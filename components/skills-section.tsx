"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
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

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills & Expertise</h2>
        </motion.div>

        <div className="horizontal-scroll-container pb-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="horizontal-scroll-item w-[85vw] md:w-[600px] flex-shrink-0 mx-4"
            >
              <div className="glass-card rounded-3xl p-8 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.3 + skillIndex * 0.05 }}
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span
                          className={`text-sm font-medium transition-colors duration-300 ${
                            hoveredSkill === `${categoryIndex}-${skillIndex}` ? "gradient-text" : "text-gray-400"
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.05, ease: "easeOut" }}
                          className="skill-bar"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {skillCategories.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-white/20" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
