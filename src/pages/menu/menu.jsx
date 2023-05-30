import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import { motion } from 'framer-motion'
export default function Menu() {
    const emailTrigger=()=>{
        window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
      }
  return (
    // <div className='menu'>
    //     <nav className='menu_Nav flex justify-center items-center'>
    //         <img className='menu_Nav-orb' src="/images/menu2.svg" alt="" />
    //         <span className='menu_Nav-innerCon flex'>
    //             <img className='nav_innercon-img' src="" alt="" />
    //             <p className='nav_innercon-p'>turn on the light</p>
    //         </span>
    //     </nav>

    // </div>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div class="v817_68">
            <div class="v817_69">
            </div>
            <div class="v817_70"></div>
            <div class="v817_71"></div>
            <div class="v817_72"></div>
        </div>
        <div className='menu'>
            <nav className='menu_Nav'>
                <Link>
                    <img className='menu_Nav-orb' src="/images/menu2.svg" alt="" />
                </Link>

                <span className='menu_Nav-innerCon flex'>
                    <img className='nav_innercon-img' src="/images/dark-lightmode.svg" alt="" />
                    <p className='nav_innercon-p'>turn on the light</p>
                </span>
            </nav>
            <div className='menusCon flex'>
                <Link to={'/about'}>
                    <div className='menus'>
                        <div className='menus_imgCon'>
                            <img src="/images/CurvedUIRender.png" alt="" className='menus_imgCon-img'/>
                        </div>
                        <p className='menus_p menus_p1'>About Me</p>
                    </div>                
                </Link>
                <Link to={''}>
                    <div className='menus'>
                        <div className='menus_imgCon'>
                                <img src="/images/CurvedUIRender.png" alt="" className='menus_imgCon-img'/>
                        </div>
                        <p className='menus_p menus_p1'>showreel</p>
                    </div>                
                </Link>
                <Link to={'/branding'}>
                    <div className='menus'>
                        <div className='menus_imgCon'>
                                <img src="/images/CurvedUIRender.png" alt="" className='menus_imgCon-img'/>
                        </div>
                        <p className='menus_p menus_p1'>Branding</p>
                    </div>                
                </Link>
                <Link to={'/products'}>
                    <div className='menus'>
                        <div className='menus_imgCon hidden'>
                                <img src="/images/CurvedUIRender.png" alt="" className='menus_imgCon-img'/>
                        </div>
                        <p className='menus_p menus_p2'>product design</p>
                    </div>                
                </Link>
                <Link to={'/motiondesign'}>
                    <div className='menus'>
                        <div className='menus_imgCon'>
                                <img src="/images/CurvedUIRender.png" alt="" className='menus_imgCon-img'/>
                        </div>
                        <p className='menus_p menus_p3'>motion design</p>
                    </div>            
                </Link>
                <div className='menus' onClick={emailTrigger}>
                    <div className='menus_imgCon'>
                            <img src="/images/CurvedUIRender.png" alt="" className='menus_imgCon-img'/>
                    </div>
                    <p className='menus_p menus_p4'>Contact me</p>
                </div>                
            </div>
            <footer className='menu_footer'>
                <span className='flex flex-wrap socialCon'>
                    <p className='socials'>
                        Twitter
                    </p>
                    <p className='socials'>
                        Dribbble
                    </p>
                    <p className='socials'>
                        Instagram
                    </p>
                    <p className='socials'>
                        Behance
                    </p>
                    <p className='socials'>
                        Facebook
                    </p>
                    <p className='socials'>
                        Meduim
                    </p>
                </span>
                <span className='menu_footer-innerCon'> 
                    <p className='menu_footer-p'>"You use a glass mirror to see your face. You use works of art to see your soul."</p>
                    <p className='menu_footer-p flex items-center'><hr className='footer_p-hr'/>George Bernard Shaw</p>
                </span>
                
            </footer>
        </div>
    </motion.div>

  )
}
