import { Kode_Mono } from "next/font/google";
import { XCircleIcon } from "@heroicons/react/16/solid";

const kode = Kode_Mono({ weight: "400", subsets: ["latin"] });

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  url: string;
  title?: string;
}

export default function Modal({ isOpen, setIsOpen, url, title }: ModalProps) {
  return isOpen ? (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-slate-800 p-4 rounded-lg shadow-lg max-w-xl">
        <header className="flex justify-between">
          <h2 className={`${kode.className} text-blue-400 text-2xl`}>
            {title}
          </h2>
          <button className="text-white" onClick={() => setIsOpen(false)}>
            <XCircleIcon className="w-6 h-6 text-blue-400" />
          </button>
        </header>
        <video
          controls
          className="mt-4 m-w-full rounded-md"
          width="506"
          height="248"
          poster="/davidkrausetech-poster.svg"
        >
          <source src={url} type="video/mp4" />
        </video>
      </div>
    </div>
  ) : null;
}
