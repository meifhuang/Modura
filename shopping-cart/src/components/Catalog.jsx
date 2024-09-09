import React, { useState } from "react";
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';
import Cart from './Cart';
import Item from './Item';
import { Background, Title } from '../styles'
import { addToCart } from './CartSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function Catalog(props) {

    // const { products, addToCart } = props;
    const { products } = props; 
    const [addedToCart, setAddedToCart] = useState({})

    const dispatch = useDispatch() 

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }


    return (
        <div className="App">
            <Background>
                <Title> C A T A L O G  </Title>
                <div className="catalog">
                    {products.map((item) => {
                        return (
                            <Item key={item.id} image={item.image} name={item.title} price={item.price} addToCart={() => handleAddToCart(item)} />
                        )
                    })}
                </div>
            </Background>
        </div>
    )
}
