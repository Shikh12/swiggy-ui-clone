import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Card from "./Card";


const book1 = {
  image:"https://www.shutterstock.com/image-photo/burger-fries-coke-on-wood-600nw-1798650394.jpg",
  name:'Burger King',
  time:'35-40 mins',
  location:"Burgers, American,Mahanagar"
 }

 const book2= {
  image:"https://etimg.etb2bimg.com/photo/77049889.cms",
  name:"Domino's Pizza",
  time:'30-40 mins',
  location:"Pizzas, Italian, Pastas,Hazratganj",

 }
 const book3= {
  image:"https://images.forbesindia.com/media/images/2022/Feb/img_178295_storyboard18-vadilalbg.jpg",
  name:"Kwality WallsDessert",
  time:'20-30 mins',
  location:"Ice Cream,Cakes,Hazratganj"
 }
 const book4= {
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5BNa-tmjBqxciZVZyAFNkjmW60tLe4oN-g&s",
  name:"Thai Roll Chicken Meal",
  time:'30-40 mins',
  location:" Rolls & Wraps,Indira Nagar" 
 }


const Category = () => {
    const[categories,setCategory] = useState([]);
    
  
         return (
           <>
           <div className='max-w-[1200px] mx-auto '>
             <div className='flex my-3 items-center  justify-between '>
               <div className='font-bold text-[25px]'>What's on your mind?  </div>
               <div className='flex '>
                   <div  className='  flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' > < FaArrowLeft /></div>
                   <div  className=' flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'> <FaArrowRight/></div>
               </div>    
                </div>
              <div className=' flex justify-centre items-center gap-5 max-w-[1200px] my-9 overflow-hidden' >
              
              <div className=' w-[180px]  h-[180px]   '>
               <div className='w-[180px] h-[150px]  bg-center bg-cover'style={{backgroundImage:"url('images/burger.jpg')"}}></div>
                   <div className='ml-[50px] text-[18px]'>Burger</div>
              </div>
              <div className=' max-w-[180px]   h-[180px]  '>
              <div className='w-[180px] h-[150px]  bg-center bg-cover'style={{backgroundImage:"url('images/pizza.jpeg')"}}></div>
              <div className='ml-[52px] text-[18px]'>Pizza</div>
              </div>
              <div className=' max-w-[180px]  h-[180px]  '>
              <div className='w-[180px] h-[150px]   bg-center bg-cover'style={{backgroundImage:"url('images/rolls.jpg')"}}></div>
              <div className='ml-[50px] text-[18px]'>Rolls</div>
              </div>
              <div className=' max-w-[180px]   h-[ 180px]   '>
              <div className='w-[180px] h-[140px]  bg-center    bg-cover'style={{backgroundImage:"url('images/sandwich.jpg')"}}></div>
              <div className='ml-[52px] text-[18px]'>Sandwich</div>
              </div>
              <div className=' max-w-[180px]   h-[180px]   '>
              <div className='w-[180px] h-[150px] bg-center  bg-cover'style={{backgroundImage:"url('images/cake.jpg')"}}></div>
              <div className='ml-[52px] text-[18px]'>Cake</div>
              </div>
              <div className=' max-w-[180px]   h-[180px]   '>
              <div className='w-[180px] h-[150px] bg-center  bg-cover'style={{backgroundImage:"url('images/north indian.jpeg')"}}></div>
              <div className='ml-[52px] text-[18px]'>Cake</div>
              </div>
              </div>
           </div>
           <hr className='border-[1px] border-gray-100 my-[70px] w-[85%] mx-[100px]'/>

           <div className='max-w-[1200px] mx-auto '>
           <div className='flex my-3 items-center  justify-between '>
               <div className='font-bold text-[25px]'> Top restaurant chains in Lucknow</div>
               <div className='flex '>
                   <div  className='  flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' > < FaArrowLeft /></div>
                   <div  className=' flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'> <FaArrowRight/></div>
               </div>    
                </div>
              <div className=' flex justify-centre items-center gap-7 max-w-[1200px] my-9'>
              <Card  image={book1.image} name={book1.name} time={book1.time} location={book1.location}/>
              <Card image={book2.image} name={book2.name} time={book2.time} location={book2.location} />
              <Card  image={book3.image} name={book3.name} time={book3.time} location={book3.location} />
              <Card image={book4.image} name={book4.name} time={book4.time} location={book4.location} />
          
              </div>
                </div>
        
                <hr className='border-[1px] border-gray-100 my-[70px] w-[85%] mx-[100px]'/>

     

         </>
         );
       
        }
       export default Category;