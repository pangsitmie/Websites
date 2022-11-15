import React from 'react'
import { useInView } from 'react-intersection-observer';

import './service.css'
import SERVICEBG from '../../assets/service.jpg'
import TEAMBG from '../../assets/team.png'
import CUSTOMERBG from '../../assets/customer.jpg'
import FLOWCHART from '../../assets/flow_chart.png'


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
    const { ref, inView } = useInView({ trackVisibility: true, delay: 100, triggerOnce: true });
    return (
        <div className='service_container'>
            <div className={`hidden ${inView ? 'show' : ' '}`} ref={ref}>
                <div className="container ">
                    <h1 className='service-title'><em>我們正在做什麼,</em><br></br>以及我們公司如何幫助您改善業務</h1>
                </div>

                <div className="container">
                    <h2 className='service-desc' >
                        Winpro cloud是為中台灣以實體遊戲機為基底, 具備雲端運算、數位服務、虛實整合、雲端支付等多項軟、韌、硬體兼具之資訊研發公司
                        我們擁有自己的工程師團隊，專門根據您的需求客製化設計線上平台或應用程序。
                    </h2>
                </div>
            </div>

            <div className="container service-block-container">
                {
                    data.map(({ id, image, title, desc }) => {
                        return (
                            <div style={{ backgroundImage: `url(${image})` }} key={id} className='portfolio__item '>
                                <div className='service_content'>
                                    <h3>{title}</h3>
                                    <a href='/#'>{desc}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flowchart_container">
                <img src={FLOWCHART} className="flowchart_image" alt="" />
            </div>
        </div>
    )
}

export default Service