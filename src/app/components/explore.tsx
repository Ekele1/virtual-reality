import Image from 'next/image'
import React from 'react'

const Explore = () => {
  return (
    <div className='w-full bg-[#201823] flex items-center justify-center pt-10 pb-10'>
        <div className='lg:w-[85%] w-[95%] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-center'>
            <div className='lg:w-[55%] w-full pr-10'>
                <p className='text-purple-700 font-semibold mb-4 lg:mb-0'>Explore VR Games</p>
                <p className='text-white font-bold lg:text-[38px] text-[22px] mb-4 lg:mb-0'>Explore Limitless Possibilities With Virtual Reality</p>
                <p className='text-gray-500'>Nec magnis conubia luctus nascetur, nisl ultrices lorem. Euismod ultricies gravida pulvin pharetra. feugiat feugiat senectus torquent.</p>
                <div className='w-full flex flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between justify-center items-center pt-10'>
                    <div>
                        <p className='text-[50px] lg:text-[30px] text-purple-700 font-bold'>125mi</p>
                        <p className='text-white text-[20px]'>km range</p>
                    </div>
                    <div>
                        <p className='text-[50px] lg:text-[30px]  text-purple-700 font-bold'>450lbs</p>
                        <p className='text-white text-[20px]'>Frame Weight</p>
                    </div>
                    <div>
                        <p className='text-[50px] lg:text-[30px]  text-purple-700 font-bold'>22Kw</p>
                        <p className='text-white text-[20px]'>Per Charge</p>
                    </div>
                </div>
                <div className='pt-10 w-full flex items-center justify-center'>
                    <button className='lg:w-[30%] w-[60%] bg-purple-400 text-white rounded-lg h-[50px] cursor-pointer relative overflow-hidden group'>
                        <span className='relative z-10 text-[15px] font-bold '>Explore More</span>
                        <div className='absolute top-0 left-0 w-full h-0 bg-purple-600 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                    </button>
                </div>
            </div>
            <div className='lg:w-[45%] w-full h-[600px] relative'>
                <Image className='object-cover rounded-2xl' src="/sticky.jpg" alt='stickey' fill priority sizes='fill' />
            </div>
        </div>
    </div>
  )
}

export default Explore