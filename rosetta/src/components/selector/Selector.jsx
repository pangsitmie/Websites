import React, { useState } from 'react'
import './selector.css'
import { GiGraduateCap } from 'react-icons/gi'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { BsFillCalendarRangeFill } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'
import { AiOutlineArrowRight } from 'react-icons/ai'

import SELECTOR_1 from '../../assets/selector1.avif'
import SELECTOR_2 from '../../assets/selector2.avif'
import SELECTOR_3 from '../../assets/selector3.avif'


const Selector = () => {
    const { ref, inView } = useInView({ trackVisibility: true, delay: 100, triggerOnce: true });

    const [activeItem, setActiveItem] = useState('apparel');
    //true toggles Education, flase toggles work
    const toggleApparel = () => {
        setActiveItem('apparel');
    };
    const toggleCosmetics = () => {
        setActiveItem('cosmetics');
    };
    const toggleAccessories = () => {
        setActiveItem('accessories');
    };


    return (
        <section id='selector' className={`hidden ${inView ? 'show' : ' '}`} ref={ref} >
            <div className='container'>
                <div className="selector_tabs">
                    <div className={`selector_item button--flex ${activeItem === 'apparel' ? 'selector_icon_active' : null}`} onClick={toggleApparel} >
                        <p>Apparel</p>
                    </div>
                    <div className={`selector_item button--flex ${activeItem === 'cosmetics' ? 'selector_icon_active' : null}`} onClick={toggleCosmetics}>
                        <p>Cosmetics</p>
                    </div>
                    <div className={`selector_item button--flex ${activeItem === 'accessories' ? 'selector_icon_active' : null}`} onClick={toggleAccessories}>
                        <p>Accessories</p>
                    </div>
                </div>

                <div className="selector_sections">

                    {/* =======================SELECTOR CONTENT 1 = APPAREL =======================*/}
                    <div className={`${activeItem === 'apparel' ? 'selector_active' : 'selector_hidden'}`}>
                        <div className="selector_data">
                            <div className='selector_img'>
                                <img src={SELECTOR_1} alt="" />
                            </div>
                            <h4>
                                Blue Way Merges Online-Offline Consumer Insights, ups ROAS 15x
                            </h4>
                            <p>
                                With six decades of innovation under its belt, designers at Blue Way know how to make denim styles people love — and their marketers know how to scale business. For Blue Way OMO (online-merge-offline) Executive Assistant Eric Huang, continuing this tradition in 2022 means increasing ROAS both online and off and he found an online marketing platform to do it.
                            </p>
                            <div className='selector_buttons'>
                                <div className='a_arrow'>
                                    <a href="">Read More</a>
                                    <AiOutlineArrowRight className='a_arrow_icon ' />
                                </div>
                                <div className='a_arrow gray_arrow btn_margin_left'>
                                    <a href="">See All Case Studies</a>
                                    <AiOutlineArrowRight className='a_arrow_icon gray_arrow' />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* =======================SELECTOR CONTENT 2 = COSMETICS =======================*/}
                    <div className={`${activeItem === 'cosmetics' ? 'selector_active' : 'selector_hidden'}`}>
                        <div className="selector_data">
                            <div className='selector_img'>
                                <img src={SELECTOR_2} alt="" />
                            </div>
                            <h4>
                                How Shu Uemura Wins Big Online, One Shopper at A Time
                            </h4>
                            <p>
                                Shu Uemura specializes in cleansing oils and makeup mindfully crafted in Japan. See how they used AI-powered recommenders and promotions to cross sell more and boost revenue 149%                            </p>
                            <div className='selector_buttons'>
                                <div className='a_arrow'>
                                    <a href="">Read More</a>
                                    <AiOutlineArrowRight className='a_arrow_icon ' />
                                </div>
                                <div className='a_arrow gray_arrow btn_margin_left'>
                                    <a href="">See All Case Studies</a>
                                    <AiOutlineArrowRight className='a_arrow_icon gray_arrow' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =======================SELECTOR CONTENT 3 = ACCESSORIES =======================*/}
                    <div className={`${activeItem === 'accessories' ? 'selector_active' : 'selector_hidden'}`}>
                        <div className="selector_data">
                            <div className='selector_img'>
                                <img src={SELECTOR_3} alt="" />
                            </div>
                            <h4>
                                1-to-1 Personalization Platform Reduces Bounce Rate 17% For ART64
                            </h4>
                            <p>
                                ART64 is a Taiwanese accessories brand creating handmade silver jewelry and offering silversmithing courses for DYI enthusiasts. To make sure they always provide pieces people love, the ART64 online retail strategy began using personalized recommendations with hesitant customer detection to offer individuals the particular attributes they want to see, at just the right time.
                            </p>
                            <div className='selector_buttons'>
                                <div className='a_arrow'>
                                    <a href="">Read More</a>
                                    <AiOutlineArrowRight className='a_arrow_icon ' />
                                </div>
                                <div className='a_arrow gray_arrow btn_margin_left'>
                                    <a href="">See All Case Studies</a>
                                    <AiOutlineArrowRight className='a_arrow_icon gray_arrow' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Selector