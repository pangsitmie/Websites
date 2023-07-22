import { StyledHeroSocials } from "../../components/styles/HeroSocials.styled";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
type Props = {};

const HeroSocials = (props: Props) => {
  return (
    <StyledHeroSocials>
      <a
        href="https://www.linkedin.com/in/jeriel-isaiah-layantara/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className={"text-gray-400  hover:text-primary-100"} />
      </a>
      {/* <a href="https://github.com/pangsitmie" target="_blank" rel="noreferrer">
        <BsGithub className={"text-gray-400 hover:text-primary-100"} />
      </a> */}
      <a href="/#" target="_blank" rel="noreferrer">
        <BsDribbble className={"text-gray-400  hover:text-primary-100"} />
      </a>
    </StyledHeroSocials>
  );
};

export default HeroSocials;
