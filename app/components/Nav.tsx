'use client';

import { Kode_Mono } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const kode = Kode_Mono({ weight: '400', subsets: ['latin'] });

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="bg-neutral-800 w-full fixed pb-0 md:pb-3 px-8 md:px-24 py-3">
      <div className="flex flex-col md:flex-row justify-between items-start w-full">
        <p
          className={`${kode.className} pt-1 sm:w-full sm:w-min md:grow-0 pb-2 md:pb-0 tracking-widest text-slate-300`}
        >
          davidkrause.tech
        </p>
        <div className="mt-2 mb-1 md:my-0">
          <Link
            className={`${
              pathname === "/"
                ? "border-green-600 border-b-2 text-slate-200"
                : "text-slate-400"
            } text-blue-100 pl-0 md:pl-1 px-1 pt-1 pb-1 uppercase tracking-widest mr-4`}
            href="/"
          >
            My Journey
          </Link>
          <Link
            className={`${
              pathname === "/projects"
                ? "border-green-600 border-b-2 text-slate-200"
                : "text-slate-400"
            } px-1 pt-2 pb-1 uppercase tracking-widest ml-4`}
            href="/projects"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}  