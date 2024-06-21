import { useEffect }  from "react";
import { Kode_Mono } from "next/font/google";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

const kode = Kode_Mono({ weight: "400", subsets: ["latin"] });

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  url: string;
  title?: string;
  width?: number;
  height?: number;
}

export default function Modal({ isOpen, setIsOpen, url, title, width, height }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  
  return isOpen ? (
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(false)}
      }
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="bg-slate-800 p-4 rounded-lg shadow-lg max-w-xl">
        <header className="flex justify-between">
          <h2 className={`${kode.className} text-blue-400 text-2xl`}>
            {title}
          </h2>
          <button className="text-white" onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false)
            }}>
            <XCircleIcon className="w-6 h-6 text-blue-400" />
          </button>
        </header>
        <video
          controls
          className="mt-4 m-w-full rounded-md"
          width={width}
          height={height}
        >
          <source src={url} type="video/mp4" />
        </video>
      </div>
    </motion.div>
  ) : null;
}
