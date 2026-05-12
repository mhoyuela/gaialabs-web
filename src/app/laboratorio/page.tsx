import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LaboratorioPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-laboratorio');
  
  // Mantenemos esta variable por si necesitas usar su hint más adelante,
  // aunque la imagen de abajo ya la tienes en ruta directa.
  const gaiaSenseImage = PlaceHolderImages.find(img => img.id === 'project-gaia-sense');

  return (
    <div className="flex flex-col">
      {/* Sección 1: Cabecera (Hero) */}
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

      {/* Sección 2: Gaia Sense */}
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
                GaiaSense es un dispositivo que a traves de un sensor especializado incrustado en la tierra cercana a una planta, es capaz de leer y trasmitir estas necesidades en lenguaje humano, gracias a la Inteligencia artificial. ¡Por primera vez es posible la comunicación planta-humano, humano-planta!
                Con GaiaSense podrás cuidar tus plantas como si fueran un miembro más de la casa, ya que mediante la app podrás dotar de personalidad a tus plantas y conversar con ellas para saber lo que necesitan.
              </p>
              <Button asChild className="mt-8 w-fit bg-primary hover:bg-primary/90">
                <Link href="https://www.gaialabs.site/gaia-sense" className="flex items-center">
                  <span style={{ color: '#ffffff' }}>Explorar Documentación</span> 
                  <ArrowRight className="ml-2 w-4 h-4" style={{ color: '#ffffff' }} />
                </Link>
              </Button>
            </div>
            
            {/* Imagen de Gaia Sense */}
            <div className="relative min-h-[300px] md:h-full">
              <Image
                src="/images/GaiaSense_canva_disp.jpg"
                alt="Imagen de Gaia Sense"
                fill
                className="object-cover"
              />
            </div>
            
          </Card>
        </div>
      </section>

      {/* Las secciones de Proyectos Propios y Proyectos en Curso han sido eliminadas */}
      
    </div>
  );
}