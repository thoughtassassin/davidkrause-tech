"use client";

import { useState } from "react";
import { sedan } from "@/app/fonts";

import { projects } from "@/app/data/projects";
import Project from "@/app/components/Project";
import Modal from "@/app/components/Modal";
import Slide from "@/app/components/Slide";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalDimensions, setModalDimensions] = useState({ w: 0, h: 0 });

  return (
    <section className="min-w-full h-full bg-black relative m-0 p-0">
      <div className="fixed flex top-[48px] justify-center h-[calc(100vh-96px)] w-full overflow-hidden">
        <h1
          className={`${sedan.className} opacity-60 self-center text-center text-[90px] md:text-[200px] font-bold mb-10 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-900`}
        >
          Projects
        </h1>
      </div>
      <div className="h-[calc(101vh-146px)] top-[48px] relative overflow-y-auto snap-mandatory snap-y">
        {projects.map((project, index) => (
          <Slide key={index}>
            <Project
              title={project.title}
              description={project.description}
              videos={project.videos}
              link={project.link}
              setIsOpen={setIsOpen}
              setVideoUrl={setVideoUrl}
              setModalTitle={setModalTitle}
              setModalDimensions={setModalDimensions}
              slide={`slide-${index}`}
            />
          </Slide>
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        url={videoUrl}
        title={modalTitle}
        width={modalDimensions.w}
        height={modalDimensions.h}
      />
    </section>
  );
}
