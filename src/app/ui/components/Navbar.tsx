"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // librería de íconos
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" fixed top-0 w-full z-[9999] bg-[#0e3cd2] px-16 py-1 flex items-center  justify-between text-white font-mono">
      {/* Logo */}
      <Link href="/" className="flex items-center h-full">
        <div className="relative h-12 w-12 md:h-13 md:w-13">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>
        <span className="ml-1 text-xl font-bold">Sebas Profe</span>
      </Link>

      {/* Links - escritorio */}
      <div className="hidden md:flex gap-6">
        <Link href="#about" className="hover:underline">
          Sobre Mi
        </Link>
        <Link href="#cursos" className="hover:underline">
          Cursos
        </Link>

        <Link href="#tecnologias" className="hover:underline">
          Tecnologías
        </Link>
        <Link href="#proyectos" className="hover:underline">
          Proyectos
        </Link>
      </div>

      {/* Botón menú móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#13182c] flex flex-col items-center gap-4 py-6 md:hidden z-50">
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Sobre Mi
          </Link>
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Cursos
          </Link>
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            HV
          </Link>
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Tecnologías
          </Link>
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </Link>
        </div>
      )}
    </nav>
  );
}
