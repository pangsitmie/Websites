import React from 'react'
import YoutubeEmbed from '../youtubeEmbed/YoutubeEmbed'

import { SiAppstore } from 'react-icons/si'


import GALAXY_GRADIENT from '../../assets/galaxy_gradient.png'
import IPICKPRO_HERO from '../../assets/ipickpro_hero.png'
import IPICK_FEATURE1 from '../../assets/ipick_feature1.png'
import IPICK_FEATURE2 from '../../assets/IPICK_FEATURE2.png'
import IPICK_FEATURE3 from '../../assets/IPICK_FEATURE3.png'
import IPICK_FEATURE4 from '../../assets/IPICK_FEATURE4.png'


import './ipickpro.css'

const iPickPro = () => {
    return (
        <div className='container'>
            {/* HERO IPICKPRO */}
            <div className='hero_ipickpro'>
                <img className='center_gradient' src={GALAXY_GRADIENT} alt='' />
                <img className='hero_img' src={IPICKPRO_HERO} alt='' />

                <h1>iPickPro</h1>
                <div className='xiaodi_button_container'>

                    <button className={"btn glow-on-hover"}>
                        <a href="https://apps.apple.com/tw/app/ipickpro/id1414137182?l=en">
                            <SiAppstore className='button_icon' />App Store
                        </a>
                    </button>
                </div>
            </div>

            {/* VIDEO */}
            <div className='ipick_video'>
                <div className="App">
                    <YoutubeEmbed embedId="wV-AOqiAuuU" />
                </div>
                <div className="App">
                    <YoutubeEmbed embedId="aWepvLsbejg" />
                </div>
            </div>

            {/* div3 */}
            <div className='ipick_feature1'>
                <h2>遊戲類型</h2>
                <p>
                    有免費區及付費區,可於免費區夾中娃娃累積點數,並於商城兌換點數
                </p>
                <img src={IPICK_FEATURE1} alt="" />
            </div>

            {/* DIV4 */}
            <div className='ipick_feature2'>
                <div className='ipick_feature_card ipick_card1'>
                    <h2>榮譽與排行榜</h2>
                    <p>中獎紀錄有會員精彩遊玩影片,供大家分享追蹤及觀摩技巧. 排行榜上包含當月及當週夾中次數.</p>
                    <div className='ipick_feature_card_img_container'>
                        <img src={IPICK_FEATURE2} alt="" />
                    </div>
                </div>
                <div className='ipick_feature_card ipick_card2'>
                    <h2>即時聊天</h2>
                    <p>
                        遊玩中或等待遊玩時,可與其他玩家及時討論聊天。分享彼此遊玩經驗及戰利品，增添樂趣。
                    </p>
                    <div className='ipick_feature_card_img_container'>
                        <img src={IPICK_FEATURE3} alt="" />
                    </div>
                </div>
                <div className='ipick_feature_card ipick_card3'>
                    <h2>個人資訊</h2>
                    <p>有現金點及免費獲得的積分. 可查看戰利品、配送與兌換點數紀錄等功能。</p>
                    <div className='ipick_feature_card_img_container'>
                        <img src={IPICK_FEATURE4} alt="" />
                    </div>
                </div>
            </div>

            {/* DIV5 */}
            <div className='ipick_advantage'>
                <h2>四大優勢</h2>
                <div className='ipick_advantage_col'>
                    <div>
                        <div className='ipick_advantage_item'>
                            <h3>遠端遊玩</h3>
                            <p>
                                不需出門即可在家與他人一同享受夾娃娃機的樂趣
                            </p>
                        </div>
                        <div className='ipick_advantage_item'>
                            <h3>即時聊天</h3>
                            <p>
                                透過線上夾娃娃機可交
                                友贈禮即時訊息傳送
                            </p>
                        </div>

                    </div>
                    <div >
                        <div className='ipick_advantage_item'>
                            <h3>切磋觀摩</h3>
                            <p>
                                可即時觀看遊完影片
                                一起與他人精進檢寶技術
                            </p>
                        </div>
                        <div className='ipick_advantage_item'>
                            <h3>整合店家</h3>
                            <p>
                                線上店家導入線上營運
                                讓營運範圍無國界
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default iPickPro