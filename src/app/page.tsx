import Image from "next/image";
import IntroductionSection from "./ui/pages/Home/IntroductionSection";
import CursosSection from "./ui/pages/Home/cursosSection";
import TechnologiesStack from "./ui/pages/Home/TecnologiasSection";
import AboutMeSection from "./ui/pages/Home/MeSection";
import ProjectsSection from "./ui/pages/Home/ProjectsSection";

export default function Home() {
  return (
    <div>
      <main>
        <IntroductionSection />
        <AboutMeSection />
        <CursosSection />
        <TechnologiesStack />
        <ProjectsSection />
      </main>
      <footer></footer>
    </div>
  );
}
