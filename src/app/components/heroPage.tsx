import React from 'react'
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div className='w-full h-screen relative'>
        <Image
            src="/Home-02.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
        />
        <div className=' w-full h-full absolute flex flex-col items-center justify-center'>
            <Image
                src="/Home02.png"
                alt="Background"
                fill
                priority
                className="object-cover relative"
            />
            <div className='lg:w-[70%] w-[95%] absolute h-full flex flex-col items-center justify-center gap-5'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-white '>Virtual Worlds</p>
                    <p className='lg:text-[40px] text-[20px] font-bold text-white'>Redefine Reality Through</p>
                    <p className='lg:text-[40px] text-[25px] font-bold text-white'>Virtual Worlds</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-sm'>Dictumst odio efficitur phasellus vestibulum vulputate</p>
                    <p className='text-white text-sm'>phasellus felis integer libero quisque sollicitudin.</p>
                </div>
                <div className='w-full flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-6'>
                    <button className='lg:w-[30%] w-[60%] bg-purple-400 text-white rounded-lg h-[50px] cursor-pointer relative overflow-hidden group'>
                        <span className='relative z-10 text-[15px] font-bold '>Book VR Today</span>
                        <div className='absolute top-0 left-0 w-full h-0 bg-purple-600 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                    </button>
                    <button className='lg:w-[30%] w-[60%] bg-purple-400 text-white rounded-lg h-[50px] cursor-pointer relative overflow-hidden group'>
                        <span className='relative z-10 text-[15px] font-bold '>View Collections</span>
                        <div className='absolute top-0 left-0 w-full h-0 bg-purple-600 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroPage