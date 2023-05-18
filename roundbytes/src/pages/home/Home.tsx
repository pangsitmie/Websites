import Hero from "@/pages/home/Hero";
import ContactForm from "./ContactForm";
import MeshGradient from "@/components/MeshGradient";
import { H1, H2, H3 } from "@/components/styles/typography/typography.styled";
import { SyteledCurveTop } from "@/components/styles/container/CurveTop.styled";
import { SyteledCurveBottom } from "@/components/styles/container/CurveBottom.styled";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <MeshGradient />

      {/* CURVE DIV */}
      {/* the content background is inside this div`` */}
      <div className="relative h-full w-full overflow-hidden  py-28 bg-primary-100">
        <SyteledCurveTop />
        <div >
          asdf
        </div>
        <SyteledCurveBottom />

      </div >

      <div className=" lg:p-12 xl:p-16 2xl:p-20 p-6 items-center">
        <H2 className="font-semibold leading-tight text-center">Contact Us.</H2>
      </div>



      <ContactForm />
    </>
  );
};

export default Home;
