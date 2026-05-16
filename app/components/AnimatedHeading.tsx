"use client";

import { motion } from "framer-motion";
import { Sedan } from "next/font/google";

const sedan = Sedan({ weight: "400", subsets: ["latin"] });

const FROM = { r: 96, g: 165, b: 250 }; // blue-400
const TO = { r: 76, g: 29, b: 149 }; // violet-900

function letterColor(i: number, total: number) {
  const t = total <= 1 ? 0 : i / (total - 1);
  const r = Math.round(FROM.r + (TO.r - FROM.r) * t);
  const g = Math.round(FROM.g + (TO.g - FROM.g) * t);
  const b = Math.round(FROM.b + (TO.b - FROM.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const letter = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 190,
      damping: 20,
      opacity: { duration: 0.5 },
    },
  },
};

export default function AnimatedHeading({ text }: { text: string }) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${sedan.className} text-6xl md:text-8xl font-bold mb-10 min-w-full pb-4`}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          style={{ display: "inline-block", color: letterColor(i, text.length) }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
