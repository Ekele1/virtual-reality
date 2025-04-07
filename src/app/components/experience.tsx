import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className='w-full bg-[#201823] flex items-center justify-center pt-10 pb-10'>
        <div className='lg:w-[85%] w-[95%] flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-center'>
            <div className='lg:w-[45%] w-full h-[600px] relative '>
                <Image className='object-cover rounded-2xl' src="/sticky-slide-03.jpg" alt='stickey' fill priority sizes='fill' />
            </div>
            <div className='lg:w-[55%] w-full lg:pl-10'>
                <p className='text-purple-700 font-semibold mb-4 lg:mb-0'>Experience With VR</p>
                <p className='text-white font-bold lg:text-[38px] text-[22px] mb-4 lg:mb-0'>Transform Your Reality With Immersive VR Experiences</p>
                <p className='text-gray-500'>Tempus congue dui pretium ac primis pulvinar tempor volutpat. Finibus aptent maecenas taciti libero ipsum. facilisis iaculis magna diam rutrum.</p>
                <div className='w-full text-white pt-20 flex flex-col gap-5'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-[20px] font-bold'>360-Degree Vision</p>
                        <p className='font-semibold'>80%</p>
                    </div>
                    <div className='w-full h-[10px] bg-gray-300 rounded-3xl'>
                        <div className='w-[80%] h-[10px] bg-purple-700 rounded-3xl'></div>
                    </div>
                </div>
                <div className='w-full text-white pt-5 flex flex-col gap-5'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-[20px] font-bold'>Motion Tracking</p>
                        <p className='font-semibold'>60%</p>
                    </div>
                    <div className='w-full h-[10px] bg-gray-300 rounded-3xl'>
                        <div className='w-[60%] h-[10px] bg-purple-700 rounded-3xl'></div>
                    </div>
                </div>
                <div className='w-full text-white pt-5 flex flex-col gap-5'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-[20px] font-bold'>Real-Time Interaction</p>
                        <p className='font-semibold'>70%</p>
                    </div>
                    <div className='w-full h-[10px] bg-gray-300 rounded-3xl'>
                        <div className='w-[70%] h-[10px] bg-purple-700 rounded-3xl'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience