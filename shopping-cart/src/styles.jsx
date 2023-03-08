import styled from 'styled-components'; 
import background from './assets/background.jpeg';

export const theme = {
    bg: "#FDFCFC",
    btn: "#546871",
    lines: "#ddd5cf",
}

export const Background = styled.div`
background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${background});
height: 100vh;
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

export const Home = styled.section`
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

