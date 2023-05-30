import React from 'react'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'

export default function Layout({children}) {
  return (
    <div style={{backgroundColor:"#191919"}}>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
