import React from 'react'
import { useInView } from 'react-intersection-observer';
import IMG1 from '../../assets/recentProject1.png'
import IMG2 from '../../assets/recentProject2.png'

import './recentProject.css'
const RecentProject = () => {
    const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });
    const { ref: proj1, inView: inView1 } = useInView({ trackVisibility: true, delay: 100 });
    const { ref: proj2, inView: inView2 } = useInView({ trackVisibility: true, delay: 100 });

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
                <div className="project_card" style={{ backgroundImage: `url(${IMG1})` }}>

                </div>

                <div className='project_desc'>
                    <h2>傳奇レジェンド</h2>
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

                <div className="project_card" style={{ backgroundImage: `url(${IMG2})` }}>

                </div>
            </div>

        </section>
    )
}

export default RecentProject