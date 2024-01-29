import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/navbar'
import './branding.css'
import { motion } from 'framer-motion'
import Footer from '../../components/footer/footer'
export default function Branding() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='brandingMainCon'>
        <section className='brandingMainCon_section1'>
            <Navbar/>
            <div className='brandingMainCon_section1-InnerCon'>
                <div class="v877_894">
                    <div class="v877_895">
                        <div class="v877_896">
                        
                        </div>
                        <div class="v877_897">
                        
                        </div>
                        <div class="v877_898">
                        
                        </div>
                        <div class="v877_899">
                        
                        </div>
                        
                    </div>
        
                </div>
                <span className='section1_InnerCon-BrandandTextCon'>
                    <p className='InnerCon_BrandandTextCon-p1'>branding</p>
                    <p className='InnerCon_BrandandTextCon-p2'>
                        Reimagining brands' connection with their customers by creating and recreating their identities. Bryan builds picture-perfect identities for disruptive brands.
                    </p>
                </span>
                <div className='w-fit playIcon'>
                    <svg width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="32.0016" cy="31.5" rx="31.0563" ry="31.5" fill="#191919"/>
                    <path d="M22.4961 31.8213V27.6457C22.4961 22.4615 26.1673 20.3386 30.6595 22.9307L34.2837 25.0185L37.908 27.1062C42.4002 29.6983 42.4002 33.9442 37.908 36.5363L34.2837 38.6241L30.6595 40.7118C26.1673 43.304 22.4961 41.181 22.4961 35.9968V31.8213Z" fill="white"/>
                    </svg>
                </div>
                <img src="/images/behance2.svg" className='section1_InnerCon-behance' alt="" />
            </div>
        </section>
        <section className='brandingMainCon_section2'>
            <span className='brandingMainCon_section2-innerCon'>
                <p className='section2_innerCon-p1'>bryan</p>
                <hr className='section2_innerCon-hr'/>
                <p className='section2_innerCon-p2'>His works for Raven Bank and Clubhouse won the Best Of Behance award for Best Branding/Identity and Distinct Brand Identity Of The Year 2022 respectively.</p>
            </span>
            <span className='brandingMainCon_section2-innerCon2'>
                <img src="/images/downarrow.svg" alt="" className='section2_innerCon2-downArrow' />
                <p className='section2_innerCon2-work'>works</p>
            </span>
            <div className='brandingMainCon_section2-innerCon3'>
                <span className='brandingMainCon_section2-clubhouse'>
                    <div className='viewcaseCon'>
                        <img src="/images/Rectangle.svg" alt="" />
                        <div className='bigcircle'>
                            <div className='smallcircle'>
                                 <p className='smallcircle_p'>View case</p>
                            </div>

                        </div>
                    </div>
                    <span className='textandTextFilter'>
                        {/* <div className='textandTextFilte_textFilter'>

                        </div> */}
                        <p className='textandTextFilte_Text'>
                            clubhouse <br/>
                            <span className='flex textandTextFilte_Text-innerText'>/branding <img src="/images/star2.svg" alt="" /> aug.2021</span>
                        </p>

                    </span>
                </span>
                <span className='brandingMainCon_section2-clubhouse'>
                    <div className='viewcaseCon'>
                        <img src="/images/Rectangle.svg" alt="" />
                        <div className='bigcircle'>
                            <div className='smallcircle'>
                                 <p className='smallcircle_p'>View case</p>
                            </div>

                        </div>
                    </div>
                    <span className='textandTextFilter'>
                        {/* <div className='textandTextFilte_textFilter'>

                        </div> */}
                        <p className='textandTextFilte_Text'>
                        raven bank<br/>
                            <span className='flex textandTextFilte_Text-innerText'>/branding <img src="/images/star2.svg" alt="" /> aug.2021</span>
                        </p>

                    </span>
                </span>
                <span className='brandingMainCon_section2-clubhouse'>
                    <div className='viewcaseCon'>
                        <img src="/images/Rectangle.svg" alt="" />
                        <div className='bigcircle'>
                            <div className='smallcircle'>
                                 <p className='smallcircle_p'>View case</p>
                            </div>

                        </div>
                    </div>
                    <span className='textandTextFilter'>
                        {/* <div className='textandTextFilte_textFilter'>

                        </div> */}
                        <p className='textandTextFilte_Text'>
                        yellostar <br/>
                            <span className='flex textandTextFilte_Text-innerText'>/branding <img src="/images/star2.svg" alt="" /> aug.2021</span>
                        </p>

                    </span>
                </span>
            </div>
        </section>
        <Footer/>
    </motion.div>
  )
}
