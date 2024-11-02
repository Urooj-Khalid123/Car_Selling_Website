import Link from "next/link";
import React from "react";


const Featured = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="px-52">
        <h1 className=" text-gray-800 font-semibold text-2xl py-10 px-8">
          Featured New Cars
        </h1>
      </div>

      <div className="flex justify-start font-medium ">
        <ul className="flex mx-48">
          <li className="px-10 ">Popular</li>
          <li className="px-10">Upcoming</li>
          <li className="px-10">Newly Launched</li>
        </ul>
        <hr className="py-4" />
      </div>

     
        <div className="flex justify-evenly bg-gray-200 py-2 px-60 gap-7  ">
          <div className=" bg-white w-72 h-72 ">
            <img className="py-8" src="./pic1.png" alt="Car-Picture" />
            <Link href="./car1"><h3 className=" text-blue-950 font-semibold text-2xl text-center hover:text-blue-500  ">Toyoto Carollo</h3></Link>
            <h4 className="text-green-600 hover:text-blue-500 text-1xl text-center py-2">PKR 59.7 - 75.5 lacs</h4>
          </div>
          <div className="bg-white  w-72 h-72 ">
          <img className="py-8" src="./pic2.png" alt="Car-Picture" />
          <Link href="/car2"><h3 className=" text-blue-950 font-semibold text-2xl text-center hover:text-blue-500  ">Suzuki Alto</h3></Link>
          <h4 className="text-green-600 hover:text-blue-500 text-1xl text-center py-2">PKR 23.3 - 30.5 lacs</h4>
          </div>
          <div className="bg-white  w-72 h-72 ">
          <img className="py-8" src="./pic3.png" alt="Car-Picture" />
          <Link href="/car3"><h3 className=" text-blue-950 font-semibold text-2xl text-center hover:text-blue-500  ">Honda City</h3></Link>
          <h4 className="text-green-600 hover:text-blue-500 text-1xl text-center py-2">PKR 46.5 - 58.5 lacs</h4>
          </div>
          <div className="bg-white  w-72 h-72 ">
          <img className="py-8" src="./pic4.png" alt="Car-Picture" />
          <Link href="/car4"><h3 className=" text-blue-950 font-semibold text-2xl text-center hover:text-blue-500  ">Honda Civic</h3></Link>
          <h4 className="text-green-600 hover:text-blue-500 text-1xl text-center py-2">PKR 86.6 - 99.0 lacs</h4>
          </div>
        </div>
     
    </div>
  );
};

export default Featured;
