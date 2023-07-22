import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import LOGO_BLACK from "../../assets/logo_black.png";
import LOGO_WHITE from "../../assets/logo_white.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ButtonStorke from "../button/ButtonStroke";
import { StyledButtonUnderline } from "../styles/button/ButtonUnderline.styled";
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from "react-router-dom";
import { P } from "../styles/typography/typography.styled";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  // const [isDarkBackground, setIsDarkBackground] = useState<boolean>(false);

  const location = useLocation();
  const isProjectPath = (location.pathname === '/projects');



  return (
    <nav>
      <div
        className={`${flexBetween} relative z-30 py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <a href="/">
              {isProjectPath ?
                (<img alt="logo" width={"40px"} src={LOGO_WHITE} />) :
                (<img alt="logo" width={"40px"} src={LOGO_BLACK} />)
              }
            </a>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 `}></div>
                <div className={`${flexBetween} gap-16 font-semibold ${isProjectPath ? 'text-white' : 'text-black'}`}>

                  <StyledButtonUnderline>
                    <a href="/projects" className="text-[16px]">
                      Projects
                    </a>
                  </StyledButtonUnderline>
                  <StyledButtonUnderline>
                    <a href="/about" className="text-[16px]">
                      About Us
                    </a>
                  </StyledButtonUnderline>
                  <StyledButtonUnderline>
                    <a href="/parnership" className="text-[16px]">
                      Partnerships
                    </a>
                  </StyledButtonUnderline>
                  <StyledButtonUnderline>
                    <a href="/contact" className="text-[16px]">
                      Contact Us
                    </a>
                  </StyledButtonUnderline>
                  {/* <ButtonStorke text="Contact us" className="text-xl" link={"/contact"} /> */}
                </div>
              </div>
            ) : (
              <button
                className="rounded-full p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-black" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[280px] bg-white drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-9">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[18%] flex flex-col gap-10 text-2xl">
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/contact" className="text-primary-100">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
