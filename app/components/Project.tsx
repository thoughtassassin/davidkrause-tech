import { useRef, useEffect } from "react";
import { Kode_Mono } from "next/font/google";
import Image from "next/image";
const kode = Kode_Mono({ weight: "400", subsets: ["latin"] });

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
  isVisible?: string;
  slide?: string;
  observer?: React.MutableRefObject<IntersectionObserver | null>;
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
  isVisible,
  slide,
  observer
}: ProjectProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current && observer?.current) {
      observer.current?.observe(ref.current);
    }

    return () => {
      if (ref.current && observer?.current) {
        observer.current?.unobserve(ref.current);
      }
    };
  }, [ref, observer]);

  return (
    <div
      className={
        isVisible === slide
          ? `${slide} relative top-[1rem] self-center mb-0 mr-4 ml-4 md:ml-16 md:mr-16 transition-opacity opacity-100`
          : `${slide} relative top-[1rem] self-center mb-0 mr-4 ml-4 md:ml-16 md:mr-16 transition-opacity opacity-0`
      }
      ref={ref}
    >
      <h2
        className={
          isVisible === slide
            ? `${kode.className} animate-slide-in text-3xl lg:text-[3cqw] max-w-prose mb-2 text-rose-500`
            : `${kode.className} text-3xl lg:text-[3cqw] mb-2 text-rose-500 translate-y-10 opacity-0`
        }
      >
        {title}
      </h2>
      <p className="text-[0.8rem] sm:text-[1rem] md:max-w-[75cqw] lg:text-[1.5cqw] text-white">
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
            <div
              key={index}
              className={
                isVisible === slide
                  ? "mt-4 mw-48 translate-y-0 opacity-100 animate-slide-up"
                  : "mt-4 mw-48 translate-y-10 opacity-0"
              }
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
