import React from 'react'
import NavBar from '../components/shared/Navbar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/shared/Footer/Footer'

function MainLayout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout