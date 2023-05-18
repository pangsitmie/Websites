import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import IMG1 from '@/assets/test.png'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PAHAMFILM_CARD from '@/assets/pahamfilm_card.png'
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
                    img={IMG1}
                    subtitle={"Website"}
                    hoverText={"This project bla"}
                />
                <ProjectCard title={'CLAW MACHINE ALLIANCE'} img={IMG1} subtitle={"Website"} hoverText={"This project bla"} />
                <ProjectCard title={'RAFA\nARCHITECTURE'} img={IMG1} subtitle={"Website"} hoverText={"This project bla"} />
                <ProjectCard title={'雲程在線\nCLOUD'} img={IMG1} subtitle={"Website"} hoverText={"This project bla"} />
                <ProjectCard title={'BEHIND THE\nSCENE'} img={IMG1} subtitle={"Website"} hoverText={"This project bla"} />
                <ProjectCard title={'GAME\nPAY'}
                    img={IMG1}
                    subtitle={"Web App"}
                    hoverText={"This project bla"}
                />
            </Slider>
        </ >
    )
}

export default ProjectCarosel