import { StyledWorkContainer } from "@/components/styles/WorkContainer.styled";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { H1 } from "@/components/styles/H1.styled";
import ButtonStorke from "@/components/button/ButtonStroke";
import PATTERN1 from "@/assets/pattern1.png";
import PATTERN2 from "@/assets/pattern2.svg";
import PATTERN3 from "@/assets/pattern3.svg";
import PATTERN4 from "@/assets/pattern4.png";
import PATTERN5 from "@/assets/pattern5.png";

import { ScrollAlertContainer } from "@/components/styles/ScrollAlertContainer.styled";
import { BsChevronRight } from "react-icons/bs";

type Props = {};

const Work = (props: Props) => {
  const [showScrollRight, setShowScrollRight] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowScrollRight(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="">
      {showScrollRight && (
        <ScrollAlertContainer className="text-primary-300">
          <BsChevronRight className="text-[25px]" />
        </ScrollAlertContainer>
      )}

      <Slider {...settings}>
        <StyledWorkContainer backgroundImage={PATTERN1}>
          <div className="backgrod flex h-full flex-col justify-center">
            <H1 className="mb-6 font-medium	 leading-tight text-white">
              Bear <br /> Pay
            </H1>
            <ButtonStorke
              text="View Project"
              link="/work/bearpay"
              className="h-[65px] w-[200px]"
            />
          </div>
        </StyledWorkContainer>
        <StyledWorkContainer backgroundImage={PATTERN5}>
          <div className="backgrod flex h-full flex-col justify-center">
            <H1 className="mb-6 font-medium	 leading-tight text-white">
              Design <br /> Editor
            </H1>
            <ButtonStorke
              text="View Project"
              link="/work/editor"
              className="h-[65px] w-[200px]"
            />
          </div>
        </StyledWorkContainer>
        <StyledWorkContainer backgroundImage={PATTERN4}>
          <div className=" flex h-full flex-col justify-center">
            <H1 className="mb-10 font-medium leading-tight text-white ">
              How It's Made
            </H1>
            <ButtonStorke
              text="View Project"
              link="/work/behind-the-scene"
              className="h-[65px] w-[200px]"
            />
          </div>
        </StyledWorkContainer>
        <StyledWorkContainer backgroundImage={PATTERN2}>
          <div className="backgrod flex h-full flex-col justify-center">
            <H1 className="mb-10 font-medium leading-tight text-white ">
              Claw Alliance
            </H1>
            <ButtonStorke
              text="View Project"
              link="/work/alliance"
              className="h-[65px] w-[200px]"
            />
          </div>
        </StyledWorkContainer>
        <StyledWorkContainer backgroundImage={PATTERN3}>
          <div className="backgrod flex h-full flex-col justify-center">
            <H1 className="mb-10 font-medium	 leading-tight text-white">
              雲程在線
              <br />
              Website
            </H1>
            <ButtonStorke
              text="View Project"
              link="/work/cloudProgramming"
              className="h-[65px] w-[200px]"
            />
          </div>
        </StyledWorkContainer>
        <StyledWorkContainer backgroundImage={""}>
          <div className="flex h-full flex-col justify-center">
            <H1 className="mb-10 font-medium	 leading-tight text-white ">
              XState Demo
            </H1>
            <ButtonStorke
              text="View Project"
              link="/work/xstate"
              className="h-[65px] w-[200px]"
            />
          </div>
        </StyledWorkContainer>
      </Slider>
    </div>
  );
};

export default Work;
