"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock } from "lucide-react";

export default function ContactoPage() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
        (event.target as HTMLFormElement).reset();
      } else {
        alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      alert("Error de conexión con el servidor.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-background min-h-screen pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Contacto</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes una idea, un proyecto o simplemente quieres saber más? Estamos aquí
            para escucharte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" name="firstName" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" name="lastName" placeholder="Tu apellido" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8 bg-secondary/40 p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold">Información directa</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 text-primary"><Mail className="w-5 h-5" /></div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Escríbenos a:</span>
                  <span className="text-lg font-bold text-primary">info@gaialabs.es</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 text-primary"><Phone className="w-5 h-5" /></div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Llámanos o WhatsApp:</span>
                  <a href="tel:+34667755271" className="text-lg font-bold text-primary hover:underline">
                    +34 667 755 271
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-border">
                <div className="bg-primary/10 rounded-full p-3 text-primary"><Clock className="w-5 h-5" /></div>
                <p className="text-sm text-muted-foreground pt-2">
                  Atendemos todas las consultas en 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
