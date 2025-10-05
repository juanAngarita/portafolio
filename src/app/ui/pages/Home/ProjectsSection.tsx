"use client";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Evalú-AME:evaluación de pose para pacientes con AME",
      description:
        "Aplicación web para evluar la postura de pacientes con AME, utilizando inteligencia artificial para analizar imágenes y proporcionar retroalimentación en tiempo real.",
      image: "/images/projects/tg2.png",
    },
    {
      title: "ProfeAngarita.com",
      description:
        "Esta página web. Funciona como portafolio, centralizador de mis proyectos y cursos de desarrollo web y móvil.",
      image: "/images/projects/page.png",
    },
    {
      title:
        "Procesamiento de imágenes médicas - Segmentación de vasos sanguíneos del cerebro",
      description:
        "Proyecto de investigación enfocado en el desarrollo de pipelines para la segmentación automática de vasos sanguíneos en imágenes médicas del cerebro, utilizando técnicas de procesamiento de imágenes y ML.",
      image: "/images/projects/cerebro.png",
    },
    {
      title: "Twitter Clone",
      description:
        "Clon de Twitter realizado con Android Nativo. Es el proyecto guía para los estudiantes de Desarrollo móvil. Desarrollo usando Kotlin, Firebase, arquitectura en capas y MVVM.",
      image: "/images/projects/twitter.png",
    },
    {
      title: "Aphasia Anki",
      description:
        "Add-on desarrollado para Anki, con el fin de ayudar a pacientes con afasia a mejorar su comunicación y habilidades cognitivas a través de tarjetas de memoria personalizadas.",
      image: "/images/projects/aphasia.png",
    },
    {
      title: "Canal de youtube",
      description:
        "Canal de youtube a través del cual comparto mis conocimientos en  software y tecnología, enfocado en desarrollo web y móvil.",
      image: "/images/projects/youtube.png",
    },
  ];

  return (
    <section id="proyectos" className="py-20 bg-[#0F111F] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-7xl font-bold mb-12 text-center">Proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1f35] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
