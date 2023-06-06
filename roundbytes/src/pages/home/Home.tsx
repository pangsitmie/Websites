import Hero from "@/pages/home/Hero";
import ContactForm from "./ContactForm";
import MeshGradient from "@/components/MeshGradient";
import { H0, H1, H2, H3, H4 } from "@/components/styles/typography/typography.styled";
import { SyteledCurveTop } from "@/components/styles/container/CurveTop.styled";
import { SyteledCurveBottom } from "@/components/styles/container/CurveBottom.styled";
import { P } from "@/components/styles/typography/typography.styled";
import ADS1 from "@/assets/ads1.jpg";
import ADS2 from "@/assets/ads2.jpg";
import ADS3 from "@/assets/ads3.jpg";
type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <MeshGradient />

      {/* CURVE DIV */}
      <div className="relative h-full w-full overflow-hidden py-28 bg-black">
        <SyteledCurveTop />
        <div className="px-[8%] py-24">
          <div className="grid grid-cols-2 gap-[15%] text-white">
            <div >
              <H4 className="mb-4">MORE THAN DESIGN</H4>
              <H2>Standing out
                <br />
                is not just
                <br />
                an option</H2>
            </div>
            <div>
              <H4 className="text-white mb-20">
                In a digital era dominated by disruptors,
                standing out is not just an option—it's a necessity.
                Your business holds immense potential,
                but without a captivating design and persuasive branding,
                you're just another face in the crowd.
                We believe that exceptional design can be the
                rocket fuel your brand needs to disrupt the market.
                We don't just make your brand look good, we make it
                unforgettable.
              </H4>

            </div>
          </div>
        </div>
        <SyteledCurveBottom />
      </div >


      {/* ADS */}
      <div className="mt-52 px-[8%]  flex flex-col gap-10">
        <div className="flex justify-center gap-10">
          <div>
            <H0 className="font-bold">Ads</H0>
          </div>
          <div
            className="background  w-full rounded-[30px]"
            style={{
              background: `url(${ADS1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="flex justify-center gap-10">
          <div
            className="background  w-full rounded-[50px]"
            style={{
              background: `url(${ADS2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div>
            <H0 className="font-bold">that</H0>
          </div>
        </div>

        <div className="flex justify-center gap-10">
          <div>
            <H0 className="font-bold">deliver</H0>
          </div>
          <div
            className="background  w-full rounded-[30px]"
            style={{
              background: `url(${ADS3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>


      {/* CONTACT */}
      <div className="mt-24 lg:p-12 xl:p-16 2xl:p-20 p-6 items-center">
        <H2 className="font-semibold leading-tight text-center">Contact Us.</H2>
      </div>



      <ContactForm />
    </>
  );
};

export default Home;
