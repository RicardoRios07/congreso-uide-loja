"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { FileText, Send, CalendarCheck2, DollarSign, ExternalLink, Info, Copy } from "lucide-react"

const importantDates = [
  { date: "5 de Junio de 2025", event: "Lanzamiento del congreso (Convocatoria envío de resúmenes)" },
  { date: "31 de Julio de 2025", event: "Recepción de resúmenes" },
  { date: "19 de Septiembre de 2025", event: "Comunicación de aceptación de resúmenes" },
  { date: "6 y 7 de Noviembre de 2025", event: "Congreso" },
]

export default function CallForAbstractsSection({ kushkiPaymentLink = "#" }: { kushkiPaymentLink?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleContinueToPayment = () => {
    // setIsModalOpen(false) // Cierra el modal
    window.open(kushkiPaymentLink, "_blank", "noopener,noreferrer") // Abre el link de Kushki
  }

  const emailAddress = "marmijos@uide.edu.ec"
  const emailSubject = "PAGO CONGRESO CONEXIONES 360 - NOMBRES COMPLETOS - CÉDULA"

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // Opcional: mostrar un toast de "Copiado!"
      alert("¡Copiado al portapapeles!")
    } catch (err) {
      console.error("Error al copiar al portapapeles: ", err)
      alert("Error al copiar. Por favor, copia manualmente.")
    }
  }

  return (
    <section
      id="call-for-abstracts"
      className="py-16 md:py-24 bg-primary-magenta dark:bg-pink-900 dark:from-slate-800 dark:to-slate-850"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-white dark:text-white mb-12">
          Convocatoria / Call for Abstracts
        </h2>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <Card className="lg:col-span-2 shadow-xl dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-magenta dark:text-white">
                <FileText className="h-6 w-6" />
                Presentación de Resúmenes
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                Envía tu investigación para participar en CONEXIONES 360.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Se recibirán resúmenes de 600 palabras en el formato especificado. Los resúmenes que sean seleccionados
                mediante una evaluación por pares se presentarán de forma oral durante el evento.
              </p>
              <p>
                Los resúmenes que se presenten en el congreso se publicarán en un{" "}
                <span className="font-semibold text-primary-blue dark:text-sky-300">LIBRO DE ACTAS</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button asChild className="bg-primary-blue hover:bg-primary-blue/90 text-white">
                  <a
                    href="https://docs.google.com/document/d/1_olcX2bobX4rz_wHih6WWr2HVVXFtvI8/edit?usp=sharing&ouid=109829677489600833644&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-4 w-4" /> Descargar Plantilla
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-magenta text-primary-magenta hover:bg-primary-magenta/10 hover:text-primary-magenta dark:border-pink-900 dark:text-white dark:bg-primary-magenta dark:hover:bg-pink-700"
                >
                  <a href="https://forms.gle/rc2nSgwEGNX6hzQk8" target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2 h-4 w-4" /> Enviar Resumen
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-xl dark:bg-slate-800 transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-blue dark:text-sky-400">
                  <DollarSign className="h-6 w-6" />
                  Costo de Inscripción
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-3xl font-bold text-primary-yellow">$25 USD</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Incluye certificado para ponentes y asistentes.
                </p>

                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-3 bg-primary-magenta hover:bg-primary-magenta/90 text-white">
                      <ExternalLink className="mr-2 h-4 w-4" /> Pagar Inscripción
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg md:max-w-xl max-h-[90vh] overflow-y-auto dark:bg-slate-800">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2 text-primary-blue dark:text-sky-300">
                        <Info className="h-6 w-6" />
                        Instrucciones Importantes Antes de Pagar
                      </DialogTitle>
                      <DialogDescription className="text-left pt-2 text-slate-600 dark:text-slate-400">
                        Por favor, lee atentamente estas instrucciones. Después de cerrar este aviso, serás redirigido a
                        la plataforma de pago Kushki.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4 text-sm text-slate-700 dark:text-slate-300">
                      <p className="font-semibold">1. Envío del Comprobante de Pago:</p>
                      <p>
                        Una vez realizado el pago en Kushki, debes enviar el comprobante emitido por la plataforma de
                        pagos al siguiente correo electrónico:
                        <br />
                        <strong className="text-primary-magenta dark:text-pink-900">{emailAddress}</strong>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(emailAddress)}
                          className="ml-2 h-7 px-2"
                        >
                          <Copy className="h-3 w-3 mr-1" /> Copiar
                        </Button>
                        <br />
                        (MARITZA ARMIJOS - ASISTENTE DE FACTURACIÓN SEDE LOJA)
                      </p>
                      <p>
                        Utiliza el siguiente formato en el <span className="font-semibold">asunto</span> del mensaje:
                        <br />
                        <code className="block bg-slate-100 dark:bg-slate-800 p-2 rounded-md my-1 text-xs break-all">
                          {emailSubject}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(emailSubject)}
                          className="ml-0 h-7 px-2"
                        >
                          <Copy className="h-3 w-3 mr-1" /> Copiar Asunto
                        </Button>
                      </p>

                      <p className="font-semibold mt-3">2. Datos Requeridos del Participante (incluir en el correo):</p>
                      <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Nombres completos</li>
                        <li>Cédula</li>
                        <li>Dirección</li>
                        <li>Teléfono</li>
                        <li>Correo electrónico</li>
                      </ul>

                      <p className="font-semibold mt-3">
                        3. Datos Requeridos para la Emisión de la Factura (incluir en el correo):
                      </p>
                      <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Nombres completos</li>
                        <li>Cédula</li>
                        <li>Dirección</li>
                        <li>Teléfono</li>
                        <li>Correo electrónico</li>
                      </ul>
                    </div>
                    <DialogFooter className="sm:justify-end gap-2">
                      <DialogClose asChild>
                        <Button type="button" variant="outline">
                          Cerrar
                        </Button>
                      </DialogClose>
                      <Button
                        type="button"
                        onClick={handleContinueToPayment}
                        className="bg-primary-blue hover:bg-primary-blue/90"
                      >
                        Entendido, continuar al Pago
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <p className="text-xs text-center text-gray-500 dark:text-gray-500 mt-1">
                  Serás redirigido a la pasarela de Kushki.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mt-12 shadow-xl dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary-blue dark:text-sky-400">
              <CalendarCheck2 className="h-6 w-6" />
              Fechas Importantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {importantDates.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-slate-50 dark:bg-slate-900 rounded-md "
                >
                  <span className="font-semibold text-primary-magenta dark:text-white">{item.date}</span>
                  <span className="text-gray-700 dark:text-gray-300">{item.event}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
