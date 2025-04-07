import React from 'react'
import Image from 'next/image'

const StepInto = () => {
  return (
    <div className='w-full bg-[#201823] flex items-center justify-center pt-10 pb-10'>
        <div className='lg:w-[85%] w-[95%] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-center'>
            <div className='lg:w-[55%] w-full pr-10'>
                <p className='text-purple-700 font-semibold mb-4 lg:mb-0'>Step Into Virtual World</p>
                <p className='text-white font-bold lg:text-[38px] text-[22px] mb-4 lg:mb-0'>Step Into Extraordinary Worlds With Cutting-Edge VR</p>
                <p className='text-gray-500'>Class malesuada pulvinar tempus ridiculus scelerisque ac ad ut. justo maecenas. Habitant hac augue proin facilisis nisi hendrerit id.</p>
                <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between justify-center items-center pt-10'>
                    <div className='flex lg:flex-col flex-row items-center gap-3.5'>
                        <Image className='w-auto h-auto' src='/emmision.png' alt='controller' width={70} height={60}/>
                        <div className='w-full'>
                            <p className='text-gray-500 lg:text-[20px] text-[15px]'>Emission</p>
                            <p className='text-white font-bold'>0.12g/Km</p>
                        </div>
                    </div>
                    <div className='flex lg:flex-col flex-row items-center gap-3.5'>
                        <Image className='w-auto h-auto' src='/range.png' alt='controller' width={70} height={60}/>
                        <div className='w-full'>
                            <p className='text-gray-500 lg:text-[20px] text-[15px]'>Range</p>
                            <p className='text-white font-bold'>126km</p>
                        </div>
                    </div>
                    <div className='flex lg:flex-col flex-row items-center gap-3.5'>
                        <Image className='w-auto h-auto' src='/batery.png' alt='controller' width={70} height={60}/>
                        <div className='w-full'>
                            <p className='text-gray-500 lg:text-[20px] text-[15px]'>Battery</p>
                            <p className='text-white font-bold'>4500Mah</p>
                        </div>
                    </div>
                    <div className='flex lg:flex-col flex-row items-center gap-3.5'>
                        <Image className='w-auto h-auto' src='/batery.png' alt='controller' width={70} height={60}/>
                        <div className='w-full'>
                            <p className='text-gray-500 lg:text-[20px] text-[15px]'>Latency</p>
                            <p className='text-white font-bold'>2.40sec</p>
                        </div>
                    </div>
                </div>
                <div className='pt-10 w-full flex items-center justify-center'>
                    <button className='lg:w-[30%] w-[60%] bg-purple-400 text-white rounded-lg h-[50px] cursor-pointer relative overflow-hidden group'>
                        <span className='relative z-10 text-[15px] font-bold '>Book Today</span>
                        <div className='absolute top-0 left-0 w-full h-0 bg-purple-600 transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                    </button>
                </div>
            </div>
            <div className='lg:w-[45%] w-full h-[600px] relative'>
                <Image className='object-cover rounded-2xl' src="/sticky-slide-02.jpg" alt='stickey' fill priority sizes='fill' />
            </div>
        </div>
    </div>
  )
}

export default StepInto