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
                    <DropdownMenu title="商業合作"></DropdownMenu>
                </NavItem>

                <NavItem title="服務平台" />
                <NavItem title="遊戲娛樂" />
                <NavItem title="多媒體設計" />
                <NavItem title="關於我們" />

                <NavItem title="Lang">
                    <DropdownMenu></DropdownMenu>
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
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.title}
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        goToMenu="animals">
                        Animals
                    </DropdownItem>

                </div>
            </CSSTransition>

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