import { useState } from 'react'
import './App.css'
import { Illustration } from 'react-zdog'
import { CatHead } from './components/parts/CatHead'
import { Theme } from 'react-daisyui'

function App() {

  const THEMES = ["light", "dark", "cupcake", "bumblebee", "emerald",
    "corporate", "synthwave", "retro", "cyberpunk", "valentine",
    "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy",
    "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business",
    "acid", "lemonade", "night", "coffee", "winter"];

  Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
  }

  return <Theme dataTheme={THEMES.random()}>
    <div style={{ width: '100vw', height: '100vh' }} className="m-0">
      <Illustration dragRotate={true} element="svg" className="m-0">
        <CatHead />
      </Illustration>
    </div >
  </Theme >
}

export default App
