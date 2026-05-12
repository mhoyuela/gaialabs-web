import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sparkles, Smartphone, MapPin, Calendar, Gift, ArrowRight } from "lucide-react";

export default function LanzamientoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* SECCIÓN HERO: Impacto visual inicial */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0" />
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10 z-0" />
        
        <div className="relative z-10 p-4 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 mt-20">
          <Badge className="mb-6 bg-primary/20 text-primary hover:bg-primary/30 text-sm px-4 py-1 border border-primary/50">
            Evento Exclusivo de Lanzamiento
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-headline mb-6">
            El futuro de la naturaleza <br /> <span className="text-primary">ahora tiene voz.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Descubre GaiaSense, la primera tecnología con Inteligencia Artificial que hace posible la comunicación real entre humanos y plantas.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-white font-bold hover:bg-primary/90">
              <Link href="#registro">
                Asegurar mi plaza y sorteo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECCIÓN: ¿Qué es GaiaSense? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-black">
              Conoce <span className="text-primary">GaiaSense</span> 🌿
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Un dispositivo revolucionario que, a través de un sensor especializado incrustado en la tierra, lee las necesidades de tu planta y las transmite en lenguaje humano gracias a la IA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* TARJETA 1 */}
            <Card className="border-none shadow-lg bg-slate-900 hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="bg-green-100/10 p-4 rounded-full mb-6 text-green-400">
                  <Leaf className="w-8 h-8" />
                </div>
                {/* Modificador ! añadido para forzar el color */}
                <h3 className="text-xl font-bold !text-white mb-3">Sensor Especializado</h3>
                <p className="!text-slate-200 text-sm leading-relaxed">
                  Monitoriza en tiempo real la humedad, nutrientes y estado de la tierra, captando lo que tu planta siente.
                </p>
              </CardContent>
            </Card>

            {/* TARJETA 2 */}
            <Card className="border-none shadow-lg bg-slate-900 hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="bg-primary/20 p-4 rounded-full mb-6 text-primary">
                  <Sparkles className="w-8 h-8" />
                </div>
                {/* Modificador ! añadido para forzar el color */}
                <h3 className="text-xl font-bold !text-white mb-3">Traducción por IA</h3>
                <p className="!text-slate-200 text-sm leading-relaxed">
                  La Inteligencia Artificial procesa los datos y los convierte en mensajes claros en tu idioma. ¡Por fin podéis comunicaros!
                </p>
              </CardContent>
            </Card>

            {/* TARJETA 3 */}
            <Card className="border-none shadow-lg bg-slate-900 hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="bg-blue-100/10 p-4 rounded-full mb-6 text-blue-400">
                  <Smartphone className="w-8 h-8" />
                </div>
                {/* Modificador ! añadido para forzar el color */}
                <h3 className="text-xl font-bold !text-white mb-3">Dotada de Personalidad</h3>
                <p className="!text-slate-200 text-sm leading-relaxed">
                  A través de nuestra app, puedes darle una personalidad a tu planta y conversar con ella como si fuera un miembro más de la casa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECCIÓN: El Evento y el Sorteo */}
      <section className="py-20 bg-slate-50 border-t border-slate-200" id="registro">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Info del Evento */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-primary text-white border-none">Plazas Limitadas</Badge>
              <h2 className="text-3xl font-bold text-white mb-6">
                Únete a la revolución verde
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center text-slate-300">
                  <div className="bg-slate-800 p-3 rounded-full mr-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-white">15 de Junio</p>
                    <p className="text-sm">10:00 de la mañana</p>
                  </div>
                </div>
                
                <div className="flex items-center text-slate-300">
                  <div className="bg-slate-800 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-white">La Noria</p>
                    <p className="text-sm">Málaga</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sorteo Beta Testers */}
            <div className="bg-primary p-8 md:p-12 md:w-1/2 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Gift className="w-32 h-32 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                Conviértete en Beta Tester
              </h3>
              <p className="text-white/90 mb-6 relative z-10">
                Durante el evento sortearemos los primeros dispositivos GaiaSense entre los asistentes. Serás clave para ayudarnos a testear, dar feedback y mejorar la idea antes de su lanzamiento global.
              </p>
              
              <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold w-full relative z-10">
                <Link href="/contacto">
                  Me apunto al evento
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}