import React from 'react'
import HASSLE_IMG from '../../assets/hassle.avif'
import PLATFORM_IMG from '../../assets/platform.avif'
import RECOMMENDER_IMG from '../../assets/recommender.avif'
import AI_IMG from '../../assets/ai.avif'
import VISUAL_AI_IMG from '../../assets/visual_ai.avif'
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'


import './main.css'
import Selector from '../selector/Selector'
import Carousel from '../carousel/Carousel'


// IMAGES
import caro_1 from '../../assets/caro_1.avif';
import caro_2 from '../../assets/caro_2.avif';
import caro_3 from '../../assets/caro_3.avif';
import caro_4 from '../../assets/caro_4.avif';
import caro_5 from '../../assets/caro_5.avif';
import caro_6 from '../../assets/caro_6.avif';

const images = [
    caro_1,
    caro_2,
    caro_3,
    caro_4,
    caro_5,
    caro_6
];

const Main = () => {
    return (
        <>
            {/* HASSLE SECTION */}
            <section id='hassle_free'>
                <div className='two_grid_container container'>
                    <div className='two_grid_content_text'>
                        <h3>
                            Happier, hassle-free shopping
                        </h3>
                        <p>
                            How to increase sales on your site? Satisfy your shoppers!
                            The Rosetta AI 1-to-1 Personalization Platform does just that. It sees what individuals want and delights them with surprisingly accurate recommendations, especially on apparel, cosmetics and accessories websites.
                        </p>
                        <button className='btn-pink'>
                            Let's Do This
                        </button>
                    </div>
                    <div className='two_grid_content_img'>
                        <img src={HASSLE_IMG} className="hassle_img" alt="" />
                    </div>
                </div>
                <div className='clients'>
                    <div className='clients_carousel'>
                        <Carousel images={images} />
                    </div>
                    <p className='caption'>USED WORLDWIDE BY OVER 2000 SMB WEBSITES AND A HANDFUL OF HEAVY HITTERS</p>
                </div>
            </section>

            {/* RATE SECTION */}
            <section id="rate">
                <div className='rate_container container'>
                    <div className='rate_content'>
                        <h3>2.5x</h3>
                        <h4>Average order value increase</h4>
                    </div>
                    <div className='rate_content'>
                        <h3>3.3x</h3>
                        <h4>Conversion rate increase</h4>
                    </div>
                    <div className='rate_content'>
                        <h3>6.6x</h3>
                        <h4>Revenue per visitor increase</h4>
                    </div>
                </div>
                <div className='rate_caption_container'>
                    <p className='rate_caption caption'>2022 STATISTICS FROM HAPPY CLIENTS GROWING BUSINESS USING ROSETTA AI</p>
                </div>
            </section>

            {/* PERSONALIZE SECTION */}
            <section id='personalize'>
                <div className='black_container container'>
                    <h2>Personalize product discovery with your first-party data.</h2>
                </div>
            </section>

            {/* 1 to 1 Platform */}
            <section id='one_platform'>
                <div className='two_grid_container container'>
                    <div className='two_grid_content_img'>
                        <img src={PLATFORM_IMG} className="hassle_img" alt="" />
                    </div>
                    <div className='two_grid_content_text one_platform_content_right'>
                        <h3>
                            The Rosetta AI 1-to-1 Personalization Platform                        </h3>
                        <p>
                            What do shoppers see in what they want? Is it the neckline? The sleeve? The material?
                            <br /> <br />
                            This Platform knows. It provides a one-two punch of personalized recommendation tools
                            and promotional widgets that show products with the attributes people love so you can convert more shoppers into buyers.
                            <br /> <br />
                            It also automatically engages shoppers when they begin to churn. You can set promotions activated by Hesitant
                            Customer Detection and offer just the right deal at just the right time.
                        </p>
                        <button className='btn-pink'>
                            Let's Do This
                        </button>
                    </div>
                </div>
            </section>

            {/* 1 handy platform section */}
            <section id='one_personalize'>
                <div className='black_container container'>
                    <h2>1 handy platform for 2 of your most important tasks...</h2>
                    <h4>conversion optimization and customer retention.</h4>
                </div>
            </section>

            {/* RECOMMENDERS SECTION */}
            <section id='recommenders'>
                <div className='two_grid_container container'>
                    <div className='two_grid_content_img'>
                        <img src={RECOMMENDER_IMG} className="hassle_img" alt="" />
                    </div>
                    <div className='two_grid_content_text one_platform_content_right'>
                        <h3>
                            1-to-1 Personalized Product Recommenders
                        </h3>
                        <p>
                            You can cross-sell more, and improve your return on ad spend with our 7
                            different recommender types. Each one is optimized for fashion-related
                            ecommerce, with algorithms fine-tuned to our best clients' needs. Based on real-time individual preferences, these recommenders get results!
                        </p>
                        <div className='a_arrow'>
                            <a href="">Lern more about our recommenders</a>
                            <AiOutlineArrowRight className='a_arrow_icon' />
                        </div>
                    </div>
                </div>
            </section>

            {/* RECOMMENDERS SECTION */}
            <section id='recommenders' className='ai_container'>
                <div className='two_grid_container container'>
                    <div className='two_grid_content_img'>
                        <img src={AI_IMG} className="hassle_img" alt="" />
                    </div>
                    <div className='two_grid_content_text one_platform_content_right'>
                        <h3>
                            AI Exit-intent Promotions
                        </h3>
                        <p>
                            Step up your promotions with static or exit-intent banners featuring Hesitant Customer Detection, our AI-driven churn reducer that shows shoppers what they really want, at just the right time. With a variety of
                            modern widgets, all customizable, your promotions will sparkle!
                        </p>
                        <div className='a_arrow'>
                            <a href="">Read more about using our platform to build your promotions</a>
                            <AiOutlineArrowRight className='a_arrow_icon' />
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPETITIVE ADVANTAGE SECTION */}
            <section id='competitive_section' className='asdf'>
                <div className='black_container container'>
                    <h2>The Rosetta AI Competitive Advantage</h2>
                    <h4>We specialize in preference analytics for fashion-related ecommerce. We help you gather unique consumer insights so you can truly personalize your site. </h4>
                </div>
            </section>

            {/* VISUAL AI SECTION */}
            <section id='recommenders' className='ai_container'>
                <div className='two_grid_container container'>
                    <div className='two_grid_content_img'>
                        <img src={VISUAL_AI_IMG} className="hassle_img" alt="" />
                    </div>
                    <div className='two_grid_content_text one_platform_content_right'>
                        <h3>
                            Visual AI Preference Analytics
                        </h3>
                        <p>
                            Visual AI sees which product attributes your shoppers want as they browse your site and helps build preference
                            profiles optimized for apparel, beauty and accessories. This visual detail makes recommendations surprisingly accurate for each individual shopper so you can deliver Amazon-like recommendation power that's affordable for your SMB website.
                        </p>
                        <div className='a_arrow'>
                            <a href="">See a little more about our secret sauce</a>
                            <AiOutlineArrowRight className='a_arrow_icon' />
                        </div>
                    </div>
                </div>
            </section>

            {/* PEOPLE HEART SEACTION */}
            <section>
                <div className='black_container container people_heart_container'>
                    <h2>Putting people at the heart of the online
                        shopping experience</h2>
                    <h4>so your customers' journeys are always personalized.</h4>
                    <div className='two_button_container'>
                        <button className='btn-pink'>
                            Get Started
                        </button>
                        <button className='btn-white btn_margin_left'>
                            See Pricing
                        </button>
                    </div>
                </div>
            </section>

            {/* SELECTOR SECTION */}
            <section id='selector_section'>
                <div className='selector_container container'>
                    <h4>Check out the ecommerce success stories brands that have grown business with Rosetta AI by delivering enjoyable personalized online experiences that shoppers love! </h4>
                    <Selector />
                </div>
            </section>

            {/* SUPPORTED PLATFORM SECTION */}
            <section id='supported_platform'>
                <div className='supported_platform_container container'>
                    <h4>We support top ecommerce platforms in Asia and and Shopify for our global clients</h4>
                    <div className='platform_container'>
                        <div className='platform_row'>
                            <div className='platform_content'>
                                <AiFillCheckCircle className='platform_icon' />
                                <h5>Shopify</h5>
                            </div>
                            <div className='platform_content'>
                                <AiFillCheckCircle className='platform_icon' />
                                <h5>Easystore</h5>
                            </div>
                        </div>

                        <div className='platform_row'>
                            <div className='platform_content'>
                                <AiFillCheckCircle className='platform_icon' />
                                <h5>91App</h5>
                            </div>
                            <div className='platform_content'>
                                <AiFillCheckCircle className='platform_icon' />
                                <h5>Shopline</h5>
                            </div>
                        </div>

                        <div className='platform_row'>
                            <div className='platform_content'>
                                <AiFillCheckCircle className='platform_icon' />
                                <h5>Cyberbiz</h5>
                            </div>
                            <div className='platform_content'>
                                <AiFillCheckCircle className='platform_icon' />
                                <h5>Waca</h5>
                            </div>
                        </div>
                        <div className='platform_row'>
                            <div className='platform_content'>
                                <AiFillCheckCircle className='platform_icon' />
                                <h5>Meepshop</h5>
                            </div>
                            <div className='platform_content transparent'>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Main