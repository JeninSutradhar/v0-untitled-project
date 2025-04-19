"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseDown = () => setCursorVariant("click")
    const mouseUp = () => setCursorVariant("default")
    const mouseEnterLink = () => setCursorVariant("hover")
    const mouseLeaveLink = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousedown", mouseDown)
    window.addEventListener("mouseup", mouseUp)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", mouseEnterLink)
      link.addEventListener("mouseleave", mouseLeaveLink)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousedown", mouseDown)
      window.removeEventListener("mouseup", mouseUp)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", mouseEnterLink)
        link.removeEventListener("mouseleave", mouseLeaveLink)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 32,
      width: 32,
      opacity: 0.5,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 64,
      width: 64,
      opacity: 0.8,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
    click: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 16,
      width: 16,
      opacity: 0.8,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      },
    },
  }

  const dotVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 6,
      width: 6,
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 1000,
        damping: 30,
      },
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 0,
      width: 0,
      opacity: 0,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 1000,
        damping: 30,
      },
    },
    click: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 0,
      width: 0,
      opacity: 0,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 1000,
        damping: 30,
      },
    },
  }

  return (
    <>
      <motion.div className="custom-cursor cursor-ring hidden md:block" variants={variants} animate={cursorVariant} />
      <motion.div className="custom-cursor cursor-dot hidden md:block" variants={dotVariants} animate={cursorVariant} />
    </>
  )
}
