import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Menu from './composants/Menu'
import Footer from './composants/front/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <div className="page">
      <Menu />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
