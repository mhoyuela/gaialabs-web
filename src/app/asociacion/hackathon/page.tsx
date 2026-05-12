import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Trophy, Users, HeartHandshake, Lightbulb, Smartphone } from "lucide-react";

export default function HackathonPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Sección Hero con la foto de grupo de fondo */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/hackathon-grupo.jpg"
          alt="Foto de grupo del hackathon Código a Ojos Cerrados"
          fill
          className="object-cover"
          priority
        />
        {/* Este es el overlay oscuro exacto que usas en Asociación */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        <div className="relative z-20 p-4 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Badge className="mb-6 bg-primary text-white hover:bg-primary/90 text-sm px-4 py-1 border-none">
            Iniciativa Social
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-headline mb-6">
            Hackathones con Propósito
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            En GaiaLabs creemos que la tecnología solo tiene sentido si mejora la vida de las personas. 
            Organizamos maratones de desarrollo donde el talento técnico se une a la experiencia vital 
            para resolver retos sociales reales.
          </p>
        </div>
      </section>

      {/* Sección: Edición Pasada (Detalles + Cartel) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-black">
              Nuestra última edición: <span className="text-primary">Código a Ojos Cerrados</span>
            </h2>
            <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
              42 horas hackeando por un impacto real. Nos pusimos las gafas de lo social para cambiar el código y cambiar el mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Detalles del evento (Izquierda) */}
            <div className="space-y-8">
              <div className="prose prose-lg text-black">
                <p>
                  En este evento único, rompimos la barrera generacional. Juntamos a <strong>estudiantes de programación de 42 Málaga</strong> con <strong>personas mayores y jubilados (+65 años)</strong>. 
                </p>
                <p>
                  ¿El objetivo? Que los desarrolladores entendieran de primera mano las necesidades reales de los usuarios, creando soluciones tecnológicas con empatía, utilidad y sentido humano.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-gray-50 border-gray-200 shadow-sm">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black uppercase">Fecha</p>
                      <p className="text-black">20-21 Junio</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-gray-200 shadow-sm">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black uppercase">Lugar</p>
                      <p className="text-black">La Noria (Málaga)</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 border-gray-200 shadow-sm sm:col-span-2">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black uppercase">Premios</p>
                      <p className="text-black">1.500€ en premios + Implementación real</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Entidades Colaboradoras Actualizadas */}
              <div>
                <h3 className="text-xl font-bold font-headline text-black mb-4">Entidades colaboradoras:</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-black border-gray-300">42 Málaga</Badge>
                  <Badge variant="outline" className="text-black border-gray-300">La Noria</Badge>
                  <Badge variant="outline" className="text-black border-gray-300">Diverxia</Badge>
                  <Badge variant="outline" className="text-black border-gray-300">Gaia Labs</Badge>
                  <Badge variant="outline" className="text-black border-gray-300">Incibe</Badge>
                  <Badge variant="outline" className="text-black border-gray-300">Diputación de Málaga</Badge>
                  <Badge variant="outline" className="text-black border-gray-300">Asociación Arrabal</Badge>
                </div>
              </div>
            </div>

            {/* Cartel del evento (Derecha) */}
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
              <Image
                src="/images/cartel-hackathon.png" 
                alt="Cartel del Hackathon Código a Ojos Cerrados"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Los Retos Sociales */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold font-headline text-center text-black mb-12">
            Los 3 Retos Sociales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center flex flex-col items-center">
              <div className="bg-orange-100 p-4 rounded-full mb-4 text-orange-600">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Brecha Digital</h3>
              <p className="text-black text-sm">
                Soluciones para facilitar el acceso y uso de la tecnología a personas mayores, reduciendo el aislamiento.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Diversidad Funcional</h3>
              <p className="text-black text-sm">
                Herramientas accesibles que mejoren la autonomía y calidad de vida de personas con capacidades diferentes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4 text-purple-600">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Adicciones Tecnológicas</h3>
              <p className="text-black text-sm">
                Prevención y gestión del uso abusivo de pantallas y redes sociales en la sociedad actual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Futuros Eventos / CTA */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Lightbulb className="w-16 h-16 mx-auto text-primary mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-black mb-6">
            ¿Listo para el próximo desafío?
          </h2>
          <p className="text-lg text-black mb-8">
            Ya estamos diseñando nuestro próximo hackathon. Si eres estudiante, profesional del sector social, o simplemente quieres aportar tu experiencia vital, queremos contar contigo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-white font-bold hover:bg-primary/90">
              <Link href="/contacto">
                <span style={{ color: '#ffffff' }}>Quiero participar</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gray-300 text-black hover:bg-gray-100">
              <Link href="/contacto">
                Proponer un reto social
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}