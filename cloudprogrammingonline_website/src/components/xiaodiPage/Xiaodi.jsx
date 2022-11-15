import React from 'react'
import { SiAppstore } from 'react-icons/si'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import './xiaodi.css'
import { useInView } from 'react-intersection-observer';

import XIAODI_BLOB_ANIM from '../../assets/blobanimation.svg'
import RESTO_IMG from '../../assets/homieatRestaurant.png'
import HOMIE_SERVICE from '../../assets/homieatService.png'

import XIAODI_01 from '../../assets/xiaodi_01.png'
import XIAODI_02 from '../../assets/xiaodi_02.png'
import XIAODI_03 from '../../assets/xiaodi_03.png'
import XIAODI_04 from '../../assets/xiaodi_04.png'
import XIAODI_05 from '../../assets/xiaodi_05.png'

import DELIVERY_1 from '../../assets/delivery_1.png'
import DELIVERY_2 from '../../assets/delivery_2.png'
import DELIVERY_3 from '../../assets/delivery_3.png'
import DELIVERY_4 from '../../assets/delivery_4.png'
import DELIVERY_5 from '../../assets/delivery_5.png'
import DELIVERY_6 from '../../assets/delivery_6.png'

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Xiaodi = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 345,
                settings: {
                    arrows: true,
                    variableWidth: true
                }
            }
        ],

    };

    const { ref: visibleRef, inView: elementIsVisible } = useInView();

    return (
        <div className="container">

            {/* HERO SECTION */}
            <div className='header__container'>
                <img className='xiaodi_blob' src={XIAODI_BLOB_ANIM} alt="" />
                <h1 className='xiaodi_hero-title'>小弟外送</h1>
                <h3 className='xiaodi_description'>
                    小弟外送是一個利用網路能夠在幾十分鐘內提供餐飲外送服務
                    <br />並讓使用者透過手機應用程式在線上訂餐
                </h3>
                <div className='xiaodi_button_container'>
                    <button className={`btn glow-on-hover xiaodi_btn hidden ${elementIsVisible ? 'show' : ''}`} ref={visibleRef}>
                        <a href="https://play.google.com/store/apps/details?id=com.winpro.winproeat.consumer">
                            <li><IoLogoGooglePlaystore className='button_icon' /></li>Play Store
                        </a>
                    </button>
                    <button className={`btn btn-fill-white xiaodi_btn glow-on-hover hidden ${elementIsVisible ? 'show' : ''}`} ref={visibleRef}>
                        <a href="https://apps.apple.com/tw/app/%E5%B0%8F%E5%BC%9F%E5%A4%96%E9%80%81/id1513518654?l=en">
                            <SiAppstore className='button_icon' />App Store
                        </a>
                    </button>
                </div>
            </div>
            {/* DIVVVV */}

            {/* DIV 1 */}
            <div className='xiaodi_order_container'>
                <h3 className='carousel_title'>訂單 APP</h3>
                <p className='carousel_desc'>推動在地美食以及貼心外送服務</p>

                <div className='carousel_container'>
                    <div className='carousel_img'>
                        <div>
                            <Slider {...settings}>
                                <div >
                                    <img src={XIAODI_01} alt="" />
                                </div>
                                <div>
                                    <img src={XIAODI_02} alt="" />
                                </div >
                                <div >
                                    <img src={XIAODI_03} alt="" />
                                </div>
                                <div>
                                    <img src={XIAODI_04} alt="" />
                                </div>
                                <div>
                                    <img src={XIAODI_05} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='carrousel_desc'>
                        <div className='carousel_desc_item'>
                            <h3>便利篩選功能</h3>
                            <p>快速篩選餐廳和餐點，使飢餓的肚子立刻得著飽足</p>
                        </div>
                        <div className='carousel_desc_item'>
                            <h3>限時折扣優惠</h3>
                            <p>定期發送限時折扣，優惠不斷</p>
                        </div>
                        <div className='carousel_desc_item'>
                            <h3>喜愛餐廳功能</h3>
                            <p>將喜愛餐廳保存，省去查詢的麻煩</p>
                        </div>
                        <div className='carousel_desc_item'>
                            <h3>掌握外送時間</h3>
                            <p>外送時間即時顯示，等待卻不著急</p>
                        </div>
                        <div className='carousel_desc_item'>
                            <h3>GPS精準定位</h3>
                            <p>即時追蹤訂單狀態，清楚掌握訂單去向</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* DIV 2 */}
            <div className='xiaodi_order_container'>
                <h3 className='carousel_title'>外送 APP</h3>
                <p className='carousel_desc'>小弟外送為您帶來的美味佳餚</p>

                <div className='carousel_container_3'>
                    <div className='carrousel_desc'>
                        <div className='carousel_desc_item2'>
                            <h3>彈性上下線機制</h3>
                            <p>輕鬆利用空閒時間，賺取額外費用</p>
                        </div>
                        <div className='carousel_desc_item2'>
                            <h3>簡易操作</h3>
                            <p>接單、拒單、上線、離線一鍵點擊，快速又簡易</p>
                        </div>
                        <div className='carousel_desc_item2'>
                            <h3>推播功能</h3>
                            <p>餐點狀態資訊不漏接</p>
                        </div>
                    </div>

                    <div className='carousel_img_2'>
                        <Slider {...settings}>
                            <div >
                                <img src={DELIVERY_1} alt="" />
                            </div>
                            <div>
                                <img src={DELIVERY_2} alt="" />
                            </div >
                            <div >
                                <img src={DELIVERY_3} alt="" />
                            </div>
                            <div>
                                <img src={DELIVERY_4} alt="" />
                            </div>
                            <div>
                                <img src={DELIVERY_5} alt="" />
                            </div>
                            <div>
                                <img src={DELIVERY_6} alt="" />
                            </div>
                        </Slider>

                    </div>


                    <div className='carrousel_desc'>
                        <div className='carousel_desc_item2'>
                            <h3>精準定位</h3>
                            <p>顯示外送距離，隨時掌握路段。</p>
                        </div>
                        <div className='carousel_desc_item2'>
                            <h3>天氣預報</h3>
                            <p>可預先查閱氣象預報功能，以安排自己的外送攻略。</p>
                        </div>
                        <div className='carousel_desc_item2'>
                            <h3>收益圖表</h3>
                            <p>追蹤費用明細更一目了然，方便查看詳細的收益明細。</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* DIV3 */}
            <div className="resto_container">
                <h3 className='carousel_title'>餐廳APP</h3>
                <div className='resto_content'>
                    <div>
                        <img className='resto_img' src={RESTO_IMG} alt="" />
                    </div>
                    <div className='resto_content_desc'>
                        <p>操作介面清楚分類詳細的訂單階段及內容，
                            掌握訂單的即時通知。
                            <br /><br />
                            完善的菜單頁面，提供多項篩選功能，準確地找到想修改的餐點。
                            <br /><br />
                            便利的快速登入，省去登入所需時間，增進服務效率。 </p>
                    </div>
                </div>
            </div>

            {/* DIV4 */}
            <div className='delivery_container'>
                <h3 className='delivery_title'>外送服務</h3>
                <p className='delivery_desc'>
                    小弟外送團隊秉持著創新的精神，致力於開發安全、可靠且具成本效益的外送服務
                    目前於中區、北區設有據點，日後將繼續擴展至全國各地
                </p>
                <div className='homie_img_container'>
                    <img className='homie_img' src={HOMIE_SERVICE} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Xiaodi