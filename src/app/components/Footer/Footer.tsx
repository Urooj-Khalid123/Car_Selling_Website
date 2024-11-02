import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='bg-black text-white font-2xl '>
  
       
     
      <div className='flex justify-start gap-10 py-5 mx-8'>
    <Link href="https://www.linkedin.com/in/urooj-khalid/"><h4 className=''>@2024 Made By Urooj.</h4></Link>  

        <Link href="https://www.instagram.com/code_with_urooj/#" ><Image src="/icon1.png" width={17} height={17} alt="Instagram-icon"></Image></Link>
        <Link href="https://www.facebook.com/people/Urooj-Khalid/pfbid0EorTutJewS5LTdrynDgXimbPVDbH2oxmL8NuP5WtQ3KAzX37tXqk1oyYg1U76rJvl/?mibextid=ZbWKwL"><Image src="/icon2.png" width={17} height={17} alt="Facebook-icon"></Image></Link>
        <Link href="https://www.linkedin.com/in/urooj-khalid/"><Image src="/linkedin.png" width={17} height={17} alt="Linkedin-icon"></Image></Link>
        <Link href="https://github.com/Urooj-Khalid123"><Image src="/github.png" width={17} height={17} alt="Github-icon"></Image></Link>
      </div>
    </div>
  )
}

export default Footer
