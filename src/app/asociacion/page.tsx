import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, Group, Lightbulb, Target, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Formaciones y Workshops",
    description: "Cursos intensivos y talleres prácticos sobre las últimas tecnologías. Aprende sobre IA, desarrollo blockchain, ciberseguridad y más, de la mano de expertos de la industria.",
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    date: "Mensuales"
  },
  {
    title: "Hackathones y Competiciones",
    description: "Eventos de fin de semana para resolver retos reales, desarrollar prototipos y competir por premios. Una oportunidad única para innovar y demostrar tu talento.",
    icon: <Trophy className="w-8 h-8 text-primary" />,
    date: "Trimestrales"
  },
  {
    title: "Networking y Meetups",
    description: "Conecta con otros miembros de la comunidad, comparte ideas y encuentra colaboradores para tus próximos proyectos en nuestros encuentros informales.",
    icon: <Users className="w-8 h-8 text-primary" />,
    date: "Semanales"
  },
];

const values = [
  {
    title: "Misión",
    description: "Democratizar el acceso al conocimiento tecnológico avanzado y fomentar un ecosistema de innovación abierta y colaborativa.",
    icon: <Target className="w-10 h-10 text-primary" />
  },
  {
    title: "Visión",
    description: "Ser el referente de comunidad tecnológica donde el talento se une para crear soluciones que impacten positivamente en la sociedad.",
    icon: <Group className="w-10 h-10 text-primary" />
  },
  {
    title: "Valores",
    description: "Colaboración, aprendizaje continuo, curiosidad, excelencia y un fuerte compromiso con la ética tecnológica.",
    icon: <Lightbulb className="w-10 h-10 text-primary" />
  }
];

export default function AsociacionPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-asociacion');
  
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4 max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-headline">
            Comunidad, Aprendizaje y Valores
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            El corazón de GaiaLabs: un espacio para crecer, conectar y construir juntos.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestras Actividades</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Eventos diseñados para potenciar tus habilidades y tu red de contactos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.title} className="flex flex-col text-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-primary/10 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center">
                    {event.icon}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="text-xl font-headline">{event.title}</CardTitle>
                  <CardDescription className="mt-2">{event.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col items-center">
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

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestro ADN</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada uno de nuestros pasos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card p-8 rounded-lg shadow-sm text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold font-headline text-primary">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
