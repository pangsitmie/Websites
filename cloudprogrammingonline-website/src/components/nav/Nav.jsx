import React from 'react'
import './nav.css'
import { FaBars, FaTimes } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"
import LOGOFULL from '../../assets/logo_full.png'
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

const Nav = () => {
    // const navRef = useRef();

    // const showNavbar = () => {
    //     navRef.current.classList.toggle("responsive_nav");
    // }

    // const [activeNav, setActiveNav] = useState('#')

    return (
        <header>
            <Navbar>
                <NavItem title="商業合作">
                    <DropdownMenu goToMenu="0"></DropdownMenu>
                </NavItem>

                <NavItem title="服務平台">
                    <DropdownMenu goToMenu="1"></DropdownMenu>
                </NavItem>

                <NavItem title="遊戲娛樂">
                    <DropdownMenu idx="2"></DropdownMenu>
                </NavItem>
                <NavItem title="多媒體設計" />
                <NavItem title="關於我們" />

                <NavItem title="語言">

                </NavItem>
            </Navbar>
        </header>
    )
}


function Navbar(props) {
    return (
        <nav className="navbar">
            <a href="/#" ><img src={LOGOFULL} className="logo" alt="me" /></a>
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [activeMenu, setActiveMenu] = useState('main');

    const [open, setOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open) && props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.title}
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    // const [activeMenu, setActiveMenu] = useState('商業合作');

    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [activeMenu])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.children}
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === '0'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>LINE吸粉服務</DropdownItem>
                    <DropdownItem goToMenu="1">
                        查帳系統
                    </DropdownItem>
                    <DropdownItem goToMenu="animals">
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === '1'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>營銷系統</DropdownItem>
                    <DropdownItem>小弟外送平台</DropdownItem>
                    <DropdownItem>格子舖</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>iPickPro</DropdownItem>
                    <DropdownItem>小弟外送平台</DropdownItem>
                    <DropdownItem>遊樂城APP建置</DropdownItem>
                </div>
            </CSSTransition>



            {/* ====================MULTI LEVEL DROPDOWN ==========================================*/}
            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" >
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem >HTML</DropdownItem>
                    <DropdownItem >CSS</DropdownItem>
                    <DropdownItem >JavaScript</DropdownItem>
                    <DropdownItem >Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main">
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem >Kangaroo</DropdownItem>
                    <DropdownItem >Frog</DropdownItem>
                    <DropdownItem >Horse?</DropdownItem>
                    <DropdownItem >Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}
export default Nav