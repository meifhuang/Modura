import React, { useState } from "react";
import styled from 'styled-components';
import { theme, Button } from "../styles";
import clothes from "../data/products";


export default function Cart(props) {

    const { toggleCart, addToCart, cartItems, removeCart, checkout } = props;
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    return (
        <CartDiv theme={theme}>
            <div className="cart">
                <h2> Cart </h2>
                {cartItems.length === 0 ?
                    <div className="cartItems"> Cart Is Empty </div> :
                    cartItems.map((item) => {
                        return (
                            <div className="cartItems">
                                <img src={item.image}></img>
                                <h4> {item.title} </h4>
                                <h5> ${(item.price * item.qty).toFixed(2)} </h5>
                                <div className="quantity">
                                    <button onClick={() => addToCart(item)}> + </button>
                                    <h3> {item.qty} </h3>
                                    <button onClick={() => removeCart(item)}> - </button>
                                </div>
                            </div>
                        )
                    })}
                <div className="options">
                    <h4> Total: ${totalPrice.toFixed(2)} </h4>
                    <button className="checkout" onClick={checkout}> Check Out </button>
                    <button className="close" onClick={toggleCart}> Close </button>
                </div>
            </div>
        </CartDiv>
    )
}


const CartDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: 0;
    top: 0;
    width: 25%;
    height: 100%;
    z-index: 10;
    overflow-y: scroll;
    background-color: ${props => props.theme.cart}; 
  

    h2 {
        font-family: Hahmlet;
        font-weight: 700;
        text-align: center;
    }

    .checkout {
        width: 15em;
        height: 40px;
        background: ${props => props.theme.btn};
        color: ${props => props.theme.bg};
        border-radius: 3px;
        margin-bottom: 1em;
    }

    img {
        width: 13em;
        height: 13em;
    }

    h4, h5 {
        margin: 0px;
        margin-top: .5em;
    }

    .quantity {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cartItems {
        display: flex; 
        flex-direction: column;
        align-items: center;
        
    }

    button {
        background: ${props => props.theme.qtybtn}; 
        color: ${props => props.theme.bg};
        border-radius: 3px;
        padding: .2em .5em;
        margin: .8em;
    }

    .options {
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .close {
        width: 15em;
        height: 40px;
        margin: 0px;
        padding: 0px;
        margin-bottom: 1em;
    }
   
`
