import { Button } from "@/components/ui/button";
import { Bot, Code, Handshake, ToyBrick } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Migración Odoo y VeriFactu 2026",
    description:
      "Prepara tu empresa para la nueva ley antifraude. Migramos tu sistema y te ayudamos a tramitar el Kit Digital a coste cero.",
    icon: <ToyBrick className="w-10 h-10 text-primary" />,
    action: (
      <Link href="/servicios/verifactu-odoo">
        <Button>Ver plan de adaptación</Button>
      </Link>
    ),
  },
  {
    title: "Desarrollo de Agentes de IA",
    description:
      "Creamos agentes de inteligencia artificial a medida para automatizar tareas complejas, analizar datos y potenciar la toma de decisiones en tu empresa.",
    icon: <Bot className="w-10 h-10 text-primary" />,
  },
  {
    title: "Desarrollo Web a Medida",
    description:
      "Construimos aplicaciones web robustas, escalables y con una experiencia de usuario excepcional. Desde MVPs hasta plataformas complejas.",
    icon: <Code className="w-10 h-10 text-primary" />,
  },
];

export default function ServiciosPage() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[55vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="relative z-10 p-4 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Nuestros servicios
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Soluciones tecnológicas B2B para impulsar tu negocio al siguiente nivel.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover bg-card border border-border p-8 rounded-xl flex flex-col items-center text-center"
              >
                <div className="bg-primary/10 rounded-full p-4 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 text-muted-foreground flex-grow">{service.description}</p>

                {service.action ? (
                  <div className="mt-6">{service.action}</div>
                ) : (
                  <Button variant="link" asChild className="mt-6 text-primary">
                    <Link href="/contacto">Solicitar información</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="relative h-80 md:h-full rounded-xl overflow-hidden shadow-sm border border-border">
              <Image
                src="/images/DSC09321.JPG"
                alt="Equipo GaiaLabs trabajando"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <Handshake className="w-14 h-14 text-primary mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold">Servicio "Tech Partner"</h2>

              <p className="mt-6 text-lg text-muted-foreground">
                ¿Eres un emprendedor con una gran idea pero sin el equipo técnico para
                llevarla a cabo? Nos convertimos en tu socio tecnológico. Te ayudamos a
                validar tu idea, construir tu Mínimo Producto Viable (MVP) y te acompañamos
                en las primeras etapas de tu startup.
              </p>

              <ul className="mt-6 space-y-2 text-foreground">
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
