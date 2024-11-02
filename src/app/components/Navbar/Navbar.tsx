import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <div>
     <header>
        <nav className='flex bg-black h-20 ' >
            
            <img className= "h-10 my-7 px-3" src="./image.png" alt="logo"  />
            <div className='flex  px-8'>

            <div className='text-white  py-10 px-7'><Link href="#Used Cars">Used Cars</Link></div>
            <div  className='text-white py-10  px-7'><Link href="#New Cars">New Cars</Link></div>
            <div  className='text-white py-10  px-7'><Link href="#Bikes">Bikes</Link></div>
            <div  className='text-white py-10  px-7'><Link href="#Auto Store">Auto Store</Link></div>
            <div  className='text-white py-10  px-8'><Link href="#Videos">Videos</Link></div>
            <div  className='text-white py-10 px-8'><Link href="#Forums">Forums</Link></div>
            <div  className='text-white py-10 px-8'><Link href="#Blog">Blog</Link></div>
            <div  className='text-white py-10 px-8'><Link href="#More">More</Link></div>
            <button className=' mx-4  bg-red-800 rounded-lg py-4 px-6 my-7  w-40 h-10 text-center font-semibold text-white ' >Post an Ad</button></div>
           
            
        </nav>
     </header>
    </div>
  )
}

export default Navbar
