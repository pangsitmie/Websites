import Hero from "@/pages/home/Hero";
import ContactForm from "./ContactForm";
import MeshGradient from "@/components/MeshGradient";
import { H1 } from "@/components/styles/typography/typography.styled";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <MeshGradient />
      <Hero />

      <div className=" lg:p-12 xl:p-16 2xl:p-20 p-6 items-center">
        <H1 className="font-semibold leading-tight text-center">Contact Us.</H1>
      </div>
      <ContactForm />
    </>
  );
};

export default Home;
