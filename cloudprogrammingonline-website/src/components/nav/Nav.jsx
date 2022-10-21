import React from 'react'
import './nav.css'
import { useRef } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import LOGO from '../../assets/winproLogo.png'


const Nav = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const [activeNav, setActiveNav] = useState('#')

    return (
        <header>
            <a href="/#" ><img src={LOGO} className="logo" alt="me" /></a>
            <nav className='nav-bar' ref={navRef}>
                <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}>服務平台</a>
                <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}>遊戲娛樂</a>
                <a href="#service" onClick={() => setActiveNav("#service")} className={activeNav === '#service' ? 'active' : ''}>多媒體設計</a>
                <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}>金流整合</a>
                <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}>關於我們</a>
                <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}>人才招募</a>
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