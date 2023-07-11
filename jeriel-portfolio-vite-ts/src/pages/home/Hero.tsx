import React from "react";
import ButtonFill from "../../components/button/ButtonFill";
import ButtonStorke from "../../components/button/ButtonStroke";
import { useInView } from "react-intersection-observer";
import { batch, FadeIn, StickyIn, ZoomIn } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
import { motion } from "framer-motion";
import HeroSocials from "./HeroSocials";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import PortfolioCard from "../../components/PortfolioCard";
// import IMG1 from "@/assets/this.gif";
import IMG1 from "@/assets/gamepay.png";
import IMG_ALLIANCE from "@/assets/alliance.png";
import IMG_EDITOR from "@/assets/editor2.png";
import { Flex } from "@/components/styles/Flex.styled";
import { StyledMediaContainerGone } from "@/components/styles/MediaContainerGone.styled";
import { H1 } from "@/components/styles/H1.styled";
import CV from "../../assets/JERIEL_RESUME_25_JUN_2023.pdf";

type Props = {};

const Hero = (props: Props) => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className={`flex-item-center flex flex-col pt-[20%] pb-64 md:container md:mx-auto `}
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
        <H1 className="mb-2 text-center  font-semibold">
          Jeriel Isaiah
        </H1>
        <h2 className="text-center text-xl text-primary-100">
          Web developer & designer
        </h2>
        <HeroSocials />
        <div className="mt-10 flex justify-center gap-5">
          <ButtonFill text="Contact" link="#contact" />
          <ButtonStorke text="Resume" link={CV} />

        </div>
        <StyledMediaContainerGone>
          <a
            href="/work/behind-the-scene"
            className="font-weight-300 align-center absolute bottom-10 right-0 flex rotate-90 items-center justify-between gap-2 text-primary-100"
          >
            Behind The Scene
            <BsArrowRight />
          </a>
        </StyledMediaContainerGone>
      </motion.div>

      {/* portfolio 3 grid cards */}
      <Flex className="mt-20 gap-5 p-[5%]">
        <PortfolioCard
          title={"Bearpay"}
          image={IMG1}
          redirect={"/work/gamepay"}
        />
        <PortfolioCard
          title={"Behind The Scene"}
          image={IMG_EDITOR}
          redirect={"/work/behind-the-scene"}
        />
        <PortfolioCard
          title={"Claw Machine Alliance"}
          image={IMG_ALLIANCE}
          redirect={"/work/alliance"}
        />
      </Flex>
      {/* </div> */}
    </div>
  );
};

export default Hero;
