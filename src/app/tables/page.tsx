import React from 'react'
import Image from 'next/image'
import { PiFlowerTulip } from 'react-icons/pi'
import { CiCircleCheck } from 'react-icons/ci'
import { BsThunderbolt } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaCircleCheck } from "react-icons/fa6";

const page = () => {
    return (
        <div>
      
          <div className="relative">
            <Image
              src="/bg.png"
              alt="bg-image"
              width={1700}
              height={704}
              className="w-full h-auto mt-5 object-cover" // Added object-cover to maintain aspect ratio
            />
            <div className="absolute inset-0 flex justify-end">
              <div className="bg-white border-solid w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] 
              h-[444px] mt-28 p-6 sm:p-8 md:p-10 lg:p-12 text-[#22202E] flex justify-center flex-col">
                <h1 className="font-normal text-3xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
                  Luxury homeware for people<br /> who love timeless design quality
                </h1>
                <p className="mb-4 text-sm sm:text-base md:text-lg w-[343px] h-[27px]">
                  Shop the new Spring 2022 collection today
                </p>
                <button className="bg-[#F9F9F9] w-[170px] h-[56px] text-[#2A254B]">
                  View collection
                </button>
              </div>
            </div>
          </div>
   
{/* 
            
                {/* End */}

      
               {/* Delivery Section */}
               <h2 className="flex justify-center items-center mt-32 text-2xl text-[#2A254B] mb-20 gap-5">
  What makes our brands different
</h2>

<div className="w-full justify-evenly">
  <div className="sm:h-[500px] lg:h-[300px]">
    <div className="flex flex-col sm:flex-col lg:flex-row sm:items-center sm:gap-y-8 lg:gap-x-4 lg:justify-evenly">

      {/* Box 1 */}
      <div className="flex justify-center sm:w-full lg:w-[23%]">
        <div className="w-full sm:w-[305px] h-[250px] bg-[#F9F9F9] pl-10 pt-8 flex flex-col items-center">
          <div className="w-[24px] h-[24px] text-[#2A254B] mb-4">
            <TbTruckDelivery />
          </div>
          <h1 className="font-normal text-[#2A254B] text-xl text-center mb-2">
            Next day as standard
          </h1>
          <p className="text-sm text-[#2A254B] font-extralight text-center mt-2">
            Order before 3pm and get your order <br />
            <span className="block">the next day as standard</span>
          </p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="flex justify-center sm:w-full lg:w-[23%]">
        <div className="w-full sm:w-[305px] h-[250px] bg-[#F9F9F9] pl-10 pt-8 flex flex-col items-center">
          <div className="w-[24px] h-[24px] text-[#2A254B] mb-4">
            <BsThunderbolt />
          </div>
          <h1 className="font-normal text-[#2A254B] text-xl text-center mb-2">
            Unbeatable price
          </h1>
          <p className="text-sm text-[#2A254B] font-extralight text-center mt-2">
            For our materials and quality <br />
            <span className="block">you won`t find better prices anywhere</span>
          </p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="flex justify-center sm:w-full lg:w-[23%]">
        <div className="w-full sm:w-[305px] h-[250px] bg-[#F9F9F9] pl-10 pt-8 flex flex-col items-center">
          <div className="w-[28px] h-[28px] text-[#2A254B] mb-4">
            <CiCircleCheck />
          </div>
          <h1 className="font-normal text-[#2A254B] text-xl text-center mb-2">
            Made by true artisans
          </h1>
          <p className="text-sm text-[#2A254B] font-extralight text-center mt-2">
            Handmade crafted goods <br />
            <span className="block">made with real passion and craftsmanship</span>
          </p>
        </div>
      </div>

      {/* Box 4 */}
      <div className="flex justify-center sm:w-full lg:w-[23%]">
        <div className="w-full sm:w-[305px] h-[250px] bg-[#F9F9F9] pl-10 pt-8 flex flex-col items-center">
          <div className="w-[28px] h-[28px] text-[#2A254B] mb-4">
            <PiFlowerTulip />
          </div>
          <h1 className="font-normal text-[#2A254B] text-xl text-center mb-2">
            Recycled packaging
          </h1>
          <p className="text-sm text-[#2A254B] font-extralight text-center mt-2">
            We use 100% recycled materials <br />
            <span className="block">to ensure our footprint is more manageable</span>
          </p>
        </div>
      </div>

    </div>
  </div>
</div>




         
            {/* iamages */}<div>
  <h3 className='flex justify-start mt-20 mb-5 ml-10 sm:ml-36 text-2xl text-[#2A254B]'>
    New Ceramics
  </h3>
  <div className='flex flex-col sm:flex-row sm:justify-center gap-5'>
    {/* Product 1 */}
    <p className='text-xl m-2 w-full sm:w-[300px] text-black'>
      <Image src="/kursi.png" alt="chair" width={200} height={100} className='pb-5 w-full sm:w-[300px]' />
      The Dandy Chair
      <span className='pt-2 text-[#2A254B]'><br />$260</span>
    </p>

    {/* Product 2 */}
    <p className='text-xl m-2 w-full sm:w-[300px] text-black'>
      <Image src="/vase.png" alt="vase" width={200} height={100} className='pb-5 w-full sm:w-[300px]' />
      Rustic Vase Set
      <span className='pt-2 text-[#2A254B]'><br />$155</span>
    </p>

    {/* Product 3 */}
    <p className='text-xl m-2 w-full sm:w-[300px] text-[#2A254B]'>
      <Image src="/lamp.png" alt="lamp" width={200} height={100} className='pb-7 w-full sm:w-[300px]' />
      The Silky Vase
      <span className='pt-2'><br />$125</span>
    </p>

    {/* Product 4 */}
    <p className='text-xl m-2 w-full sm:w-[300px] text-[#2A254B]'>
      <Image src="/silky.png" alt="silky lamp" width={200} height={100} className='pb-6 w-full sm:w-[300px]' />
      The Lucky Lamp
      <span className='pt-2'><br />$339</span>
    </p>
  </div>

  <div className='mt-5 flex justify-center pt-10 pb-10'>
    <button className='bg-gray-200 px-2 py-2 w-40 h-10 flex justify-center items-center text-center text-[#2A254B] transition-all duration-300 hover:text-blue-950 border-6'>
      View collection
    </button>
  </div>
</div>

            {/* next sofa image chair */}

            <div className='flex flex-col sm:flex-row justify-center gap-5 px-8 py-10'>
    <div className='bg-[#2A254B] w-full sm:w-[900px] border-solid text-white flex flex-col gap-6 font-normal mb-10 py-8'>
        <h1 className='font-sans text-2xl sm:text-3xl mt-8 sm:mt-20 sm:ml-16'>
            It started with a small idea
        </h1>
        <p className='font-xl text-lg sm:w-[495px] sm:h-[48px] sm:ml-16'>
            A global brand with local beginnings, our story began in a <br />small studio in South London in early 2014
        </p>
        <button className='text-white bg-[#F9F9F926] sm:w-[200px] h-[50px] p-3 sm:mt-48 sm:ml-16'>
            View collection
        </button>
    </div>
    <Image src="/sofa chair.png"
        alt="sofa"
        width={500}
        height={500}
        className='w-full h-auto sm:w-[900px]'
    />
</div>
            <div className='relative'>
                <Image src="/bd-sign.png"
                    alt="bgimg"
                    width={300}
                    height={300}
                    className='w-[1600px] h-[444px] ' />

                <div className='absolute inset-0 flex items-center flex-col text- mt-20 gap-[30px]'>
                    <h1 className=' flex text-justify text-white text-3xl'>Join the club and get the benefits</h1>
                    <p className='text-base'>Sign up for our newsletter and receive exclusive offers on <br />
                        <span className='ml-10'>new ranges, sales, pop up stores and more</span></p>
                     <div className='flex gap-10'>
                     <p className='flex gap-3 h-24 w-[px]'> <FaCircleCheck className='mt-1' />Exclusive offers</p>
                     <p className='flex gap-3 h-24 w-[px]'> <FaCircleCheck  className='mt-1'/>Free events</p>
                     <p className='flex gap-3 h-24 w-[px]'> <FaCircleCheck  className='mt-1'/>Large discounts</p>
                    
                      </div>
                      <div>
                        <input type='text' placeholder='your@email.com' className='w-[400px] h-[57px]'/>
                        <button className='bg-[#2A254B] text-[#FFFFFF] w-[118px] h-[56px]'>Sign up</button>
                     </div>
                </div>
               
              
            </div>
        </div>

    )
}

export default page