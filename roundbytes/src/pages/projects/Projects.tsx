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
import ButtonStorke from '@/components/button/ButtonStroke'


type Props = {}

const Projects = (props: Props) => {

    //this is the data list for the carosel
    const data = projectData;

    const [selectedItem, setSelectedItem] = useState(0);
    return (
        <AwesomeSlider
            animation={'cubeAnimation'}
            fillParent={true}
            bullets={false}
            organicArrows={true}
        >
            {data.map((item) => (
                <div className='flex items-center justify-center overflow-y-hidden h-screen w-screen px-[10%] relative'>
                    {/* this is the background video */}
                    {/* fixme: this must be change to gif not video because on ios safari cant autoplay */}
                    {/* <video muted autoPlay loop className='absolute top-0 left-0 w-full h-full object-cover '>
                        <source src={item.backgroundImage} type="video/mp4" />
                    </video> */}
                    <div className="absolute w-screen h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                        {/* Other content can be placed here if needed */}
                    </div>


                    {/* this is the text on left */}
                    <div className='text-white text-center mb-8 z-0'>
                        <span className='text-white mb-2'>
                            {item.subtitle.toUpperCase()}
                        </span>
                        <H0 className=''>
                            {item.title}
                        </H0>
                        <H4 className='my-4'>
                            {item.description}
                        </H4>
                    </div>

                    <div className='absolute bottom-[10%] z-index-0'>
                        <ButtonStorke
                            color='white'
                            text='View Project'
                            link={item.link}
                        />
                    </div>
                </div>
            ))}
        </AwesomeSlider>

    );
}

export default Projects