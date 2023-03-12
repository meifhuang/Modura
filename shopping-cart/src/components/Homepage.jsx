import React from "react";
import cover from '../assets/cover.jpeg';
import { Image, Title, Button, HomeText, theme, Background } from '../styles'
import { useNavigate } from "react-router-dom";


export default function Homepage() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <Background>
                <Title> M O D U R A </Title>
                <div className="home">
                    <Image src={cover} />
                    <HomeText> Sustainable Modern Timeless </HomeText>
                    <Button theme={theme} onClick={() => navigate("/catalog")}> Shop Now </Button>
                </div>
            </Background>
        </div>
    )
}
