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
import { H1, H2, H3, H4 } from "@/components/styles/typography/typography.styled";
import { SyteledCurveTop } from "@/components/styles/container/CurveTop.styled";
import { SyteledCurveBottom } from "@/components/styles/container/CurveBottom.styled";
import TrailText from "@/components/TrailText";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

import { Canvas } from "@react-three/fiber";
import Blob from "@/components/blob/Blob";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {};

const Hero = (props: Props) => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <motion.div
      className={`show ${isMobile ? 'px-[5%]' : 'px-[5%]'} pt-[8%] pb-[18vh] relative`}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className={`${isMobile ? 'block text-center' : 'flex'}`}>
        {/* left */}
        <div className={`${isMobile ? 'mt-16' : 'w-1/2'}`}>
          <TrailText open={true} className="">
            <span className="text-black">We Make</span>
            <span className="text-black">Anything</span>
            <span className="text-black">Look Good</span>
          </TrailText>

          <H4 className="text-primary-100 font-semibold my-6">
            WEB DEVELOPMENT / BRANDING / UI / UX
          </H4>

          <div className={"pl-1 mt-10"}>
            <HeroSocials />
          </div>
        </div>

        {/* blob */}
        <div className={`${isMobile ? 'absolute top-0 left-0 right-0 z-[-1]' : 'static w-[50%]'}`}>
          <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
            <Blob />
          </Canvas>
        </div>

        <StyledMediaContainerGone>
          <a
            href="/projects/behind-the-scene"
            className="font-weight-300 align-center absolute top-[40%] right-0 flex rotate-90 items-center justify-between gap-2 text-gray-400"
          >
            Behind The Scene
            <BsArrowRight />
          </a>
        </StyledMediaContainerGone>
      </div>



    </motion.div>
  );
};

export default Hero;
