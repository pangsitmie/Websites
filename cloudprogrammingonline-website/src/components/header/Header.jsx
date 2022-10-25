import React from 'react'
import Nav from '../nav/Nav'
import CLOUD3D from '../../assets/cloud3d.png'
import Hero from '../hero/Hero'
import './header.css'
import DropdownMenu from '../dropdown/DropdownMenu'

const Header = () => {
    return (
        <div>
            <img src={CLOUD3D} className="background_cloud" alt="me" />
            <Nav />
            {/* <DropdownMenu /> */}
            <Hero />
        </div>
    )
}

export default Header