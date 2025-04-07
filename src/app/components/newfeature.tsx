import Image from 'next/image';
import React from 'react'
import { GiVrHeadset } from "react-icons/gi";

const NewFeature = () => {
  return (
    <div className='w-full bg-[#201823] pt-10 pb-10'>
        <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-purple-700 font-semibold'>New Features</p>
            <p className='text-white font-bold lg:text-[40px] text-[25px] flex items-center justify-center'>Best Premium VR Headset</p>
        </div>
        <div className='w-full flex items-center justify-center lg:hidden'>
                <Image className='w-auto h-auto' src="/vrhelmet.png" width={300} height={500} alt='head'/>
        </div>
        <div className='w-full flex items-center justify-center pt-5 lg:gap-[30%] gap-[20%]'>
            <div className='flex flex-col-reverse lg:flex-row items-center gap-3.5'>
                <p className='text-white lg:text-[20px] text-[15px]'>VR Helmets</p>
                <GiVrHeadset color='purple' size={60}/>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-3.5'>
                <Image className='w-auto h-auto' src='/controller.png' alt='controller' width={70} height={60}/>
                <p className='text-white lg:text-[20px] text-[15px]'>Controller</p>
            </div>
        </div>
        <div className='w-full flex items-center justify-center lg:gap-5 gap-[20%]'>
            <div className='flex flex-col-reverse lg:flex-row items-center'>
                <p className='text-white lg:text-[20px] text-[15px]'>Panoramic View</p>
                <Image className='w-auto h-auto' src='/panoramic.png' alt='panoramic' width={70} height={60}/>
            </div>
            <div className='hidden lg:flex'>
                <Image className='w-auto h-auto' src="/vrhelmet.png" width={300} height={500} alt='head'/>
            </div>
            <div className='flex flex-col lg:flex-row items-center'>
                <Image className='w-auto h-auto' src='/interact.png' alt='panoramic' width={70} height={60}/>
                <p className='text-white lg:text-[20px] text-[15px]'>Interaction</p>
            </div>
        </div>
        <div className='w-full flex items-center justify-center pt-5 lg:gap-[30%] gap-[20%]'>
            <div className='flex flex-col-reverse lg:flex-row items-center gap-3.5'>
                <p className='text-white lg:text-[20px] text-[15px]'>VR Zone</p>
                <Image className='w-auto h-auto' src='/zone.png' alt='controller' width={70} height={60}/>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-3.5'>
                <Image className='w-auto h-auto' src='/tilt.png' alt='controller' width={70} height={60}/>
                <p className='text-white lg:text-[20px] text-[15px]'>Tilt Control</p>
            </div>
        </div>
        <div className=" my-4 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
                <button className='lg:w-[200px] w-[200px] bg-purple-400 text-white rounded-lg h-[50px] cursor-pointer relative overflow-hidden group'>
                    <span className='relative z-10 text-[15px] font-bold '>Buy Now</span>
                    <div className='absolute top-0 left-0 w-full h-0 bg-purple-600 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                </button>
                <button className='lg:w-[200px] w-[200px] bg-purple-400 text-white rounded-lg h-[50px] cursor-pointer relative overflow-hidden group'>
                    <span className='relative z-10 text-[15px] font-bold '>View Details</span>
                    <div className='absolute top-0 left-0 w-full h-0 bg-purple-600 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                </button>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
    </div>
  )
}

export default NewFeature