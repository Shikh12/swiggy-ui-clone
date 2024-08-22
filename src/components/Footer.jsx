import React from 'react'
import { RxCaretDown } from "react-icons/rx";

const Footer = () => {
  return (
   <div className='w-full h-[500px] bg-black  gap-20 flex justify-center  py-14'>
    <div className='w-[200px] h-[300px]'>
        <div className='w-[150px] h-[60px] border border-black object-fit'>
           <img  src='https://driver-media-assets.swiggy.com/drivers/q_auto,f_auto,fl_lossy,c_fill/ride-with-us/icons/footer.png'/>
          <div className=' w-[200px] text-neutral-500 tracking-tight text-[18px] font-semibold px-3'>© 2024 Bundl Technologies Pvt. Ltd</div>
        </div>
    </div>
   <div className='w-[200px] h-[300px]'>
    <h3 className='text-white font-bold text-[20px]'>Company</h3>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>About</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Careers</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Team</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-2'>Swiggy One</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-2'>Swiggy Instamart</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-2'>Swiggy Genei</h2>
   
   
   </div>
   <div className='w-[200px] h-[350px] '>
   <h3 className='text-white font-bold text-[20px]'>Contact us</h3>
   <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Help & Support</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Partner with us</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Ride with us</h2>
    <h3 className='text-white font-bold text-[20px] py-5'>Legal</h3>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Terms & Conditions</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Cookie Policy</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Privacy Policy</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Investor Relations</h2>
   </div>
   <div className='w-[200px] h-[300px]'>
   <h3 className='text-white font-bold text-[20px]'>We Deliver To:</h3>
   <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Banglore</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Gurgaon</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Hyderabad</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Delhi</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Mumbai</h2>
    <h2 className=' text-neutral-500 font-semibold text-[18px] py-1'>Pune</h2>
    <button className=' text-neutral-500 h-[30px] w-[100px] my-5 mx-4 tracking-tighter border border-slate-900 rounded-lg flex justify-around items-center' > 581 cities <span className='text-[18px] text-white'><RxCaretDown/></span></button>

   </div>
   </div>

    
  )
}

export default Footer
