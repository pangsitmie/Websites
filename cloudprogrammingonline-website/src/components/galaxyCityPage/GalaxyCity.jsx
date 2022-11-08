import React from 'react'
import GALAXY_HERO from '../../assets/galaxy_hero.png'
import GALAXY_BLOB from '../../assets/galaxy_blob.svg'
import GALAXY_GRADIENT from '../../assets/galaxy_gradient.png'
import FLOWCHART from '../../assets/flowchart2.png'
import POLLY_WHITE from '../../assets/polly_white.png'

import './galaxyCity.css'

const GalaxyCity = () => {
    return (
        <div className='container'>
            <div className='galaxy_hero_content'>
                <h3 className='galaxy_tag'>有你自己</h3>
                <h1 className='galaxy_title'>遊樂城APP</h1>
                <img className='galaxy_hero_img' src={GALAXY_HERO} />
                <img className='galaxy_gradient' src={GALAXY_GRADIENT} />
            </div>

            {/* FLOWCHART */}
            <div className='galaxy_flowchart'>
                <h1>FLOW</h1>
                <img className='galaxy_flowchart_img' src={FLOWCHART} alt="" />
            </div>

            {/* CONTENT1 */}
            <div className='iot_content'>
                <h1>物聯網系統</h1>
                <h2>使用網路直播與遠端IoT系統</h2>
                <div className='galaxy_col2'>
                    <div>
                        <p className='iot_desc1'>讓玩家可以透過手機、電腦、平板等通訊工具實際操作娛樂機台 達成遠端遊玩的效果。</p>
                    </div>
                    <div>
                        <img src={POLLY_WHITE} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GalaxyCity