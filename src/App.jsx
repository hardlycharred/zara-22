import { useState } from 'react'
import './App.css'
import { Illustration, Shape } from 'react-zdog'
import * as Zdog from 'react-zdog'

import { CatHead } from './components/models/CatHead'
import { Theme } from 'react-daisyui'
import { Cat } from './components/models/Cat'
import { Cake } from './components/models/Cake'

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
        <Shape visible={false}
          rotate={{
            // x:- 0.25,
            y: 0.5
          }}
        >
          <Cat />
          <Cake
            yPos={320}
            zPos={500}
          />
        </Shape>
      </Illustration>
    </div >
  </Theme >
}

export default App
