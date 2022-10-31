import React from 'react'
import RecentProject from '../../components/recentProject/RecentProject'
import Service from '../../components/service/Service'
import Hero from '../hero/Hero'
import CLOUD3D from '../../assets/cloud3d.png'
import './home.css'
const Home = () => {
    return (
        <div>
            <img src={CLOUD3D} className="background_cloud" alt="me" />
            <Hero />
            <RecentProject />
            <Service />
        </div>

    )
}

export default Home