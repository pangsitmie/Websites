import Greetings from "@/components/Greetings";
import Hero from "@/components/Hero";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Greetings />
      <Hero />
    </>
  );
};

export default Home;
