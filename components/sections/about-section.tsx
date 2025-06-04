import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Presentation } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary-blue dark:text-white mb-12">
          Sobre el Congreso
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg dark:bg-slate-850">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-magenta dark:text-pink-400">
                <Target className="h-6 w-6" />
                Objetivos del Congreso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                Fomentar la interdisciplinariedad y promover el intercambio de conocimientos y perspectivas entre
                investigadores de diferentes disciplinas para fomentar la comprensión integral de los problemas
                complejos de la contemporaneidad.
              </p>
              <p>
                Impulsar la generación de conocimiento interdisciplinario que contribuya al desarrollo científico y
                social a través de la divulgación de investigaciones teóricas y aplicadas.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg dark:bg-slate-850">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-blue dark:text-sky-400">
                  <Users className="h-6 w-6" />
                  Dirigido a
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Académicos, investigadores, docentes y estudiantes tanto de grado como de posgrado, que tengan interés
                  en presentar sus investigaciones teóricas y aplicadas.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg dark:bg-slate-850">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-blue dark:text-sky-400">
                  <Presentation className="h-6 w-6" />
                  Modalidad
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>El evento será híbrido y se desarrollará en el Campus de la UIDE de la ciudad de Loja.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
