import React from "react";
import ButtonFill from "../../components/button/ButtonFill";
import ButtonStorke from "../../components/button/ButtonStroke";
import { useInView } from "react-intersection-observer";
import { batch, FadeIn, StickyIn, ZoomIn } from "react-scroll-motion";
import { motion } from "framer-motion";
import HeroSocials from "./HeroSocials";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import PortfolioCard from "../../components/PortfolioCard";
import IMG1 from "@/assets/gamepay.png";
import IMG2 from "@/assets/alliance.png";
import IMG3 from "@/assets/yuncheng.png";
import { Flex } from "@/components/styles/Flex.styled";
import { StyledMediaContainerGone } from "@/components/styles/MediaContainerGone.styled";
import CV from "../../assets/Resume_26_MAR_2023.pdf";
import { H1, H2, H3 } from "@/components/styles/typography/typography.styled";
import { SyteledCurveTop } from "@/components/styles/container/CurveTop.styled";
import { SyteledCurveBottom } from "@/components/styles/container/CurveBottom.styled";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

type Props = {};

const Hero = (props: Props) => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>

      <div
        className={`flex-item-center flex flex-col pt-[20%] pb-80 px-24 md:mx-auto `}
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
          <H1 className="mb-2 text-center font-medium px-24">
            Round Bytes is a digital agency that helps your brand create lasting relationships between brands & customers.
          </H1>
          <H3 className="text-center text-gray-400 px-12">
            WEB DEVELOPMENT / BRANDING / UX / UI
          </H3>
          <HeroSocials />
          <StyledMediaContainerGone>
            <a
              href="/work/behind-the-scene"
              className="font-weight-300 align-center absolute bottom-40 right-0 flex rotate-90 items-center justify-between gap-2 text-black"
            >
              Behind The Scene
              <BsArrowRight />
            </a>
          </StyledMediaContainerGone>
        </motion.div>



      </div>
      {/* CURVE DIV */}
      <div className="relative h-full w-full overflow-hidden  py-28 bg-black">
        <SyteledCurveTop />
        <div >
          asdf
        </div>
        <SyteledCurveBottom />

      </div >
    </>
  );
};

export default Hero;
