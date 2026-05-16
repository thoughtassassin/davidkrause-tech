"use client";

import { useState, useEffect } from "react";
import { projects } from "@/app/data/projects";
import AnimatedHeading from "@/app/components/AnimatedHeading";
import Project from "@/app/components/Project";
import Modal from "@/app/components/Modal";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalDimensions, setModalDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <section className="min-w-full">
      <AnimatedHeading text="Projects" />
      <ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 p-0 m-0">
        {projects.map((project, index) => (
          <li key={index} className="p-0">
            <Project
              title={project.title}
              description={project.description}
              videos={project.videos}
              link={project.link}
              setIsOpen={setIsOpen}
              setVideoUrl={setVideoUrl}
              setModalTitle={setModalTitle}
              setModalDimensions={setModalDimensions}
            />
          </li>
        ))}
      </ul>
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
