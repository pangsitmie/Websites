import PortfolioCard from "@/components/PortfolioCard";
import React from "react";
import { BiLinkExternal, } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

import GAMEPAY1 from "@/assets/gamepay1.png";
import GAMEPAY2 from "@/assets/gamepay2.png";
import GAMEPAY3 from "@/assets/gamepay3.jpg";
import GAMEPAY4 from "@/assets/gamepay4.png";
import GAMEPAY5 from "@/assets/gamepay5.png";
import ProblemSolutionCard from "@/components/ProblemSolutionCard";
import { Container } from "@/components/styles/Container.styled";
import WorkHero from "@/pages/about/WorkHero";
import { Flex } from "@/components/styles/Flex.styled";
import { H2 } from "@/components/styles/H2.styled";
import { motion } from "framer-motion";
import { H3 } from "@/components/styles/H3.styled";
import { FaAppStoreIos } from "react-icons/fa";
import { CurveContainer } from "@/components/styles/container/CurveContainer.styled";
import { CurveTop } from "@/components/styles/container/CurveTop.styled";
import { CurveBottom } from "@/components/styles/container/CurveBottom.styled";
// import BiLogoPlayStore from "react-icons/bi";

type Props = {};

const Bearpay = (props: Props) => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });
  const { ref: ref1, inView: inView1 } = useInView({
    trackVisibility: true,
    delay: 100,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    trackVisibility: true,
    delay: 100,
  });
  const { ref: ref3, inView: inView3 } = useInView({
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
        title_1="SaaS+IoT that helps "
        title_2="claw machine stores "
        title_3="manage their business"
        subtitle1="BEAR PAY - WEB APP"
        subtitle2="#40 ENTERTAINMENT APP STORE (JUNE 2023)"
      />

      {/* CURVE DIV */}
      <div className="relative h-full w-full overflow-hidden px-[5%] py-28">
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
              <div>
                <H2>
                  Bear Pay is a
                  <span>
                    {" "}
                    mobile payment solution for playing claw machines.{" "}
                  </span>
                  While business owners can also manage and analyse their business
                  more efficiently through our <span>SaaS web app.</span>
                </H2>

                <div className="flex gap-8 items-center">
                  <a href="https://market-test-backstage.cloudprogrammingonline.com/">
                    <h4 className="align-center mt-5 flex gap-2 text-xl text-indigo-300">
                      IOS
                    </h4>
                  </a>
                  <a href="https://market-test-backstage.cloudprogrammingonline.com/">
                    <h4 className="align-center mt-5 flex gap-2 text-xl text-indigo-300">
                      Android
                    </h4>
                  </a>
                  <a href="https://market-test-backstage.cloudprogrammingonline.com/">
                    <h4 className="align-center mt-5 flex gap-2 text-xl text-indigo-300">
                      Web App
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <Flex className="gap-4">
            {/* col1 */}
            <div>
              <div className="mb-4">
                <PortfolioCard
                  image={GAMEPAY1}
                  title={
                    "In this project, I developed this admin webapp system for our company, brands, and stores to manage their datas"
                  }
                />
              </div>
              <PortfolioCard
                image={GAMEPAY3}
                title={
                  "I also created a user-friendly interface for a statistic and graph feature, which enables users to easily analyze and comprehend their store and machine performance, revenue, and expenses."
                }
              />
            </div>
            {/* col2 */}
            <div className="flex flex-col gap-4">
              <PortfolioCard
                image={GAMEPAY2}
                title={
                  "By using React's Redux and Apollo GQL for state management, I successfully separated features for different entities."
                }
              />
              <Flex className="gap-4">
                <ProblemSolutionCard
                  title={"Problem"}
                  content={
                    "How to reinvent claw machine business management & payment solution"
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
          </Flex>
        </CurveContainer>
        <CurveBottom />
        <div className="absolute left-[-50%] right-0 top-[95%] h-[500px] w-[200%] rounded-circle bg-white">S</div>
      </div>
      {/* curve end */}
      <div className="lg:p-18 xl:p-16 2xl:p-20 bg-white  md:p-[10%] sm:p-[5%] sm:pb-20">
        <Flex className="flex gap-4">
          <div>
            <motion.div
              className="show"
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <h4 className="mt-4 text-black">PROCESS</h4>

              <H2 className="mb-10 text-black">
                I start the development by using
                <span className="font-bold text-indigo-300"> Figma</span> for
                design,{" "}
                <span className="font-bold text-indigo-300"> React.js</span> for
                front-end development, and Apollo
                <span className="font-bold text-indigo-300"> GraphQL</span> for
                seamless client-server communication.
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
              <Flex className="items-center gap-10">
                <PortfolioCard
                  image={GAMEPAY4}
                  title={"Statistics Page (Light Mode)"}
                />
                <div>
                  <H3 className="text-black">
                    While also utilizing
                    <span className="font-bold text-indigo-300">
                      {" "}
                      React MUI
                    </span>{" "}
                    for efficient layouting and styling, resulting in a
                    professional and visually appealing user interface.
                  </H3>
                </div>
              </Flex>
            </motion.div>

            <motion.div
              className="show"
              ref={ref3}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <Flex className="mt-10 items-center gap-10">
                <div>
                  <H3 className="text-black">
                    This web app is also optimized for mobile device and tablet,
                    and is fully responsive.
                  </H3>
                </div>
                <PortfolioCard image={GAMEPAY5} title={"Mobile Version"} />
              </Flex>
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
    </div >
  );
};

export default Bearpay;
