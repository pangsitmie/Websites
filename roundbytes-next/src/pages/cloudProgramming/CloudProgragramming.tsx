import PortfolioCard from "@/components/PortfolioCard";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

import CLOUDPROGRAMMING1 from "@/assets/cloudProgramming1.png";
import CLOUDPROGRAMMING2 from "@/assets/cloudProgramming2.jpg";
import CLOUDPROGRAMMING3 from "@/assets/cloudProgramming3.jpg";

import ProblemSolutionCard from "@/components/ProblemSolutionCard";
import { Container } from "@/components/styles/container/Container.styled";
import WorkHero from "@/pages/about/WorkHero";
import { Flex } from "@/components/styles/Flex.styled";
import { motion } from "framer-motion";

import { H2, H3, P } from "@/components/styles/typography/typography.styled";
import { SyteledCurveTop } from "@/components/styles/container/CurveTop.styled";
import { SyteledCurveBottom } from "@/components/styles/container/CurveBottom.styled";

type Props = {};

const CloudProgramming = (props: Props) => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });
  const { ref: ref1, inView: inView1 } = useInView({
    trackVisibility: true,
    delay: 100,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    trackVisibility: true,
    delay: 100,
  });
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <WorkHero
        title="Redesign of Cloud Programming Online
         website."
        subtitle1="雲程在線"
        subtitle2="WEBSITE"
      />

      {/* CURVE DIV */}
      <div className="relative h-full w-full overflow-hidden  py-28 bg-black text-white">
        <SyteledCurveTop />

        {/* this is the content container */}
        <div className="lg:p-12 xl:p-16 2xl:p-20 p-6 md:p-[10%]">
          <motion.div
            className="show"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="gap-20 py-20">
              <h4 className="mb-4">INTRO</h4>
              <H2>
                we were trusted to do a
                complete overhaul of our company website, which was previously
                outdated and lacked any visual appeal.
                <a href="https://cloudprogrammingonline.com/">
                  <h4 className="align-center mt-5 flex gap-2 text-xl text-primary-100">
                    Visit website <BiLinkExternal />
                  </h4>
                </a>
              </H2>
            </div>
          </motion.div>

          <Flex className="gap-4">
            {/* col1 */}
            <div>
              <div className="mb-4">
                <PortfolioCard
                  image={CLOUDPROGRAMMING1}
                  title={
                    "Started the design process with Figma, that allowed me to create high-fidelity mockups and prototypes of the website's new look and feel."
                  }
                />
              </div>
              <PortfolioCard
                image={CLOUDPROGRAMMING2}
                title={
                  "We also ensure that every element of the website's design met our brand standards and was optimized for user experience."
                }
              />
            </div>
            {/* col2 */}
            <div className="flex flex-col gap-4">
              <PortfolioCard
                image={CLOUDPROGRAMMING3}
                title={
                  "After finalizing the design, We moved on to the implementation phase using React JS. With React, We were able to create a responsive and dynamic website that loads quickly and provides a seamless user experience."
                }
              />
              <Flex className="gap-4">
                <ProblemSolutionCard
                  title={"Problem"}
                  content={
                    "The website was outdated, unappealing, difficult to maintain, and not visually appealing to users."
                  }
                  color={"#F9A826"}
                />
                <ProblemSolutionCard
                  title={"Solution"}
                  content={
                    "Utilize modern design principles and tools such as Figma and React JS to create a visually appealing, and scaleable website."
                  }
                  color={"#0063e3"}
                />
              </Flex>
            </div>
          </Flex>
        </div>

        <SyteledCurveBottom />
      </div>
      {/* curve end */}

      <div className="lg:p-12 xl:p-16 2xl:p-20 bg-white p-6 md:p-[10%]">

        <h4 className="mt-4 text-black">PROCESS</h4>

        <motion.div
          className="show mt-8"
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >

          <H3 className="mb-10 text-black">
            Throughout the redesign process, We paid close attention to every
            detail.
          </H3>
        </motion.div>
        <motion.div
          className="show"
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <P className="text-black">
            From the website's color scheme and typography to the
            placement of call-to-action buttons and the overall layout.
            <br />
            The end result is a website that not only looks great but also
            delivers a clear message to our target audience and encourages
            them to engage with our business.
          </P>
        </motion.div>

        {/* <div>
          <H3 className="mt-28 text-center font-bold text-gray-300">
            PROJECT IS STILL IN PROGRESS
          </H3>
          <h4 className="mt-4 text-center text-gray-300">
            Contact me for more details
          </h4>
        </div> */}
      </div>
    </div>
  );
};

export default CloudProgramming;
