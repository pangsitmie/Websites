import Greetings from "@/components/Greetings";
import Hero from "@/pages/home/Hero";
import React from "react";
import ContactForm from "./ContactForm";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Greetings />
      <Hero />
      {/* <ContactForm /> */}
    </>
  );
};

export default Home;
