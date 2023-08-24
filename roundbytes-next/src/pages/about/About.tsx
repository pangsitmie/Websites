import AboutImageCard from "./AboutImageCard";
import JERIEL_IMG from "@/assets/jeriel_img.jpg";
import { Flex } from "@/components/styles/Flex.styled";
import AboutCard from "./AboutCard";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiCheck } from "react-icons/bi";
import ExpertiseCard from "./ExpertiseCard";
import ExperienceCard from "./ExperienceCard";
import { H1 } from "@/components/styles/typography/typography.styled";

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
    <div className="md:px-[10%] px-[5%] pb-20">
      <div className="flex h-[90vh] w-full items-center justify-center">
        <div>
          <H1 className="text-center font-semibold leading-tight">About us.</H1>
          <h4 className="text-right">EXPERIENCES</h4>
          <h5 className="text-right">& EXPERTISE</h5>
        </div>
      </div>

      <Flex className="gap-28 overflow-hidden">
        <AboutImageCard img={JERIEL_IMG} />
        <div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <AboutCard icon={FaAward} title="Expericence" subtitle="2+ Years" />
            <AboutCard icon={FiUsers} title="Websites" subtitle="6+ Managed" />
            <AboutCard
              icon={VscFolderLibrary}
              title="Projects"
              subtitle="10+ Completed"
            />
          </div>
          <div className="mt-10">
            <p>
              As a web developer, I specialize in creating visually appealing
              and highly scalable digital products and experiences. I have
              gained valuable experience through an internship at a well-known
              company and by freelancing in the field, where I have honed my
              skills in building beautiful and accessible products for clients.
              <br />
              <br />
              I am committed to delivering high-quality work and innovative
              websites and mobile apps. I also help clients establish a strong
              and engaging online presence.
              <br />
              <br />
              Recently, I have been working with various cutting-edge
              technologies such as
              <div className="mt-4 grid grid-cols-2 gap-2">
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind</span>
                <span>GraphQL</span>
                <span>Styled Componenets</span>
              </div>
            </p>
          </div>
        </div>
      </Flex>

      {/* EXPERTISE */}
      <Flex className="mt-[15%] gap-8">
        <ExpertiseCard title="Frontend" data={FrontEndData} />
        <ExpertiseCard title="Android" data={AndroidData} />
      </Flex>

      <div className="flex w-full items-center  pt-[20%]">
        <div>
          <H1 className="font-semibold leading-tight">Experience.</H1>
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
