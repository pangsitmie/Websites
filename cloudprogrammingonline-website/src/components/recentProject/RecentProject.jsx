import React from 'react'
import { useInView } from 'react-intersection-observer';
import CLOUD_PURPLE from '../../assets/cloudpurple.png'
import CART_PURPLE from '../../assets/cartpurple.png'

import './recentProject.css'
const RecentProject = () => {
    const { ref, inView } = useInView({ trackVisibility: true, delay: 100, triggerOnce: true });
    const { ref: proj1, inView: inView1 } = useInView({ trackVisibility: true, delay: 100, triggerOnce: true });
    const { ref: proj2, inView: inView2 } = useInView({ trackVisibility: true, delay: 100, triggerOnce: true });

    return (
        <section id='about' >
            <div className={`container recet_project_content hidden ${inView ? 'show' : ' '}`} ref={ref}>
                <h2 >我們最近的專案</h2>

                <p>
                    導入自助選務販賣機雲端支付功能且具備廣告推播、查帳，此系統整合了實體機台與雲端運算。
                    研發機台的結構及提供的服務，除了技術創新外，更著重於消費者的體驗服務創新，進而機台整合的商業服務
                </p>
            </div>

            {/* project1 */}
            <div className={`container about__container hidden ${inView1 ? 'show' : ' '}`} ref={proj1}>
                <div className="project_card">
                    <div className='project_card-image'>
                        <img src={CLOUD_PURPLE} alt="yuncheng projcetss" />
                    </div>
                    <div className='project_btn_container'>
                        <h3>滿天星</h3>
                    </div>
                </div>

                <div className='project_desc'>
                    <h2>滿天星</h2>
                    <p>
                        結合聊天室及物聯控制/視訊串流/商城購物為一體的平台式APP架構, 虛實整合遠距視訊遊戲機
                    </p>
                    <button className="btn btn-fill-white glow-on-hover">進一步了解</button>
                </div>
            </div>

            {/* project2 */}
            <div className={`container about__container hidden ${inView2 ? 'show' : ' '}`} ref={proj2}>
                <div className='project_desc'>
                    <h2>營銷支付</h2>
                    <p>
                        導入自助選務販賣機雲端支付功能且具備廣告推播、查帳，此系統整合了實體機台與雲端運算。
                    </p>
                    <button className="btn btn-fill-white glow-on-hover">進一步了解</button>
                </div>

                <div className="project_card">
                    <div className='project_card-image'>
                        <img src={CART_PURPLE} alt="yuncheng projcetss" />
                    </div>
                    <div className='project_btn_container'>
                        <h3>營銷支付</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default RecentProject