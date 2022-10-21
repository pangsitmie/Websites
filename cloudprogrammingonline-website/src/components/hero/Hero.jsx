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
                    <h2 className='description' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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