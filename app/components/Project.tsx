import { Kode_Mono } from "next/font/google";
import Image from "next/image";
const kode = Kode_Mono({ weight: "400", subsets: ["latin"] });

interface ProjectProps {
  title: string;
  description: string;
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
}

export default function Project({
  title,
  description,
  videos,
  setIsOpen,
  setVideoUrl,
  setModalTitle,
  setModalDimensions,
}: ProjectProps) {
  return (
    <div className="p-4 rounded-md shadow-md">
      <h2 className={`${kode.className} text-3xl mb-2 text-rose-500`}>
        {title}
      </h2>
      <p>{description}</p>
      {videos && videos.length > 0 && (
        <div className="mt-2 flex gap-2">
          {videos.map((video, index) => (
            <div
              key={index}
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
                className="rounded border-2 border-white"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
