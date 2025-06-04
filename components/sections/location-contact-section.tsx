import { MapPin, Mail, School, ExternalLink, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LocationContactSection() {
  const uideLojaAddress =
    "Parroquia El Valle, sector Jipiro, Calle Agustín Carrión y Av. Salvador Bustamante Celi, detrás de Solca."
  const contactEmail = "anordonezle@uide.edu.ec"
  // Placeholder para un número de teléfono, puedes añadirlo si es necesario
  // const contactPhone = "+593 X XXX XXXX"
  const googleMapsLink = `https://maps.app.goo.gl/LhyLYQjKD9TVUF1X8`

  return (
    <section id="location-contact" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-blue dark:text-white">
            Ubicación y Contacto
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Te esperamos en nuestro campus y estamos listos para responder todas tus dudas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Location Card */}
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 dark:bg-slate-850 flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-full bg-primary-blue/10 dark:bg-primary-blue/20">
                  <MapPin className="h-6 w-6 text-primary-blue dark:text-sky-400" />
                </div>
                <CardTitle className="text-2xl text-primary-blue dark:text-sky-300">Lugar del Evento</CardTitle>
              </div>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                II Congreso Internacional Interdisciplinario de Investigación en Ciencias.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 p-3 rounded-md bg-slate-50 dark:bg-slate-800">
                <School className="h-5 w-5 mt-1 text-primary-magenta flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">UIDE Campus Loja:</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{uideLojaAddress}</p>
                </div>
              </div>
              <div className="mt-4 aspect-video rounded-lg overflow-hidden border dark:border-slate-700">
                <img
                  src="https://www.uide.edu.ec/wp-content/uploads/2024/09/campus-loja.jpg"
                  alt="Mapa UIDE Loja"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white">
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Ver en Google Maps
                </a>
              </Button>
            </div>
          </Card>

          {/* Contact Card */}
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 dark:bg-slate-850 flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-full bg-primary-magenta/10 dark:bg-primary-magenta/20">
                  <Mail className="h-6 w-6 text-primary-magenta dark:text-pink-400" />
                </div>
                <CardTitle className="text-2xl text-primary-magenta dark:text-pink-300">
                  Información de Contacto
                </CardTitle>
              </div>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Para consultas sobre el congreso, resúmenes o inscripciones.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <div className="flex items-center gap-3 p-3 rounded-md bg-slate-50 dark:bg-slate-800">
                <Mail className="h-5 w-5 text-primary-blue flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Correo Electrónico:</p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm text-primary-blue hover:underline dark:text-sky-400"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
              {/* Opcional: Añadir teléfono si es necesario
              <div className="flex items-center gap-3 p-3 rounded-md bg-slate-50 dark:bg-slate-800">
                <Phone className="h-5 w-5 text-primary-blue flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Teléfono:</p>
                  <a href={`tel:${contactPhone}`} className="text-sm text-primary-blue hover:underline dark:text-sky-400">
                    {contactPhone}
                  </a>
                </div>
              </div>
              */}
              <div className="flex items-start gap-3 p-3 rounded-md bg-slate-50 dark:bg-slate-800">
                <Building className="h-5 w-5 mt-1 text-primary-blue flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Organiza:</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Universidad Internacional del Ecuador (UIDE) - Sede Loja
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 pt-4 border-t dark:border-slate-700">
                Estaremos encantados de ayudarte con tus consultas. ¡Esperamos tu mensaje!
              </p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild className="w-full bg-primary-magenta hover:bg-primary-magenta/90 text-white">
                <a href={`mailto:${contactEmail}`}>
                  <Mail className="mr-2 h-4 w-4" /> Enviar un Correo
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
