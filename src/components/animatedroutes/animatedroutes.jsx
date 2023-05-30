import React from 'react'
// import Navbar from "./components/navbar/navbar";
import Homepage from "../../pages/homepage/homepage";
// import Footer from "footer/footer";
// import Works from "../../pages/works/works";
import Aboutme from "../../pages/aboutme/aboutme";
import Productpage from "../../pages/productpage/productpage";
import Motionpage from "../../pages/motion/motionpage";
import Menu from "../../pages/menu/menu";
import Intro from '../../pages/intro/intro';
import {AnimatePresence} from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom';
import Branding from '../../pages/branding/branding';
export default function Animatedroutes() {
    const location=useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Intro/>}/>
          <Route path="/homepage" element={<Homepage />} />
          {/* <Route path="/navbar" element={<Footer />} /> */}
          {/* <Route path="/test" element={<Works/>}/> */}
          <Route path="/about" element={<Aboutme/>}/>
          <Route path="/products" element={<Productpage/>}/>
          <Route path="/motiondesign" element={<Motionpage/>}/>
          <Route path="/menu"  element={<Menu/>}/>
          <Route path='/branding' element={<Branding/>}/>
        </Routes>
    </AnimatePresence>

    
  )
}
