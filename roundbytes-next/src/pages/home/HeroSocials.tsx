import { BsTiktok, BsDribbble, BsLinkedin, BsInstagram } from "react-icons/bs";

const HeroSocials = () => {
  return (
    <div className='flex items-center gap-24 text-[1.4rem] md:hidden'>
      <a
        href="https://www.linkedin.com/in/jeriel-isaiah-layantara/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className={"text-gray hover:text-blue"} />
      </a>
      <a
        href="https://www.linkedin.com/in/jeriel-isaiah-layantara/"
        target="_blank"
        rel="noreferrer"
      >
        <BsTiktok className={"text-gray hover:text-blue"} />
      </a>
      <a
        href="https://www.linkedin.com/in/jeriel-isaiah-layantara/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className={"text-gray hover:text-blue"} />
      </a>
      {/* <a href="https://github.com/pangsitmie" target="_blank" rel="noreferrer">
        <BsGithub className={"text-gray-400 hover:text-primary-100"} />
      </a> */}
      <a href="/#" target="_blank" rel="noreferrer">
        <BsDribbble className={"text-gray hover:text-blue"} />
      </a>
    </div>
  );
};

export default HeroSocials;
