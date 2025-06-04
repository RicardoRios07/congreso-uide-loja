import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react" // Assuming UIDE has these

export default function Footer({ logoUrl = "/placeholder.svg?width=100&height=33" }: { logoUrl?: string }) {
  const currentYear = new Date().getFullYear()
  const contactEmail = "anordonezle@uide.edu.ec"

  return (
    <footer className="bg-primary-blue text-gray-200 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="#hero" className="flex items-center gap-2 mb-3">
              <Image
                src="https://i.ibb.co/d4DqjpM6/logo-uide-removebg-preview.png"
                alt="UIDE Loja Logo"
                width={200}
                height={66}
                className="h-8 w-auto filter brightness-0 invert"
              />
              <span className="font-semibold text-xl text-white">CONEXIONES 360</span>
            </Link>
            <p className="text-sm text-gray-300">
              II Congreso Internacional Interdisciplinario de Investigación en Ciencias.
            </p>
            <p className="text-sm text-gray-300 mt-1">UIDE Sede Loja</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-yellow-300 transition-colors">
                  Sobre el Congreso
                </a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-yellow-300 transition-colors">
                  Agenda
                </a>
              </li>
              <li>
                <a href="#call-for-abstracts" className="hover:text-yellow-300 transition-colors">
                  Convocatoria
                </a>
              </li>
              <li>
                <a href="#location-contact" className="hover:text-yellow-300 transition-colors">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contacto</h3>
            <p className="text-sm text-gray-300 mb-1">UIDE Campus Lojaa</p>
            <p className="text-sm text-gray-300 mb-3">Parroquia El Valle, sector Jipiro</p>
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-2 text-sm hover:text-yellow-300 transition-colors"
            >
              <Mail className="h-4 w-4" /> {contactEmail}
            </a>
            {/* Placeholder for social media icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook UIDE"
                className="text-gray-300 hover:text-yellow-300 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter UIDE"
                className="text-gray-300 hover:text-yellow-300 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn UIDE"
                className="text-gray-300 hover:text-yellow-300 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Universidad Internacional del Ecuador (UIDE) Sede Loja. Todos los derechos reservados.
          </p>
          <p className="mt-1">Diseñado con fines académicos.</p>
        </div>
      </div>
    </footer>
  )
}
