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
import TrailText from "@/components/TrailText";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

import { Canvas } from "@react-three/fiber";
import Blob from "@/components/blob/Blob";

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
        className={`flex-item-center flex flex-col pt-[10%] pb-80 px-24 md:mx-auto `}
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
          <div className="flex">

            <div className=" w-[50%]">
              <TrailText open={true} className="">
                <span className="text-black">We Make</span>
                <span className="text-black">Anything</span>
                <span className="text-black">Look Good</span>
              </TrailText>

              <TrailText open={true} className="text-primary-100 mt-4">
                <H3>
                  WEB DEVELOPMENT / BRANDING / UI / UX
                </H3>
              </TrailText>

              <div className={"pl-1"}>
                <HeroSocials />
              </div>
            </div>






            {/* blob */}
            <div className=" w-[40%]">
              <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                <Blob />
              </Canvas>
            </div>
          </div>


          <StyledMediaContainerGone>
            <a
              href="/projects/behind-the-scene"
              className="font-weight-300 align-center absolute top-[50%] right-0 flex rotate-90 items-center justify-between gap-2 text-black"
            >
              Behind The Scene
              <BsArrowRight />
            </a>
          </StyledMediaContainerGone>
        </motion.div>



      </div>

    </>
  );
};

export default Hero;
