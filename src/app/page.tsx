import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Rocket, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Asociación",
    description:
      "Fomentamos una comunidad de aprendizaje, colaboración y desarrollo a través de hackathones, formaciones y talleres.",
    link: "/asociacion",
    icon: <Users className="w-7 h-7 text-primary" />,
    image: "/images/DSC09099.JPG",
  },
  {
    title: "Laboratorio",
    description:
      "Nuestro espacio de I+D donde experimentamos con nuevas tecnologías y damos vida a nuestros propios productos innovadores.",
    link: "/laboratorio",
    icon: <Rocket className="w-7 h-7 text-primary" />,
    image: "/images/GaiaSense_canva_disp.jpg",
  },
  {
    title: "Servicios",
    description:
      "Ofrecemos soluciones tecnológicas a medida para empresas, desde automatizaciones e IA hasta desarrollo web y consultoría.",
    link: "/servicios",
    icon: <Code className="w-7 h-7 text-primary" />,
    image: "/images/hilly-countryside.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/beautiful-natural-landscape-mountain.jpg"
          alt="Fondo GaiaLabs"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Scrim: oscurece de abajo hacia arriba, deja respirar la parte alta de la foto */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/55 to-slate-950/20" />

        <div className="relative z-10 p-4 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Innovación y <span className="text-primary">conocimiento</span>
            <br />
            para un futuro tecnológico
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            GaiaLabs es un hub de conocimiento y desarrollo donde expertos colaboran
            para crear el futuro de la tecnología.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link href="/laboratorio">Explorar proyectos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 bg-white/5 border-white/40 text-white hover:bg-white hover:text-slate-900"
            >
              <Link href="/servicios">Saber más</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* PILARES */}
      <section id="pilares" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros pilares</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tres líneas de acción que definen nuestro ecosistema tecnológico.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="card-hover flex flex-col overflow-hidden border-border"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    {pillar.icon}
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{pillar.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 text-primary">
                    <Link href={pillar.link} className="flex items-center">
                      Saber más <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="about-us" className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">Quiénes somos</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Somos un equipo multidisciplinar especializado en la innovación tecnológica, en
            su difusión y en la concienciación de un progreso ético. Creemos en el poder de
            la comunidad para impulsar el progreso y construir un futuro más inteligente y
            conectado.
          </p>
        </div>
      </section>

      {/* CTA FORMACIONES */}
      <section id="asociacion-cta" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold">
                Entérate de nuestras formaciones o talleres
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Conoce las distintas formaciones y talleres tecnológicos enfocados en
                distintos colectivos sociales.
              </p>
            </div>
            <Button asChild size="lg" className="flex-shrink-0">
              <Link href="/asociacion" className="flex items-center">
                Explorar Asociación
                <Users className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
