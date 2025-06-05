import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Brain, Leaf, Briefcase } from "lucide-react"

const thematicTablesData = [
  {
    icon: <Brain className="h-6 w-6 text-primary-blue" />,
    title: "Mesa 1: Ciencia, Sociedad y Comportamiento",
    objective:
      "Explorar cómo las ciencias sociales y del comportamiento, como la psicología, el derecho, la comunicación y los estudios organizacionales, contribuyen a entender y resolver los desafíos contemporáneos en contextos sociales, educativos, institucionales y empresariales, incorporando también el impacto social de la tecnología.",
    topics: [
      "Psicología y comportamiento organizacional.",
      "Derecho, ciudadanía y cultura legal.",
      "Comunicación estratégica, marketing y percepción social.",
      "Cultura organizacional, liderazgo e innovación social.",
      "Educación emocional y salud mental en contextos educativos y laborales.",
      "Tecnología, ética y sociedad: impactos sociales y jurídicos de las tecnologías emergentes.",
      "Intersecciones entre ciencia, ética y transformación social.",
    ],
  },
  {
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    title: "Mesa 2: Sostenibilidad y Desarrollo",
    objective: "Analizar proyectos y estrategias que promuevan el desarrollo sostenible.",
    topics: [
      "Los ODS (Objetivos de Desarrollo Sostenible) en la educación e industria.",
      "Energías renovables y eficiencia energética.",
      "Gestión de recursos hídricos y residuos.",
      "Transformación urbana y vivienda sostenible.",
      "Dimensiones sociales y culturales de la sostenibilidad.",
    ],
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary-magenta" />,
    title: "Mesa 3: Ciencia, Economía y Emprendimiento",
    objective: "Relacionar la ciencia con el desarrollo económico y la generación de emprendimientos innovadores.",
    topics: [
      "Innovación en emprendimientos sociales y tecnológicos.",
      "Modelos económicos sostenibles y equitativos.",
      "Emprendimiento desde una perspectiva social y jurídica.",
      "Ética y responsabilidad social en modelos económicos.",
    ],
  },
]

export default function ThematicTablesSection() {
  return (
    <section id="thematic-tables" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary-blue dark:text-white mb-12">
          Mesas Temáticas
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          {thematicTablesData.map((table, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-primary-blue/20 dark:border-primary-magenta/30"
            >
              <AccordionTrigger className="text-lg font-semibold text-primary-blue dark:text-sky-300 hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  {table.icon}
                  {table.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 px-2 text-gray-700 dark:text-gray-300">
                <p className="font-medium mb-3 text-primary-magenta dark:text-pink-900">Objetivo:</p>
                <p className="mb-4">{table.objective}</p>
                <p className="font-medium mb-2 text-primary-magenta dark:text-pink-900">Temáticas:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  {table.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
