import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Ticket, Trophy, Users, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Hackatón Código-S | GaiaLabs & DIVERXIA CONSULTING',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CodigoSPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-950/40 via-slate-950 to-slate-950">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" /> Buscamos talento con propósito
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hackatón <span className="text-emerald-400">Código-S</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light">
            ¿Te imaginas usar la tecnología para resolver retos sociales reales?
          </p>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Una jornada colaborativa junto a <strong>GaiaLabs</strong> y <strong>DIVERXIA CONSULTING</strong>, con la colaboración de <strong>Arrabal-AID</strong> en el centro de innovación social La Noria.
          </p>

          {/* BADGES / DATOS CLAVE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <Calendar className="w-6 h-6 text-emerald-400" />
              <div className="text-left">
                <p className="text-xs text-slate-400">Fecha y Hora</p>
                <p className="text-sm font-semibold text-slate-200">Sábado 3 de octubre | 09:00 - 21:00h</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <MapPin className="w-6 h-6 text-emerald-400" />
              <div className="text-left">
                <p className="text-xs text-slate-400">Ubicación</p>
                <p className="text-sm font-semibold text-slate-200">La Noria (Málaga)</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <Ticket className="w-6 h-6 text-emerald-400" />
              <div className="text-left">
                <p className="text-xs text-slate-400">Entrada</p>
                <p className="text-sm font-semibold text-emerald-400">Gratuita (Plazas limitadas)</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="#registro"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg px-8 py-4 rounded-xl transition duration-200 shadow-lg shadow-emerald-500/20"
            >
              Inscribirme al Hackatón
            </a>
          </div>
        </div>
      </section>

      {/* GALERÍA / IMAGEN DE EDICIONES ANTERIORES */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden border border-slate-800">
          <Image
            src="/images/hackathon/evento-1.jpg"
            alt="Hackatón Código-S en La Noria"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* RETOS SOCIALES */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Retos Sociales a Resolver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="text-3xl mb-4">👵</div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">Brecha Digital</h3>
              <p className="text-sm text-slate-400">Facilitar el acceso y uso inclusivo de las herramientas tecnológicas.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">Adicciones Tecnológicas</h3>
              <p className="text-sm text-slate-400">Estrategias y software para un consumo saludable y consciente.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="text-3xl mb-4">♿</div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">Diversidad Funcional</h3>
              <p className="text-sm text-slate-400">Soluciones accesibles e integradoras para mejorar la autonomía.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">Naturaleza y Tecnología</h3>
              <p className="text-sm text-slate-400">Proyectos para el cuidado ambiental e innovación sostenible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIOS & DINÁMICAS */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Una jornada llena de aprendizaje y conexiones</h2>
            <p className="text-slate-300">
              Durante un día completo trabajaremos por equipos para crear soluciones tecnológicas con impacto social.
            </p>
            <ul className="space-y-3">
              {['Micropíldoras formativas', 'Espacio de Coworking dinámico', 'Mentoría técnica y social', 'Presentaciones Pitch finales', 'Networking & Comida'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-emerald-500/30 text-center space-y-6">
            <Trophy className="w-16 h-16 text-amber-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white">Premios del Hackatón</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="font-semibold text-lg">🥇 1.er Premio</span>
                <span className="text-2xl font-bold text-emerald-400">300€</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="font-semibold text-lg">🥈 2.º Premio</span>
                <span className="text-2xl font-bold text-emerald-400">200€</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE REGISTRO */}
      <section id="registro" className="py-16 px-4 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Reserva tu plaza gratuita</h2>
            <p className="text-slate-400">Plazas limitadas. ¡Programar también es generar impacto!</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Nombre Completo</label>
              <input type="text" required placeholder="Tu nombre" className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Correo Electrónico</label>
              <input type="email" required placeholder="tu@email.com" className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Teléfono</label>
              <input type="tel" required placeholder="+34 600 000 000" className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Perfil / Especialidad</label>
              <select className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500">
                <option>Programación / Desarrollo</option>
                <option>Diseño UX/UI</option>
                <option>Gestión de Proyectos / Social</option>
                <option>Otro</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 rounded-xl transition duration-200">
              Confirmar Inscripción
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}