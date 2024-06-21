"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { kode } from "@/app/fonts";

import { projects } from "@/app/data/projects";

import Slide from "@/app/components/Slide";
import Modal from "@/app/components/Modal";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalDimensions, setModalDimensions] = useState({ w: 0, h: 0 });

  return (
    <div className="h-[100vh] overflow-y-auto snap-mandatory snap-y">
      {projects.map((project) => (
        <Slide>
          <motion.h1
            initial={{ x: "10%", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.15 },
            }}
            viewport={{ once: true }}
            className={`${kode.className} text-3xl lg:text-[3cqw] max-w-prose mb-2 text-rose-500`}
          >
            {project.title}
          </motion.h1>
          <p className="text-[0.8rem] sm:text-[1rem] md:max-w-[75cqw] lg:text-[1.5cqw] text-white">
            {project.description}
          </p>
          {project.link && (
            <p className="mt-2">
              <a
                className="underline text-slate-200 hover:text-white "
                href={project.link.url}
              >
                {project.link.text}
              </a>
            </p>
          )}
          {project.videos?.length && (
            <div className="mt-2 flex gap-2">
              {project.videos.map((video, index) => (
                <motion.button
                  key={index}
                  layoutId="slide-video"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ y: "50%", opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: (index + 1) * 0.05,
                    },
                  }}
                  viewport={{ once: true }}
                  className="mt-4 mw-48"
                  onClick={() => {
                    if (
                      setIsOpen &&
                      setVideoUrl &&
                      setModalTitle &&
                      setModalDimensions
                    ) {
                      setIsOpen(true);
                      setVideoUrl(video.url);
                      setModalTitle(project.title);
                      setModalDimensions({ w: video.width, h: video.height });
                    }
                  }}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.alt}
                    width={150}
                    height={100}
                    className="rounded border-2 border-black"
                    priority
                  />
                </motion.button>
              ))}
            </div>
          )}
        </Slide>
      ))}
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        url={videoUrl}
        title={modalTitle}
        width={modalDimensions.w}
        height={modalDimensions.h}
      />
    </div>
  );
}
