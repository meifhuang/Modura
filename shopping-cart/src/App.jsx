import { useState } from 'react'
import React from 'react' 
// import reactLogo from './assets/react.svg'
// import './App.css'
import Header from './components/Header'; 
import Homepage from './components/Homepage';
import Catalog from './components/Catalog'; 
import Footer from './components/Footer';
import background from './assets/background.jpeg';
import {Background} from './styles'


function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Header /> 
      <Background> 
        <Homepage />
      </Background>
    </div>
  )
}

export default App
