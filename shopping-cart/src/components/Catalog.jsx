import React from "react";
import Header from './Header'; 
import Homepage from './Homepage';
import Footer from './Footer';
import Item from './Item';
import {Background, Title, Page} from '../styles'
import products from '../data/products'



export default function Catalog() {
    return (
        <div className="App">
        <Header /> 
        <Background>
            <Page>
                <div className="home"> 
                <Title> C A T A L O G  </Title>
                </div>
                    <Item/>
            </Page>
        </Background>
    </div>
    )
}