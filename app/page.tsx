import Navbar from "@/components/layout/navbar"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ThemeDetailsSection from "@/components/sections/theme-details-section"
import AgendaSection from "@/components/sections/agenda-section"
import ThematicTablesSection from "@/components/sections/thematic-tables-section"
import CallForAbstractsSection from "@/components/sections/call-for-abstracts-section"
import LocationContactSection from "@/components/sections/location-contact-section"
import Footer from "@/components/layout/footer"

// Debes reemplazar estos placeholders con las URLs reales
const UIDE_LOGO_URL = "https://i.ibb.co/dJGqCNv5/logo-uide1.png" // Ejemplo: "//uide-logo.png"
const KUSHKI_PAYMENT_LINK = "https://kshk.co/uide-validacion/TZ6aSVqs-/checkout" // Reemplaza con tu link de Kushki

export default function LandingPage() {
  return (
    <>
      <Navbar logoUrl={UIDE_LOGO_URL} />
      <main className="scroll-smooth">
        <HeroSection />
        <AboutSection />
        <ThemeDetailsSection />
        <AgendaSection />
        <ThematicTablesSection />
        <CallForAbstractsSection kushkiPaymentLink={KUSHKI_PAYMENT_LINK} />
        <LocationContactSection />
      </main>
      <Footer logoUrl={UIDE_LOGO_URL} />
    </>
  )
}
