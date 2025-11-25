import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from './assets/Submark Orange.png'
import './App.css'
import Navbar from './Navbar.jsx'
import Hero from './hero.jsx'
import About from './about.jsx'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
