import React from 'react'
import './nav.css'
import { useRef } from 'react'
// import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"
import LOGOFULL from '../../assets/logo_full.png'


const Nav = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    // const [activeNav, setActiveNav] = useState('#')

    return (
        <header>
            <a href="/#" ><img src={LOGOFULL} className="logo" alt="me" /></a>

            <nav className='nav-bar' ref={navRef}>
                <ul className='permalinks'>
                    <li><a href="/#">商業合作</a></li>
                    <li><a href="#about">服務平台</a></li>
                    <li><a href="#experience">遊戲娛樂</a></li>
                    <li><a href="#services">多媒體設計</a></li>
                    <li><a href="#portfolio">關於我們</a></li>
                    <li><a href="#contact"><TbWorld className='language__icon' /></a></li>
                </ul>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>

    )
}

export default Nav