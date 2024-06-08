"use client";

import { useState, useEffect, useRef } from "react";
import { Sedan } from "next/font/google";
const sedan = Sedan({ weight: "400", subsets: ["latin"] });
import { projects } from "@/app/data/projects";
import Project from "@/app/components/Project";
import Modal from "@/app/components/Modal";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalDimensions, setModalDimensions] = useState({ w: 0, h: 0 });
  const [isVisible, setIsVisible] = useState("");
  const observer = useRef<IntersectionObserver | null>(null);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const entry = entries.find((entry) => entry.isIntersecting);
    if (entry) {
      setIsVisible(entry.target.classList[0].toString());
    } else {
      setIsVisible("");
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (!observer.current) {
      let options = {
        root: document.querySelector("#slide-container"),
        rootMargin: "0px",
        threshold: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4],
      };

      observer.current = new IntersectionObserver(callback, options);
    }
  }, [observer, callback]);

  return (
    <section className="min-w-full h-full bg-black relative m-0 p-0">
      <div className="absolute fixed flex top-[48px] justify-center h-full min-w-full overflow-hidden">
        <h1
          className={`${sedan.className} opacity-60 self-center text-center text-[90px] md:text-[200px] font-bold mb-10 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-900`}
        >
          Projects
        </h1>
      </div>

      <div
        tabIndex={0}
        id="slide-container"
        className="h-[calc(100vh-146px)] top-[48px] relative overflow-y-auto snap-mandatory snap-y"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-[calc(100vh-146px)] w-full flex snap-start"
          >
            <Project
              title={project.title}
              description={project.description}
              videos={project.videos}
              link={project.link}
              setIsOpen={setIsOpen}
              setVideoUrl={setVideoUrl}
              setModalTitle={setModalTitle}
              setModalDimensions={setModalDimensions}
              isVisible={isVisible}
              slide={`slide-${index}`}
              observer={observer}
            />
          </div>
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
