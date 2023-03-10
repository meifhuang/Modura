import { useState } from 'react'
import React from 'react' 
import Header from './components/Header'; 
import Homepage from './components/Homepage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import {Background, theme} from './styles'


export function App() {

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
