import Link from 'next/link'
import React from 'react'


const Form = () => {
  return (
    <div className='flex justify-center h-screen'>
        <div className='bg-blue-100 w-full '>
      <div >
           <h1 className='text-5xl font-semibold text-center uppercase py-6 mt-10'>Enter Your Detail</h1>
           <div className='flex-col justify-center'>
            <form className='flex gap-5 flex-col justify-center items-center mt-10'>
                <input className=' border hover:border-slate-950 w-2/6 rounded-2xl p-2' type="text" placeholder='Enter Your Name ' />
                <input className=' border hover:border-slate-950  w-2/6 rounded-2xl p-2'  type="email" placeholder='Enter Your Email'/>
                <input className=' border hover:border-slate-950  w-2/6 rounded-2xl p-2' type="password" placeholder='Password'/>
                <input className=' border hover:border-slate-950 w-2/6 rounded-2xl p-2' type="number" placeholder='Card Number'/>
               <Link href="./thankyou"><button className='bg-blue-800  hover:bg-black hover:text-white font-semibold text-white py-4 px-10 rounded-md my-6 mx-8'>Place Your Order</button></Link> 
            </form>
           </div>
      </div>
    </div>
    </div>
    
  )
}

export default Form
