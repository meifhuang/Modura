import React from "react";
import Header from './Header'; 
import Homepage from './Homepage';
import Footer from './Footer';
import Cart from './Cart';
import Item from './Item';
import {Background, Title, Page} from '../styles'
import clothes from '../data/products'


export default function Catalog() {
    const [inventory, setInventory] = React.useState(clothes);

    return (
        <div className="App">
        <Header /> 
        <Background>
            
            <Page> 
                <Title> C A T A L O G  </Title>
                    <div className="catalog">
                        {inventory.map((item) => {
                            return (
                            <Item key={item.id} image={item.image} name={item.title} price={item.price} />
                            )
                        })}
                    </div> 
                    </Page>
                
        </Background>
    </div>
    )
}