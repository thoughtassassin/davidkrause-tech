"use client";

import { Sedan } from "next/font/google";

import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";

const sedan = Sedan({ weight: "400", subsets: ["latin"] });

export default function Journey() {
  const [more, setMore] = useState(false);
  return (
    <section className="min-w-full">
      <h1
        className={`${sedan.className} text-6xl md:text-8xl font-bold mb-10 min-w-full text-slate-400`}
      >
        My Journey
      </h1>
      <p className="mb-8 text-xl max-w-xl leading-9">
        My journey as a web technologist began not too long after the
        internet&apos;s public availability in the 90s. Back then, the web was a
        fascinating frontier, and I was eager to unravel its mysteries. As a
        maker at heart, I delved into the intricacies of creating and publishing
        websites.
      </p>
      <div
        style={{ maxHeight: more ? "2000px" : "0" }}
        className={
          more
            ? "more-content transition-all overflow-hidden duration-500 ease-in-out"
            : "more-content transition-all overflow-hidden duration-500 ease-in-out"
        }
      >
        <p className="mb-8 max-w-prose">
          In the early 2000s, I worked as a graphic designer in a community with
          limited web expertise. Determined to bridge the gap, I taught myself
          website development. Armed with Photoshop, Dreamweaver, and Flash, I
          transformed designs into functional websites, even venturing into
          dynamic content management systems with PHP and MySQL.
        </p>
        <p className="mb-8 max-w-prose">
          One standout project involved animating 3D trucks into a carousel,
          showcasing my ability to blend creativity with technical prowess. With
          each project, I expanded my toolkit, diving into mobile app
          development, REST APIs and backend services always hungry to learn and
          innovate.
        </p>
        <p className="mb-8 max-w-prose">
          My journey led me to TexasNIC / Texas.gov, where I spearheaded the
          adoption of JavaScript frameworks like AngularJS and React,
          revolutionizing our web development practices. We didn&apos;t stop
          there—unit testing JavaScript apps became a cornerstone, ensuring
          robust and reliable code.
        </p>
        <p className="mb-8 max-w-prose">
          Transitioning to Magento, acquired by Adobe shortly after I started, I
          tackled integration challenges like solving how to configure, build
          and run Magento deployments within the Adobe Experience Manager
          platform. At OneDay, I continued to push boundaries, enhancing the web
          application with SSO authentication, rich, animated data
          visualizations using ChartJs and a groundbreaking browser-based video
          editor.
        </p>
        <p className="mb-8 max-w-prose">
          Throughout my career, I&apos;ve stayed ahead of the curve, embracing
          trends like server-side rendering and diving into AI and machine
          learning. For me, the joy lies in turning ideas into impactful
          software that resonates with users—a passion that continues to drive
          me forward.
        </p>
      </div>
      <button
        className="text-blue-300 flex grow flex-row items-center gap-2 mt-2 cursor-pointer"
        onClick={() => setMore(!more)}
      >
        <i
          className={
            more
              ? "w-6 h-6 transition-transform"
              : "w-6 h-6 rotate-180 transition-transform"
          }
        >
          <ChevronUpIcon />
        </i>
        {more ? "Less" : "More..."}
      </button>
    </section>
  );
}
