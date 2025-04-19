"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      title: "Blockchain Developer (Internship)",
      company: "Symbola",
      location: "Remote",
      period: "Mar 2025 – Present",
      description: [
        "Developing and testing smart contracts using Rust",
        "Working with blockchain technologies including Solana and Sui",
        "Collaborating with team members to implement blockchain solutions",
      ],
      tags: ["Blockchain", "Rust", "Solana", "Sui"],
    },
    {
      title: "Internship Trainee",
      company: "Techon Dater Systems Pvt Ltd",
      location: "Udaipur, Rajasthan",
      period: "Mar 2024 – Mar 2024 (1 month)",
      description: [
        "Assisted in development tasks using C programming and data structures",
        "Gained exposure to a professional software development environment and lifecycle",
        "Collaborated with team members on various projects",
      ],
      tags: ["C (Programming Language)", "Data Structures"],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Work Experience</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-line"></div>

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="ml-8 relative"
              >
                <div className="timeline-dot"></div>
                <div className="glass-card rounded-3xl p-8 transform hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h3 className="text-2xl font-bold gradient-text">{experience.title}</h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-400">{experience.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-300">
                      {experience.company} | {experience.location}
                    </span>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs glass bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
