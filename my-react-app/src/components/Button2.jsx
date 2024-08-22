import React from 'react'

const Button2 = ({name,icon}) => {
  return (
    <>
      <button className='w-[250px] h-[40px] border border-grey-100  outline-none text-[16px] font-semibold  justify-center flex  gap-2 items-center   rounded-lg'>{name}{icon}
      </button> 
    
    </>
  )
}

export default Button2
