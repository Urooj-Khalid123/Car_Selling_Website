import Link from 'next/link'
import React from 'react'




const Hero = () => {
      
  return (
         <div className='py-24'>
             
              <h1 className='flex justify-center text-gray-700 font-semibold text-3xl py-10 px-8 '>Sell Your Car on PakWheels and Get the Best Price</h1>
            
             <div className='flex justify-evenly'>
             <div className='' >
              <h2 className='text-blue-700 font-semibold text-2xl'>Post your Ad on PakWheels</h2>
              <ul className='my-2 mx-5'>
              <li  className='my-2'>Post your Ad for Free in 3 Easy Steps </li>
              <li  className='my-2'>Get Genuine offers from Verified Buyers</li>
               <li  className=' my-2'>Sell your car Fast at the Best Price</li>
              </ul>
              <button className='bg-red-800 hover:bg-black  font-semibold text-white py-4 px-10 rounded-md my-6 mx-8'>Post Your Ad</button>
             </div>
             <div>
                  <h2 className='text-blue-700 font-semibold text-2xl' >Try PakWheels Sell It For Me</h2>
                  <ul className='my-2 mx-5'>
                    <li className='my-2'>Dedicated Sales Expert to Sell your Car</li>
                    <li className='my-2'>We Bargain for you and share the Best Offer</li>
                    <li className='my-2'>We ensure Safe & Secure Transaction</li>
                  </ul>
                  <Link href="/form"><button className='bg-blue-400 hover:bg-blue-800 font-semibold text-white py-4 px-10 rounded-md my-6 mx-8'>Register Your Car</button></Link>
             </div>
             </div>
         </div>

)
}

export default Hero
