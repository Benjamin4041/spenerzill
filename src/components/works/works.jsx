import React from 'react'
// import { useNavigate } from 'react-router-dom'
import './works.css'
export default function Works({brandname,worktype,period,circle1,circle2,circle3,brandnamestyle,worktypestyle,clip,gif,brandclass,brandnameClassname}) {
        if(gif===false){

            return (
                <div className='workmainCon cursor-pointer'>
                    <div className="v40_71" >
                    <div className="v40_712" >
                        <div class="v40_72" style={circle1}>
                        
                        </div>
                        <div class="v40_74" style={circle2}>
                        
                        </div>
                        <div class="v40_73" style={circle3}>
                        
                        </div>
                        <div class="v40_7">
                        
                        </div>
                    </div> 
                        <video className='workvid'  width="886" height="484" src={clip} autoPlay muted loop></video>
                    </div> 
                    <span className='brandname_con'>
                        <p className={'brandname_con-p1 '} style={brandnamestyle}>
                            {brandname}
                        </p>
                        <p className={'brandname_con-p2 '+brandclass}style={worktypestyle}>
                            {worktype}
                            <img src="/images/star2.svg" alt="" />
                            {period}
                        </p>
                    </span>      
                </div>
              )
        }else{
            return (
                <div className='workmainCon cursor-pointer'>
                    <div class="v40_71" >
                    <div className="v40_712">
                        <div class="v40_72" style={circle1}>
                        
                        </div>
                        <div class="v40_74" style={circle2}>
                        
                        </div>
                        <div class="v40_73" style={circle3}>
                        
                        </div>
                        <div class="v40_7">
                        
                        </div>
                    </div> 
                        <img src={clip} alt="" className='workvid'  style={{width:"55.5pc",height:"484px"}} />
                    </div> 
                    <span className='brandname_con'>
                        <p className={'brandname_con-p1 '+brandnameClassname} style={brandnamestyle}>
                            {brandname}
                        </p>
                        <p className='brandname_con-p2' style={worktypestyle}>
                            {worktype}
                            <img src="/images/star2.svg" alt="" />
                            {period}
                        </p>
                    </span>     
                </div>
              )
        }
    }














// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import './works.css'
// export default function Works({brandname,worktype,period,circle1,circle2,circle3,brandnamestyle,worktypestyle,clip,gif}) {
//     const [enter,setEnter] = useState(true)
//     if (enter) {
//         return (
//             // 
//             <div className='workmainCon cursor-pointer' data-aos="zoom-in-up" onMouseEnter={()=>setEnter(false)} onMouseLeave={()=>setEnter(true)} >
//                 <div class="v40_71">
//                     <div class="v40_72" style={circle1}>
                    
//                     </div>
//                     <div class="v40_74" style={circle2}>
                    
//                     </div>
//                     <div class="v40_73" style={circle3}>
                    
//                     </div>
//                     <div class="v40_7">
                    
//                     </div>
//                 </div> 
//                 <span className='brandname_con'>
//                     <p className='brandname_con-p1' style={brandnamestyle}>
//                         {brandname}
//                     </p>
//                     <p className='brandname_con-p2' style={worktypestyle}>
//                         {worktype}
//                         <img src="/images/star2.svg" alt="" />
//                         {period}
//                     </p>
//                 </span>         
//             </div>
//           )
//     } else {
//         if (gif===false) {
//             return (
//                 // 
//                 <div className='workmainCon cursor-pointer' data-aos="zoom-in-up" onMouseEnter={()=>setEnter(false)}  onMouseLeave={()=>setEnter(true)}>
//                     <div class="v40_71">
//                         <div class="v40_72" style={circle1}>
                        
//                         </div>
//                         <div class="v40_74" style={circle2}>
                        
//                         </div>
//                         <div class="v40_73" style={circle3}>
                        
//                         </div>
//                         <div class="v40_7">
                        
//                         </div>
//                     </div> 
//                     <div class="v40_71">
//                         <video className='workvid'  width="886" height="484" src={clip} autoPlay muted loop></video>
//                     </div> 
//                     <span className='brandname_con'>
//                         <p className='brandname_con-p1' style={brandnamestyle}>
//                             {brandname}
//                         </p>
//                         <p className='brandname_con-p2' style={worktypestyle}>
//                             {worktype}
//                             <img src="/images/star2.svg" alt="" />
//                             {period}
//                         </p>
//                     </span>      
//                 </div>
//               )
//         } else {
//             return (
//                 <div className='workmainCon cursor-pointer' data-aos="zoom-in-up" onMouseEnter={()=>setEnter(false)} onMouseLeave={()=>setEnter(true)} >
//                     <div class="v40_71" >
//                         <img src={clip} alt="" style={{width:"55.5pc",height:"484px"}} />
//                     </div> 
//                     <span className='brandname_con'>
//                         <p className='brandname_con-p1' style={brandnamestyle}>
//                             {brandname}
//                         </p>
//                         <p className='brandname_con-p2' style={worktypestyle}>
//                             {worktype}
//                             <img src="/images/star2.svg" alt="" />
//                             {period}
//                         </p>
//                     </span>     
//                 </div>
//               )
//         }
       
//     }
// }