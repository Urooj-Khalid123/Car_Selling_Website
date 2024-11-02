import Link from 'next/link'
import React from 'react'
Link

const CarDetail1 = () => {
  return (
   <div className='h-full'>
     <div className='bg-gray-100 h-full'>
      <div  className='flex-col justify-center px-5  '>
        <div className='flex justify-center py-5'><h1 className='text-black text-5xl underline text-center font-semibold mt-10 px-25'>Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1></div>
        <div className='flex justify-center'><img className='w-1/4 py-5' src="./cardetail1.jpeg" alt="Car-Image" /></div>
        <div className='flex justify-center py-2 '>
              <button className='bg-blue-800  hover:bg-black hover:text-white text-white font-semibold text-center rounded-md py-4 px-3 my-6 mx-7 '>Book a test drive</button>
              <button className='bg-blue-800  hover:bg-black hover:text-white text-white font-semibold text-center rounded-md py-4 px-3 my-6 mx-7 '>Request Bank Finance</button>
              <button className='bg-blue-800  hover:bg-black hover:text-white text-white font-semibold text-center rounded-md py-4 px-3 my-6 mx-7 '>Visit Place</button>
              <button className='bg-blue-800  hover:bg-black hover:text-white text-white font-semibold text-center rounded-md py-4 px-3 my-6 mx-7 '>Car Inspection</button>

        </div>
        <h3 className='text-center text-2xl'>Vehicle Description</h3>

       <div className='flex flex-wrap justify-center text-center pt-5 space-x-8 mb-6'>
       <span className='items-center text-center justify-center'><strong>Number of Doors</strong> 4</span>
       <span><strong>Engine</strong> 1800 CC</span> 
        <span><strong>Condition</strong> 8.5 / 10</span> 
        <span><strong>Driven</strong> 9,500 KM</span>  
        <span><strong>Suspention Type</strong> Soft Suspension</span> 
        <span><strong>Avg</strong> 13 km per itr</span>   
        <span><strong>Transmission</strong> Automic</span>   
        <span> <strong>Fuel Type</strong> High Octane</span>  
       </div>


        <h3 className='text-green-500 text-3xl text-center pt-7'>PKR 50,00,000</h3>
      </div>
     <Link href="./form"><div className='flex justify-center pt-5'><button className='bg-blue-800  hover:bg-black hover:text-white text-white font-semibold text-center rounded-md py-4 px-7 my-6 mx-7 '>Make Payment</button></div></Link>
    </div>
   </div>
  )
}

export default CarDetail1
