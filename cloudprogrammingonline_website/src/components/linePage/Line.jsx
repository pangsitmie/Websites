import React from 'react'
import './line.css'
import IMG1 from '../../assets/line1.png'
import IMG2 from '../../assets/line2.png'
import IMG3 from '../../assets/line3.png'
import IMG4 from '../../assets/line4.png'
import LINE_SPECIALTY from '../../assets/我們的特色.png'
import LINE_SERVICE from '../../assets/line_service_img.png'
import LINE_HERO from '../../assets/line_hero.png'
import LINE_INTRO from '../../assets/line_intro.png'
import SEARCH_ICON from '../../assets/search_icon.png'
import VERIFIED_ICON from '../../assets/verified_icon.png'
import MEDAL_ICON from '../../assets/MEDAL_ICON.png'
import LINE_INTRO_HORIZONTAL from '../../assets/line_intro_horizontal.png'

import { useState, useEffect } from 'react';

const Line = () => {

    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {

        const onScroll = (e) => {
            setScrollValue(e.target.documentElement.scrollTop);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);

    }, [scrollValue]);


    return (
        <div className='container' >
            {/* HERO SECTION */}
            <div className='header__container'>
                <img className='line_hero_img' src={LINE_HERO} alt="" />
                <div className='hero_title_container'>
                    <h1 className='line_hero_title'>娃娃機 x LINE</h1>
                    <h2 className='line_hero_title'>吸粉服務</h2>
                    <h3 className='line_hero_description'>
                        精確的數據統計-協助市場分析
                    </h3>
                </div>

            </div>


            {/* LINE INTRODUCTION */}
            <div className='line_intro_container'>
                <div className='line_intro_horizontal'>
                    <img src={LINE_INTRO_HORIZONTAL} alt="" />
                </div>
                {/* <h3 className='line_title'>產品介紹</h3> */}

                <div className='line_container_3'>
                    <div className=''>
                        <div className="line_card">
                            <img className='line_card_img' src={IMG1} alt="" />
                            <h3>官方帳號</h3>
                            <p>協助店家申請@官方帳號，不僅可以收集客戶名單也也可隨時與客戶互動，接收諮詢
                                、產品訂單、 甚至是舉辦互動活動，創造前所未見的互動模式。</p>
                        </div>
                        <div className="line_card">
                            <img className='line_card_img' src={IMG2} alt="" />
                            <h3>通知</h3>
                            <p>透過官方帳號與所有客戶互動，凡舉新活動、優惠或是店家所有相關資訊。使所有客戶可以即時得知店家最新動態</p>
                        </div>
                    </div>

                    <div className='line_intro_img_container'>
                        {/* <h3 className='line_title vertical'>產品介紹</h3> */}
                        <img className='line_intro_img' src={LINE_INTRO} alt="" />
                    </div>

                    <div className=''>
                        <div className="line_card">
                            <img className='line_card_img' src={IMG3} alt="" />
                            <h3>優惠活動宣傳</h3>
                            <p>再次舉辦各類優惠活動， 如：新品上架，促銷活動，形象宣傳…</p>
                        </div>
                        <div className="line_card">
                            <img className='line_card_img' src={IMG4} alt="" />
                            <h3>增加回客率</h3>
                            <p>透過行銷優惠活動，使客戶回流。建立客服功能及時得知客戶反饋，有助於優化服務，提高顧客忠誠度與回客率。</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* LINE SPECIAL */}
            <div className='line_special'>
                {/*  */}
                <div className='line_scroll_container'>
                    <img className='line_specialty_img' src={LINE_SPECIALTY} style={{ transform: `translateX(${scrollValue * -0.25}px)` }} alt='' />
                </div>
                <div className='line_special_content'>
                    <div className='line_special_desc'>
                        <div>
                            <h3>我們有專人客製化適合您的方案</h3>
                            <p>我們有專人客製化適合您的方案我們有專人客製化適合您的方案我們有專人客製化適合您的方案</p>
                        </div>
                        <div>
                            <h3>我們有專人客製化適合您的方案</h3>
                            <p>我們有專人客製化適合您的方案我們有專人客製化適合您的方案我們有專人客製化適合您的方案</p>
                        </div>
                    </div>

                    <div className='line_special_img'>
                        <img src={MEDAL_ICON} alt="" />
                    </div>
                </div>
            </div>

            {/* LINE SERVICE */}
            <div className='line_service'>
                <div>
                    <img className='line_service_img' src={LINE_SERVICE} style={{ transform: `translateX(${scrollValue * 0.22}px)` }} alt='' />
                </div>
                <div className='column_2'>
                    <div className='line_service_card'>
                        <div className='line_service_card_top'>
                            <h3>客製化官方帳號</h3>
                            <img className='line_service_icon' src={SEARCH_ICON} alt="" />
                        </div>

                        <p>替店家建立專屬的官方LINE BOT生活圈, 店家可利用LINE BOT進行吸粉活動過LINE BOT後台管理與分析消費者數據。
                        </p>
                    </div>

                    <div className='line_service_card'>
                        <div className='line_service_card_top'>
                            <h3>吸粉服務</h3>
                            <img className='line_service_icon' src={VERIFIED_ICON} alt="" />
                        </div>
                        <p>透過掃描機台QR馬並免費遊玩乙次, 使消費者加入店家LINE官方帳號後,
                            即可獲得店家預設之優惠活動。</p>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default Line