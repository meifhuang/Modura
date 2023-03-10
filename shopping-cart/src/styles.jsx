import styled from 'styled-components'; 
import background from './assets/background.jpeg';

export const theme = {
    bg: "#FDFCFC",
    btn: "#546871",
    lines: "#ddd5cf",
    cart: "#f5f5f5",
    qtybtn: "#B1A7A0"
}

export const Background = styled.div`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${background});
    height: 100vh;

    .catalog {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        justify-content: center;
    }
    .catalog > * {
        margin: 1.5em;
    }

    h3, p { 
        margin: 1px;
    }
`

export const Logo = styled.img`
    width: 50px;
    height: 50px; 
    padding: 16px 16px;
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`

export const Button = styled.button`
    background: ${props => props.theme.btn};
    color: ${props => props.theme.bg};
    text-align: center; 
    border-radius: 3px;
    width: 25em;
    height: 3em;
    margin-bottom: 1em;
`

export const AddCart = styled.button`
    background: ${props => props.theme.btn};
    color: ${props => props.theme.bg};
    text-align: center; 
    border-radius: 3px;
    width: 325px;
    height: 2.5em;
    margin-top: 1em;
`

export const Image = styled.img`
    height: 400px;
    width: 405px;
`

export const Nav = styled.nav`
    width: 100vw; 
    background: ${props => props.theme.bg};
    display: flex;
    justify-content: space-between;

    .nav-divs {
        display: flex; 
        flex-direction: row;
    }

    .nav-divs > * {
        margin-right: 1em;
        align-self: center; 
    }
    .search-bar {
        border: 1px solid ${props => props.theme.lines}; 
        width: 200px;
        height: 25px;
    }
    a {
       cursor: pointer;
    }

`;

export const Title = styled.h2`
    font-size: 2.5em;
    text-align: center;
    color: #403732;
    font-family: Hahmlet; 
`

export const HomeText = styled.h4`
    font-family: Hahmlet; 
    font-size: 1em;
`

export const Page = styled.section`
    height: 100vh;
    margin: 0px;
    padding: 0px;
    border-top: 2px solid #ddd5cf;

    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;
    }

` 
export const ItemImg = styled.img`
    width: 325px;
    height: 400px;
`

export const CartDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: 0;
    top: 0;
    width: 30%;
    height: 100%;
    z-index: 10;
    overflow-y: scroll;
    background-color: ${props => props.theme.cart}; 
    border: 1px solid black;

    h2 {
        font-family: Hahmlet;
        font-weight: 700;
        text-align: center;
    }

    .checkout {
        width: 15em;
        height: 40px;
        background: ${props => props.theme.btn};
        color: ${props => props.theme.bg};
        border-radius: 3px;
        margin-bottom: 1em;
    }

    img {
        width: 13em;
        height: 13em;
    }

    h4, h5 {
        margin: 0px;
        margin-top: .5em;
    }

    .quantity {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cartItems {
        display: flex; 
        flex-direction: column;
        align-items: center;
        
    }

    button {
        background: ${props => props.theme.qtybtn}; 
        color: ${props => props.theme.bg};
        border-radius: 3px;
        padding: .2em .5em;
        margin: .8em;
    }

    .options {
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .close {
        width: 15em;
        height: 40px;
        margin: 0px;
        padding: 0px;
        margin-bottom: 1em;
    }

   
`