import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
export default function IntroductionSection() {
  return (
    <section
      id="introduction"
      className="flex flex-col md:flex-row justify-between container mx-auto p-8 md:pt-28 md:pb-24 md:px-16 gap-8"
    >
      {/* Texto ocupa 55% en pantallas grandes */}
      <div className="w-full md:w-[55%] text-center md:text-left">
        <HelloTitle />
        <p className="mt-1 text-3xl text-gray-300">Desarrollador Full Stack</p>
        <p className="mt-6 text-xl text-gray-300">
          Ingeniero de Sistemas, docente universitario y desarrollador
          especializado en Android, Angular y Spring Boot.
        </p>
        {/* Botón "Sobre mí" */}
        <div className="flex flex-col md:flex-row gap-4">
          <AboutMeButton />
          <DownloadCVButton />
        </div>
      </div>

      {/* Imagen centrada en el espacio restante */}
      <div className="flex flex-1 justify-center items-center">
        <ProfileImage />
      </div>
    </section>
  );
}

function HelloTitle() {
  return (
    <h1 className="font-bold font-sans leading-[1.1]">
      <span className="block text-3xl sm:text-4xl md:text-5xl">Hola! soy</span>
      <span className="mt-3 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-500">
        Sebastián Angarita
      </span>
    </h1>
  );
}

function AboutMeButton() {
  return (
    <div className="mt-4 flex justify-center md:justify-start">
      <a
        href="#sobre-mi"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition"
      >
        Sobre mí <ArrowDown size={20} />
      </a>
    </div>
  );
}

function DownloadCVButton() {
  return (
    <div className="mt-4 flex justify-center md:justify-start">
      <a
        href="/files/hv.pdf"
        download="Sebastian_Angarita_CV.pdf"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition"
      >
        Descargar HV
        <Download size={20} />
      </a>
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="w-64 h-64 lg:w-85 lg:h-85 md:w-65 md:h-65 rounded-full overflow-hidden ">
      <Image
        src="/intento.jpeg"
        alt="Foto de Profe Sebas"
        width={600}
        height={600}
        className="object-cover object-center"
      />
    </div>
  );
}
