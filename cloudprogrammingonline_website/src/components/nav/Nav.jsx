import './nav.css'
import LOGOFULL from '../../assets/logo_full.png'
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

const Nav = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu1, setMenuSubMenu1] = useState(false);
    const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
    const [isMenuSubMenu3, setMenuSubMenu3] = useState(false);

    const toggleSubmenu1 = () => {
        setMenuSubMenu1(isMenuSubMenu1 === false ? true : false);
    };

    const toggleSubmenu2 = () => {
        setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
    };

    const toggleSubmenu3 = () => {
        setMenuSubMenu3(isMenuSubMenu3 === false ? true : false);
    };

    let boxClassSubMenu1 = ["sub__menus"];
    if (isMenuSubMenu1) {
        boxClassSubMenu1.push('sub__menus__Active');
    } else {
        boxClassSubMenu1.push('');
    }

    let boxClassSubMenu2 = ["sub__menus"];
    if (isMenuSubMenu2) {
        boxClassSubMenu2.push('sub__menus__Active');
    } else {
        boxClassSubMenu2.push('');
    }

    let boxClassSubMenu3 = ["sub__menus"];
    if (isMenuSubMenu3) {
        boxClassSubMenu3.push('sub__menus__Active');
    } else {
        boxClassSubMenu3.push('');
    }

    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">

                    {/* Add Logo  */}
                    <div className="header__middle__logo">
                        <NavLink exact activeClassName='is-active' to="/">
                            <a href="/"><img src={LOGOFULL} alt="logo" /></a>

                        </NavLink>
                    </div>

                    <div className="header__middle__menus">
                        <nav className="main-nav " >

                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                            </> : <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                            </>}


                            <ul className={boxClass.join(' ')}>
                                {/* <li className="menu-item" >
                                    <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink>
                                </li> */}

                                {/* 商務合作 MENU ITEM */}
                                <li onClick={toggleSubmenu1} className="menu-item sub__menus__arrows" > <Link to="#">商務合作<FiChevronDown /> </Link>
                                    <ul className={boxClassSubMenu1.join(' ')} >
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/line`}>LINE吸粉服務</NavLink> </li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/search-system`}>查帳系統</NavLink> </li>
                                    </ul>
                                </li>

                                {/* 服務平台 MENU ITEM */}
                                <li onClick={toggleSubmenu2} className="menu-item sub__menus__arrows" > <Link to="#">服務平台<FiChevronDown /> </Link>
                                    <ul className={boxClassSubMenu2.join(' ')} >
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/marketing-system`}>營銷系統</NavLink> </li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/xiaodi`}>小弟外送平台</NavLink> </li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/block-store`}>格子舖</NavLink> </li>
                                    </ul>
                                </li>

                                {/* 遊戲娛樂 MENU ITEM */}
                                <li onClick={toggleSubmenu3} className="menu-item sub__menus__arrows" > <Link to="#">遊戲娛樂<FiChevronDown /> </Link>
                                    <ul className={boxClassSubMenu3.join(' ')} >
                                        <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/ipickpro`}>iPickPro</NavLink> </li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/galaxy-city`}>遊樂城APP建置</NavLink> </li>
                                    </ul>
                                </li>

                                {/* 多媒體設計 MENU ITEM */}
                                <li className="menu-item" ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/media-design`}>多媒體設計</NavLink> </li>

                                {/* 多媒體設計 MENU ITEM */}
                                <li className="menu-item" ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}>關於我們</NavLink> </li>
                            </ul>


                        </nav>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Nav