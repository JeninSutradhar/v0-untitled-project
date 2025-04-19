"use client"

import { motion } from "framer-motion"
import { Code2, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[-1]" />

      <div className="container mx-auto px-4">
        <div className="glass-card rounded-3xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-6 md:mb-0"
            >
              <div className="relative mr-3">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-full blur-md opacity-50"></div>
                <Code2 className="h-8 w-8 text-white relative z-10" />
              </div>
              <span className="font-bold text-xl tracking-tight">Jenin.dev</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <p className="text-gray-400 text-sm">
                © {currentYear} All rights reserved. Made with{" "}
                <Heart className="h-3 w-3 text-emerald-400 inline animate-pulse" /> by Jenin Sutradhar
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
