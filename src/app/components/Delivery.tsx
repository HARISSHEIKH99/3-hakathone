import React from 'react';
import { BsThunderbolt } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { PiFlowerTulip } from "react-icons/pi";

export const Delivery = () => {
  return (
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
                    <span className='text-sm text-left font-extralight text-[#2A254B]'>wont find better price anywhere</span>
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
  );
}

export default Delivery;
