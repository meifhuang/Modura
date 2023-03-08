import React from "react";
import logo from '../assets/Union.png'; 
import search from '../assets/search.png';
import cart from '../assets/cart.png'
import {Logo, Nav, Icon, theme} from '../styles'


export default function Header() {
    return (
        <Nav theme={theme}> 
            <div className="nav-divs"> 
                <Logo src={logo}/>
            </div>
            <div className="nav-divs">
                <Icon src={search}/>
                <div className='search-bar'> </div>
                <div> Search </div>
                <Icon src={cart}/>
            </div>
        </Nav>
    )
}