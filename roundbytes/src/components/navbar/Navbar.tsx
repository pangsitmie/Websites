import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import LOGO_BLACK from "../../assets/logo_black.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ButtonStorke from "../button/ButtonStroke";
import { StyledButtonUnderline } from "../styles/button/ButtonUnderline.styled";
import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  return (
    <nav >
      <div
        className={`${flexBetween} top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <a href="/">
              <img alt="logo" width={"40px"} src={LOGO_BLACK} />
            </a>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 `}></div>
                <div className={`${flexBetween} gap-16 font-semibold`}>
                  <StyledButtonUnderline>
                    <a href="/work" className="text-[16px]">
                      Projects
                    </a>
                  </StyledButtonUnderline>
                  <StyledButtonUnderline>
                    <a href="/work" className="text-[16px]">
                      About Us
                    </a>
                  </StyledButtonUnderline>
                  <StyledButtonUnderline>
                    <a href="/work" className="text-[16px]">
                      Partnerships
                    </a>
                  </StyledButtonUnderline>
                  <StyledButtonUnderline>
                    <a href="/work" className="text-[16px]">
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
