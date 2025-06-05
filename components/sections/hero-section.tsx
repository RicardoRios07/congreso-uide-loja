"use client"

import { useEffect, useState } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [bgImage, setBgImage] = useState("/banner1.jpeg")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBgImage("/banner2.jpeg") 
      } else {
        setBgImage("/banner1.jpeg") 
      }
    }

    handleResize() 
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative text-white pt-28 md:pt-36 flex items-end md:items-center justify-center"
      style={{
        height: "90vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center md:justify-end">
        <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-0">
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-primary-yellow text-primary-blue font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a href="#call-for-abstracts" onClick={(e) => scrollToSection(e, "#call-for-abstracts")}>
              Inscríbete Ahora ($25)
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-white border-white/80 hover:bg-primary-blue hover:text-white bg-black/30 backdrop-blur-sm font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a href="#agenda" onClick={(e) => scrollToSection(e, "#agenda")}>
              Ver Agenda del Congreso
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
