import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, UserCheck, Presentation, Mic, Users, Handshake } from "lucide-react" // Added more icons

const agendaData = {
  jueves: [
    {
      hora: "09H00",
      actividad: "Registro de participantes",
      participan: "",
      icon: <UserCheck className="h-5 w-5 text-primary-blue inline-block mr-2" />,
    },
    {
      hora: "09H30",
      actividad: "Acto de apertura",
      participan: "",
      icon: <Handshake className="h-5 w-5 text-primary-blue inline-block mr-2" />,
    },
    {
      hora: "MESA 1:",
      actividad: "Ciencia, Sociedad y Comportamiento",
      isHeader: true,
      icon: <Users className="h-5 w-5 text-primary-blue inline-block mr-2" />,
    },
    {
      hora: "10h00",
      actividad: "Conferencia Magistral",
      participan: "",
      icon: <Presentation className="h-5 w-5 text-primary-blue inline-block mr-2" />,
    },
    {
      hora: "11h00-12h30",
      actividad: "Ponencias mesa 1",
      participan: "",
      icon: <Mic className="h-5 w-5 text-primary-blue inline-block mr-2" />,
    },
    {
      hora: "MESA 2:",
      actividad: "Sostenibilidad y Desarrollo",
      isHeader: true,
      icon: <Users className="h-5 w-5 text-primary-blue inline-block mr-2" />,
    },
    {
      hora: "15h15",
      actividad: "Conferencia Magistral",
      participan: "",
      icon: <Presentation className="h-5 w-5 text-primary-blue inline-block mr-2" />,
    },
    {
      hora: "15h45-17h30",
      actividad: "Ponencias mesa 2",
      participan: "",
      icon: <Mic className="h-5 w-5 text-primary-blue inline-block mr-2" />,
    },
    {
      hora: "17H30",
      actividad: "Coffee Break",
      participan: "",
      icon: <Coffee className="h-5 w-5 text-primary-magenta inline-block mr-2" />,
    },
  ],
  viernes: [
    {
      hora: "MESA 3:",
      actividad: "Ciencia, Economía y Emprendimiento",
      isHeader: true,
      icon: <Users className="h-5 w-5 text-primary-blue inline-block mr-2" />,
    },
    {
      hora: "10h00",
      actividad: "Conferencia Magistral",
      participan: "",
      icon: <Presentation className="h-5 w-5 text-primary-blue inline-block mr-2" />,
    },
    {
      hora: "11h00-12h30",
      actividad: "Ponencias mesa 3",
      participan: "",
      icon: <Mic className="h-5 w-5 text-primary-blue inline-block mr-2" />,
    },
    {
      hora: "12H30",
      actividad: "Coffee Break",
      participan: "",
      icon: <Coffee className="h-5 w-5 text-primary-magenta inline-block mr-2" />,
    },
  ],
}

export default function AgendaSection() {
  return (
    <section id="agenda" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary-blue dark:text-white mb-12">
          Agenda del Congreso
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg dark:bg-slate-850">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary-magenta dark:text-pink-400">
                Jueves, 6 de Noviembre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {agendaData.jueves.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center ${item.isHeader ? "pt-4 font-bold text-primary-blue dark:text-sky-300 text-lg" : "border-b border-slate-200 dark:border-slate-700 pb-2"}`}
                  >
                    {!item.isHeader && (
                      <span className="w-24 font-medium text-gray-700 dark:text-gray-300 flex-shrink-0">
                        {item.hora}
                      </span>
                    )}
                    <span className="flex-1 text-gray-600 dark:text-gray-400 flex items-center">
                      {item.icon}
                      {item.actividad}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg dark:bg-slate-850">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary-magenta dark:text-pink-400">
                Viernes, 7 de Noviembre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {agendaData.viernes.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center ${item.isHeader ? "pt-4 font-bold text-primary-blue dark:text-sky-300 text-lg" : "border-b border-slate-200 dark:border-slate-700 pb-2"}`}
                  >
                    {!item.isHeader && (
                      <span className="w-24 font-medium text-gray-700 dark:text-gray-300 flex-shrink-0">
                        {item.hora}
                      </span>
                    )}
                    <span className="flex-1 text-gray-600 dark:text-gray-400 flex items-center">
                      {item.icon}
                      {item.actividad}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
