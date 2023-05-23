import TrailText from '@/components/TrailText'
import ButtonFill from '@/components/button/ButtonFill'
import { P } from '@/components/styles/typography/typography.styled'
import ProjectCarosel from './ProjectCarosel'
// import BEARPAY_WALLPAPER from '@/assets/bearpay_wallpaper.webm'
import { useState } from 'react'
import { projectData } from '@/data/projectData'

type Props = {}

const Projects = (props: Props) => {

    //this is the data list for the carosel
    const data = projectData;

    const [selectedItem, setSelectedItem] = useState(0);

    return (
        <div className='flex items-center overflow-y-hidden pt-10'>
            {/* <video src={BEARPAY_WALLPAPER} controls /> */}
            <video
                src={data[selectedItem].backgroundImage}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 min-w-full min-h-full object-cover"
            />

            {/* this is the text on left */}
            <div className='w-[50%] px-16 z-10 pr-24'>
                <TrailText open={true}>
                    {data[selectedItem].title.split(' ').map((word, index) => (
                        <span key={index} className='text-white'>
                            {word}
                        </span>
                    ))}
                </TrailText>

                <P className='text-white mb-10 mt-4'>
                    {data[selectedItem].description}
                </P>

                <ButtonFill
                    text='View Project'
                    link={data[selectedItem].link}
                    className={"bg-white text-black"}
                />
            </div>

            {/* this is the carosel on bottom right */}
            <div className='w-[50%] mx-10 mt-[10%]'>
                {/* <div className='h-[25%]'></div> */}
                <ProjectCarosel data={data} onItemSelected={setSelectedItem} />
            </div>
        </div>
    )
}

export default Projects