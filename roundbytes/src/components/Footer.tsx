import useMediaQuery from "@/hooks/useMediaQuery";
import { StyledButtonUnderline } from "./styles/button/ButtonUnderline.styled";

type Props = {};

const data = [
  { text: "All", link: "/work" },
  { text: "Behind The Scene", link: "/work/behind-the-scene" },
  { text: "Game Pay", link: "/work/gamepay" },
  { text: "Claw Machine Alliance", link: "/work/alliance" },
  {
    text: "Cloud Programming Online",
    link: "/work/cloudProgramming",
  },
  {
    text: "Styled Componenets Demo",
    link: "https://github.com/pangsitmie/Websites/tree/main/styled-components-demo",
  },
  // { text: "Tucope", link: "/work/tucope" },
  // { text: "Moonz", link: "/work/moonz" },
  { text: "XState Demo", link: "/work/xstate" },
];
const flexBetween = "flex items-center justify-center";


const Footer = (props: Props) => {
  // check if it is mobile we want to set visibility to none
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className={` ${isAboveMediumScreens ? "" : "hidden"}`}>
      <div className={`${flexBetween} gap-12 text-[16px] font-semibold pt-20 pb-4`}>
        <StyledButtonUnderline>
          <a href="/work">WORK</a>
        </StyledButtonUnderline>
        <StyledButtonUnderline>
          <a href="/about">ABOUT</a>
        </StyledButtonUnderline>
        <StyledButtonUnderline>
          <a href="/about">PARTNERSHIP</a>
        </StyledButtonUnderline>
        <StyledButtonUnderline>
          <a href="/contact">CONTACT</a>
        </StyledButtonUnderline>
      </div>
      <div className="mb-4 flex items-center justify-center text-[#404040]">
        <p className="mb-2 text-sm"> &copy; Round Bytes</p>
      </div>
    </div>
  );
};
export default Footer;
