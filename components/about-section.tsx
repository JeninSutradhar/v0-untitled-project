"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Terminal, MapPin, Mail, Phone, Code, Cpu, Database, Globe } from "lucide-react"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                  <Terminal className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Hi! I am Jenin, a Software Developer with foundational experience in Go, C/C++, Java, and Python, now
                specializing in Rust and Blockchain development. Currently gaining hands-on experience as a Blockchain
                Developer Intern at Symbola.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                I possess skills in cloud concepts, network security, web development (React, TypeScript), and database
                management. I'm eager to leverage my growing expertise in Rust, Blockchain, and secure software
                development in challenging, fast-paced environments.
              </p>

              <p className="text-gray-300 leading-relaxed">
                My passion lies in building secure, efficient systems and exploring the cutting edge of blockchain
                technology. I'm constantly learning and improving my skills to stay at the forefront of this rapidly
                evolving field.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-8 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-8">Personal Info</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-gray-300">Rajasthan, India</span>
                </div>

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
                    <Phone className="h-5 w-5 text-emerald-400" />
                  </div>
                  <a href="tel:+919461942951" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    +91 9461942951
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-6">Current Focus</h4>
                <div className="grid grid-cols-2 gap-4">
                  <FocusItem icon={<Cpu />} text="Blockchain" />
                  <FocusItem icon={<Code />} text="Rust" />
                  <FocusItem icon={<Database />} text="Smart Contracts" />
                  <FocusItem icon={<Globe />} text="Web Development" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function FocusItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-2xl glass transform hover:translate-y-[-2px] transition-transform duration-300">
      <div className="text-emerald-400">{icon}</div>
      <span className="text-gray-300 text-sm">{text}</span>
    </div>
  )
}
