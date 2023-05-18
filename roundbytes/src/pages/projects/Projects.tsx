import TrailText from '@/components/TrailText'
import ButtonFill from '@/components/button/ButtonFill'
import { P } from '@/components/styles/typography/typography.styled'
import React from 'react'
import ProjectCarosel from './ProjectCarosel'
import BEARPAY_WALLPAPER from '@/assets/bearpay_wallpaper.gif'
import PAHAMFILM_WALLPAPER from '@/assets/pahamfilm_wallpaper.gif'

type Props = {}

const Projects = (props: Props) => {
    return (
        <div className='h-[90vh] flex items-center backgroundimage' style={{ backgroundImage: `url(${BEARPAY_WALLPAPER})` }}>
            {/* this is the text on left */}
            <div className='w-[50%] px-16'>
                <TrailText open={true}>
                    <span className='text-black'>BEAR</span>
                    <span className='text-black'>PAY</span>
                </TrailText>

                <P className='text-gray-400 mb-8'>
                    A popular tourist spot, it is renowened for its perfect cane
                    because of its symetric canical shape, and is regarded as very sacred in Philiphines Mythology.
                </P>

                <ButtonFill text='View Project' />
            </div>

            {/* this is the carosel on bottom right */}
            <div className='w-[50%] h-[100%] '>
                <div className='h-[30%]'></div>
                <ProjectCarosel />
            </div>
        </div>
    )
}

export default Projects