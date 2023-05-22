import JERIEL_IMG from "@/assets/jeriel_img.jpg";
import { Flex } from "@/components/styles/Flex.styled";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiCheck } from "react-icons/bi";

import { H1, H2, H3 } from "@/components/styles/typography/typography.styled";
import ContactForm from "../home/ContactForm";

type Props = {};
const Contact = (props: Props) => {
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
    <div className="lg:p-12 xl:p-16 2xl:p-20 p-6 px-[10%]">
      <div className="flex h-[90vh] w-full items-center justify-center">
        <div>
          <H1 className="text-center font-semibold leading-tight">Tell us about.</H1>
          <H2 className="text-right">Your great</H2>
          <H2 className="text-right">Ideas...</H2>
        </div>
      </div>



      {/* EXPERTISE */}

      <div className="flex w-full items-center text-center">
        <div>
          <H1 className="font-semibold leading-tight ">Contact Us.</H1>
          <H3 className="text- pl-1 pt-3 text-left">For further informations</H3>
        </div>
      </div>
      <ContactForm />


      {/* WORK EXPERIENCE */}

    </div>
  );
};
export default Contact;
