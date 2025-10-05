export interface TechnologyCardProps {
  name: string;
  img: string;
}

export const technologiesWebList: TechnologyCardProps[] = [
  { name: "React", img: "/images/tech/react.png" },
  { name: "Angular", img: "/images/tech/angular.png" },
  { name: "Next.js", img: "/images/tech/nextjs.webp" },
  { name: "TailwindCSS", img: "/images/tech/tailwind.png" },
  { name: "Bootstrap", img: "/images/tech/bootstrap.png" },
  { name: "HTML5", img: "/images/tech/html5.png" },
  { name: "CSS", img: "/images/tech/css.png" },
  { name: "JS", img: "/images/tech/js.webp" },
  { name: "Thymeleaf", img: "/images/tech/thymeleaf.png" },
];

export const technologiesAndroidList: TechnologyCardProps[] = [
  { name: "Android SDK", img: "/images/tech/android.png" },
  { name: "Kotlin", img: "/images/tech/kotlin.png" },
  { name: "Flutter", img: "/images/tech/flutter.png" },
  { name: "Retrofit", img: "/images/tech/retrofit.webp" },
  { name: "Compose", img: "/images/tech/compose.png" },
];

export const technologiesBackendList: TechnologyCardProps[] = [
  { name: "SpringBoot", img: "/images/tech/SpringBoot.png" },
  { name: "Node.js", img: "/images/tech/node.png" },
  { name: "Express", img: "/images/tech/express.webp" },
  { name: "PostgreSQL", img: "/images/tech/postgresql.png" },
  { name: "Firebase", img: "/images/tech/firebase.png" },
];

export const technologiesOthersList: TechnologyCardProps[] = [
  { name: "Github", img: "/images/tech/github.webp" },
  { name: "C++", img: "/images/tech/c++.png" },
  { name: "Python", img: "/images/tech/python.png" },
  { name: "Pandas", img: "/images/tech/pandas.png" },
  { name: "Excel", img: "/images/tech/postgresql.png" },
  { name: "PowerBI", img: "/images/tech/powerbi.png" },
  { name: "Arquitectura Clean / Capas", img: "/images/tech/layered.svg" },
  { name: "Patrones de diseño", img: "/images/tech/singleton.jpg" },
  {
    name: "Patrones de presentación (MVI, MVVM, MVC)",
    img: "/images/tech/viewmodel.webp",
  },
];
