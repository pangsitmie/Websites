import React from 'react'
import ABOUT_FLOW from '../../assets/about_flow.png'


import "./about.css"

const About = () => {
    return (
        <div>
            {/* HERO */}
            {/* ../../assets/about_bg-min.png */}
            <div className="about_hero" >
                <div className='about_hero_content'>
                    <h1>關於雲程在線</h1>
                    <h2>2017年仲夏之初,在中台灣誕生一家以實體遊戲機為基底,研發雲端運算,數位服務,虛實整合及自動販賣機雲端支付, 四大目標為公司發展方向,開創之初就搭上國內無人自助商店興起,讓團隊有廣大市場發揮的空間,期望以台灣經驗領軍到世界市場</h2>
                </div>
            </div>
            <div className='about_flow'>
                <h2>企業發展歷史</h2>
                <div className='about_flow_img'>
                    <img src={ABOUT_FLOW} alt="" />
                </div>

            </div>

        </div>
    )
}

export default About