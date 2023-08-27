import { useState } from 'react';
import { SelectedPage } from '@/shared/types';
import { StyledButtonUnderline } from '../styles/button/ButtonUnderline.styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  // const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const { isDesktop } = useMediaQuery();

  const router = useRouter();
  const isProjectPath = router.pathname.startsWith('/projects');

  return (
    <nav>
      <div className={`${flexBetween} relative z-30  py-36`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <Link href="/" passHref>
              {isProjectPath ? (
                <Image alt="logo" width={40} height={40} src="/images/logo_white.png" priority={true} />
              ) : (
                <Image alt="logo" width={40} height={40} src={"/images/logo_black.png"} priority={true} />
              )}
            </Link>
            {/* RIGHT SIDE */}
            {isDesktop ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} `}></div>
                <div className={`${flexBetween} gap-36 font-semibold ${isProjectPath ? 'text-white' : 'text-black'}`}>
                  <Link href="/projects" passHref>
                    <StyledButtonUnderline className="text-[16px]">
                      Projects
                    </StyledButtonUnderline>
                  </Link>
                  <Link href="/about" passHref>
                    <StyledButtonUnderline className="text-[16px]">
                      About Us
                    </StyledButtonUnderline>
                  </Link>
                  <Link href="/partnerships" passHref>
                    <StyledButtonUnderline className="text-[16px]">
                      Partnership
                    </StyledButtonUnderline>
                  </Link>
                  <Link href="/contact" passHref>
                    <StyledButtonUnderline className="text-[16px]">
                      Contact
                    </StyledButtonUnderline>
                  </Link>
                  {/* Add other links here */}
                </div>
              </div>
            ) : (
              <button
                className="rounded-full"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-24 w-24 text-black" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isDesktop && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[250px] bg-white drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-24">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-24 w-24 text-gray" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[18%] mt-24 flex flex-col gap-24 text-mobile-body-18">
            <Link href="/projects" passHref className='active:text-blue'>
              Projects
            </Link>
            <Link href="/about" className='active:text-blue' passHref>
              About
            </Link>
            <Link href="/contact" className='active:text-blue' passHref>
              Contact
            </Link>
            {/* Add other mobile menu links here */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
