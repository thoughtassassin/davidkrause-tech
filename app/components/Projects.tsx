import { Sedan } from "next/font/google";
const sedan = Sedan({ weight: "400", subsets: ["latin"] });
import { projects } from "@/app/data/projects";
import Project from '@/app/components/Project';

export default function Projects() {
  return (
    <section className="min-w-full">
      <h1
        className={`${sedan.className} text-6xl md:text-8xl font-bold mb-10 min-w-full pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-900`}
      >
        Projects
      </h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Project title={project.title} description={project.description} />
          </li>
        ))}
      </ul>
    </section>
  );
}
