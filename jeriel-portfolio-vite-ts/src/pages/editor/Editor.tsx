import PortfolioCard from "@/components/PortfolioCard";
import React from "react";
import { BiLinkExternal, } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

import EDITOR1 from "@/assets/editor1.png";
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
// import BiLogoPlayStore from "react-icons/bi";

type Props = {};

const Editor = (props: Props) => {
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
                title="Figma editor clone, complex state management with nested elements"
                subtitle1="DESIGN EDITOR"
                subtitle2="WEB APP"
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
                        <Flex className="gap-20 py-20">
                            <h4 className="mt-4">INTRO</h4>
                            <div>
                                <H2>
                                    This project is a test project that I've done for a company.
                                    The<span> goal </span> is to create a design editor web app, with basic functionalities
                                    like <span> Figma </span> where user can create, edit, delete, and move elements.
                                    <span> Bonus feature: </span> nested elements, where user can create a <span>child element</span> inside a parent element.

                                </H2>

                                <div className="flex gap-8 items-center">
                                    <a href="https://codesandbox.io/p/github/pangsitmie/phase-editor/">
                                        <h4 className="align-center mt-5 flex gap-2 text-xl text-indigo-300">
                                            Code Sandbox
                                        </h4>
                                    </a>
                                    <a href="https://github.com/pangsitmie/phase-editor">
                                        <h4 className="align-center mt-5 flex gap-2 text-xl text-indigo-300">
                                            Github
                                        </h4>
                                    </a>
                                    <a href="https://pangsitmie.notion.site/Phase-Editor-Jeriel-Isaiah-8a54eabe40c24002b6f5eb404598465f?pvs=4">
                                        <h4 className="align-center mt-5 flex gap-2 text-xl text-indigo-300">
                                            Notion
                                        </h4>
                                    </a>
                                </div>
                            </div>
                        </Flex>
                    </motion.div>

                    <Flex className="gap-4">
                        {/* col1 */}
                        <div>
                            <div className="mb-4">
                                <PortfolioCard
                                    image={EDITOR1}
                                    title={
                                        "I used Normalization approach to manage the state of the elements, and used Redux to manage the state of the pages, and elements in the canvas"
                                    }
                                />
                            </div>


                        </div>
                        {/* col2 */}
                        <div className="flex flex-col gap-4">

                            <Flex className="gap-4">
                                <ProblemSolutionCard
                                    title={"Challenge"}
                                    content={
                                        `1. Implement a fully interactable UI based on the current layout.\n\n2. Can use Context, Redux, or any other library to manage states.\n\n3. Canvas can be simulated with DOM elements or using HTML Canvas rendering.\n\n4. The data structure implementation requirements have no limitations, but it has to be robust.\n\n5. Try to avoid unnecessary re-render.`}
                                    color={"#F9A826"}
                                />

                                <ProblemSolutionCard
                                    title={"Checklist"}
                                    content={`1. Implement Page switching\n\n2. Implement Element selection\n   * in Element section in LeftPanel\n   * in Canvas\n\n3. Update the Element based on property changes in RightPanel\n\n4. Implement moving or dragging Elements on the Canvas (drag-and-drop)\n\n5. Implement double-click to rename for Elements in Element list section and Pages in Page list section\n\n6. [Bonus] Implement nested Element list (where elements can contain other elements)`}
                                    color={"#0063e3"}
                                />
                            </Flex>
                        </div>
                    </Flex>
                </div>
                <div className="absolute left-[-50%] right-0 top-[95%] h-[500px] w-[200%] rounded-circle bg-white"></div>
            </div>
            {/* curve end */}
            <div className="lg:p-12 xl:p-16 2xl:p-20 bg-white p-6 md:p-[10%]">
                <Flex className="flex gap-4">
                    <h4 className="mt-4 text-black">PROCESS</h4>

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
                                Tech stack: {" "}
                                <span className="font-bold text-indigo-300"> React TS & Vite</span> for
                                development,
                                <span className="font-bold text-indigo-300"> Tailwind & Styled-Componenets</span> for
                                styling and design. Utilizing <span className="font-bold text-indigo-300"> Redux</span> for state management, <span className="font-bold text-indigo-300">Jest & Babel </span> for testing.
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
                            <Flex className="items-center gap-10 mt-28">
                                <PortfolioCard
                                    image={GAMEPAY4}
                                    title={"The biggest difficulty i faced was keeping track of nested elements and their parent-child relationships. "}
                                />
                                <div>
                                    <p className="text-black">
                                        With this single <span className="font-bold text-indigo-300">PageSlice</span> approach, it became incredibly difficult to determine which element was the parent or child of another element.
                                        This also cause chanllenges when trying to delete elements, particularly those with child elements.
                                        <br />
                                        <br />
                                        To overcome these challenges, I decided to explore a different solution: <span className="font-bold text-indigo-300">Normalization </span>

                                        This approach involved restructuring the data using separate entities for pages and elements, each with its own Redux slice (<span className="font-bold text-indigo-300">PageSlice</span> and <span className="font-bold text-indigo-300">ElementSlice</span>).

                                        <br />
                                        <br />
                                        By adopting this normalization approach, I was able to resolve the difficulties I faced earlier.
                                        In normalization, data is organized into separate entities or tables, and relationships between entities are represented using keys.
                                    </p>
                                </div>
                            </Flex>
                        </motion.div>
                    </div>
                </Flex>

            </div>
        </div >
    );
};

export default Editor;
