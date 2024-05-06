import { Kode_Mono } from "next/font/google";
import Image from "next/image";
const kode = Kode_Mono({ weight: "400", subsets: ["latin"] });

interface ProjectProps {
  title: string;
  description: string;
  videos?: { thumbnail: string; url: string, alt: string }[];
}

export default function Project({ title, description, videos }: ProjectProps) {
  return (
    <div className="p-4 rounded-md shadow-md mb-4">
      <h2 className={`${kode.className} text-3xl mb-2 text-rose-500`}>
        {title}
      </h2>
      <p>{description}</p>
      {videos && videos.length > 0 && (
        <div className="mt-2">
          {videos.map((video, index) => (
            <div key={index} className="mt-4 mw-48">
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
