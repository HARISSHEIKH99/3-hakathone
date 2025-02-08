"use client"
import Image from "next/image";
import { useState } from "react";
import Delivery from "../components/Delivery";
export default function Cart() {
  const [quantity, setQuantity] = useState(1);

  // Increment the quantity
  const increment = () => setQuantity(quantity + 1);

  // Decrement the quantity
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
   <div>
    <div className="flex flex-col md:flex-row mt-10 bg-white shadow-md rounded-lg max-w-4xl mx-auto overflow-hidden">
      {/* Product Image */}
      <div className="md:w-1/2">
        <img
          src="/dandy chair.png"
          alt="The Dandy Chair"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">The Dandy Chair</h2>
          <p className="text-xl text-gray-600 font-medium mt-2">£250</p>
          <p className="text-gray-600 mt-4">
            A timeless design using premium materials features as one of our
            most popular and iconic pieces. The Dandy Chair is perfect for any
            stylish living space with beech legs and lambskin leather upholstery.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
          <div className="mt-6">
            <p className="font-medium text-gray-700">Dimensions:</p>
            <p className="text-gray-600">Height: 110cm | Width: 75cm | Depth: 50cm</p>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mt-6 flex items-center space-x-4">
          <button
            onClick={decrement}
            className="w-10 h-10 bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-600"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-12 text-center border border-gray-600 text-black rounded"
          />
          <button
            onClick={increment}
            className="w-10 h-10 bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-600"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-600">
          Add to Cart
        </button>
      </div>
    </div>
       <div>
       <h3 className='flex justify-start mt-20 mb-5 md:ml-4 text-2xl text-[#2A254B]'>
         New Ceramics
       </h3> 

       {/* Product Container - Flex Column on Small Screens and Row on Medium and Above */}
       <div className='flex flex-col md:flex-row justify-evenly gap-5 text-black'>
         {/* Product 1 */}
         <p className='text-xl m-2 flex flex-col items-center'>
           <Image 
             src="/kursi.png" 
             alt="chair" 
             width={200} 
             height={100} 
             className='pb-5 w-[300px]' 
           />
           The Dandy Cair
           <span className='pt-2 text-[#2A254B]'>
             $260
           </span>
         </p>

         {/* Product 2 */}
         <p className='text-xl m-2 flex flex-col items-center'>
           <Image 
             src="/vase.png" 
             alt="vase" 
             width={200} 
             height={100} 
             className='pb-5 w-[300px]' 
           />
           Rustic Vase Set
           <span className='pt-2 text-[#2A254B]'>
            $155
           </span>
         </p>

         {/* Product 3 */}
         <p className='text-xl m-2 flex flex-col items-center'>
           <Image 
             src="/lamp.png" 
             alt="lamp" 
             width={200} 
             height={100} 
             className='pb-7 w-[300px]' 
           />
           The Silky Vase
           <span className='pt-2'>
           $125
           </span>
         </p>
         {/* Product 4 */}
         <p className='text-xl m-2 flex flex-col items-center'>
           <Image 
             src="/silky.png" 
             alt="lamp" 
             width={200} 
             height={100} 
             className='pb-6 w-[300px]' 
           />
           The Lucky Lamp
           <span className='pt-2'>
             $339
           </span>
         </p>
       </div>

       {/* Button Section */}
       <div className='mt-5 flex justify-center pt-10 pb-40'>
         <button className='bg-gray-200 px-6 py-2 w-40 h-10 flex justify-center items-center text-center text-[#2A254B] transition-all duration-300 hover:bg-blue-500 hover:text-white border'>
           View collection
         </button>
       </div>
     </div>
<Delivery/>
- <div>
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
</div>
</div>
  );
}