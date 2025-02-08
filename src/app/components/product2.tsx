import Image from 'next/image'

export const Product2 = () => {
  return (
    <>
      <div>
        <h3 className='flex justify-start mb-5 ml-4 md:ml-28 font-normal w-[330px] h-[48px] text-2xl text-[#2A254B]'>
          Our popular products
        </h3>

        {/* Products Container: Flex Column on Small Screens and Row on Medium and Above */}
        <div className='flex flex-col sm:flex-row md:flex-row gap-8 justify-center'>

          {/* Product 1 */}
          <p className='text-xl m-2 text-[#2A254B] flex flex-col items-center'>
            <Image 
              src="/sofa.png" 
              alt="sofa" 
              width={500} 
              height={500} 
              className='pb-5 w-[700px] h-[450px]' 
            />
            The Dandy Cair <br />
            <span className='pt-2'>$260</span>
          </p>

          {/* Product 2 */}
          <p className='text-xl m-2 text-[#2A254B] flex flex-col items-center'>
            <Image 
              src="/kursi.png" 
              alt="chair" 
              width={250} 
              height={100} 
              className='pb-5 w-[300px] h-[450px]' 
            />
            Rustic Vase Set <br />
            <span className='pt-2'>$260</span>
          </p>

          {/* Product 3 */}
          <p className='text-xl m-2 text-[#2A254B] flex flex-col items-center'>
            <Image 
              src="/old.png" 
              alt="vase" 
              width={250} 
              height={100} 
              className='pb-7 w-[300px] h-[450px]' 
            />
            The Silky Vase <br />
            <span className='pt-2'>$125</span>
          </p>

        </div>

        {/* Button Section */}
        <div className='mt-5 flex justify-center pt-10 pb-40'>
          <button className='bg-gray-200 px-6 py-2 w-40 h-10 flex justify-center items-center text-center text-[#2A254B] transition-all duration-300 hover:bg-blue-500 hover:text-white border'>
            View collection
          </button>
        </div>
      </div>
    </>
  )
}


