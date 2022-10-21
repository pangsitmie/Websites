import React from 'react'
import './hero.css'
const Hero = () => {
    return (
        <div>
            <div className="container header__container">
                <h1 className='hero-title'>雲程在線 <br></br>創意無限</h1>
            </div>

            <div className="container about__content">
                <div className='content_left'>
                    <h2 className='description' >
                        羅位陽育些常料現、東女相提兒遠：特的外才刻東是收血。除座去重定們生它行裡師福動原效關一、張前電香物了投時。有開立養麼書頭年萬人過治世的市次相家，和老電她不、
                    </h2>
                    <div>
                        <button className="btn btn-fill">關於我們</button>
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