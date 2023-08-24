import Hero from "@/pages/home/Hero";
import MeshGradient from "@/components/MeshGradient";
import { H0, H1, H2, H3, H4, P } from "@/components/styles/typography/typography.styled";
import { SyteledCurveTop } from "@/components/styles/container/CurveTop.styled";
import { SyteledCurveBottom } from "@/components/styles/container/CurveBottom.styled";
import ADS2 from "@/assets/ads2.jpg";
import { CurveContainer } from "@/components/styles/container/CurveContainer.styled";
import MARKETING_IMG from "@/assets//marketing.webp";
import useMediaQuery from "@/hooks/useMediaQuery";
import { MdOutlineEmail } from "react-icons/md";
import { StyledButtonUnderline } from "@/components/styles/button/ButtonUnderline.styled";
import ContactForm from "./home/ContactForm";
type Props = {};

const Home = (props: Props) => {
    const isMobile = useMediaQuery('(max-width: 767px)');


    return (
        <>
            {/* <Hero /> */}
            {/* <MeshGradient /> */}

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
                    <div className={`${isMobile ? 'block' : 'grid grid-cols-2'} mt-[10%]`}>
                        {/* <div className=" mt-24"> */}
                        <div></div>
                        <div className="">
                            <P className="text-white mb-20">
                                Every business holds immense potential,
                                but without a captivating design and persuasive branding,
                                you're just another face in the crowd.
                                We believe that exceptional design can be the
                                rocket fuel your brand needs to disrupt the market.
                                We don't just make your brand look good, we make it
                                unforgettable.
                            </P>
                        </div>
                    </div>
                </CurveContainer >
                <SyteledCurveBottom />
            </div >


            {/* ADS */}



            <div className="mt-4 text-black md:p-[10%] p-[5%]">
                <H2 className="mb-6 font-bold">Impact at scale</H2>
                <P>
                    Our company isn't just an agency, we're a launchpad for brands seeking to make a lasting impact online. We believe that every brand has a unique narrative, a story that sets it apart. As a premier web design agency, our goal is to weave this narrative into an immersive digital experience that stays with your audience long after they've left your website.
                    <br /><br />
                    We're a team of creative designers, experienced developers, and strategic thinkers who are passionate about transforming brands into digital masterpieces. By combining your vision with our expertise, we create websites that are not just visually stunning, but are also strategically designed to engage your audience, drive conversions, and bolster your online presence.
                </P>

                <ContactForm />

            </div>


            {/* CONTACT */}
            {/* < div className="mt-24 lg:p-12 xl:p-16 2xl:p-20 p-6 items-center" >
        <H2 className="font-semibold leading-tight text-center">Contact Us.</H2>
      </ div> */}


            <div className="mb-24">

            </div>
        </>
    );
};

export default Home;
