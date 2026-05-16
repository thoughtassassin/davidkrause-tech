"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "@/app/components/AnimatedHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const inView = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true },
};

export default function Journey() {
  return (
    <section className="min-w-full">
      <AnimatedHeading text="My Journey" />
      <div className="columns-1 lg:columns-2 2xl:columns-3 gap-8">
        <motion.p
          variants={fadeUp}
          {...inView}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 text-xl max-w-xl leading-9"
        >
          I&apos;ve loved drawing since I was a kid — cartoons mostly, inked and
          colored with markers. That led to painting when I started college,
          which is still my primary medium. An MFA from the University of
          Chicago followed, and for a while I taught art and design as an
          adjunct instructor. The visual instinct I bring to every project — the
          sense of space, weight, and movement — comes from there. When I found
          the web in the 90s, I already knew what I liked looking at. Learning
          to make things move on a screen felt like a natural extension of that.
        </motion.p>
        <motion.p
          variants={fadeUp}
          {...inView}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 max-w-prose leading-7"
        >
          In the early 2000s I was working as a graphic designer at an
          advertising agency, doing brand work, print layouts, and eventually
          websites. The web was still relatively new. I was excited to learn how
          to build web experiences and web applicatoins. I taught myself PHP and
          MySQL, connected Dreamweaver templates to databases, and started
          building CMSes so clients could manage their own content. Somewhere in
          there I got deep into Flash and spent hours learning to add animations
          and dynamic interactions.
        </motion.p>
        <motion.p
          variants={fadeUp}
          {...inView}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 max-w-prose leading-7"
        >
          One of those Flash projects was a 3D animated carousel of trucks built
          by a company that customized and manufactured them for use in the oil
          field — and that&apos;s probably where I fell in love with using code
          as a design medium. The idea that mathematics and logic were viable creative
          tools was transformative. Motion became something I kept returning to:
          later in JavaScript, then with ChartJS data visualizations, and
          eventually a full browser-based video editor built from scratch.
        </motion.p>
        <motion.p
          variants={fadeUp}
          {...inView}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 max-w-prose leading-7"
        >
          A few years in, I joined TexasNIC to work on Texas.gov — large-scale
          government software with thousands of forms, regulatory workflows, and
          licensing systems. I introduced React and AngularJS to the team and
          spent a lot of time thinking about how to make complex processes feel
          navigable to people who didn&apos;t want to be using them in the first
          place. That&apos;s the UI/UX problem I find most interesting:
          compelling experiences.
        </motion.p>
        <motion.p
          variants={fadeUp}
          {...inView}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 max-w-prose leading-7"
        >
          At Adobe (via a Magento acquisition) I worked on the overlap between
          e-commerce infrastructure and content management, figuring out how
          deployment pipelines could live inside AEM in a way teams could
          actually follow. Then at OneDay I got to build closer to the surface:
          animated data dashboards, a peer-to-peer chat over WebRTC, and a video
          editor running entirely in the browser. That last one touched every
          layer of the stack and demanded as much design thinking as
          engineering.
        </motion.p>
        <motion.p
          variants={fadeUp}
          {...inView}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 max-w-prose leading-7"
        >
          These days I&apos;m drawn to the places where AI, design, and
          interactive media meet. I still draw. I still notice when something is
          slightly off-kerned or when an animation eases wrong. Those instincts
          don&apos;t turn off when I&apos;m writing code — if anything,
          they&apos;re the part that tells me when something is done.
        </motion.p>
      </div>
    </section>
  );
}
