import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Beaker, Bot, GitBranch, Rocket, TestTube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ownProjects = [
  {
    title: "Project Alpha",
    description: "Una plataforma de análisis de datos en tiempo real para el sector financiero, utilizando modelos de machine learning.",
    image: PlaceHolderImages.find(img => img.id === 'project-data-viz'),
    tags: ["IA", "Fintech", "Big Data"],
    status: "Completado"
  },
  {
    title: "Project Beta",
    description: "Un brazo robótico de bajo coste para automatización de tareas en pequeños talleres, controlado por una interfaz web.",
    image: PlaceHolderImages.find(img => img.id === 'project-robotics'),
    tags: ["Robótica", "IoT", "Hardware"],
    status: "Completado"
  },
];

const inProgressProjects = [
  { name: "Project Gamma", description: "Desarrollo de un framework para la creación rápida de agentes de IA conversacionales.", progress: 75 },
  { name: "Project Delta", description: "Plataforma de e-learning adaptativo basada en el rendimiento del estudiante.", progress: 40 },
  { name: "Project Epsilon", description: "Sistema de monitorización de cultivos con drones y análisis de imágenes.", progress: 60 },
];

export default function LaboratorioPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-laboratorio');
  const gaiaSenseImage = PlaceHolderImages.find(img => img.id === 'project-gaia-sense');

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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-headline">
            El Laboratorio
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Donde la experimentación y la curiosidad se convierten en productos del futuro.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Proyecto Estrella: Gaia Sense</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestra iniciativa más ambiciosa que redefine la interacción con el entorno digital.
            </p>
          </div>
          <Card className="grid md:grid-cols-2 overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Badge variant="default" className="w-fit mb-4 bg-accent text-accent-foreground">En Desarrollo</Badge>
              <h3 className="text-3xl font-bold font-headline">Gaia Sense</h3>
              <p className="mt-4 text-muted-foreground">
                Gaia Sense es un sistema de sensores inteligentes y una plataforma de IA que permite a las máquinas 'sentir' y reaccionar al mundo físico con una precisión sin precedentes. Desde la agricultura de precisión hasta la robótica autónoma, Gaia Sense está diseñado para ser el sistema nervioso de la próxima generación de tecnología inteligente.
              </p>
              <Button asChild className="mt-8 w-fit">
                <Link href="#">Explorar Documentación <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            {gaiaSenseImage && (
              <div className="relative min-h-[300px] md:h-full">
                <Image
                  src={gaiaSenseImage.imageUrl}
                  alt={gaiaSenseImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={gaiaSenseImage.imageHint}
                />
              </div>
            )}
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Proyectos Propios</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Una muestra de las innovaciones que hemos incubado en nuestro laboratorio.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ownProjects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {project.image && (
                  <div className="relative h-60 w-full">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={project.image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <Badge variant={project.status === 'Completado' ? 'default' : 'outline'}>{project.status}</Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Proyectos en Curso</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Un vistazo a lo que estamos construyendo ahora mismo.
            </p>
          </div>
          <div className="space-y-6">
            {inProgressProjects.map(project => (
              <Card key={project.name}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-lg">{project.name}</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-1/3">
                      <div className="w-full bg-secondary rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                      <span className="font-semibold text-sm">{project.progress}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
