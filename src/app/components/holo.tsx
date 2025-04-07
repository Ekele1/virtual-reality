import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";

const Holo = () => {
  return (
    <div className='w-full h-[900px] relative'>
        <Image src="/gifback.gif" fill priority sizes='fill' alt='back'/>
        <div className='w-full flex flex-col items-center justify-center pt-15 lg:pb-20 pb-10 absolute'>
            <div className='lg:w-[400px] lg:h-[400px] w-full h-[300px] relative'>
                <Image src="/single-product.png" fill priority sizes='fill' alt='back'/>
            </div>
            <p className='text-white font-bold lg:text-[40px] text-[25px]'>HoloQuest VR Headset</p>
            <div className='flex flex-col lg:flex-row gap-4 items-center justify-center'>
                <div className='flex items-center gap-2'>
                    <FaStar color='orange'/>
                    <FaStar color='orange'/>
                    <FaStar color='orange'/>
                    <FaStar color='orange'/>
                    <FaStar color='orange'/>
                </div>
                <p className='text-white'>In stock, ready to be shipped</p>
            </div>
            <div className='flex flex-col pt-5 gap-8 items-center justify-center'>
                <p className='text-white font-semibold text-[20px]'>Conectivity Technology: <span className='text-pink-600 font-bold'>USB</span></p>
                <div className='flex flex-col lg:flex-row gap-5 items-center justify-center'>
                    <div className='flex gap-5'>
                        <button className='lg:w-[150px] pl-5 pr-5 bg-purple-400 text-white rounded-lg h-[50px] cursor-pointer relative overflow-hidden group'>
                            <span className='relative z-10 text-[15px] '>Bluetooth</span>
                            <div className='absolute top-0 left-0 w-full h-0 bg-purple-600 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                        </button>
                        <button className='lg:w-[150px] pl-5 pr-5  bg-purple-400 text-white rounded-lg h-[50px] cursor-pointer relative overflow-hidden group'>
                            <span className='relative z-10 text-[15px]'>HDMI</span>
                            <div className='absolute top-0 left-0 w-full h-0 bg-purple-600 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                        </button>
                    </div>
                    <div className='flex gap-5'>
                        <button className='lg:w-[150px] pl-5 pr-5 bg-purple-400 text-white rounded-lg h-[50px] cursor-pointer relative overflow-hidden group'>
                            <span className='relative z-10 text-[15px]'>USB</span>
                            <div className='absolute top-0 left-0 w-full h-0 bg-purple-600 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                        </button>
                        <button className='lg:w-[150px] pl-5 pr-5 bg-purple-400 text-white rounded-lg h-[50px] cursor-pointer relative overflow-hidden group'>
                            <span className='relative z-10 text-[15px]'>Wi-Fi</span>
                            <div className='absolute top-0 left-0 w-full h-0 bg-purple-600 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                        </button>
                    </div>
                </div>
                <button className='lg:w-[500px] pl-5 pr-5 bg-purple-400 text-white rounded-lg h-[50px] cursor-pointer relative overflow-hidden group'>
                    <span className='relative z-10 text-[15px]'>Add To Cart</span>
                    <div className='absolute top-0 left-0 w-full h-0 bg-purple-600 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Holo