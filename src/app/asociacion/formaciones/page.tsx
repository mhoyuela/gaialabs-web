import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Download, BookOpen, Sparkles } from "lucide-react";

// Datos de ejemplo para tus 3 PDFs (Puedes cambiar los títulos y descripciones luego)
const formaciones = [
  {
    id: 1,
    title: "Formaciones en IA para docentes",
    description: "Descubre cómo la inteligencia artificial puede ayudar a los educadores a personalizar el aprendizaje, automatizar tareas administrativas y mejorar la experiencia educativa de sus estudiantes.",
    tag: "Docentes",
    pdfLink: "/pdfs/formacion-1.pdf", // Ruta donde subirás tu PDF en la carpeta public
    icon: <BookOpen className="w-8 h-8 text-primary mb-4" />,
  },
  {
    id: 2,
    title: "Tecnología para mayores",
    description: "Rompe la brecha digital, mejora las habilidades de los asistentes en tencnología, y aprende a estar protegido ante estafas y ciberataques.",
    tag: "Mayores",
    pdfLink: "/pdfs/formacion-2.pdf",
    icon: <Sparkles className="w-8 h-8 text-primary mb-4" />,
  },
  {
    id: 3,
    title: "Ética en tencología para adolescentes y jóvenes",
    description: "Crear un futuro donde la tecnolgía aporte a la sociedad es posible y está en manos de los más jóvenes. Aprende, mejora, construye",
    tag: "Adolescentes y Jóvenes",
    pdfLink: "/pdfs/formacion-3.pdf",
    icon: <FileText className="w-8 h-8 text-primary mb-4" />,
  }
];

export default function FormacionesPage() {
  return (
    <div className="formaciones-page min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Cabecera de la página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-black mb-6">
            Programas de <span className="text-primary">Formación</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Accede a nuestro material formativo exclusivo. Descarga los programas detallados y descubre cómo podemos impulsar el conocimiento en tu organización.
          </p>
        </div>

        {/* Grid de los 3 PDFs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formaciones.map((curso) => (
            <Card 
              key={curso.id} 
              className="bg-[#121212] border-[#2d2d2d] hover:border-primary transition-all duration-300 p-8 flex flex-col items-start group"
            >
              <div className="flex justify-between w-full items-start mb-2">
                {curso.icon}
                <Badge variant="outline" className="text-gray-300 border-gray-600">
                  {curso.tag}
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 mt-2 group-hover:text-primary transition-colors">
                {curso.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-8 flex-grow">
                {curso.description}
              </p>
              
              <Button asChild className="w-full bg-primary text-black hover:bg-primary/90 font-semibold mt-auto">
                <a 
                  href={curso.pdfLink} 
                  download={`Programa-${curso.title}.pdf`} // Esto fuerza la descarga directa
                 >
                <Download className="mr-2 w-4 h-4" /> Descargar Programa
                </a>
              </Button>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}