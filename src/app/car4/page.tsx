import Link from 'next/link'
import React from 'react'


const Car4 = () => {
  return (
   <div className='h-full'>
     <div className='bg-gray-100 h-full'>
      <div  className='flex-col justify-center px-5  '>
        <div className='flex justify-center py-5'><h1 className='text-black text-5xl underline text-center font-semibold mt-10 px-25'>Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1></div>
        <div className='flex justify-center'><img className='w-1/4 py-5' src="./pic4.png" alt="Car-Image" /></div>
        <div className='flex justify-center gap-1'><p className='text-center px-19 pt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia magni quod libero optio facere eligendi ipsam exercitationem? Ad maiores incidunt quae. Hic quia quidem ullam necessitatibus dignissimos qui voluptas!
        Iste modi fugiat deleniti ullam, fuga recusandae a sit molestiae eveniet at voluptate dolorem voluptas minima repellendus velit aliquam in minus maiores esse officiis, ea ipsum totam et pariatur. Molestiae?
        Dicta, fuga nobis assumenda odio necessitatibus illum quis eum doloribus. Autem ipsa in iusto cupiditate, sit vel aliquid quidem similique suscipit pariatur mollitia eum. Harum aliquid illo eum facilis nemo
        </p></div>

        <h3 className='text-green-500 text-3xl text-center pt-7 hover:text-blue-950'>PKR 86.6 - 99.0 lacs</h3>
      </div>
      <Link href="/car4-detail"> <div className='flex justify-center pt-5'><button className='bg-blue-800  hover:bg-black hover:text-white text-white font-semibold text-center rounded-md py-4 px-7 my-6 mx-7 '>More Detail</button></div></Link>
    </div>
   </div>
  )
}

export default Car4
