import React, { useState } from 'react'
import './dropdownMenu.css'

const DropdownMenu = () => {
    return (
        <Navbar>
            <NavItem title="商業合作">
                <DropdownContent title="商業合作"></DropdownContent>
            </NavItem>

            <NavItem title="Lang">
                <DropdownContent title="lang"></DropdownContent>
            </NavItem>

            <NavItem title="服務平台" />
            <NavItem title="遊戲娛樂" />
            <NavItem title="多媒體設計" />
            <NavItem title="關於我們" />

            <NavItem title="Lang">
                <DropdownContent title="lang"></DropdownContent>
            </NavItem>
        </Navbar>

    )
}


const Navbar = (props) => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    )
}

const NavItem = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-title" onClick={() => setOpen(!open)}>
                {props.title}
            </a>

            {open && props.children}
        </li>
    );
}

const DropdownContent = () => {
    const DropdownItem = (props) => {
        return (
            <a href='#' className='dropdown-item'>
                {props.children}
            </a>
        );
    }

    return (
        <div className='dropdown'>
            <DropdownItem>My proifile</DropdownItem>
        </div>
    )
}


export default DropdownMenu