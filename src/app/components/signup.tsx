import Image from 'next/image';
import React from 'react';

const Signup = () => {
  return (
    <div>
      {/* First Section */}
      <div className='bg-gray-100 h-auto mt-5 gap-'>
        <div className='flex justify-center text-center text-blue-950'>
          <h1 className='font-sans mt-28 text-4xl sm:text-3xl md:text-4xl mb-10'>Join the club and get the benefits</h1>
        </div>
        <p className='flex justify-center text-center sm:text-base md:text-lg'>
          Sign up for our newsletter and receive exclusive offers
        </p>
        <p className='flex justify-center text-center sm:text-base md:text-lg'>
          on new ranges, sales, pop up stores and more
        </p>

        {/* Input and Button Section */}
        <div className='flex justify-center items-center sm:m-10'>
          <input 
            type="text" 
            placeholder='your@email.com' 
            className='p-5 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] mb-4 border-2 border-gray-100 rounded-md' 
          />
          <button className='bg-[#2A254B] text-white p-4 sm:w-full md:w-auto rounded hover:bg-slate-600 mb-5 sm:text-sm'>
            Sign up
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col sm:flex-row md:flex-row items-center justify-between py-20 px-10 sm:px-20 w-full">
        {/* Left Content */}
        <div className="w-full sm:w-1/2 mx-auto sm:mr-10">
          <h1 className="text-lg sm:text-xl md:text-3xl text-[#2A254B] font-medium font-serif">
            From a studio in London to a global brand with <br/>Over 400 outlets
          </h1>
          <p className="mb-6 gap-10 flex text-justify text-[#2A254B] mt-[50px] sm:text-sm md:text-lg">
            When we started Avion, the idea was simple. Make high-quality furniture 
            affordable and available for the mass market.
          </p>
          <p className="gap-10 flex text-justify text-[#2A254B] mb-10 sm:text-sm md:text-lg">
            Handmade, and lovingly crafted furniture and homeware is what we live,
            breathe, and design so our Chelsea boutique became the hotbed for the 
            London interior design community.
          </p>
          <button className="bg-[#F9F9F9] text-[#2A254B] px-6 py-2 rounded-md hover:bg-gray-200 w-[150px] h-[56px]">
            Get in touch
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full sm:w-1/2 mt-10 sm:mt-0">
          <Image
            src="/flawer.png"
            alt="flawer"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;

