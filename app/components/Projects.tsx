import { Sedan } from "next/font/google";
const sedan = Sedan({ weight: "400", subsets: ["latin"] });

export default function Projects() {
  return (
    <section className="min-w-full">
      <h1
        className={`${sedan.className} text-6xl md:text-8xl font-bold mb-10 min-w-full pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-900`}
      >
        Projects
      </h1>
      <p className="mb-10 text-xl">
        Below are a list of projects. Click on the project below to see more.
      </p>
      <ul>
        <li>Video Editor</li>
        <li>Peer Chat</li>
      </ul>
    </section>
  );
}
