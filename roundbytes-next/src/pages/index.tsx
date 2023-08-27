import Hero from "@/pages/home/Hero";
import ContactForm from "./home/ContactForm";
import MeshGradient from "@/components/MeshGradient";
import { SyteledCurveTop } from "@/components/styles/container/CurveTop.styled";
import { SyteledCurveBottom } from "@/components/styles/container/CurveBottom.styled";
import ADS2 from "@/assets/ads2.jpg";
import { CurveContainer } from "@/components/styles/container/CurveContainer.styled";
import Container from "@/components/container";
import Image from "next/image";
import ProjectCard from "./projects/ProjectCard";
import { serviceData } from "@/data/data";
import { Accordion } from "@/components/Accordion";

type Props = {};

const Home = (props: Props) => {

  // const { isMobile } = useMediaQuery();

  return (
    <>
      <Hero />

      {/* video section */}
      <div className="flex justify-center mb-[50px]">
        <div className="w-[75vw]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/videos/alliance_vid.mp4"
          />
        </div>
      </div>

      {/* 2 project section */}
      <Container className="flex justify-center gap-64 mb-[100px]">
        <ProjectCard
          title="Bearpay"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          cardImage="/images/slack.webp"
          className="w-full"
          onClick={() => console.log("clicked")}
        />
        <ProjectCard
          title="Bearpay"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          cardImage="/images/slack.webp"
          className="w-full"
          onClick={() => console.log("clicked")}
        />
      </Container>



      {/* CURVE DIV */}
      <div className="relative h-full w-full overflow-hidden py-64 bg-[#F4F5F8]">
        <SyteledCurveTop />

        {/* CURVE CONTENT */}
        <CurveContainer className="text-black">
          <div>
            <h4 className="text-web-h4 md:text-mobile-h4 mb-4">MORE THAN DESIGN</h4>
            <h2 className="text-web-h2 md:text-mobile-h2">
              Standing out is not
              <span className="text-blue"> just an option — it's a necessity</span>
            </h2>

            <p className=" my-32">
              Every business holds immense potential,
              but without a captivating design and persuasive branding,
              you're just another face in the crowd.
              We believe that exceptional design can be the
              rocket fuel your brand needs to disrupt the market.
              We don't just make your brand look good, we make it
              unforgettable.
            </p>
          </div>

          <div className={``}>
            <div>
              <Accordion data={serviceData} />

            </div>
          </div>
        </CurveContainer >
        <SyteledCurveBottom />
      </div >


      {/* ADS */}



      <Container className="pt-[150px] text-black">
        <h2 className="text-web-h2 mb-36 font-bold">Impact at scale</h2>
        <p className="mb-64">
          Our company isn't just an agency, we're a launchpad for brands seeking to make a lasting impact online. We believe that every brand has a unique narrative, a story that sets it apart. As a premier web design agency, our goal is to weave this narrative into an immersive digital experience that stays with your audience long after they've left your website.
          <br /><br />
          We're a team of creative designers, experienced developers, and strategic thinkers who are passionate about transforming brands into digital masterpieces. By combining your vision with our expertise, we create websites that are not just visually stunning, but are also strategically designed to engage your audience, drive conversions, and bolster your online presence.
        </p>

        <ContactForm />
      </Container>

    </>
  );
};

export default Home;
