import React from 'react'
import YoutubeEmbed from '../youtubeEmbed/YoutubeEmbed'

import { SiAppstore } from 'react-icons/si'
import { IoLogoGooglePlaystore } from 'react-icons/io5'


import GALAXY_GRADIENT from '../../assets/galaxy_gradient.png'
import IPICKPRO_HERO from '../../assets/ipickpro_hero.png'
import IPICK_FEATURE1 from '../../assets/ipick_feature1.png'
import IPICK_FEATURE2 from '../../assets/IPICK_FEATURE2.png'
import IPICK_FEATURE3 from '../../assets/IPICK_FEATURE3.png'
import IPICK_FEATURE4 from '../../assets/IPICK_FEATURE4.png'
import PODIUM_ICON from '../../assets/PODIUM_ICON.png'

import './ipickpro.css'

const iPickPro = () => {
    return (
        <div className='container'>
            {/* HERO IPICKPRO */}
            <div className='hero_ipickpro'>
                <img className='center_gradient' src={GALAXY_GRADIENT} />
                <img className='hero_img' src={IPICKPRO_HERO} />

                <h1>iPickPro</h1>
                <div className='xiaodi_button_container'>
                    <button className={"btn glow-on-hover"} >
                        <a href="https://play.google.com/store/apps/details?id=com.winpro.winproeat.consumer">
                            <IoLogoGooglePlaystore className='button_icon' />Play Store
                        </a>
                    </button>
                    <button className={"btn glow-on-hover"}>
                        <a href="https://apps.apple.com/tw/app/%E5%B0%8F%E5%BC%9F%E5%A4%96%E9%80%81/id1513518654?l=en">
                            <SiAppstore className='button_icon' />App Store
                        </a>
                    </button>
                </div>
            </div>

            {/* VIDEO */}
            <div className='ipick_video'>
                <div className="App">
                    <YoutubeEmbed embedId="wV-AOqiAuuU" />
                </div>
                <div className="App">
                    <YoutubeEmbed embedId="aWepvLsbejg" />
                </div>
            </div>

            {/* div3 */}
            <div className='ipick_feature1'>
                <h2>Game Type</h2>
                <p>
                    There is a free area and a paid area, where you can accumulate points in the free area and exchange points in the mall.
                </p>
                <img src={IPICK_FEATURE1} alt="" />
            </div>

            {/* DIV4 */}
            <div className='ipick_feature2'>
                <div className='ipick_feature_card ipick_card1'>
                    <h2>Ranking <br /> records</h2>
                    <p>winning record has a video for members to share. The ranking includes the number of times in the current month and week.</p>
                    <div className='ipick_feature_card_img_container'>
                        <img src={IPICK_FEATURE2} alt="" />
                    </div>
                </div>
                <div className='ipick_feature_card ipick_card2'>
                    <h2>Live chat <br /> messaging</h2>
                    <p>While playing or waiting to play, you can discuss and chat with other players. Share each other's play experiences.</p>
                    <div className='ipick_feature_card_img_container'>
                        <img src={IPICK_FEATURE3} alt="" />
                    </div>
                </div>
                <div className='ipick_feature_card ipick_card3'>
                    <h2>Personal information</h2>
                    <p>There are cash points and free points. You can view loot, delivery and point history, and so on.</p>
                    <div className='ipick_feature_card_img_container'>
                        <img src={IPICK_FEATURE4} alt="" />
                    </div>
                </div>
            </div>

            {/* DIV5 */}
            <div className='ipick_advantage'>
                <h2>Four Advantages</h2>
                <div className='ipick_advantage_col'>
                    <div>
                        <div className='ipick_advantage_item'>
                            <h3>Play remotely</h3>
                            <p>
                                You can enjoy the joy of the crane machine with others at home.
                            </p>
                        </div>
                        <div className='ipick_advantage_item'>
                            <h3>Live chat</h3>
                            <p>
                                Through the online crane machine, you can chat with friends and send gifts.
                            </p>
                        </div>
                        <div className='ipick_advantage_item'>
                            <h3>Play remotely</h3>
                            <p>
                                You can enjoy the joy of the crane machine with others at home.
                            </p>
                        </div>
                        <div className='ipick_advantage_item'>
                            <h3>Play remotely</h3>
                            <p>
                                You can enjoy the joy of the crane machine with others at home.
                            </p>
                        </div>
                    </div>
                    <div className='ipick_advantage_img_container'>
                        <img src={PODIUM_ICON} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default iPickPro