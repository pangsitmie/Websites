import PortfolioCard from "@/components/PortfolioCard";
import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

import ALLIANCE1 from "@/assets/alliance1.png";
import ALLIANCE2 from "@/assets/alliance2.png";
import ALLIANCE3 from "@/assets/alliance3.jpg";
import ALLIANCE4 from "@/assets/alliance4.png";
import ALLIANCE5 from "@/assets/alliance5.png";
import ProblemSolutionCard from "@/components/ProblemSolutionCard";
import { Container } from "@/components/styles/Container.styled";
import WorkHero from "@/pages/about/WorkHero";
import { Flex } from "@/components/styles/Flex.styled";
import { H2 } from "@/components/styles/H2.styled";
import { motion } from "framer-motion";
import { H3 } from "@/components/styles/H3.styled";
import { CurveTop } from "@/components/styles/container/CurveTop.styled";
import { CurveContainer } from "@/components/styles/container/CurveContainer.styled";
import { CurveBottom } from "@/components/styles/container/CurveBottom.styled";
import { P } from "@/components/styles/typography/typography.styled";

type Props = {};

const Alliance = (props: Props) => {
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
        title_1="Discover claw machine"
        title_2="spots and explore"
        title_3="nearby travel destination"
        subtitle1="CLAW MACHINE ALLIANCE"
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
                Expanding audience by creating a website that enables users to
                search for nearby or desired claw machine stores through our
                interactive map feature.
                <a href="https://alliance.cloudprogrammingonline.com/map">
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
                  image={ALLIANCE1}
                  title={
                    "As users browse through our recommended claw machine options, we will also suggest brand partner stores and local tourist attractions"
                  }
                />
              </div>
              <PortfolioCard
                image={ALLIANCE3}
                title={
                  "This will allow them to not only enjoy playing but also make the most of their time in the area."
                }
              />
            </div>
            {/* col2 */}
            <div className="flex flex-col gap-4">
              <PortfolioCard
                image={ALLIANCE2}
                title={
                  "In this website's map system to locate claw machine stores based on city, distance, and many other ways"
                }
              />
              <Flex className="gap-4">
                <ProblemSolutionCard
                  title={"Problem"}
                  content={
                    "Difficulty in locating nearby claw machine stores and increase brand awareness"
                  }
                  color={"#F9A826"}
                />
                <ProblemSolutionCard
                  title={"Solution"}
                  content={
                    "Create an interactive website with a map feature that enables users to easily locate nearby claw machine stores and suggests brand partner stores and local tourist attractions"
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
                Collaborating with various claw machine brands and stores.
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
                <div>
                  <P className="text-black">
                    I was able to develop a dynamic and user-friendly website that
                    aims to raise awareness about the exciting world of claw machine
                    gaming. And with our interactive functionalities such as an intuitive
                    map that locates nearby claw machine stores and popular
                    brand partner locations.
                    <a href="https://alliance.cloudprogrammingonline.com/exhibition/2023">
                      <h4 className="align-center mt-5 flex gap-2 text-xl text-secondary-300">
                        View Page <BiLinkExternal />
                      </h4>
                    </a>
                  </P>
                </div>
                <PortfolioCard
                  image={ALLIANCE4}
                  title={"Exhibition Landing Page"}
                />
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
                <PortfolioCard image={ALLIANCE5} title={"Exhibition Topics"} />
                <div>
                  <P className="text-black">
                    To promote claw machine awareness and tourism, we presented
                    the project to Taichung's local government to refine our
                    website data for users.
                  </P>
                </div>
              </Flex>
            </motion.div>
          </div>
        </Flex>
        <div>
          <H3 className="mt-28 text-center font-bold text-gray-300">
            PROJECT IS STILL IN PROGRESS
          </H3>
          <h4 className="mt-4 text-center text-gray-300">
            It is still not optimized for mobile devices, and this project is
            currently on hold.
            <br />
            Contact me for more details
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Alliance;
