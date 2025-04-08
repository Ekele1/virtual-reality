"use client"
import React, { useState } from 'react'
import { BsDashCircleFill, BsFillPlusCircleFill } from "react-icons/bs"
import Image from 'next/image'

const PopularQuestion = () => {
    const [show1, setShow1] = useState<boolean>(false)
    const [show2, setShow2] = useState<boolean>(false)
    const [show3, setShow3] = useState<boolean>(false)

    return (
        <div className='w-full flex items-center justify-center bg-[#201823] pt-20 pb-10'>
            <div className='w-[95%] flex flex-col lg:flex-row gap-5'>
                <div className='lg:w-[50%] w-full'>
                    <p className='text-purple-700 font-semibold mb-4 lg:mb-0'>Popular Questions</p>
                    <p className='text-white font-bold lg:text-[38px] text-[22px] mb-4 lg:mb-0'>Elivate Your Device With VR</p>
                    <p className='text-gray-500'>Tempus congue dui pretium ac primis pulvinar tempor volutpat. Finibus aptent maecenas taciti libero ipsum. facilisis iaculis magna diam rutrum.</p>
                    <div className='w-full pt-10 flex flex-col gap-5'>
                        <div 
                            className='w-full rounded-xl border-2 border-pink-700 p-4 flex gap-4 cursor-pointer' 
                            onClick={() => setShow1(!show1)}
                        >
                            <div className='pt-3'>
                                {show1 ? <BsDashCircleFill color='purple' size={30}/> : <BsFillPlusCircleFill color='purple' size={30} />}
                            </div>
                            <div>
                                <p className='text-white font-bold lg:text-[35px] text-[20px]'>VR-Ready Hardware</p>
                                {show1 && <p className='text-gray-500 text-sm'>Montes vestibulum sapien class sed dis. Lacinia velit volutpat quisque suscipit consectetur penatibus auctor facilisi. Pharetra porttitor dictum faucibus sollicitudin.</p>}
                            </div>
                        </div>
                        <div 
                            className='w-full rounded-xl border-2 border-pink-700 p-4 flex gap-4 cursor-pointer' 
                            onClick={() => setShow2(!show2)}
                        >
                            <div className='pt-3'>
                                {show2 ? <BsDashCircleFill color='purple' size={30}/> : <BsFillPlusCircleFill color='purple' size={30} />}
                            </div>
                            <div>
                                <p className='text-white font-bold lg:text-[35px] text-[20px]'>High-Resolution Display</p>
                                {show2 && <p className='text-gray-500 text-sm'>Montes vestibulum sapien class sed dis. Lacinia velit volutpat quisque suscipit consectetur penatibus auctor facilisi. Pharetra porttitor dictum faucibus sollicitudin.</p>}
                            </div>
                        </div>
                        <div 
                            className='w-full rounded-xl border-2 border-pink-700 p-4 flex gap-4 cursor-pointer' 
                            onClick={() => setShow3(!show3)}
                        >
                            <div className='pt-3'>
                                {show3 ? <BsDashCircleFill color='purple' size={30}/> : <BsFillPlusCircleFill color='purple' size={30} />}
                            </div>
                            <div>
                                <p className='text-white font-bold lg:text-[35px] text-[20px]'>Gesture Recognition</p>
                                {show3 && <p className='text-gray-500 text-sm'>Montes vestibulum sapien class sed dis. Lacinia velit volutpat quisque suscipit consectetur penatibus auctor facilisi. Pharetra porttitor dictum faucibus sollicitudin.</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%] w-full h-[500px] relative'>
                    <Image 
                        className='object-cover rounded-2xl' 
                        src="/home-bg.jpg" 
                        alt='stickey' 
                        fill 
                        priority 
                        sizes="(max-width: 768px) 100vw, 50vw" 
                    />
                    <div className='w-full h-full absolute flex flex-col items-center justify-center text-white p-3'>
                        <p className='text-purple-700 font-semibold mb-4 lg:mb-0'>Shop Sustainably and Safe</p>
                        <p className='text-[25px] font-bold'>Sign Up For Our Newsletter To </p>
                        <p className='text-[25px] font-bold'>Receive Exclusive VR Updates </p>
                        <p className='text-gray-300 mt-3'>Quis leo ullamcorper, ornare purus sed,</p>
                        <p className='text-gray-300'>imperdiet nunc. Aenean mi purus, tristique sed.</p>
                        <div className='w-[80%] h-[60px] flex justify-between items-center mt-4 border-2 border-pink-600 rounded-[10px] p-2'>
                            <input 
                                type="text" 
                                placeholder='Your Email' 
                                className='lg:w-[80%] text-white outline-none border-0 bg-transparent pl-2' 
                            />
                            <button className='p-3 rounded-2xl bg-purple-500 text-white text-sm cursor-pointer'>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularQuestion