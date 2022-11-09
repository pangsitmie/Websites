import React from 'react'
import GALAXY_HERO from '../../assets/galaxy_hero.png'
import GALAXY_BLOB from '../../assets/galaxy_blob.svg'
import GALAXY_GRADIENT from '../../assets/galaxy_gradient.png'
import FLOWCHART from '../../assets/flowchart2.png'
import POLLY_WHITE from '../../assets/polly_white.png'
import APPLE_CHIP from '../../assets/apple_chip.jpg'
import CHAT_ICON from '../../assets/chat_icon.png'
import GRADIENT_RIGHT from '../../assets/gradient_right.png'
import { SiAppstore } from 'react-icons/si'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import './galaxyCity.css'

const GalaxyCity = () => {
    // SCROLL VIEWER
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {

        const onScroll = (e) => {
            if (e.target.documentElement.scrollTop <= 2800) {
                setScrollValue(e.target.documentElement.scrollTop);
            };
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);

    }, [scrollValue]);

    const { ref: visibleRef, inView: elementIsVisible } = useInView();

    // RETURN DIV
    return (
        <div className='container'>
            <div className='galaxy_hero_content'>
                <h3 className='galaxy_tag'>有你自己</h3>
                <h1 className='galaxy_title'>遊樂城APP</h1>
                <img className='galaxy_hero_img' src={GALAXY_HERO} />
                <img className='galaxy_gradient' src={GALAXY_GRADIENT} />
            </div>

            {/* FLOWCHART */}
            <div className='galaxy_flowchart'>
                <h1>FLOW</h1>
                <img className='galaxy_flowchart_img' src={FLOWCHART} alt="" />
            </div>

            {/* CONTENT1 */}
            <div className='iot_content'>
                <h1>物聯網系統</h1>
                <h2>使用網路直播與遠端IoT系統</h2>
                <div className='galaxy_col2_6040'>
                    <div className='col_img_container'>
                        <img className='polly_white_img' src={POLLY_WHITE} style={{ transform: `rotate(${scrollValue * -0.25}deg) scale(${scrollValue / 900})` }} />
                    </div>
                    <div>
                        <p className='iot_desc1'>讓玩家可以透過手機、電腦、平板等通訊工具實際操作娛樂機台 達成遠端遊玩的效果。</p>
                    </div>
                </div>
            </div>

            {/* CONTENT2 */}
            <div>
                <div className='galaxy_col2_4060'>
                    <div className='machine_desc_container'>
                        <h2 className='machine_title'>經典機台呈現</h2>
                        <p className='machine_desc'>透過物聯網技術，能夠讓消費者不限時間與地點限制，想遊玩時連上網路即可立即體驗經典機台所帶來的趣味性</p>
                    </div>
                    <div className='col_img_container'>
                        <img className='machine_img' src={APPLE_CHIP} />
                    </div>

                </div>
            </div>

            {/* CONTENT3 */}
            <div className='galaxy_game_container'>
                <h2>經典的傳統遊戲</h2>
                <p>
                    可以遊玩各式各樣的slot機台、小時候的水果盤、 拉霸機、撲克機 回憶以前的歡樂時光
                </p>
                <div className='galaxy_col3'>
                    <div className='galaxy_game_img_container'>
                        <img src={APPLE_CHIP} alt="" />
                    </div>
                    <div className='galaxy_game_img_container'>
                        <img src={APPLE_CHIP} alt="" />
                    </div>
                    <div className='galaxy_game_img_container'>
                        <img src={APPLE_CHIP} alt="" />
                    </div>
                </div>
            </div>





            {/* CONTENT4 */}
            <div className='galaxy_content4_container'>
                <div className='galaxy_col2'>
                    <div className='galaxy_social'>
                        <h2>社交通訊</h2>
                        <p>可於大廳以及與好友私底下即時聊天，汲取他人遊玩經驗、分享中獎的喜悅以及互贈禮品。</p>
                    </div>
                    <div className='galaxy_video'>
                        <h2>遊玩錄影</h2>
                        <p>遊玩途中隨時可以按下截取按鈕，錄下自己的精彩表現。</p>

                    </div>
                </div>
            </div>

            {/* CONTENT TAGLINE */}
            <div className='galaxy_tagline_container'>
                <div className='module'>
                    <h2>
                        我們擁有專業的研發工程團隊, 可以依據您的需求設計線上平台或APP。
                        如果您是遊戲機製造商，我們提供平台推薦消費者遊玩您的遊戲機。
                    </h2>
                </div>
            </div>


            {/* CONTENT5 */}
            <div className='galaxy_content5_container'>
                <div className='galaxy_col2'>
                    <div className='galaxy_experience'>
                        <h2>立即體驗</h2>
                        <img src={APPLE_CHIP} alt="" />
                        <div className='galaxy_exp_btn_container'>
                            <button className={`btn btn-stroke hidden ${elementIsVisible ? 'show' : ''}`} ref={visibleRef}>
                                <a href="">
                                    <IoLogoGooglePlaystore className='button_icon' />Play Store
                                </a>
                            </button>
                            <button className={`btn btn-stroke hidden ${elementIsVisible ? 'show' : ''}`} ref={visibleRef}>
                                <a href="">
                                    <SiAppstore className='button_icon' />App Store
                                </a>
                            </button>
                        </div>

                    </div>
                    <div className='galaxy_contact'>
                        <h2>想打造一個您專屬的app嗎?</h2>
                        <div className='galaxy_contact_img_container'>
                            <img src={CHAT_ICON} alt="" />
                        </div>


                        <div className='galaxy_contact_btn_container'>
                            <button className={`btn btn-stroke hidden ${elementIsVisible ? 'show' : ''}`} ref={visibleRef}>
                                <a href="">
                                    聯絡我們
                                </a>
                            </button>
                        </div>
                    </div>

                </div>
            </div>


        </div>


    )
}

export default GalaxyCity