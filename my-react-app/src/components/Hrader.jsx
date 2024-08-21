import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import {IoHelpBuoySharp } from "react-icons/io5";
import { MdAssignmentInd } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


 function Hrader() {
  const[toggle,setToggle] = useState(false);


  const showSideMenu = ()=>{
    setToggle(true);
    
  }

  const hideSideMenu= ()=>{
    setToggle(false);
  }

  const  link =[
    {
        icon:<CiSearch/>,
        name:"Search"
    },
    {
        icon: <CiDiscount1 />,
        name:"Discount"
    },
    {
        icon: <IoHelpBuoySharp/>,
        name:"Help"
    },
    {
        icon: < MdAssignmentInd/>,
        name:"Sign In"
    },
    {
        icon: < FaShoppingCart/>,
        name:"Cart"
    }

  ]
    
  return (
    <>
    <div className='black-overlay w-full h-full fixed  duration-500' onClick={hideSideMenu} style={{opacity:toggle ? 1 :0,
        visibility:toggle ?"visible":"hidden"
    }} >
        <div  onClick={(e) => {
            e.stopPropagation();
        }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
        style={{
            left:toggle?'0%':'-100%'
        }}></div>
    </div>
    <header className = "p-3 shadow-xl">
             <div className='max-w-[1200px] mx-auto flex items-center '>
                <div className='w-[100px]'>
                    <img src="images/download.png" className='w-full' alt="" />
                </div>
                <div className='text-[#686b78]'>
               <span className='   font-bold border-b-[3px] border-[black]'> Barabanki</span>, Barel, Uttar Pradesh 225001<RxCaretDown onClick={showSideMenu} fontSize={25} className=' font-bold inline t text-[#ff5200]'/>
                 </div>
                 <nav className='flex list-none gap-10 ml-auto font-semibold text-[18px]  text-[#3D4152]'>
                    {
                        link.map(
                            (link,index) =>{
                             return <li  key={index} className='flex  hover:text-[#ff5200] items-center gap-2  ' > 
                               {link.icon}
                               {link.name}
                                </li>       

                            }
                        )
                    }
                            
                     </nav>

             </div>
            
            
    </header>
    </>
  )
}
export default Hrader;

