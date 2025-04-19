"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const certifications = [
    "Winner, Spandan 2k24 Hackathon (Carbon Emission Footprint Tracker)",
    "50 Days of Problem Solving (LeetCode)",
    "Cryptography and Network Security (Saylor Academy)",
    "Java (Basic) Certificate (HackerRank)",
    "Python Certificate (HackerRank)",
    "Operating Systems (Saylor Academy)",
    "Python Certificate (Scaler.com)",
    "Solana Developer (HackQuest)",
  ]

  return (
    <section id="education" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Education & Certifications</h2>
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
                  <GraduationCap className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold gradient-text">Diploma in Computer Science</h4>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-400">Current - 2nd year</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-3">Vidya Bhawan Polytechnic College, Udaipur, Rajasthan</p>
                  <p className="text-gray-400 text-sm">
                    Relevant Coursework: Data Structures and Algorithms, Operating Systems, Computer Networks
                  </p>
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
                  <Award className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold">Certifications & Achievements</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((certification, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="glass p-4 rounded-2xl"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 mt-2"></span>
                      <span className="text-gray-300 text-sm">{certification}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
