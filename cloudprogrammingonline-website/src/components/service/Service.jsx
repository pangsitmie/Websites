import React from 'react'
import './service.css'
import SERVICEBG from '../../assets/service.jpg'
import TEAMBG from '../../assets/team.png'
import CUSTOMERBG from '../../assets/customer.jpg'
import FLOWCHART1 from '../../assets/flowchart1.png'


const data = [
    {
        id: 1,
        image: SERVICEBG,
        title: 'Our Service',
        desc: '哲煜能提供給您的服務？'
    },
    {
        id: 2,
        image: TEAMBG,
        title: 'Our Team',
        desc: '為何要找哲煜科技？'
    },
    {
        id: 3,
        image: CUSTOMERBG,
        title: 'Our Customer',
        desc: '哲煜的合作案例？'
    }
]

const Service = () => {
    return (
        <div className='service_container'>
            <div className="container ">
                <h1 className='service-title'><em>我們正在做什麼,</em><br></br>以及我們公司如何幫助您改善業務</h1>
            </div>

            <div className="container">
                <h2 className='service-desc' >
                    羅位陽育些常料現、東女相提兒遠：特的外才刻東是收血。除座去重定們生它行裡師福動原效關一、張前電香物了投時。有開立養麼書頭年萬人過治世的市次相家，和老電她不、
                </h2>
            </div>

            <div className="container service-block-container ">
                {
                    data.map(({ id, image, title, desc }) => {
                        return (
                            <div style={{ backgroundImage: `url(${image})` }} key={id} className='portfolio__item '>
                                <div className='service_content'>
                                    <h3>{title}</h3>
                                    <a target='_blank' rel="noreferrer">{desc}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flowchart_container">
                <img src={FLOWCHART1} className="flowchart_image" alt="" />
            </div>
        </div>
    )
}

export default Service