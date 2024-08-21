import React from 'react'
import Button from './Button'
import { BsFilterLeft } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import Card from"./Card";


const button1={
    name:"Filter",
    icon:<BsFilterLeft/>
}
const button2={
    name:"Sort By",
    icon:<RxCaretDown/>
}
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
  
  

const Section3 = () => {
  return (
    <>
    <div className='max-w-[1200px] mx-auto '>
    <div className='font-bold text-[25px]'>Restaurants with online food delivery in Lucknow</div>
    <div className='w-[1000px] h-[44px]  my-5 flex justify-around items-center gap-7'>
      <Button name={button1.name} icon={button1.icon}/>
      <Button name={button2.name} icon={button2.icon}/>
      <Button name="Fast Delivery"/>
      <Button name="Rating 4.0"/>
      <Button name="Pure Veg"/>
      <Button name="Offers"/>
      <Button name="Rs.300-Rs.600"/>
     
    </div>
    </div>
    <div className=' flex justify-centre items-center gap-7 max-w-[1200px]  my-9 mx-14'>
              <Card  image={book1.image} name={book1.name} time={book1.time} location={book1.location}/>
              <Card image={book2.image} name={book2.name} time={book2.time} location={book2.location} />
              <Card  image={book3.image} name={book3.name} time={book3.time} location={book3.location} />
              <Card image={book4.image} name={book4.name} time={book4.time} location={book4.location} />
              </div>
     <div className=' flex justify-centre items-center gap-7 max-w-[1200px]  my-9 mx-14'>
              <Card  image={book1.image} name={book1.name} time={book1.time} location={book1.location}/>
              <Card image={book2.image} name={book2.name} time={book2.time} location={book2.location} />
              <Card  image={book3.image} name={book3.name} time={book3.time} location={book3.location} />
              <Card image={book4.image} name={book4.name} time={book4.time} location={book4.location} />
              </div>
              <hr className='border-[1px] border-gray-200 my-[70px] w-[85%] mx-[100px]'/>         
  
    </>
  )
}

export default Section3