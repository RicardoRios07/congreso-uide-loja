"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
// Los iconos CalendarDays, MapPin, Sparkles ya no son necesarios aquí

export default function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const heroBackgroundImage = "/banner.jpeg" // Asegúrate que esta ruta sea correcta

  return (
    <section
      id="hero"
      className="relative text-white py-28 md:py-80 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Overlay para asegurar que la imagen no sea demasiado brillante si los botones no tienen fondo */}
      <div className="absolute inset-0 bg-black/20"></div> {/* Overlay más sutil */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-end">
        {/* Contenedor para los botones, alineado a la derecha */}
        <div className="flex flex-col sm:flex-row gap-4">
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
            className="text-white border-white/80 hover:bg-primary-blue bg-black/30 backdrop-blur-sm font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
