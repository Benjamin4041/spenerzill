import React, { useEffect } from 'react'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Works from '../../components/works/works'
import './motionpage.css'
import { motion } from 'framer-motion'
export default function Motionpage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <motion.div className='motionpage' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <section className='motionpage_section1'>
            <Navbar/>
            <div className='motionpage_section1-innerCon'>
                <video src="" className='section1_innerCon-video'></video>
                <div className="playbtn">
                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="31" cy="31" r="31" fill="white"/>
                    <path d="M23 31V27.44C23 23.02 26.13 21.21 29.96 23.42L33.05 25.2L36.14 26.98C39.97 29.19 39.97 32.81 36.14 35.02L33.05 36.8L29.96 38.58C26.13 40.79 23 38.98 23 34.56V31Z" fill="#191919"/>
                    </svg>
                </div>
                <h1 className='section1_innerCon-h1'>motion <hr className='innerCon_h1-hr'/> designer</h1>
            </div>
        </section>
        <section className="motionpage_section2">
            <span className="motionpage_section2-innerCon flex">
                <p className="section2_innerCon-p">A big experience is made from the little details. Bryan uses bespoke motion storytelling to craft a visual story tailored to your unique identity, making the seemingly impossible things, possible. </p>
                <img src="/images/behance.svg" alt="behance" className='mpBehance' />
            </span>
            <span className='downarrowCon'>
                <img className='downarrowCon-img' src="/images/downarrow.svg" alt="downarrow" />
                <p className='downarrowCon-p'>Works</p>
            </span>
            <div className='flex motionpage_section2-innerCon2'>
                <div className="relative">
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
                    brandnameClassname={'brandnameclass'}
                    />
                </a>
                </div>
                <div className="relative mpclubhouse">
                <a href="https://www.behance.net/gallery/120048355/CLUBHOUSE-RE-BRANDING-PROJECT-PROJECTMUTEYOURMIC" rel="noopener noreferrer">
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
                    brandclass={'workClubhouse'}
                    />
                </a>
                </div>
                {/* <div className="relative">
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
                    />
                </a>
                </div> */}
            </div>
        </section>
        <Footer/>
    </motion.div>
  )
}
