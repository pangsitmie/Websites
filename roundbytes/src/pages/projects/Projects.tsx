import TrailText from '@/components/TrailText'
import ButtonFill from '@/components/button/ButtonFill'
import { P } from '@/components/styles/typography/typography.styled'
import React from 'react'
import ProjectCarosel from './ProjectCarosel'
// import BEARPAY_WALLPAPER from '@/assets/bearpay_wallpaper.gif'
import BEARPAY_WALLPAPER from '@/assets/bearpay_wallpaper.webm'
import PAHAMFILM_WALLPAPER from '@/assets/pahamfilm_wallpaper.gif'

type Props = {}

const Projects = (props: Props) => {
    return (
        <div className='flex items-center overflow-y-hidden pt-10'>
            {/* <video src={BEARPAY_WALLPAPER} controls /> */}
            <video
                src={BEARPAY_WALLPAPER}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 min-w-full min-h-full object-cover"
            />

            {/* this is the text on left */}
            <div className='w-[50%] px-16 z-10 pr-24'>
                <TrailText open={true}>
                    <span className='text-white z-10'>BEAR</span>
                    <span className='text-white'>PAY</span>
                </TrailText>

                <P className='text-white mb-10 mt-4'>
                    Mobile payment solution for playing claw machines. While business owners can also manage and analyse their business more efficiently through our SaaS web app.
                </P>

                <ButtonFill text='View Project' className={"bg-white text-black"} />
            </div>

            {/* this is the carosel on bottom right */}
            <div className='w-[50%] mx-10 mt-[10%]'>
                {/* <div className='h-[25%]'></div> */}
                <ProjectCarosel />
            </div>
        </div>
    )
}

export default Projects