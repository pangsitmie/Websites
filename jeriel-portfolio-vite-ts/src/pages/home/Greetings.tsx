import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import WELCOME_VID from "@/assets/welcome_vid.mp4";
import WELCOME_VID_MOBILE from "@/assets/welcome_vid_mobile.mp4";
import { H1 } from "@/components/styles/H1.styled";
import StyledScrollDown from "@/components/styles/ScrollDown.styled";

type Props = {};

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

const Greetings = (props: Props) => {
  const isMobile = window.innerWidth < 768;

  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -250))}>
          <div className="justi flex items-center text-center">
            <H1>Hello World</H1>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        {/* i want to put a mp4 video where which take the will width */}
        {isMobile ? (
          <video
            src={WELCOME_VID_MOBILE}
            autoPlay
            loop
            muted
            playsInline // add the playsinline attribute
            className="h-auto w-full object-cover"
          />
        ) : (
          <video
            src={WELCOME_VID}
            autoPlay
            loop
            muted
            className="h-auto w-full object-cover"
          />
        )}
      </ScrollPage>

      <StyledScrollDown className="mb-4" />
    </ScrollContainer>
  );
};

export default Greetings;
