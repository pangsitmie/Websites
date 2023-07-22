import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import LOGO_BLACK from "../../assets/logo_black.png";
import LOGO_WHITE from "../../assets/logo_white.png";

import ButtonStorke from "../button/ButtonStroke";
import { useLocation, useNavigate } from "react-router-dom";
import { SelectedPage } from "../../shared/types";
import { StyledButtonUnderline } from "../button/ButtonUnderline.styled";
import useMediaQuery from "../../hooks/useMediaQuery";
import { StyledButtonFill } from "../styles/ButtonFill.styled";

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
        <div className={`w-full flex justify-between gap-16 px-16`}>
          {/* LEFT SIDE */}
          <div>
            <a href="/">
              {isProjectPath ?
                (<img alt="logo" width={"40px"} src={LOGO_WHITE} />) :
                (<img alt="logo" width={"40px"} src={LOGO_BLACK} />)
              }
            </a>
          </div>

          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <div className="w-1/2">
              <div className={`flex gap-10 font-semibold justify-end items-center`}>

                <StyledButtonUnderline>
                  <a href="/recepies" className="text-[16px] text-black">
                    CookTail
                  </a>
                </StyledButtonUnderline>
                <StyledButtonUnderline>
                  <a href="/recepies" className="text-[16px] text-black">
                    Recepies
                  </a>
                </StyledButtonUnderline>
                <StyledButtonUnderline>
                  <a href="/about" className="text-[16px] text-black">
                    About
                  </a>
                </StyledButtonUnderline>
                <StyledButtonUnderline>
                  <a href="/contact" className="text-[16px] text-black">
                    Contact
                  </a>
                </StyledButtonUnderline>

                <div>
                  <StyledButtonFill
                  >
                    Log In
                  </StyledButtonFill>
                </div>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <FaBars className="h-6 w-6 text-black" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[280px] bg-white drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-9">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FaBars className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[18%] flex flex-col gap-10 text-2xl">
            <a href="/work">Work</a>
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
