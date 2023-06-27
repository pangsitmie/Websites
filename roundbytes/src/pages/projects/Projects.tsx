import TrailText from '@/components/TrailText'
import ButtonFill from '@/components/button/ButtonFill'
import { H0, H3, H4, P } from '@/components/styles/typography/typography.styled'
import ProjectCarosel from './ProjectCarosel'
import { useState } from 'react'
import { projectData } from '@/data/projectData'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import ProjectCard from './ProjectCard'


type Props = {}

const Projects = (props: Props) => {

    //this is the data list for the carosel
    const data = projectData;

    const [selectedItem, setSelectedItem] = useState(0);

    // react slick
    // return (
    //     <div className='flex items-center overflow-y-hidden pt-10'>
    //         {/* <video src={BEARPAY_WALLPAPER} controls /> */}
    //         <video
    //             src={data[selectedItem].backgroundImage}
    //             autoPlay
    //             loop
    //             muted
    //             className="absolute top-0 left-0 min-w-full min-h-full object-cover"
    //         />

    //         {/* this is the text on left */}
    //         <div className='w-[50%] px-16 z-10 pr-24'>
    //             <TrailText open={true}>
    //                 {data[selectedItem].title.split(' ').map((word, index) => (
    //                     <span key={index} className='text-white'>
    //                         {word}
    //                     </span>
    //                 ))}
    //             </TrailText>

    //             <P className='text-white mb-10 mt-4'>
    //                 {data[selectedItem].description}
    //             </P>

    //             <ButtonFill
    //                 text='View Project'
    //                 link={data[selectedItem].link}
    //                 className={"bg-white text-black"}
    //             />
    //         </div>

    //         {/* this is the carosel on bottom right */}
    //         <div className='w-[50%] mx-10 mt-[10%]'>
    //             {/* <div className='h-[25%]'></div> */}
    //             <ProjectCarosel data={data} onItemSelected={setSelectedItem} />
    //         </div>
    //     </div>
    // )


    // react awesome slider





    return (
        <AwesomeSlider
            animation={'cubeAnimation'}
            fillParent={true}
            bullets={false}
            organicArrows={true}
        >
            {data.map((item) => (
                <div className='flex items-center justify-center overflow-y-hidden h-screen w-screen bg-black px-[10%]'>
                    {/* this is the text on left */}
                    <div className='text-white text-center mb-8'>
                        <H4 className='text-gray-400 mb-4'>
                            {item.subtitle.toUpperCase()}
                        </H4>
                        <H0 className=''>
                            {item.title}
                        </H0>
                        <H4 className='my-10'>
                            {item.description}
                        </H4>
                    </div>

                    <div className='absolute bottom-12'>
                        <ButtonFill
                            text='View Project'
                            link={item.link}
                            className={"bg-white text-black"}
                        />
                    </div>


                </div>
            ))}




        </AwesomeSlider>
    );
}

export default Projects