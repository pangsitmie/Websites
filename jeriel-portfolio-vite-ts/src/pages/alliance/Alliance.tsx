import PortfolioCard from "@/components/PortfolioCard";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

import GAMEPAY1 from "@/assets/gamepay1.png";
import GAMEPAY2 from "@/assets/gamepay2.png";
import ProblemSolutionCard from "@/components/ProblemSolutionCard";
type Props = {};

const Alliance = (props: Props) => {
  return (
    <div>
      <div className="flex h-[90vh] w-full items-center justify-center bg-white px-20 pt-8 text-black">
        <div>
          <h1 className=" text-8xl  leading-tight">
            Discover the most thrilling claw machine spots, while exploring
            must-see travel destination nearby.
          </h1>
          <h4 className="text-right">CLAW MACHINE ALLIANCE</h4>
          <h5 className="text-right text-indigo-300">WEBSITE</h5>
        </div>
      </div>

      {/* CURVE DIV */}
      <div className="relative h-full w-full overflow-hidden p-24 pb-28">
        <div className="absolute left-[-50%] right-0 bottom-[95%] h-[500px] w-[200%] rounded-circle bg-white"></div>
        {/* this is the content container */}
        <div className="">
          <div className="flex gap-12 pt-12">
            <h4 className="mt-4">INTRO</h4>
            <h2 className="text-6xl leading-tight">
              Claw Machine Alliance is a
              <span> mobile payment solution for playing claw machines. </span>
              While business owners can also manage and analyse their business
              more efficiently through our <span>SaaS web app.</span>
              <a href="https://market-test-backstage.cloudprogrammingonline.com/">
                <h4 className="align-center mt-5 flex gap-2 text-xl text-primary-100">
                  Visit website <BiLinkExternal />
                </h4>
              </a>
            </h2>
          </div>

          <div className="mt-12 flex gap-5">
            {/* col1 */}
            <div>
              <div>
                <PortfolioCard image={GAMEPAY1} title={"asdf"} redirect={"/"} />
              </div>
              <div className="align-center mt-5 flex gap-5">
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
              </div>
            </div>
            {/* col2 */}
            <div>
              <PortfolioCard image={GAMEPAY2} title={"asdf"} redirect={"/"} />
            </div>
          </div>
        </div>
        <div className="absolute left-[-50%] right-0 top-[95%] h-[500px] w-[200%] rounded-circle bg-white"></div>
      </div>
      {/* curve end */}
      <div className=" bg-white p-24">
        <div className="flex gap-12">
          <div>
            <h4 className="mt-4 text-black">PROCESS</h4>
          </div>
          <div>
            <p className="text-6xl leading-tight text-black">
              I start the developemtn by using
              <span className="font-bold text-indigo-300"> Figma</span> for
              design,{" "}
              <span className="font-bold text-indigo-300"> React.js</span> for
              front-end development, and Apollo
              <span className="font-bold text-indigo-300"> GraphQL</span> for
              seamless client-server communication.
              <br />
              <br />
              While also utilizing
              <span className="font-bold text-indigo-300"> React MUI</span> for
              efficient layouting and styling, resulting in a professional and
              visually appealing user interface.
            </p>
          </div>
        </div>
        <div>
          <h4 className="mt-28 text-center text-4xl font-bold text-indigo-300">
            PROJECT IS STILL IN PROGRESS
          </h4>
          <h4 className="mt-4 text-center text-xl text-black">
            CONTACT ME FOR MORE DETAILS
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Alliance;
