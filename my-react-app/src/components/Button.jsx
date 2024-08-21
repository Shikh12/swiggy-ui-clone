import React from 'react'

const Button = ({name,icon}) => {
  return (
   <>
  <button className='w-[120px] h-[40px] border border-gray-600   text-[16px]  justify-center flex  gap-2 items-center   rounded-2xl'>{name}  {icon}
   </button>   
   
   </>
  )
}

export default Button
