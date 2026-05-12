"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    // Añadida la clase contacto-page para el menú y fondo blanco
    <div className="container mx-auto px-4 py-24 md:py-32 contacto-page bg-white min-h-screen">
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-headline text-black">
          Contacto
        </h1>
        {/* Cambiado a text-black */}
        <p className="mt-6 text-lg md:text-xl text-black max-w-2xl mx-auto">
          ¿Tienes una idea, un proyecto o simplemente quieres saber más? Estamos aquí para escucharte.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-6 font-headline text-black">Envíanos un mensaje</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-black font-semibold">Nombre</Label>
                <Input id="firstName" name="firstName" placeholder="Tu nombre" required className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-black font-semibold">Apellido</Label>
                <Input id="lastName" name="lastName" placeholder="Tu apellido" required className="border-gray-300" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-black font-semibold">Email</Label>
              <Input id="email" name="email" type="email" placeholder="tu@email.com" required className="border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-black font-semibold">Mensaje</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="¿En qué podemos ayudarte?" 
                rows={5} 
                required 
                className="border-gray-300"
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-white font-bold" size="lg" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </form>
        </div>

        {/* Sección de Información Directa con Teléfono y texto en Negro */}
        <div className="flex flex-col justify-center space-y-8 bg-gray-50 p-8 rounded-lg border border-gray-200">
           <h3 className="text-2xl font-bold font-headline text-black">Información Directa</h3>
           
           <div className="space-y-6">
             {/* Bloque Email */}
             <div className="flex flex-col">
               <span className="text-lg text-black font-medium">Escríbenos a:</span>
               <span className="text-xl font-bold text-primary">info@gaialabs.es</span>
             </div>

             {/* Bloque Teléfono */}
             <div className="flex flex-col">
               <span className="text-lg text-black font-medium">Llámanos o WhatsApp:</span>
               <a href="tel:+34667755271" className="text-xl font-bold text-primary hover:underline">
                 +34 667755271
               </a>
             </div>

             <div className="pt-4 border-t border-gray-200">
                <p className="text-base text-black font-medium">
                  Atendemos todas las consultas 24 horas.
                </p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
