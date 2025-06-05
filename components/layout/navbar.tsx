"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { useState, useEffect } from "react"

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre el Congreso", href: "#about" },
  { label: "Tema Central", href: "#theme-details" },
  { label: "Agenda", href: "#agenda" },
  { label: "Mesas Temáticas", href: "#thematic-tables" },
  { label: "Convocatoria", href: "#call-for-abstracts" },
  { label: "Ubicación", href: "#location-contact" },
]

export default function Navbar({ logoUrl = "/uide-logo-placeholder.png" }: { logoUrl?: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) setActiveSection(`#${id}`)
          }
        })
      },
      {
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.4,
      }
    )

    navItems.forEach(({ href }) => {
      const id = href.replace("#", "")
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const section = document.querySelector(href)
    if (section) section.scrollIntoView({ behavior: "smooth" })
    if (mobileMenuOpen) setMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? "bg-primary-blue dark:bg-slate-950 shadow-lg h-20" : "bg-transparent h-20"}`}>
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6">
        <Link href="#hero" className="flex items-center gap-2 group" onClick={(e) => scrollToSection(e, "#hero")}>
          <Image
            src={logoUrl}
            alt="UIDE Loja Logo"
            width={isScrolled ? 100 : 120}
            height={isScrolled ? 33 : 40}
            className="h-auto transition-all duration-300 filter brightness-0 invert"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 group
                ${item.href === activeSection
                  ? "text-primary-yellow dark:text-primary-magenta"
                  : isScrolled
                  ? "text-white hover:text-primary-yellow dark:text-slate-300 dark:hover:text-primary-magenta"
                  : "text-slate-200 hover:text-white"
                }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                  transition-all duration-300 ease-out group-hover:w-3/4
                  ${item.href === activeSection
                    ? "w-3/4 bg-primary-yellow dark:bg-primary-magenta"
                    : isScrolled
                    ? "bg-primary-blue dark:bg-primary-magenta"
                    : "bg-white"
                  }`}
              />
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="ml-2 bg-primary-magenta hover:bg-primary-magenta/90 text-white transition-all duration-300 ease-in-out"
          >
            <a href="#call-for-abstracts" onClick={(e) => scrollToSection(e, "#call-for-abstracts")}>Inscríbete</a>
          </Button>
        </nav>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden transition-colors duration-300 ${isScrolled ? "bg-primary-blue text-white hover:bg-white/10 dark:hover:bg-slate-800" : "bg-transparent text-white hover:bg-white/10"}`}
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-full max-w-xs bg-white dark:bg-slate-950 p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b dark:border-slate-800">
                <Link href="#hero" className="flex items-center gap-2" onClick={(e) => scrollToSection(e, "#hero")}>
                  <Image
                    src={logoUrl}
                    alt="UIDE Loja Logo"
                    width={90}
                    height={33}
                    className="h-8 w-auto"
                  />
                  <span className="font-semibold text-primary-blue dark:text-white">CONEXIONES 360</span>
                </Link>
              </div>
              <nav className="flex-grow p-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`block rounded-md px-3 py-3 text-base font-medium transition-colors
                      ${item.href === activeSection
                        ? "text-primary-blue dark:text-primary-magenta"
                        : "text-slate-700 hover:bg-slate-100 hover:text-primary-blue dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-primary-magenta"}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="p-6 mt-auto border-t dark:border-slate-800">
                <Button asChild size="lg" className="bg-primary-magenta hover:bg-primary-magenta/90 text-white w-full">
                  <a href="#call-for-abstracts" onClick={(e) => scrollToSection(e, "#call-for-abstracts")}>Inscríbete</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
