import { useInView } from "react-intersection-observer";
// import { batch, FadeIn, StickyIn, ZoomIn } from "react-scroll-motion";
import { motion } from "framer-motion";
import HeroSocials from "./HeroSocials";
import { BsArrowRight } from "react-icons/bs";
import { StyledMediaContainerGone } from "@/components/styles/MediaContainerGone.styled";
import TrailText from "@/components/TrailText";
// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
import { Canvas } from "@react-three/fiber";
import Blob from "@/components/blob/Blob";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


const Hero = () => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });
  const { isMobile } = useMediaQuery();

  return (
    <motion.div
      className={`h-[80vh] show ${isMobile ? 'px-[5%]' : 'px-[8%]'} pt-[3%] pb-[18vh] relative`}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className={`${isMobile ? 'block text-center' : 'flex items-center justify-between'}`}>
        {/* left */}
        <div className={`${isMobile ? 'mt-24' : ''}`}>
          <TrailText open={true} className="">
            {/* Clay is a global branding and UX design agency */}
            <span className="text-black">Round Bytes</span>
            <span className="text-black">Helps you with</span>
            <span className="text-black">Digital solutions</span>
          </TrailText>

          <h4 className="text-web-h4 md:text-mobile-h4 text-blue font-semibold my-36">
            WEB DEVELOPMENT / BRANDING / UI / UX
          </h4>

          <div className={"pl-1"}>
            <HeroSocials />
          </div>
        </div>

        {/* blob */}
        <div className={`${isMobile ? ' absolute h-[150%] w-full top-[-70%] left-0 right-0 z-[-1]' : 'w-1/2 h-[512px]'}`}>
          <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
            <Blob />
          </Canvas>
        </div>

        <StyledMediaContainerGone>
          <a
            href="/projects/behind-the-scene"
            className="font-weight-300 align-center absolute top-[40%] right-0 flex rotate-90 items-center justify-between gap-2 text-gray md:hidden"
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
