import ProjectCard from './ProjectCard'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProjectData } from '@/types/ProjectData.type';

type Props = {
    data: ProjectData[];
    onItemSelected: (id: number) => void;
}

const ProjectCarosel = ({ data, onItemSelected }: Props) => {
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
                {data.map((item) => {
                    return (
                        <ProjectCard
                            onClick={() => onItemSelected(item.id)}
                            key={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            cardImage={item.cardImage}
                        />
                    )
                })}
            </Slider>
        </ >
    )
}

export default ProjectCarosel