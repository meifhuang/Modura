import React from "react";
import { ItemImg, AddCart, theme } from "../styles";

export default function Item(props) {

    const { image, name, price, addToCart } = props

    return (
        <div className="item">
            <ItemImg src={image}></ItemImg>
            <h4> {name} </h4>
            <h5> ${price} </h5>
            <AddCart theme={theme} onClick={addToCart} > Add to basket </AddCart>
        </div>
    )
}
