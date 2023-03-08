import React from "react";
import Header from './Header'; 
import Homepage from './Homepage';
import Footer from './Footer';
import Item from './Item';
import {Background, Title, Page} from '../styles'
import clothes from '../data/products'

const [inventory, setInventory] = React.useState([]);

React.useEffect(() => {
    const result = []
    for (let i = 0; i < clothes.length; i++) {
        result[i] = clothes[i];
    }
    setInventory(result)
},[]) 

export default function Catalog() {
    return (
        <div className="App">
        <Header /> 
        <Background>
            <Page>
                <div className="home"> 
                <Title> C A T A L O G  </Title>
                </div>
                <div>
                    {inventory.map((item) => {
                        <Item id={item.id} image={item.image} name={item.name}/>
                    })}
                </div>
            </Page>
        </Background>
    </div>
    )
}