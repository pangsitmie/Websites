import Hero from "@/pages/home/Hero";
import ContactForm from "./ContactForm";
import MeshGradient from "@/components/MeshGradient";
import { H0, H1, H2, H3, H4, P } from "@/components/styles/typography/typography.styled";
import { SyteledCurveTop } from "@/components/styles/container/CurveTop.styled";
import { SyteledCurveBottom } from "@/components/styles/container/CurveBottom.styled";
import ADS2 from "@/assets/ads2.jpg";
import { CurveContainer } from "@/components/styles/container/CurveContainer.styled";
import MARKETING_IMG from "@/assets//marketing.webp";
type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <MeshGradient />

      {/* CURVE DIV */}
      <div className="relative h-full w-full overflow-hidden py-28 bg-[#280F91]">
        <SyteledCurveTop />
        {/* CURVE CONTENT */}
        <CurveContainer className="text-white">
          <div >
            <H4 className="mb-4">MORE THAN DESIGN</H4>
            <H2>
              Standing out is not
              <span className="text-[#FFA5F0]"> just an option — it's a necessity</span>
            </H2>
          </div>

          <div className="grid grid-cols-2 mt-24">
            <div></div>
            <div className="">
              <H3 className="text-white mb-20">
                Every holds immense potential,
                but without a captivating design and persuasive branding,
                you're just another face in the crowd.
                We believe that exceptional design can be the
                rocket fuel your brand needs to disrupt the market.
                We don't just make your brand look good, we make it
                unforgettable.
              </H3>
            </div>
          </div>

          <div className="mt-4">
            <H2 className="mb-6">Impact at scale</H2>
            <P>
              Our company isn't just an agency, we're a launchpad for brands seeking to make a lasting impact online. We believe that every brand has a unique narrative, a story that sets it apart. As a premier web design agency, our goal is to weave this narrative into an immersive digital experience that stays with your audience long after they've left your website.

              We're a team of creative designers, experienced developers, and strategic thinkers who are passionate about transforming brands into digital masterpieces. By combining your vision with our expertise, we create websites that are not just visually stunning, but are also strategically designed to engage your audience, drive conversions, and bolster your online presence.
            </P>
          </div>



        </CurveContainer >
        <SyteledCurveBottom />
      </div >


      {/* ADS */}
      < div className="mt-52 px-[8%]  flex flex-col gap-10" >
        {/* <div className="flex justify-center gap-10">
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
        </div> */}

        <div className="flex justify-center gap-10" >
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
        </div >

        {/* <div className="flex justify-center gap-10">
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
        </div> */}
      </div >


      {/* CONTACT */}
      < div className="mt-24 lg:p-12 xl:p-16 2xl:p-20 p-6 items-center" >
        <H2 className="font-semibold leading-tight text-center">Contact Us.</H2>
      </ div>



      <ContactForm />
    </>
  );
};

export default Home;
