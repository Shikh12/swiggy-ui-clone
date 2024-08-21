import React from 'react'
import { MdStars } from "react-icons/md";


const Card = ({image,name,time,location}) => {
  return (
        <>
        <div className='h-[281px] w-[270px'>
  <div className='h-[170px] w-[270px] overflow-hidden'>
    <img src={image} alt={name} className='h-full w-full object-cover rounded-2xl' />
  </div>
  <div className='p-4'>
    <h2 className='text-[22px] font-bold'>{name}</h2>
    <h4 className='text-green-700 items-center gap-2 flex '><MdStars/><span className='  text-black font-semibold text-[16px]'> 4.4 {time}</span></h4>
    <p className='text-[16px] text-gray-600 leading-4 my-1'>{location}</p>
  </div>
</div>

    </>
    
  )
}

export default Card
