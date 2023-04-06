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
    margin: 0px;
    padding: 0px;
    border-top: 2px solid #ddd5cf;

    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
   
    .catalog {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(450px,1fr));
        grid-template-rows: 1fr 1fr;
    }
    .catalog > * {
        margin: 1.5em;
        justify-self: center;
    }

    h4, h5 { 
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
    cursor: pointer;
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
    width: 299px;
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
        margin-right: 1.5em;  
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
    margin: 1em !important;
`


export const ItemImg = styled.img`
    width: 100%;
    height: 380px;
`
