"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Video, webVideosList, movilVideosList } from "../../../data/videos";

export default function CursosSection() {
  return (
    <section className="bg-[#0F111F] text-white py-16" id="cursos">
      <div className="container mx-auto px-16">
        <h2 className="text-7xl font-bold mb-8 text-center">
          Mis <span className=" text-blue-500">cursos</span>
        </h2>
        <h2 className="text-4xl font-bold mb-4">Desarrollo web </h2>
        {/* Carrusel */}
        <Carrousel videosList={webVideosList} />
        <h2 className="text-4xl font-bold mb-4 mt-8">Desarrollo Móvil</h2>
        <Carrousel videosList={movilVideosList} />
      </div>
    </section>
  );
}

function Carrousel({ videosList }: { videosList: Video[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false });

  const scrollPrev = () => embla && embla.scrollPrev();
  const scrollNext = () => embla && embla.scrollNext();
  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2">
          {videosList.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>

      {/* Flechas */}
      <BackButton scrollPrev={scrollPrev} />
      <NextButton scrollNext={scrollNext} />
    </div>
  );
}

function BackButton({ scrollPrev }: { scrollPrev: () => void }) {
  return (
    <button
      onClick={scrollPrev}
      className="absolute -left-8 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-3 shadow-lg transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

function NextButton({ scrollNext }: { scrollNext: () => void }) {
  return (
    <button
      onClick={scrollNext}
      className="absolute -right-8 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-3 shadow-lg transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

function VideoCard({ video }: { video: Video }) {
  return (
    <a
      key={video.url}
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="min-w-[350px] h-[200px] relative flex-shrink-0 rounded-xl overflow-hidden group"
    >
      {/* Imagen ocupa todo */}
      <Image src={video.thumbnail} alt={video.title} fill />

      {/* Overlay con título */}
      <div className="absolute inset-0 bg-[#aeb4de] bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300">
        <h3 className="text-lg font-semibold text-white text-center px-2">
          {video.title}
        </h3>
      </div>
    </a>
  );
}
