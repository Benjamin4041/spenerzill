import React, { useEffect } from 'react'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Works from '../../components/works/works'
import './productpage.css'
import { motion } from 'framer-motion'
export default function Productpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div className='productPageMainCon' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <section className='productPageMainCon_section1'>
            <Navbar/>
            <h1 className='productPageMainCon_section1-h1'>Product <hr className='section1_h1-hr'/> Designer</h1>
            <p className='productPageMainCon_section1-p'>Delivering intuitive and memorable experiences with design. Bryan bridges people with devices, experiences, and stories. Fostering the human-centric ideology to achieve lasting solutions backed by modern technologies</p>
            <div className='productPageMainCon_section1-innerCon'>
                <div className='section1_innerCon-Con'>

                </div>
                <img src="/images/behance.svg" alt="" className='section1_innerCon-img' />
            </div>
        </section>
        <section className='productPageMainCon_section2'>
            <div className='productPageMainCon_section2-innercon'>
              <p className="ppsection2_innercon-p">PLANNING</p>
              <p className="ppsection2_innercon-p">USER RESEARCH</p>
              <p className="ppsection2_innercon-p">WIREFRAMING</p>
              <p className="ppsection2_innercon-p">VISUAL DESIGN</p>
              <p className="ppsection2_innercon-p">PROTOTYPING</p>
              <p className="ppsection2_innercon-p">PLANNING</p>
              <p className="ppsection2_innercon-p">USER RESEARCH</p>
              <p className="ppsection2_innercon-p">WIREFRAMING</p>
              <p className="ppsection2_innercon-p">VISUAL DESIGN</p>
              <p className="ppsection2_innercon-p">PROTOTYPING</p>
            </div>
            <div className='productPageMainCon_section2-innercon2'>
              <p className='ppsection2_innercon2-p'>selected works <hr className='innercon2_p-hr' /></p>
            </div>
            <div className=" mb-80 flex  recentWorksCon_innerCon">
            <div className="relative ppraven raven">
              <a
                href="https://www.behance.net/gallery/144665791/Raven-Bank-Brand-Positioning-Visual-Identity"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <Works
                  brandname={"raven bank"}
                  worktype={"/branding"}
                  period={"aug.2021"}
                  gif={true}
                  clip={"/images/59c75d144665791.629651f57a524.gif"}
                />
              </a>
            </div>
            <div className="relative ppclubhouse clubhouse">
              <a href="https://www.behance.net/gallery/120048355/CLUBHOUSE-RE-BRANDING-PROJECT-PROJECTMUTEYOURMIC">
                <Works
                  brandname={"Clubhouse"}
                  worktype={"/branding"}
                  period={"aug.2021"}
                  circle1={{ backgroundColor: "#1CFF5C" }}
                  circle2={{ backgroundColor: "#1CFF5C" }}
                  circle3={{ backgroundColor: "#FFFFFF" }}
                  brandnamestyle={{}}
                  worktypestyle={{ transform: "translateX(5.5em)" }}
                  clip={"/images/clubhouse.mp4"}
                  gif={false}
                  brandclass={"workClubhouse"}
                />
              </a>
            </div>
            <div className="relative ppyellostar yellostar">
              <a href="https://www.behance.net/gallery/152733905/Orion-Rebrand-Broadcast-Design">
                <Works
                  brandname={"yello star"}
                  circle1={{ backgroundColor: "#FDC32C" }}
                  circle2={{ backgroundColor: "#1CFF5C" }}
                  circle3={{ backgroundColor: "#5550F4" }}
                  worktype={"/branding"}
                  period={"aug.2021"}
                  worktypestyle={{ transform: "translateX(9.9em)" }}
                  clip={"/images/yellowstar-desktop.mp4"}
                  gif={false}
                  brandclass={"workYellostar"}
                />
              </a>
            </div>
          </div>
        </section>
        <Footer/>
       {/*  <section className='productPageMainCon_section3'>
            
        </section> */}
    </motion.div>
  )
}
