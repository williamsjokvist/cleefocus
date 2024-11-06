"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export function Carousel(props: { images: string[] }) {
  const { images } = props;
  const duration = 100;

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    console.log(width, width % duration)
    let finalPosition = -width / 2 - 8;
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls?.stop;
  }, [xTranslation, duration, width]);

  return (
    <div className="relative h-[420px] bg-sgray overflow-x-hidden">
      <motion.div
        className="absolute left-0 flex gap-4 w-max py-3"
        style={{ x: xTranslation }}
        ref={ref}
      >
        {[...images, ...images].map((item, idx) => (
          <img
            src={item}
            className="w-80 h-[400px] object-cover pointer-events-none select-none object-left-top rounded-lg gap-10 !m-0 !p-0"
            height="400"
            width="400"
            alt="thumbnail"
            key={"img" + idx}
          />
        ))}
      </motion.div>
    </div>
  );
}
