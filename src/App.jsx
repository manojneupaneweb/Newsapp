import { useState } from 'react'
import Header from './conponents/header'
import Footer from './conponents/footer'
import { Outlet } from "react-router"


function App() {

  return (
    <>
    <Header />
    <Outlet />
    <Footer />

    </>
  )
}

export default App
