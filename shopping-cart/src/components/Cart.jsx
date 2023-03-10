import React from "react";
import {CartDiv, theme, Button} from  "../styles";
import clothes from "../data/products";


export default function Cart(props) {

    const [cart, setCart] = React.useState([clothes])

    return (
       <CartDiv theme={theme}>
            <div className="cart">
                <h2> Cart </h2>
                {cart.map((item) => {
                    return (
                        <img src={item.image}> </img>
                    )
                })}
                <h4> Total: </h4>
                <button className="checkout"> Check out </button>
           </div>
        </CartDiv> 
    )
}