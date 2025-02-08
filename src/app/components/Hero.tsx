import Image from 'next/image';
import React from 'react';


const Hero = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center px-4 md:px-10 gap-0'>
        {/* Left Content */}
        <div className="bg-[#2A254B] py-10 md:py-20 md:px-12 flex justify-center items-center md:mt-20  pl-4 md:pl-[50px]">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center md:text-left">
              The furniture brand for the
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center md:text-left">
              future, with timeless designs
            </h1>

            <button className="bg-[#F9F9F926] text-white px-5 py-3 mt-6 mb-20 hover:bg-gray-700">
              View collection
            </button>

            <p className=" text-white">
              A new era of sleek furniture with Avion, the French luxury retail brand
            </p>
            <p className="text-white">
              With nice fonts, tasteful colors, and a beautiful way to display things digitally <br/>using modern web technologies.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="">
          <Image
            src="/kursi.png"
            alt="Stylish Chair"
         
            width={500}
            height={500}
            className="h-[535px] mt-10 pt-10 "
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
