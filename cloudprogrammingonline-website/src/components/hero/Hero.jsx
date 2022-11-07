import React from 'react'
import { useInView } from 'react-intersection-observer';
import './hero.css'
const Hero = () => {
    const { ref: visibleRef, inView: elementIsVisible } = useInView();
    return (

        <div className="container header__container">
            <h1 className='hero-title'>雲程在線</h1>
            <h2 className='hero-desc'><em>創意無限</em></h2>

            <h3 className='description'>
                雲程在線股份有限公司(以下簡稱雲程在線)為中台灣以實體遊戲機為基底，
                具備雲端運算、數位服務、虛實整合、雲端支付等多項軟、韌、硬體兼具之資訊研發公司，
                期望以台灣市場經驗領軍到全球各地。
            </h3>

            <button className={`btn btn-fill-white glow-on-hover hidden ${elementIsVisible ? 'show' : ''}`} ref={visibleRef}>聯繫我們</button>
        </div>



    )
}

export default Hero