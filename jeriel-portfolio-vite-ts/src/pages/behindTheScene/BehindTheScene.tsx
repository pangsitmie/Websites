import PortfolioCard from "@/components/PortfolioCard";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

import THIS1 from "@/assets/this1.jpg";
import THIS2 from "@/assets/this2.jpg";
import THIS3 from "@/assets/this3.webp";

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

const BehindTheScene = (props: Props) => {
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
        title_1="Take a deep dive into"
        title_2="How this portfolio"
        title_3="was made from scratch"
        subtitle1="JERIEL ISAIAH"
        subtitle2="PORTFOLIO"
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
              <h4 className="mt-4">INTRO</h4>
              <H2>
                My project portfolio website powered by
                <span> React Typescript </span> and <span> Vite </span> for a
                faster and more reliable experience, styled with
                <span> Tailwind CSS + Styled Componenets</span> for a clean,
                reusable, and modern appearance.
                <a href="https://github.com/pangsitmie/Websites/tree/main/jeriel-portfolio-vite-ts">
                  <h4 className="align-center mt-5 flex gap-2 text-xl text-primary-100">
                    Github <BiLinkExternal />
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
                  image={THIS1}
                  title={
                    "I chose to use TypeScript and Vite to practice building more reliable and scalable project. While Vite provides a faster and more efficient development experience, quicker builds and easier debugging."
                  }
                />
              </div>
              <PortfolioCard
                image={THIS2}
                title={
                  "Using Tailwind CSS and Styled Components together allowed me to create highly reusable and consistent components. "
                }
              />
            </div>
            {/* col2 */}
            <div className="flex flex-col gap-4">
              <PortfolioCard
                image={THIS3}
                title={
                  "Tailwind's pre-defined utility classes made it easy to quickly style components, while Styled Components allowed me to create encapsulated and dynamic components that can be easily reused throughout the site.."
                }
              />
              <Flex className="gap-4">
                <ProblemSolutionCard
                  title={"Advantages"}
                  content={
                    "With Tailwind CSS pre-defined utility classes, it is easy to quickly style components."
                  }
                  color={"#F9A826"}
                />
                <ProblemSolutionCard
                  title={"Disadvantage"}
                  content={
                    "To mitigate Tailwind CSS's potential limitation of design flexibility, I combined it with Styled Components to create more dynamic and highly reusable components."
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
              <H2 className="mb-10 text-black">
                With improved tech stack
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
              <P className=" text-black">
                I am able to create reusable
                and dynamic components while maintaining a consistent design
                throughout the site.
                With this portfolio, I am excited to showcase my skills and
                abilities to potential clients and employers.
              </P>
            </motion.div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default BehindTheScene;
