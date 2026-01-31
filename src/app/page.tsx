import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BrainCircuit, Code, Rocket, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Asociación",
    description: "Fomentamos una comunidad de aprendizaje, colaboración y desarrollo a través de eventos, formaciones y networking.",
    link: "/asociacion",
    icon: <Users className="w-10 h-10 text-primary" />,
    image: PlaceHolderImages.find(img => img.id === 'pillar-asociacion'),
  },
  {
    title: "Laboratorio",
    description: "Nuestro espacio de I+D donde experimentamos con nuevas tecnologías y damos vida a nuestros propios productos innovadores.",
    link: "/laboratorio",
    icon: <Rocket className="w-10 h-10 text-primary" />,
    image: PlaceHolderImages.find(img => img.id === 'pillar-laboratorio'),
  },
  {
    title: "Servicios",
    description: "Ofrecemos soluciones tecnológicas a medida para empresas, desde automatizaciones y IA hasta desarrollo web y consultoría.",
    link: "/servicios",
    icon: <Code className="w-10 h-10 text-primary" />,
    image: PlaceHolderImages.find(img => img.id === 'pillar-servicios'),
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-home');

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[85vh] flex items-center justify-center text-center">
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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 p-4 max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-headline">
            Innovación y Conocimiento<br />para un Futuro Tecnológico
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            GaiaLabs es un hub de conocimiento y desarrollo donde expertos colaboran para crear el futuro de la tecnología.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/servicios">Nuestros Servicios</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contacto">Contacta Ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="pilares" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestros Pilares</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tres líneas de acción que definen nuestro ecosistema tecnológico.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                {pillar.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={pillar.image.imageUrl}
                      alt={pillar.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={pillar.image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl font-headline">
                    {pillar.icon}
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{pillar.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0">
                    <Link href={pillar.link}>Saber más <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about-us" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Quiénes Somos</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Somos un colectivo de apasionados por la tecnología, la innovación y el conocimiento. En GaiaLabs, unimos nuestras diversas habilidades en desarrollo, inteligencia artificial y gestión de proyectos para crear soluciones de alto impacto. Creemos en el poder de la comunidad para impulsar el progreso y construir un futuro más inteligente y conectado.
          </p>
        </div>
      </section>

      <section id="asociacion-cta" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Únete a la Asociación Tecnológica</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Conecta con otros profesionales, participa en workshops exclusivos, y colabora en proyectos que marcan la diferencia. Nuestra asociación es el corazón de la comunidad GaiaLabs.
              </p>
            </div>
            <Button asChild size="lg" className="flex-shrink-0">
              <Link href="/asociacion">Explorar Comunidad <Users className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
