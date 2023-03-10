import React from "react";
import clothes from "../data/products"; 
import {ItemImg, AddCart, theme} from  "../styles";

export default function Item(props) {

    const {image, name, price} = props

    return (
        <div className="item">
            <ItemImg src={image}></ItemImg>
            <h3> {name} </h3>
            <p> {price} </p>
            <AddCart theme={theme} > Add to basket </AddCart>
        </div>
    )
}