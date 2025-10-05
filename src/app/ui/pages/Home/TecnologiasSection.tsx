import {
  TechnologyCardProps,
  technologiesAndroidList,
  technologiesBackendList,
  technologiesOthersList,
  technologiesWebList,
} from "@/app/data/technologies";
import Image from "next/image";

export default function TechnologiesStack() {
  return (
    <section id="tecnologias" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-7xl font-bold mb-12 text-center">Tecnologías</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Web */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-4xl font-semibold mb-4 text-blue-400 text-center">
              Web
            </h3>
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-300">
              {technologiesWebList.map((tech, i) => (
                <TechnologyCard key={i} name={tech.name} img={tech.img} />
              ))}
            </div>
          </div>

          {/* Móvil */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-4xl font-semibold mb-4 text-green-400 text-center">
              Móvil
            </h3>
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-300">
              {technologiesAndroidList.map((tech, i) => (
                <TechnologyCard key={i} name={tech.name} img={tech.img} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-800 p-6 rounded-4xl shadow-lg">
            <h3 className="text-4xl font-semibold mb-4 text-yellow-400 text-center">
              Backend
            </h3>
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-300">
              {technologiesBackendList.map((tech, i) => (
                <TechnologyCard key={i} name={tech.name} img={tech.img} />
              ))}
            </div>
          </div>

          {/* Otros */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-4xl font-semibold mb-4 text-purple-400 text-center">
              Otros
            </h3>
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-300">
              {technologiesOthersList.map((tech, i) => (
                <TechnologyCard key={i} name={tech.name} img={tech.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechnologyCard({ name, img }: TechnologyCardProps) {
  return (
    <div className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition space-x-2">
      <Image src={img} alt={name} width={72} height={72} />
      <span className="text-lg text-gray-300">{name} </span>
    </div>
  );
}
