import Image from 'next/image';
 import { BsThunderbolt } from 'react-icons/bs';
 import { CiCircleCheck } from 'react-icons/ci';
 import { PiFlowerTulip } from 'react-icons/pi';
 import { TbTruckDelivery } from 'react-icons/tb';
 export default function Home() {
      return (
   <div>
     <div className="flex flex-col md:flex-row items-center justify-between p-8 mx-auto max-w-6xl text-black">
      
       {/* Left Section: Image */}
       <div className="w-full md:w-1/2">
         <Image 
           src="/dandy chair.png" 
           alt="The Dandy Chair" 
           width={500} 
           height={600} 
           className="w-full object-cover"
         />
       </div>

      {/* Right Section: Product Details */}
       <div className="w-full md:w-1/2 mt-6 md:mt-0 p-4">
         <h1 className="text-3xl font-bold mb-4">The Dandy Chair</h1>
         <p className="text-xl text-gray-700 mb-4">£250</p>
         <p className="text-gray-600 mb-4">
           A timeless design, with premium materials features as one of our most 
           popular and iconic pieces. The dandy chair is perfect for any stylish 
           living space with beech legs and lambskin leather upholstery.
         </p>
                 {/* Bullet Points */}
        <ul className="list-disc list-inside text-gray-600 mb-6">         <li>Premium material</li>
           <li>Handmade upholstery</li>
           <li>Quality timeless classic</li>
         </ul>

         {/* Dimensions */}
         <div className="mb-6">
           <h3 className="font-semibold mb-2">Dimensions</h3>
           <p>Height: 110cm | Width: 75cm | Depth: 50cm</p>
         </div>
         {/* Add to Cart */}      
         <div className="flex items-center">Amount
           <input 
             type="number" 
             defaultValue={1} 
             className="border rounded-md w-16 p-2 mr-4"
           />
           <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
             Add to cart
           </button>
           </div>
         </div>
        
       
             </div>
 <div>
          <h3 className='flex justify-start mt-20 mb-5 md:ml-4 text-2xl text-[#2A254B] ml-auto'>
            You might also like
          </h3> 
  
          {/* Product Container - Flex Column on Small Screens and Row on Medium and Above */}
          <div className='flex flex-col md:flex-row justify-evenly gap-5'>
            {/* Product 1 */}
            <p className='text-xl m-2 flex flex-col text-[#2A254B] items-center'>
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
            <p className='text-xl m-2 text-[#2A254B] flex flex-col items-center'>
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
            <p className='text-xl text-[#2A254B] m-2 flex flex-col items-center'>
              <Image 
                src="/lamp.png" 
                alt="lamp" 
                width={200} 
                height={100} 
                className='pb-7 w-[300px]' 
              />
             The Silky Vase
              <span className='pt-2 text-[#2A254B]'>
              $125
              </span>
            </p>
            {/* Product 4 */}
            <p className='text-xl m-2 flex flex-col text-[#2A254B] items-center'>
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
            

   
          <div>
            <h2 className='flex justify-center items-center mt-20 text-2xl text-[#2A254B] mb-20'>
              What makes our brands different
            </h2>
            <div className=''>
              <div className="">
      
                {/* Box 1 */}
                <div className=''>
                  <div className='flex flex-wrap ml-20'>
                    <div className='w-full sm:w-1/2 lg:w-1/4'>
                      <div className='text-2xl text-[#2A254B]'>
                        <TbTruckDelivery />
                      </div>
      
                      <div className=''>
                        <h1 className='font-normal text-[#2A254B] w-auto text-left text-xl'>Next day as standard</h1>
                        <p className='text-sm text-left font-extralight w-auto text-[#2A254B] mt-2'>
                          Order before 3pm and get your order
                          <br />
                          <span className='text-sm text-left font-extralight w-auto text-[#2A254B]'> the next day as standard</span>
                        </p>
                      </div>
                    </div>
      
                    {/* Box 2 */}
                    <div className='w-full sm:w-1/2 lg:w-1/4'>
                      <div className='text-2xl text-[#2A254B]'>
                        <BsThunderbolt />
                      </div>
                      <div>
                        <h1 className='font-normal text-[#2A254B] w-auto text-xl'>Unbeatable price</h1>
                        <p className='text-sm font-extralight w-auto text-[#2A254B] mt-2'>
                          For our materials and quality you
                          <br />
                          <span className='text-sm text-left font-extralight text-[#2A254B]'>
                            won not find better price anywhere</span>
                        </p>
                      </div>
                    </div>
      
                    {/* Box 3 */}
                    <div className='w-full sm:w-1/2 lg:w-1/4'>
                      <div className='w-auto text-2xl text-[#2A254B]'>
                        <CiCircleCheck />
                      </div>
      
                      <div>
                        <h1 className='font-normal text-[#2A254B] text-xl'>Made by true artisans</h1>
                        <p className='text-sm font-extralight text-[#2A254B] mt-2'>
                          Handmade crafted goods made with
                          <br />
                          <span className='text-sm font-extralight text-[#2A254B]'> real passion and craftsmanship</span>
                        </p>
                      </div>
                    </div>
      
                    {/* Box 4 */}
                    <div className='w-full sm:w-1/2 lg:w-1/4'>
                      <div className='w-auto text-2xl text-[#2A254B]'>
                        <PiFlowerTulip />
                      </div>
      
                      <div>
                        <h1 className='font-normal text-[#2A254B] text-xl'>Recycled packaging</h1>
                        <p className='text-sm font-extralight text-[#2A254B] mt-2'>
                          We use 100% recycled packaging to
                          <br />
                          <span className='text-sm font-extralight text-[#2A254B]'> ensure our footprint is manageable</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
          </div>

         {/* sign up */}
      
         <div>
     <div className='bg-gray-100 h-[500px] mt-20 gap-10'>
         <div className='flex justify-center text-center text-blue-950'>
          <h1 className='font-sans mt-28 text-4xl mb-10'>Join the club and get the benefits</h1>
         </div>
         <p className='flex justify-center text-center text-[#2A254B]'>Sign up for our newsletter and receive
              exclusive offers</p> 
             
              <p className='flex justify-center text-center text-[#2A254B]'>on new ranges, sales, pop up stores and more</p>

              <div className='flex justify-center items-center m-20'>
                 <input type="text" placeholder='your@email.com' className='p-5 ml-10'/>
                 <button className='bg-[#2A254B] text-white p-5'>Sign up</button>
              </div>
    </div>
 </div>
  
       </div>
   )
}
