import React from "react";
import ButtonFill from "./ButtonFill";
import ButtonStorke from "./ButtonStroke";
import { useInView } from "react-intersection-observer";
import { batch, FadeIn, StickyIn, ZoomIn } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
import { motion } from "framer-motion";
import HeroSocials from "./HeroSocials";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";

type Props = {};

const Hero = (props: Props) => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className={`flex-item-center flex flex-col pt-80 pb-80 md:container md:mx-auto `}
    >
      <motion.div
        className="show"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {" "}
        <h1 className="mb-7 text-center text-8xl font-bold">Jeriel Isaiah</h1>
        <h2 className="text-center text-2xl text-primary-100">
          Web developer & designer
        </h2>
        <HeroSocials />
        <div className="mt-10 flex justify-center gap-10">
          <ButtonStorke text="Resume" link="/cv.pdf" className="my-btn" />
          <ButtonFill text="Contact" link="/cv.pdf" className="my-btn" />
        </div>
        <a
          href="#contact"
          className="font-weight-300 align-center absolute bottom-10 right-0 flex rotate-90 items-center justify-between gap-2 text-primary-100"
        >
          Scroll Down
          <BsArrowRight />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
