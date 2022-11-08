import React from 'react'
import RecentProject from '../../components/recentProject/RecentProject'
import Service from '../../components/service/Service'
import Hero from '../hero/Hero'
import CLOUD3D from '../../assets/cloud3d.png'
import PURPLE_GRADIENT from '../../assets/purple_gradient.png'
import './home.css'
const Home = () => {
    return (
        <div>
            <img src={PURPLE_GRADIENT} className="purple_gradient" alt="" />
            <img src={CLOUD3D} className="background_cloud" alt="me" />
            <Hero />
            <RecentProject />
            <Service />
        </div>

    )
}

export default Home