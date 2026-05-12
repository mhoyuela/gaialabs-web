"use client";

import { Button } from "@/components/ui/button"; // Asegúrate de que esta ruta sea la de tu botón
import { AlertTriangle, CheckCircle, MapPin, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function VerifactuLandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí conectaremos la llamada a tu API para enviar el correo a Odoo
    console.log("Enviar lead a Odoo:", email);
    alert("¡Gracias! Te contactaremos enseguida para tu diagnóstico.");
    setEmail("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-slate-50 py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            <span>Exclusivo para empresas en Málaga y Sevilla</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Adapta tu empresa a la Ley VeriFactu 2026 a <span className="text-primary">Coste Cero</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Evita sanciones de Hacienda. Digitalizamos tu facturación con Odoo y gestionamos el 100% del Kit Digital para que no tengas que invertir ni un euro.
          </p>
          
          {/* FORMULARIO DE CAPTACIÓN (Conecta con Odoo) */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Tu correo electrónico profesional"
              className="flex-1 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" size="lg" className="flex items-center gap-2">
              Descargar Guía <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-xs text-slate-500 mt-3">
            También recibirás un diagnóstico gratuito de 15 minutos.
          </p>
        </div>
      </section>

      {/* SECCIÓN DEL PROBLEMA / AGITACIÓN */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              El reloj corre: ¿Tu software actual es legal?
            </h2>
            <p className="text-slate-600 mb-6">
              A partir de 2026, la nueva normativa exige que los sistemas de facturación garanticen la inalterabilidad de los registros y se conecten en tiempo real con la AEAT. 
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-700">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <span>Las multas por usar software no certificado (como Excel o programas antiguos) pueden llegar a 50.000€.</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <span>La transición lleva tiempo. Las empresas que esperen a 2025 se encontrarán con consultoras saturadas.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-600 w-6 h-6" />
              La solución: Odoo + GaiaLabs
            </h3>
            <p className="text-slate-600 mb-4">
              Migramos tus datos de forma segura al ERP número 1 del mundo. Odoo ya está preparado para la normativa española.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-primary"/> Facturación automatizada</li>
              <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-primary"/> Conexión con AEAT</li>
              <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-primary"/> Firmas electrónicas integradas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN KIT DIGITAL Y CERCANÍA */}
      <section className="py-16 px-6 lg:px-8 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Subvencionado con el Kit Digital</h2>
          <p className="text-slate-300 text-lg mb-8">
            Como expertos locales en Andalucía, no solo implantamos el software. Te ayudamos a tramitar el bono del Kit Digital para que el coste de tu licencia y la implantación esté cubierto.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div className="bg-slate-800 p-6 rounded-lg">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Soporte Local</h4>
              <p className="text-slate-400 text-sm">Estamos en Málaga y Sevilla. Olvídate de tickets de soporte infinitos con empresas de fuera; hablamos tu mismo idioma.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <FileText className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Gestión del Papeleo</h4>
              <p className="text-slate-400 text-sm">Te acompañamos en todo el proceso burocrático de la subvención para que tú solo te centres en tu negocio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}