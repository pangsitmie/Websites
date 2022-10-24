import React from 'react'
import './hero.css'
const Hero = () => {
    return (
        <div>
            <div className="container header__container">
                <h1 className='hero-title'>雲程在線</h1>
                <h2 className='hero-desc'>創意無限</h2>
            </div>

            <div className="container about__content">
                <div className='content_left'>
                    <h2 className='description' >
                        雲程在線股份有限公司(以下簡稱雲程在線)為中台灣以實體遊戲機為基底，
                        具備雲端運算、數位服務、虛實整合、雲端支付等多項軟、韌、硬體兼具之資訊研發公司，
                        期望以台灣市場經驗領軍到全球各地。
                    </h2>
                    <div>
                        <button className="btn btn-fill-white">關於我們</button>
                        <button className='btn btn-stroke'>聯繫我們</button>
                    </div>
                </div>
                <div className='content_right'>
                    <article className='about__card'>
                        <h5>最新產品</h5>
                        <h2 className='latest_app_title'>滿天星</h2>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Hero