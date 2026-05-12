import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BrainCircuit, Code, Rocket, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Asociación",
    description: "Fomentamos una comunidad de aprendizaje, colaboración y desarrollo a través de hackathones, formaciones y talleres.",
    link: "/asociacion",
    icon: <Users className="w-10 h-10 text-primary" />,
    image: {
      imageUrl: "/images/DSC09099.JPG",
      description: "Formaciones y talleres de la asociación",
      imageHint: "Foto de formaciones y talleres tecnológicos"
    },
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
    description: "Ofrecemos soluciones tecnológicas a medida para empresas, desde automatizaciones e IA hasta desarrollo web y consultoría.",
    link: "/servicios",
    icon: <Code className="w-10 h-10 text-primary" />,
    image: PlaceHolderImages.find(img => img.id === 'pillar-servicios'),
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-home');

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/beautiful-natural-landscape-mountain.jpg"
          alt="Fondo GaiaLabs"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 p-4 max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-headline drop-shadow-lg">
            Innovación y <span className="text-primary">Conocimiento</span><br />
            para un Futuro Tecnológico
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-slate-100 max-w-2xl mx-auto drop-shadow-md">
            GaiaLabs es un hub de conocimiento y desarrollo donde expertos colaboran para crear el futuro de la tecnología.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white border-none px-8">
              <Link href="/laboratorio">
                Explorar Proyectos
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 border-none px-8">
              <Link href="/servicios">
                Saber más
              </Link>
            </Button>
          </div>
        </div>

        {/* --- AQUÍ ESTÁ LA FLECHA --- */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
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
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-black">Quiénes Somos</h2>
          <p className="mt-6 text-lg text-black">
            Somos un equipo multidisplinar especializados en la innovación tecnológica, en su difusión y en la concienciación de un progreso ético. Creemos en el poder de la comunidad para impulsar el progreso y construir un futuro más inteligente y conectado.
          </p>
        </div>
      </section>

      <section id="asociacion-cta" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Entérate de nuestras formaciones o talleres</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Conoce las distintas formaciones y talleres tecnológicos enfocados en distintos colectivos sociales.
              </p>
            </div>
            <Button asChild size="lg" className="flex-shrink-0 bg-primary"> 
              <Link href="/asociacion" className="flex items-center">
                {/* Envolvemos el texto en un span con el estilo forzado */}
                <span style={{ color: '#ffffff' }}>Explorar Asociación</span> 
                
                {/* Hacemos lo mismo con el icono */}
                <Users className="ml-2" style={{ color: '#ffffff' }} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
