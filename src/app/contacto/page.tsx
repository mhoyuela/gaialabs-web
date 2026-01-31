import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-headline">
          Contacto
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          ¿Tienes una idea, un proyecto o simplemente quieres saber más? Estamos aquí para escucharte.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 font-headline">Envíanos un mensaje</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombre</Label>
                <Input id="firstName" placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Apellido</Label>
                <Input id="lastName" placeholder="Tu apellido" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" placeholder="¿En qué podemos ayudarte?" rows={5} />
            </div>
            <Button type="submit" className="w-full" size="lg">Enviar Mensaje</Button>
          </form>
        </div>

        <div className="space-y-8">
           <h2 className="text-2xl font-bold mb-6 font-headline">Información de Contacto</h2>
           <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-muted-foreground">Nuestro equipo te responderá en menos de 24 horas.</p>
              <a href="mailto:info@gaialabs.tech" className="text-primary hover:underline">info@gaialabs.tech</a>
            </div>
           </div>
           <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Teléfono</h3>
              <p className="text-muted-foreground">De Lunes a Viernes, de 9am a 6pm.</p>
              <a href="tel:+1234567890" className="text-primary hover:underline">+1 234 567 890</a>
            </div>
           </div>
           <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Oficina</h3>
              <p className="text-muted-foreground">Visítanos con cita previa.</p>
              <p className="text-primary">123 Tech Avenue, Innovation City</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}
