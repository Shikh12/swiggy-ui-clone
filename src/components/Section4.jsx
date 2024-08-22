import React from 'react'
import Button2 from "./Button2";
import { RxCaretDown } from "react-icons/rx"; 

const Section4 = () => {
  return (
    <>
     <div className='max-w-[1200px] mx-auto '>
     <div className='font-bold text-[25px]'> Best Cuisines Near Me</div>
     <div className='w-[1200px] h-[44px]  my-5 flex justify-between  items-center gap-7div>'> 
     <Button2 name="Chinese Resturant Near Me"/>
     <Button2 name="South Indian Resturant Near Me"/>
     <Button2 name="Indian Resturant Near Me" />
     <Button2 name="Kerala Resturant Near Me"/>  
     </div>

     <div className='w-[1200px] h-[44px]  my-5 flex justify-between  items-center gap-7div>'> 
     <Button2 name="Korean Resturant Near Me"/>
     <Button2 name="North Indian Resturant Near Me"/>
     <Button2 name="SeaFood Resturant Near Me" />
     <Button2 name="Bengali Resturant Near Me"/>  
     </div>
     <div className='w-[1200px] h-[44px]  my-5 flex justify-between  items-center gap-7div>'> 
     <Button2 name="Punjabi Resturant Near Me"/>
     <Button2 name="Italian Resturant Near Me"/>
     <Button2 name="Andhra  Resturant Near Me" />
     <Button2 name="Show More" icon = <RxCaretDown/> />  
     </div>
     </div>
     <div className='max-w-[1200px] mx-auto my-14 '>
     <div className='font-bold text-[25px]'> Explore Every Restaurants Near Me</div>
     <div className='w-[1200px] h-[60px]  my-5 flex justify-between  items-center  gap-7'>
        <button className='w-[583px] font-semibold h-[53px] border border-grey-100  '>Explore Resturant Near Me</button>
        <button className='w-[583px] h-[53px]  font-semibold border border-grey-100'>Explore Top Rated  Resturant Near Me</button>

     </div>
     </div>

    </>
  )
}

export default Section4
