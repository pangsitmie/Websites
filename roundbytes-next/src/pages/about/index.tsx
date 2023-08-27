import AboutImageCard from "./AboutImageCard";
import { Flex } from "@/components/styles/Flex.styled";
import AboutCard from "./AboutCard";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiCheck } from "react-icons/bi";
import ExpertiseCard from "./ExpertiseCard";
import ExperienceCard from "./ExperienceCard";
import Image from "next/image";
import Container from "@/components/container";

type Props = {};
const About = (props: Props) => {
  const FrontEndData = [
    { name: "HTML & CSS", level: "Experienced" },
    { name: "React", level: "Experienced" },
    { name: "JavaScript", level: "Experienced" },
    { name: "TypeScript", level: "Beginner" },
    { name: "Tailwind", level: "Beginner" },
    { name: "GraphQL", level: "Experienced" },
  ];

  const AndroidData = [
    { name: "Android Studio", level: "Experienced" },
    { name: "XML", level: "Experienced" },
    { name: "JAVA", level: "Experienced" },
    { name: "MVVM", level: "Beginner" },
    { name: "Fibrebase", level: "Experienced" },
    { name: "Live Data", level: "Intermediate" },
  ];

  const FrontEndExperienceData = [
    "Developed a comprehensive admin webapp to facilitate data & performance management for claw machine brands.",
    "Utilized Vite, Tailwind CSS and Styled Components to build highly scalable and reusable components, resulting in an efficient and easily maintainable codebase.",
    "Implemented GraphQL as the primary API provider, optimizing its usage to achieve a substantial 50% improvement in loading time",
    "Employed advanced React state management techniques, including Redux, to effectively segregate features and functionalities across multiple entities within the web application.",
    "Leveraged the React Material-UI (MUI) component library to ensure consistency and ease-of-use across the entire application, delivering a streamlined user experience.",
  ];

  const AndroidDeveloperExperienceData = [
    "Developed Tucope app for crypto portfolio management with CoinMarketCap API integration to calculate real time market value.",
    "Created a data science and machine learning-based Android app for crypto price prediction and recommendation using MVVM, Live Data, Firebase and Binance API.",
    "Developed a demo app for selling expiring foods to reduce waste, successfully funded by National Yunlin University, highlighting my skills in social impact app development.",
  ];

  const WordpressDeveloperExperienceData = [
    "Pahamfilm.com",
    "Twindofurniture.com",
    "Rafahl.com",
    "Others",
  ];

  return (
    <div>
      <Container className="flex h-[80vh] w-full items-center justify-center">
        <div>
          <h1 className="text-web-h0 md:text-mobile-h1 text-center font-semibold leading-tight">About Us.</h1>
          <h4 className="text-right">EXPERIENCES</h4>
          <h5 className="text-right">& EXPERTISE</h5>
        </div>
      </Container>


      <div className="bg-black">
        <Image alt='' src="/images/about-us.jpg" width={1920} height={1080} />

      </div>


      {/* EXPERTISE */}
      <Flex className="mt-[15%] gap-8">
        <ExpertiseCard title="Frontend" data={FrontEndData} />
        <ExpertiseCard title="Android" data={AndroidData} />
      </Flex>

      <div className="flex w-full items-center  pt-[20%]">
        <div>
          <h1 className="text-h1 font-semibold leading-tight">Experience.</h1>
          <h4 className="text- pl-1 pt-3 text-left">WHERE I'VE WORKED</h4>
        </div>
      </div>

      {/* WORK EXPERIENCE */}
      <Flex className="mt-10 gap-8">
        <ExperienceCard title="陸豪科技" data={FrontEndExperienceData} />
        <ExperienceCard
          title="Android Developer"
          data={AndroidDeveloperExperienceData}
        />
        <ExperienceCard
          title="WordPress Engineer"
          data={WordpressDeveloperExperienceData}
        />
      </Flex>
    </div>
  );
};
export default About;
