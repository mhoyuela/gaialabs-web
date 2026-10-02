import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Calendar, Group, Lightbulb, Target, Trophy, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Formaciones y Workshops",
    description:
      "Cursos intensivos y talleres prácticos sobre las últimas tecnologías. Aprende sobre IA, desarrollo blockchain, ciberseguridad y más, de la mano de expertos de la industria.",
    icon: <Lightbulb className="w-7 h-7 text-primary" />,
    date: "Mensuales",
    href: "/asociacion/formaciones",
  },
  {
    title: "Hackathones y Competiciones",
    description:
      "Eventos de fin de semana para resolver retos reales, desarrollar prototipos y competir por premios. Una oportunidad única para innovar y demostrar tu talento.",
    icon: <Trophy className="w-7 h-7 text-primary" />,
    date: "Trimestrales",
    href: "/asociacion/hackathon",
  },
  {
    title: "Networking y Meetups",
    description:
      "Conecta con otros miembros de la comunidad, comparte ideas y encuentra colaboradores para tus próximos proyectos en nuestros encuentros informales.",
    icon: <Users className="w-7 h-7 text-primary" />,
    date: "Semanales",
  },
];

const values = [
  {
    title: "Misión",
    description:
      "Democratizar el acceso al conocimiento tecnológico y fomentar un ecosistema de innovación abierta y colaborativa.",
    icon: <Target className="w-9 h-9 text-primary" />,
  },
  {
    title: "Visión",
    description:
      "Ser el referente de comunidad tecnológica donde el talento se une para crear soluciones que impacten positivamente en la sociedad.",
    icon: <Group className="w-9 h-9 text-primary" />,
  },
  {
    title: "Valores",
    description:
      "Colaboración, aprendizaje continuo, curiosidad, excelencia y un fuerte compromiso con la ética tecnológica.",
    icon: <Lightbulb className="w-9 h-9 text-primary" />,
  },
];

export default function AsociacionPage() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[55vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/Gemini_Generated_Image_rxa9tyrxa9tyrxa9.png"
          alt="Comunidad, aprendizaje y valores"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/45 to-slate-950/20" />
        <div className="relative z-10 p-4 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Comunidad, aprendizaje y valores
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            El corazón de GaiaLabs: un espacio para crecer, conectar y construir juntos.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestras actividades</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Eventos diseñados para potenciar tus habilidades y tu red de contactos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.title} className="card-hover flex flex-col text-center items-center border-border">
                <CardHeader>
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                    {event.icon}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="mt-2 text-base">{event.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-4">
                  {event.href && (
                    <Button asChild variant="link" className="text-primary font-semibold p-0 h-auto">
                      <Link href={event.href} className="flex items-center">
                        Saber más <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestro ADN</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Los principios que guían cada uno de nuestros pasos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card-hover bg-card border border-border p-8 rounded-xl text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-2xl font-bold text-primary">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
