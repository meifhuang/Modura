import React from "react";
import clothes from "../data/products"; 

export default function Item(props) {
    return (
        <div> 
            <img src={props.image}> </img>
            <p> {props.name} </p>
        </div>
    )
}