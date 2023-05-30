import React from 'react'
import './skills.css'
export default function Skills({skillName,addStyle}) {
  return (
    <div className='w-fit flex justify-center items-center cursor-pointer' style={addStyle}>
        <p className='skillName'>{skillName}</p>
        <img className='circleArrow' src="/images/circleArrow.svg" alt="" />
    </div>
  )
}
