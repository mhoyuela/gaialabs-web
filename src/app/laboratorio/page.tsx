import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LaboratorioPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative w-full h-[55vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/hilly-countryside.jpg"
          alt="Laboratorio GaiaLabs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/50 to-slate-950/25" />
        <div className="relative z-10 p-4 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            El Laboratorio
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Donde la experimentación y la curiosidad se convierten en productos del futuro.
          </p>
        </div>
      </section>

      {/* GAIA SENSE */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Proyecto estrella: Gaia Sense</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nuestra iniciativa más ambiciosa que redefine la interacción con el entorno digital.
            </p>
          </div>
          <Card className="grid md:grid-cols-2 overflow-hidden border-border shadow-sm">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Badge className="w-fit mb-4">En Desarrollo</Badge>
              <h3 className="text-3xl font-bold">Gaia Sense</h3>
              <p className="mt-4 text-muted-foreground">
                GaiaSense es un dispositivo que a través de un sensor especializado
                incrustado en la tierra cercana a una planta, es capaz de leer y transmitir
                estas necesidades en lenguaje humano, gracias a la inteligencia artificial.
                ¡Por primera vez es posible la comunicación planta-humano, humano-planta!
                Con GaiaSense podrás cuidar tus plantas como si fueran un miembro más de la
                casa, ya que mediante la app podrás dotar de personalidad a tus plantas y
                conversar con ellas para saber lo que necesitan.
              </p>
              <Button asChild className="mt-8 w-fit">
                <Link href="https://www.gaialabs.site/gaia-sense" className="flex items-center">
                  Explorar documentación
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

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
    </div>
  );
}
