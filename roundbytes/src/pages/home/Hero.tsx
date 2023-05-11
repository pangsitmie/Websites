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
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

type Props = {};

const Hero = (props: Props) => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className={`flex-item-center flex flex-col pt-[20%] pb-80 md:container md:mx-auto `}
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
        <H1 className="mb-2 text-center font-semibold">
          Round Bytes
        </H1>
        <H3 className="text-center text-gray-400 px-12">
          WEB DEVELOPMENT / BRANDING / UX / UI
        </H3>
        <HeroSocials />
        <StyledMediaContainerGone>
          <a
            href="/work/behind-the-scene"
            className="font-weight-300 align-center absolute bottom-10 right-0 flex rotate-90 items-center justify-between gap-2 text-gray-400"
          >
            Behind The Scene
            <BsArrowRight />
          </a>
        </StyledMediaContainerGone>
      </motion.div>

      {/* portfolio 3 grid cards */}
      <Flex className="mt-20 gap-5 p-4">
        <PortfolioCard
          title={"Game Pay"}
          image={IMG1}
          redirect={"/work/gamepay"}
        />
        <PortfolioCard
          title={"Claw Machine Alliance"}
          image={IMG2}
          redirect={"/work/alliance"}
        />
        <PortfolioCard
          title={"雲程在線"}
          image={IMG3}
          redirect={"/work/cloudProgramming"}
        />
      </Flex>
      {/* </div> */}
    </div>
  );
};

export default Hero;
