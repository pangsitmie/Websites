import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
// import IMG1 from '@/assets/test.png'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PAHAMFILM_CARD from '@/assets/pahamfilm_card.jpg'
import ALLIANCE_CARD from '@/assets/alliance_card.jpg'
import RAFA_CARD from '@/assets/rafa_card.jpg'
import TWINDO_CARD from '@/assets/twindo_card.jpg'
import YUNCHENG_CARD from '@/assets/yuncheng_card.jpg'
import { ALL } from 'dns';
type Props = {}

const ProjectCarosel = (props: Props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings} >

                <ProjectCard
                    title={`PAHAM\nFILM`}
                    img={PAHAMFILM_CARD}
                    subtitle={"Website"}
                    hoverText={"This project bla"}
                />
                <ProjectCard title={'TWINDDO\nFURNITURE'}
                    img={TWINDO_CARD}
                    subtitle={"Website"}
                    hoverText={"This project bla"}
                />
                <ProjectCard title={'CLAW MACHINE ALLIANCE'} img={ALLIANCE_CARD} subtitle={"Website"} hoverText={"This project bla"} />
                <ProjectCard title={'RAFA\nARCHITECTURE'} img={RAFA_CARD} subtitle={"Website"} hoverText={"This project bla"} />
                <ProjectCard title={'雲程在線\nCLOUD'} img={YUNCHENG_CARD} subtitle={"Website"} hoverText={"This project bla"} />
                <ProjectCard title={'BEHIND THE\nSCENE'} img={YUNCHENG_CARD} subtitle={"Website"} hoverText={"This project bla"} />
                <ProjectCard title={'GAME\nPAY'}
                    img={TWINDO_CARD}
                    subtitle={"Web App"}
                    hoverText={"This project bla"}
                />
            </Slider>
        </ >
    )
}

export default ProjectCarosel