import { Kode_Mono } from "next/font/google";

const kode = Kode_Mono({ weight: "400", subsets: ["latin"] });

interface ProjectProps {
  title: string;
  description: string;
}

export default function Project({ title, description }: ProjectProps) {
  return (
    <div className="p-4 rounded-md shadow-md">
      <h2 className={`${kode.className} text-3xl mb-2 text-rose-500`}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
