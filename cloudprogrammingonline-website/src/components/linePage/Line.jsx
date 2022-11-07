import React from 'react'
import './line.css'
import IMG1 from '../../assets/line1.png'
import IMG2 from '../../assets/line2.png'
import IMG3 from '../../assets/line3.png'
import IMG4 from '../../assets/line4.png'
import LINE_IMG from '../../assets/line_img.png'
import LINE_SPECIALTY from '../../assets/我們的特色.png'

const Line = () => {
    return (
        <div className='container' >
            {/* HERO SECTION */}
            <div className='header__container'>
                <h1 className='line_hero_title'>娃娃機 X <span className='line_span'>LINE@</span></h1>
                <h3 className='line_hero_description'>
                    精確的數據統計-協助市場分析
                </h3>
            </div>


            {/* LINE INTRODUCTION */}
            <div className='line_intro_container'>
                <h3 className='line_title'>產品介紹</h3>

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

                    <div className='line_intro_img'>
                        <h3 className='line_title vertical'>產品介紹</h3>
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
            <div>
                <img src={LINE_SPECIALTY} alt="" />
                <div className='line_special_content'>

                    <div className='line_special_desc'>

                        <div>
                            <h4>我們有專人客製化適合您的方案</h4>
                            <p>我們有專人客製化適合您的方案我們有專人客製化適合您的方案我們有專人客製化適合您的方案</p>
                        </div>
                        <div>
                            <h4>我們有專人客製化適合您的方案</h4>
                            <p>我們有專人客製化適合您的方案我們有專人客製化適合您的方案我們有專人客製化適合您的方案</p>
                        </div>
                    </div>

                    <div className='line_special_img'>
                        <img src={LINE_IMG} alt="" />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Line