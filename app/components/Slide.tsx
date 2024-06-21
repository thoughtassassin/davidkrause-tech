import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface SlideProps {
  children: React.ReactNode;
}

const Slide = ({
  children,
}: SlideProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "100px"
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    };
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      className="snap-start w-full h-full flex justify-center items-center px-4"
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: "100%",
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.25,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Slide;
