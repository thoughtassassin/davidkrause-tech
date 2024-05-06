'use client';

import { useState, useEffect } from "react";
import { Sedan } from "next/font/google";
const sedan = Sedan({ weight: "400", subsets: ["latin"] });
import { projects } from "@/app/data/projects";
import Project from '@/app/components/Project';
import Modal from '@/app/components/Modal';

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
  }, [isOpen]);
  return (
    <section className="min-w-full">
      <h1
        className={`${sedan.className} text-6xl md:text-8xl font-bold mb-10 min-w-full pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-900`}
      >
        Projects
      </h1>
      <ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 p-0 m-0">
        {projects.map((project, index) => (
          <li key={index} className="p-0">
            <Project
              title={project.title}
              description={project.description}
              videos={project.videos}
              setIsOpen={setIsOpen} 
              setVideoUrl={setVideoUrl}
              setModalTitle={setModalTitle}
            />
          </li>
        ))}
      </ul>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} url={videoUrl} title={modalTitle} />
    </section>
  );
}
