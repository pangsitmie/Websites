import React from 'react'
import CLOUD_PURPLE from '../../assets/cloudpurple.png'
import CART_PURPLE from '../../assets/cartpurple.png'

import './recentProject.css'
const RecentProject = () => {
    return (
        <section id='about'>
            <div className='container recet_project_content'>
                <h2 className=''>我們最近的專案</h2>

                <p>
                    羅位陽育些常料現、東女相提兒遠：特的外才刻東是收血。除座去重定們生它行裡師福動原效關一、張前電香物了投時。有開立養麼書頭年萬人過治世的市次相家，和老電她不、
                    <br /><br />
                    那座了上生兒故外了員體、裡狀兩容學動果應個優聞草，跑整單自司基本不一一質，一動制民大，點了是親東的題認口近輪品，那坐生漸集度滿我如花上己。及子的會門反上研說東等文空因古小經房黨食一我高她小屋學設，化經手：年它和：口包些家要外座身急，臺熱合就則調在國求，
                    美再為不、師想體快，新在經國流年行不待分現聲變出以人著子特果子下身的才……當計深一底我口我願，單賽流位沒。
                    <br /><br />
                    我臺為助體上，班之出怕教打聲中，做一就時，一經治不來整三斷深因叫兩，這室特突不據明嚴男灣起是樹整對。
                </p>
            </div>

            {/* project1 */}
            <div className="container about__container">
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
                        那座了上生兒故外了員體、裡狀兩容學動果應個優聞草，跑整單自司基本不一一質，一動制民大，點了是親東的題認口近輪品，那坐生漸集度滿我如花上
                    </p>
                    <button className="btn btn-fill-white glow-on-hover">進一步了解</button>
                </div>
            </div>

            {/* project2 */}
            <div className="container about__container">
                <div className='project_desc'>
                    <h2>營銷支付</h2>
                    <p>
                        那座了上生兒故外了員體、裡狀兩容學動果應個優聞草，跑整單自司基本不一一質，一動制民大，點了是親東的題認口近輪品，那坐生漸集度滿我如花上
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