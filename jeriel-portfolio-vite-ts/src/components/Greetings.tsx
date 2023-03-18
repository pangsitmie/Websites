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

type Props = {};

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

const Greetings = (props: Props) => {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <h2 className="text-8xl">Hello World...</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        {/* i want to put a mp4 video where which take the will width */}
        <video
          src={WELCOME_VID}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Greetings;
