import { Lightbulb, Users, Globe } from "lucide-react"

export default function ThemeDetailsSection() {
  return (
    <section id="theme-details" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Lightbulb className="h-12 w-12 mx-auto mb-4 text-primary-magenta" />
          <h2 className="text-3xl font-bold tracking-tight text-primary-blue dark:text-white">
            Tema Central: Ciencia y Sociedad
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 space-y-4 text-lg leading-relaxed">
          <p>
            La relación entre Ciencia y Sociedad es esencial para comprender cómo el conocimiento científico impulsa el
            desarrollo humano, económico y ambiental en el mundo contemporáneo. Como motor del progreso, la ciencia no
            solo genera innovaciones tecnológicas, sino que también aporta soluciones a desafíos globales como el cambio
            climático, la salud pública, la seguridad alimentaria y la desigualdad social, todo ello enfrentando
            importantes retos e implicaciones éticas y sociales.
          </p>
          <p>
            La aplicación del método científico permite tomar decisiones fundamentadas en evidencia, contribuyendo al
            diseño de políticas públicas más efectivas y sostenibles. No obstante, para que la ciencia se integre
            plenamente en la sociedad, es necesario un diálogo constante entre investigadores, ciudadanos y tomadores de
            decisiones, promoviendo la apropiación social del conocimiento y fomentando una cultura científica crítica.
          </p>
          <p>
            En este contexto, la interdisciplinariedad juega un papel clave, articulando diversas áreas del saber para
            abordar los desafíos del siglo XXI y lograr un equilibrio entre innovación tecnológica, sostenibilidad
            ambiental y desarrollo económico inclusivo.
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <Users className="h-10 w-10 mb-2 text-primary-blue dark:text-sky-400" />
            <h3 className="font-semibold text-lg text-primary-blue dark:text-white">Diálogo Constante</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Investigadores, ciudadanos y tomadores de decisiones.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Globe className="h-10 w-10 mb-2 text-primary-magenta dark:text-pink-400" />
            <h3 className="font-semibold text-lg text-primary-magenta dark:text-white">Impacto Global</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Soluciones a desafíos como cambio climático y salud pública.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
