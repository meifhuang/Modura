import React from "react";
import logo from '../assets/Union.png'; 
import search from '../assets/search.png';
import cart from '../assets/cart.png'
import { useNavigate } from "react-router-dom";
import {Logo, Nav, Icon, theme, Button} from '../styles'
import Cart from "./Cart";

export default function Header() {
    const navigate = useNavigate();
    return (
        <Nav theme={theme}> 
            <div className="nav-divs"> 
                <a onClick={()=> navigate("/")}> <Logo src={logo}/> </a>
            </div>
            <div className="nav-divs">
                <Icon src={search}/>
                <div className='search-bar'> </div>
                <div> Search </div>
                <Icon src={cart}/>
            </div>
            <Cart/>
        </Nav>
    )
}