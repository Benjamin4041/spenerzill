import React from "react";
import {Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Skills from "../../components/skills/skills";
import Works from "../../components/works/works";
import './homepage.css'
import { motion } from "framer-motion";
export default function Homepage() {
  const navigate=useNavigate()
  let aboutme=()=>{
    navigate('/about','_self')
  }
  const emailtrigger=()=>{
    window.location.href = "mailto:bryananoruo@gmail.com?subject=Subject&body=message%20goes%20here";
  }
  return (
    <>
        <motion.div className="homepagemaincon" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <section className="h-screen w-full -z-10 section1 pt-5 pb-5">
            {/* <div className="filter_img absolute h-full top-0"></div> */}
            <Navbar/>
            <span className="w-screen h-screen flex justify-center items-center flex-col">
              <p className="flex section1_p  items-center">
                Bryan <hr className="homepage_line" /> Spencer
              </p>
              <span className="" >
                  <span className="flex justify-center items-center gap-3 relative left-24 test">
                    <img src="/images/c.svg" alt="" className="star"/>
                    <p className="product">Product</p>
                    <img src="/images/star.svg" className="star" alt="" />
                    <p className="section1_p2">who bridges people with devices, experiences, stories</p>
                  </span>
                <p className="section1_p3">Designer</p>
                <button className="contactMe_btn" onClick={emailtrigger}>
                Contact me
                <img src="/images/btnimage.svg" alt="" />
                </button>
              </span>
            </span>
            <div className="w-full flex justify-between pl-5 pr-5 items-center lightModeCon">
              <p className="uppercase text-white">light mode</p>
              <img src="/images/wordcircle.svg" style={{scale:"0.6"}} alt="" />
            </div>
          </section>
          <section className="section2 overflow-hidden">
            <p className="text-white uppercase text-start section2_p">30 seconds why bryan is goated <span>...</span></p>
            <div className="section2_reelVid flex justify-center items-center">
              <p className="section2_reelVid-p">ShowreeL</p>
            </div>
            <div className="flex justify-center aboutmeCon">
              <span >
                <p className="section2_aboutme">/ABOUT ME</p>
                </span>
                <span>
                    <p className="section2_detailabout">An emphatic creative, award-winning multidisciplinary designer. Bryan creates impactful experiences with design. With strategy-infused experience and passion, Bryan commands great expertise in several design fields, from Product design, Brand identity, to Motion design.</p>
                    <button className="aboutBtn" onClick={aboutme}>
                      ABOUT ME 
                      <span>
                        <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-2.84124e-07 6.5L18.5714 6.5M18.5714 6.5C16.5079 6.5 12.381 7.8 12.381 13M18.5714 6.5C16.5079 6.5 12.381 5.2 12.381 4.12486e-07" stroke="white" stroke-width="1.85714"/></svg>
                       </span>
                    </button>
                  </span>
                  <span>
                        <p className="section2_detailabout2">Driven by grit & dedicated to quality, he delivers innovative and profitable design solutions by making data-informed decisions.</p>
                  </span>
            </div>
            <div>
                <span className="flex skillsCon" style={{}}>
                  <Link to={'/products'}>
                    <Skills skillName={'product design'} addStyle={{columnGap:"10px"}}/>
                  </Link>
                  <Link to={'/branding'}>
                    <Skills skillName={'Branding'} addStyle={{columnGap:"10px"}}/>
                  </Link>
                  <Link to={'/motiondesign'}>
                    <Skills skillName={'motion design'} addStyle={{columnGap:"10px"}}/>
                  </Link>
                  
                  <img src="/images/CA.svg" className="skillCon_img" alt="" />
                </span>
            </div>

            <div className='recentWorksCon flex mb-80'>
              <p className="recentWorksCon_p">/recent works</p>
              <div className=" mb-80 flex  recentWorksCon_innerCon">
                <div className="relative">
                    <a href="https://www.behance.net/gallery/144665791/Raven-Bank-Brand-Positioning-Visual-Identity" target={"_blank"} rel="noopener noreferrer">
                      <Works brandname={"raven bank"} worktype={'/branding'} period={'aug.2021'} gif={true} clip={'/images/59c75d144665791.629651f57a524.gif'} />
                    </a>
                </div>
                <div className="relative clubhouse" >
                    <a href="https://www.behance.net/gallery/120048355/CLUBHOUSE-RE-BRANDING-PROJECT-PROJECTMUTEYOURMIC" rel="noopener noreferrer">
                        <Works brandname={"Clubhouse"} worktype={'/branding'} period={'aug.2021'} circle1={{backgroundColor:"#1CFF5C"}} circle2={{backgroundColor:"#1CFF5C"}} circle3={{backgroundColor:"#FFFFFF"}} brandnamestyle={{}} worktypestyle={{transform:"translateX(5.5em)"}} clip={'/images/clubhouse.mp4'} gif={false}  brandclass={"workClubhouse"}/>
                    </a>
                </div>
                <div className="relative yellostar">
                  <a href="https://www.behance.net/gallery/152733905/Orion-Rebrand-Broadcast-Design" rel="noopener noreferrer">
                      <Works brandname={"yello star"} circle1={{backgroundColor:"#FDC32C"}} circle2={{backgroundColor:"#1CFF5C"}} circle3={{backgroundColor:"#5550F4"}}  worktype={'/branding'} period={'aug.2021'} worktypestyle={{transform:"translateX(9.9em)"}} clip={'/images/yellowstar-desktop.mp4'} gif={false}  brandclass={"workYellostar"}/>
                  </a>
                </div>
              </div> 
            </div>
          </section>
          <section className="section3">
              <span className="section3_innercon1">
                <p className="section3_innercon1-p1">awards & recognitions</p>
                <p className="section3_innercon1-p2">Bryan has earned for himself  recognition,</p>
              </span>
              <div className="table_Con">
                  <div className='title'>
                    <p className="title_p">PROJECT</p>
                    <p className="title_p title_middle">AWARD OF PLATFORM</p>
                    <p className="title_p">YEAR</p>
                  </div>
                  <div className='title2'>
                    <p className="title2_p1">RAVEN BANK</p>
                    <p className='middle title2_p2'>BEHANCE<br/><span>BEST OF BEHANCE BRAND SOLUTION</span></p>
                    <p className="title2_p3">2022</p>
                  </div>
                  <div className='title2'>
                    <p className="title2_p1">RAVEN BANK</p>
                    <p className='middle title2_p2' >DESIGN RUSH<br/><span>BEST PROMOTIONAL PRINT DESIGN</span></p>
                    <p className="title2_p3">2022</p>
                  </div>
                  <div className='title2'>
                    <p className="title2_p1">CLUBHOUSE</p>
                    <p className='middle title2_p2' >BEHANCE<br/><span>DISTINCT BRAND IDENTITY</span></p>
                    <p className="title2_p3">2022</p>
                  </div>
                  <div className='title2'>
                    <p className="title2_p1">POPCENTRAL TV</p>
                    <p className='middle title2_p2'>PHENOMENALLY!<br/><span>PHENOMENAL DESIGNER</span></p>
                    <p className="title2_p3">2021</p>
                  </div>
                  <div className='title2'>
                    <p className="title2_p1">VIACOM</p>
                    <p className='middle title2_p2'>PROMAX GLOBAL AWARD<br/><span>BEST PROMOTIONAL PRINT DESIGN</span></p>
                    <p className="title2_p3">2019</p>
                  </div>
                  <div className='title2'>
                    <p className="title2_p1">POPCENTRAL TV</p>
                    <p className='middle title2_p2'>PROMAX GLOBAL AWARD<br/><span>DISTINCT BRAND IDENTITY</span></p>
                    <p className="title2_p3">2018</p>
                  </div>
              </div>

          </section>
          <Footer/>
        </motion.div>
      
    </>
  );
}
