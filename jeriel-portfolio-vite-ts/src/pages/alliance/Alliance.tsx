import PortfolioCard from "@/components/PortfolioCard";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

import ALLIANCE1 from "@/assets/alliance1.png";
import GAMEPAY2 from "@/assets/gamepay2.png";
import ProblemSolutionCard from "@/components/ProblemSolutionCard";
import { Container } from "@/components/styles/Container.styled";
import WorkHero from "@/components/WorkHero";
import { Flex } from "@/components/styles/Flex.styled";
import { H2 } from "@/components/styles/H2.styled";
import { motion } from "framer-motion";
import { H3 } from "@/components/styles/H3.styled";

type Props = {};

const Alliance = (props: Props) => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <WorkHero
        title="Discover the most thrilling claw machine spots, while exploring must-see travel destination nearby."
        subtitle1="CLAW MACHINE ALLIANCE"
        subtitle2="WEBSITE"
      />

      {/* CURVE DIV */}
      <div className="relative h-full w-full overflow-hidden px-4 py-28">
        <div className="absolute left-[-50%] right-0 bottom-[95%] h-[500px] w-[200%] rounded-circle bg-white"></div>
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
            <Flex className="gap-8 py-12">
              <h4 className="mt-4">INTRO</h4>
              <H2>
                Claw Machine Alliance is a
                <span>
                  {" "}
                  mobile payment solution for playing claw machines.{" "}
                </span>
                While business owners can also manage and analyse their business
                more efficiently through our <span>SaaS web app.</span>
                <a href="https://market-test-backstage.cloudprogrammingonline.com/">
                  <h4 className="align-center mt-5 flex gap-2 text-xl text-primary-100">
                    Visit website <BiLinkExternal />
                  </h4>
                </a>
              </H2>
            </Flex>
          </motion.div>

          <Flex className="gap-4">
            {/* col1 */}
            <div>
              <div className="mb-4">
                <PortfolioCard
                  image={ALLIANCE1}
                  title={
                    "Designed the whole website from scratch using Figma, and implemented it with React.js."
                  }
                  redirect={"/"}
                />
              </div>
              <Flex className="gap-4">
                <ProblemSolutionCard
                  title={"Problem"}
                  content={
                    "Locating nearby claw machine stores and enhancing customer engagement with claw machine gaming"
                  }
                  color={"#F9A826"}
                />
                <ProblemSolutionCard
                  title={"Solution"}
                  content={
                    "Utilizing IoT to monitor real-time machine data, and create a mobile payment solution"
                  }
                  color={"#0063e3"}
                />
              </Flex>
            </div>
            {/* col2 */}
            <div>
              <PortfolioCard image={GAMEPAY2} title={"asdf"} redirect={"/"} />
            </div>
          </Flex>
        </div>
        <div className="absolute left-[-50%] right-0 top-[95%] h-[500px] w-[200%] rounded-circle bg-white"></div>
      </div>
      {/* curve end */}
      <div className="lg:p-12 xl:p-16 2xl:p-20 bg-white p-6 md:p-[10%]">
        <Flex className="flex gap-4 pt-12">
          <h4 className="mt-4 text-black">PROCESS</h4>

          <H2 className="text-black">
            I start the developemtn by using
            <span className="font-bold text-indigo-300"> Figma</span> for
            design, <span className="font-bold text-indigo-300"> React.js</span>{" "}
            for front-end development, and Apollo
            <span className="font-bold text-indigo-300"> GraphQL</span> for
            seamless client-server communication.
            <br />
            <br />
            While also utilizing
            <span className="font-bold text-indigo-300"> React MUI</span> for
            efficient layouting and styling, resulting in a professional and
            visually appealing user interface.
          </H2>
        </Flex>
        <div>
          <H3 className="mt-28 text-center font-bold text-indigo-300">
            PROJECT IS STILL IN PROGRESS
          </H3>
          <h4 className="mt-4 text-center text-black">
            Contact me for more details
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Alliance;
