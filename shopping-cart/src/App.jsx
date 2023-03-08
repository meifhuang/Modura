import { useState } from 'react'
import React from 'react' 
import Header from './components/Header'; 
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import {Background} from './styles'


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
