import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section className="bg-[#13182c] text-white" id="about">
      {/* Ingeniero - texto derecha / imagen izquierda */}
      <div className="container mx-auto p-16">
        <h2 className="text-7xl font-bold font-sans text-center">
          ¿Quién <span className=" text-blue-500">soy</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:space-y-14">
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="/logo_javeriana.png"
              alt="Ingeniero de Sistemas"
              width={550}
              height={500}
              className="rounded-lg border-4 border-[#13182C] object-cover"
            />
          </div>
          <article className="md:text-right order-2 md:order-2 pb-8 md:pb-0">
            <h3 className="font-sans text-4xl font-bold mb-3">
              Ingeniero de Sistemas
            </h3>
            <p>
              Formado en la Pontificia Universidad Javeriana (pregrado y
              maestría), con una sólida base en desarrollo y arquitectura de
              software tanto para aplicativos móviles como web. Apasionado por
              la innovación tecnológica aplicada a proyectos reales.
            </p>
          </article>
        </div>

        {/* Web - texto izquierda / imagen derecha */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:space-y-14">
          <article className="md:text-left order-2 md:order-1 pb-8 md:pb-0">
            <h3 className="font-sans text-4xl font-bold mb-3">
              Desarrollador Web
            </h3>
            <p>
              Experiencia en el diseño y desarrollo de aplicaciones web con
              tecnologías modernas como Angular y Next.js. Creo interfaces
              atractivas, optimizadas y enfocadas en la experiencia de usuario.
            </p>
          </article>
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="/angular-logo.png"
              alt="Desarrollador Web"
              width={550}
              height={500}
            />
          </div>
        </div>

        {/* Docente - texto derecha / imagen izquierda */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:space-y-14">
          <div className="flex justify-center order-1 md:order-1">
            <Image
              src="/estudiantes.jpeg"
              alt="Docente Universitario"
              width={450}
              height={450}
              className="rounded-lg border-4 border-[#13182C] object-cover"
            />
          </div>
          <article className="md:text-right order-2 md:order-2  pb-8 md:pb-0">
            <h3 className="font-sans text-4xl font-bold mb-3">
              Docente Universitario
            </h3>
            <p>
              Más de 3 años guiando a estudiantes en programación, desarrollo
              web y móvil. Mi enfoque combina teoría con práctica, formando
              profesionales listos para la industria. Disfruto transformar
              conceptos complejos en aprendizajes claros.
            </p>
          </article>
        </div>

        {/* Móvil - texto izquierda / imagen derecha */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:space-y-14">
          <article className="md:text-left order-2 md:order-1  pb-8 md:pb-0">
            <h3 className="font-sans text-4xl font-bold mb-3">
              Desarrollador Móvil
            </h3>
            <p>
              Desarrollo apps Android intuitivas y de alto rendimiento. Me
              enfoco en la usabilidad y arquitectura, asefurando el tener codigo
              limpio y escalable. Apasionado por crear soluciones móviles que
              mejoren la vida de los usuarios.
            </p>
          </article>
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="/android-logo.png"
              alt="Desarrollador Móvil"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
