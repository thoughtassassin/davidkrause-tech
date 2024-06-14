import { useEffect } from "react";
import { kode } from "@/app/fonts";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  link?:
    | {
        url: string;
        text: string;
      }
    | undefined;
  videos?: {
    thumbnail: string;
    url: string;
    alt: string;
    width: number;
    height: number;
  }[];
  setIsOpen?: (isOpen: boolean) => void;
  setVideoUrl?: (url: string) => void;
  setModalTitle?: (title: string) => void;
  setModalDimensions?: (dimensions: { w: number; h: number }) => void;
  slide?: string;
}

export default function Project({
  title,
  description,
  videos,
  link,
  setIsOpen,
  setVideoUrl,
  setModalTitle,
  setModalDimensions,
  slide,
}: ProjectProps) {
  const [scope, animate] = useAnimate();

  return (
    <div className="w-full h-[calc(100vh-146px)] flex flex-col justify-center items-center">
      <div>
        <motion.h2
          layoutId={slide}
          initial={{ x: "10%", opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.15 },
          }}
          viewport={{ once: true }}
          className={`${kode.className} text-3xl lg:text-[3cqw] max-w-prose mb-2 text-rose-500`}
        >
          {title}
        </motion.h2>
        <p className="text-[0.9rem] sm:text-[1rem] md:max-w-[75cqw] lg:text-[1.5cqw] text-white">
          {description}
        </p>
        {link && (
          <p className="mt-2">
            <a
              className="underline text-slate-200 hover:text-white "
              href={link.url}
            >
              {link.text}
            </a>
          </p>
        )}
        {videos?.length && (
          <div className="mt-2 flex gap-2">
            {videos.map((video, index) => (
              <motion.button
                key={index}
                layoutId={slide}
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
                    setModalTitle(title);
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
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
