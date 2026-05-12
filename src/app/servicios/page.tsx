import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Bot, Code, Handshake, ToyBrick } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Migración Odoo y VeriFactu 2026",
    description: "Prepara tu empresa para la nueva ley antifraude. Migramos tu sistema y te ayudamos a tramitar el Kit Digital a coste cero.",
    icon: <ToyBrick className="w-12 h-12 text-primary" />,
    action: <Link href="/servicios/verifactu-odoo"><Button>Ver plan de adaptación</Button></Link>
  },
  {
    title: "Desarrollo de Agentes de IA",
    description: "Creamos agentes de inteligencia artificial a medida para automatizar tareas complejas, analizar datos y potenciar la toma de decisiones en tu empresa.",
    icon: <Bot className="w-12 h-12 text-primary" />,
    image: PlaceHolderImages.find(img => img.id === 'service-ai-agent')
  },
  {
    title: "Desarrollo Web a Medida",
    description: "Construimos aplicaciones web robustas, escalables y con una experiencia de usuario excepcional. Desde MVPs hasta plataformas complejas.",
    icon: <Code className="w-12 h-12 text-primary" />,
    image: PlaceHolderImages.find(img => img.id === 'service-web-dev')
  }
];

export default function ServiciosPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-servicios');
  const techPartnerImage = PlaceHolderImages.find(img => img.id === 'service-tech-partner');

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
            Nuestros Servicios
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Soluciones tecnológicas B2B para impulsar tu negocio al siguiente nivel.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-4 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-headline">{service.title}</h3>
                <p className="mt-4 text-muted-foreground flex-grow">{service.description}</p>
                
                {/* Aquí está la magia: si hay action, pone tu botón nuevo. Si no, pone el de contacto. */}
                {service.action ? (
                  <div className="mt-6">
                    {service.action}
                  </div>
                ) : (
                  <Button variant="link" asChild className="mt-6">
                    <Link href="/contacto">Solicitar información</Link>
                  </Button>
                )}

              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {techPartnerImage && (
              <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={techPartnerImage.imageUrl}
                  alt={techPartnerImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={techPartnerImage.imageHint}
                />
              </div>
            )}
            <div className="text-left">
              <Handshake className="w-16 h-16 text-primary mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-black">Servicio "Tech Partner"</h2>
              
              <p className="mt-6 text-lg text-black">
                ¿Eres un emprendedor con una gran idea pero sin el equipo técnico para llevarla a cabo? Nos convertimos en tu socio tecnológico. Te ayudamos a validar tu idea, construir tu Mínimo Producto Viable (MVP) y te acompañamos en las primeras etapas de tu startup.
              </p>
              
              <ul className="mt-6 space-y-2 text-black">
                <li className="flex items-start"><span className="text-primary mr-2">✓</span><span>Validación de idea y estrategia técnica.</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span><span>Desarrollo de MVP rápido y eficiente.</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span><span>Asesoramiento en escalabilidad y arquitectura.</span></li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span><span>Soporte técnico continuo.</span></li>
              </ul>
              <Button asChild className="mt-8" size="lg">
                <Link href="/contacto">Hablemos de tu proyecto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}