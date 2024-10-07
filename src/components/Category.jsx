import React from 'react'
import man from '../assets/images/man.webp'
import women from "../assets/images/women.jpg";
import kid from "../assets/images/kid.jpg";


function Category() {
  const card = [
    {
      title: "Man",
      imageUrl: man,
    },
    {
      title: "Women",
      imageUrl: women,
    },
    {
      title: "Kid",
      imageUrl: kid,
    },
  ];
  return (
    <div className='container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer'>
      {card.map((item,index)=>(
        <div key={index} className='relative h-64 transform transition-transform duration-500 hover:scale-105 cursor-pointer '>
          <img src={item.imageUrl} className=' w-full h-full object-cover rounded-lg shadow-md'/>
          <div className='absolute top-20 left-12'>
            <p className='text-xl font-bold'>{item.title}</p>
            <p className='text-gray-600'>View All</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category