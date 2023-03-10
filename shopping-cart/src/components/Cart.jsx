import React from "react";
import {CartDiv, theme, Button} from  "../styles";
import clothes from "../data/products";


export default function Cart(props) {

    const [cart, setCart] = React.useState(clothes)

    return (
       <CartDiv theme={theme}>
         <div className="cart"> 
                <h2> Cart </h2>
                {cart.map((item) => {
                    return (
                        <div class="cartItems">                        
                        <img src={item.image}></img>
                        <h4> {item.title} </h4>
                        <h5> {item.price} </h5>
                        <div className="quantity"> 
                            <button> + </button>
                            <h3> 1 </h3>
                            <button> - </button>
                        </div>
                        </div> 
                )
                })}
                <div className="options"> 
                <h4> Total: $205.98 </h4>
                <button className="checkout"> Check Out </button>
                <button className="close"> Close </button>
                </div>
            </div>
        </CartDiv> 
    )
}