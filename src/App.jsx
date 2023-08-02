import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './products'

function App() {

const title = 'APIRESTful coderhouse'

  return (
    <>
      {title}
      <Home />
    </>
  )
}

export default App
