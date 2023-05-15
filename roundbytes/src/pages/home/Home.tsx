import Hero from "@/pages/home/Hero";
import ContactForm from "./ContactForm";
import MeshGradient from "@/components/MeshGradient";
import { H1, H2, H3 } from "@/components/styles/typography/typography.styled";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <MeshGradient />
      <Hero />
      <div className=" lg:p-12 xl:p-16 2xl:p-20 p-6 items-center">
        <H2 className="font-semibold leading-tight text-center">Contact Us.</H2>
      </div>



      <ContactForm />
    </>
  );
};

export default Home;
