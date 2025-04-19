"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ParticlesBackground from "@/components/particles-background"
import { cn } from "@/lib/utils"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      <div className="fixed top-0 left-0 w-1 h-full z-50 bg-zinc-800">
        <motion.div
          className="w-full bg-gradient-to-b from-emerald-400 via-teal-500 to-cyan-500"
          style={{ height: progressHeight }}
        />
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000",
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100",
        )}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500"
          >
            Jenin.dev
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 mt-4 mx-auto"
            style={{ maxWidth: "200px" }}
          />
        </div>
      </div>

      <div ref={mainRef} className="relative bg-[#0a0a0a] text-white overflow-hidden">
        <ParticlesBackground />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
