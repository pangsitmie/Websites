import React, { useState } from 'react'
import './header.css'
import ROSETTA_LOGO from '../../assets/rosetta_logo.avif'
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { TbWorld } from 'react-icons/tb';

import PERSONALIZE_ICON from '../../assets/personalize_icon.avif'
import AI_EXIT from '../../assets/ai_exit.avif'
const Header = () => {
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
    const [isMenuSubMenu4, setMenuSubMenu4] = useState(false);

    const toggleSubmenu1 = () => {
        setMenuSubMenu1(isMenuSubMenu1 === false ? true : false);
    };

    const toggleSubmenu2 = () => {
        setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
    };

    const toggleSubmenu3 = () => {
        setMenuSubMenu3(isMenuSubMenu3 === false ? true : false);
    };
    const toggleSubmenu4 = () => {
        setMenuSubMenu4(isMenuSubMenu4 === false ? true : false);
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

    // let boxClassSubMenu4 = ["sub__menus"];
    // if (isMenuSubMenu4) {
    //     boxClassSubMenu4.push('sub__menus__Active');
    // } else {
    //     boxClassSubMenu4.push('');
    // }

    return (
        <header className="header_container">
            <div className="row">
                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <a href="/">
                        <img src={ROSETTA_LOGO} alt="logo" className='header_icon_img' />
                    </a>
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
                            <li onClick={toggleSubmenu1} className="menu-item sub__menus__arrows" > <Link to="#">Products<FiChevronDown /> </Link>
                                <ul className={boxClassSubMenu1.join(' ')} >
                                    <li>
                                        <NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}>
                                            <div className='menu_dropdown_item'>
                                                <div className='menu_dropdown_item_img'   >
                                                    <img src={PERSONALIZE_ICON} alt="" />
                                                </div>
                                                <div>
                                                    <p className='menu_dropdown_title'>Personalize Product Recommenders</p>
                                                    <p className='menu_dropdown_desc'>Your customer data, your conversion optimization</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}>
                                            <div className='menu_dropdown_item'>
                                                <div className='menu_dropdown_item_img'   >
                                                    <img src={AI_EXIT} alt="" />
                                                </div>
                                                <div>
                                                    <p className='menu_dropdown_title'>AI Exit-intent Promotions</p>
                                                    <p className='menu_dropdown_desc'>Prevent hesitant shoppers from bouncing</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item" ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}>Technology</NavLink> </li>


                            {/* 服務平台 MENU ITEM */}
                            <li onClick={toggleSubmenu2} className="menu-item sub__menus__arrows" > <Link to="#">Resources<FiChevronDown /> </Link>
                                <ul className={boxClassSubMenu2.join(' ')} >
                                    <li>
                                        <NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}>
                                            <div className='menu_dropdown_item'>
                                                <div>
                                                    <p className='menu_dropdown_title'>Case Studies</p>
                                                    <p className='menu_dropdown_desc'>Ecommerce success stories from merchant of all sizes</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}>
                                        <div className='menu_dropdown_item'>
                                            <div>
                                                <p className='menu_dropdown_title'>MarTech Blog</p>
                                                <p className='menu_dropdown_desc'>On ecommerce personalization and the growth mindset</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item" ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}>Pricing</NavLink> </li>


                            <li onClick={toggleSubmenu3} className="menu-item sub__menus__arrows" > <Link to="#">About Us<FiChevronDown /> </Link>
                                <ul className={boxClassSubMenu3.join(' ')} >
                                    <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}><p className='menu_dropdown_title'>Press</p></NavLink> </li>
                                    <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}><p className='menu_dropdown_title'>About</p></NavLink> </li>
                                    <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}><p className='menu_dropdown_title'>Partners</p></NavLink> </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='header_login_container'>
                    <button className='btn_transparent'>
                        Login
                    </button>
                    <button className='btn_header_pink btn_margin_left'>
                        Get Started
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header