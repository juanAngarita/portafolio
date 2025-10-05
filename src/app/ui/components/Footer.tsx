import Link from "next/link";
import { Github, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#13182c] text-gray-300 py-10 mt-16 ">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1 - Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Profe Sebas</h2>
          <p className="text-sm">
            Desarrollador Full Stack y docente universitario apasionado por la
            enseñanza de la programación, desarrollo web y móvil.
          </p>
        </div>

        {/* Columna 2 - Navegación en 2 columnas */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Secciones</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Sobre Mi
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Cursos
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                HV
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Tecnologías
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 - Redes */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Conecta conmigo
          </h3>
          <div className="flex gap-4">
            <Link
              href="https://github.com/TU_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Github size={28} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/TU_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Linkedin size={28} />
            </Link>
            <Link
              href="https://www.youtube.com/@TU_CANAL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Youtube size={28} />
            </Link>
            <Link href="mailto:tuemail@correo.com" className="hover:text-white">
              <Mail size={28} />
            </Link>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Profe Sebas. Todos los derechos reservados.
      </div>
    </footer>
  );
}
