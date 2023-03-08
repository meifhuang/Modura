import React from "react";
import cover from '../assets/cover.jpeg';
import {Image, Title, Button, Home, HomeText, theme} from '../styles'


export default function Homepage() {
    return (
        <Home> 
            <Title> M O D U R A </Title>
            <div class="home">
                <Image src={cover} />
                <HomeText> Sustainable Modern Timeless </HomeText>
                <Button theme={theme}> Shop Now </Button>
            </div> 
        </Home>
    )
}