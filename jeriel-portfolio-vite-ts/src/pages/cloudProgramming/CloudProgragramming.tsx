import PortfolioCard from "@/components/PortfolioCard";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

import CLOUDPROGRAMMING1 from "@/assets/cloudProgramming1.png";
import CLOUDPROGRAMMING2 from "@/assets/cloudProgramming2.jpg";
import CLOUDPROGRAMMING3 from "@/assets/cloudProgramming3.jpg";

import ProblemSolutionCard from "@/components/ProblemSolutionCard";
import { Container } from "@/components/styles/Container.styled";
import WorkHero from "@/pages/about/WorkHero";
import { Flex } from "@/components/styles/Flex.styled";
import { H2 } from "@/components/styles/H2.styled";
import { motion } from "framer-motion";
import { H3 } from "@/components/styles/H3.styled";
import { CurveBottom } from "@/components/styles/container/CurveBottom.styled";
import { CurveContainer } from "@/components/styles/container/CurveContainer.styled";
import { CurveTop } from "@/components/styles/container/CurveTop.styled";
import { P } from "@/components/styles/typography/typography.styled";

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
        title_1="Reimagine & redesign"
        title_2="Cloud Programming Online"
        title_3="website & branding."
        subtitle1="雲程在線"
        subtitle2="WEBSITE"
      />

      {/* CURVE DIV */}
      <div className="relative h-full w-full overflow-hidden px-4 py-28">
        <CurveTop />
        {/* this is the content container */}
        <CurveContainer>
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
                As the lead designer and developer, I was tasked with the
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
                  "I also ensure that every element of the website's design met our brand standards and was optimized for user experience."
                }
              />
            </div>
            {/* col2 */}
            <div className="flex flex-col gap-4">
              <PortfolioCard
                image={CLOUDPROGRAMMING3}
                title={
                  "After finalizing the design, I moved on to the implementation phase using React JS. With React, I was able to create a responsive and dynamic website that loads quickly and provides a seamless user experience."
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
        </CurveContainer>
        <CurveBottom />
      </div>
      {/* curve end */}
      <div className="lg:p-18 xl:p-16 2xl:p-20 bg-white md:p-[10%] sm:p-[5%] sm:pb-20">
        <Flex className="flex gap-4 pt-12">

          <div>
            <motion.div
              className="show"
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <h4 className="mb-4 text-black">PROCESS</h4>

              <H2 className="mb-10 text-black">
                Throughout the redesign process, attention to details is the main focus.
              </H2>
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
                The end result is a website that not only looks great but also
                delivers a clear message to our target audience and encourages
                them to engage with our business.
              </P>
            </motion.div>
          </div>
        </Flex>

        <div>
          <H3 className="mt-28 text-center font-bold text-gray-300">
            PROJECT IS STILL IN PROGRESS
          </H3>
          <h4 className="mt-4 text-center text-gray-300">
            Contact me for more details
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CloudProgramming;
