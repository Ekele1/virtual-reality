import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { GoDash } from "react-icons/go";

const Discover = () => {
  return (
    <div className='w-full bg-[#201823] flex items-center justify-center pb-10'>
        <div className='w-[95%] flex flex-col lg:flex-row gap-5'>
            <div className='lg:w-[30%] w-full h-[650px] relative'>
                <Image className='object-cover rounded-2xl' sizes='fill' src="/home-2-shop.jpg" alt='home-shop' fill priority />
                <div className='absolute w-full text-white flex flex-col p-3 gap-4 items-center justify-center bottom-0'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='lg:text-[28px] text-[23px] font-bold'>Shaping The Future of</p>
                        <p className='lg:text-[28px] text-[23px] font-bold'>Experience</p>
                    </div>
                    <p className='cursor-pointer font-semibold'>View Details</p>
                </div>
            </div>
            <div className='lg:w-[70%] w-full pl-5 flex flex-col gap-10'>
                <div>
                    <p className='text-purple-700 font-semibold'>Popular Products</p>
                    <p className='text-white font-bold lg:text-[38px] text-[25px]'>Dicover Popular Picks</p>
                </div>
                <div className='w-full flex flex-col lg:flex-row justify-between lg:gap-5 gap-10'>
                <div className='lg:w-[33%] w-full flex flex-col gap-7'>
                    
                    <div className="glowing-pink-border w-full flex flex-col gap-5 p-4 bg-[#28202f] rounded-2xl relative overflow-hidden">
                        <div className="w-full relative h-[250px] border-b-[1px] border-b-gray-500">
                            <Image className="object-cover" src="/home-4-shop.jpg" sizes='fill' alt="home4" fill priority />
                        </div>
                        <div className="w-full flex flex-col items-center justify-center pt-3 pb-5">
                            <p className="text-[20px] text-white font-bold">3D Gaming Keypad</p>
                            <div className="w-full flex items-center justify-center gap-1 pt-4">
                                <FaStar color="yellow" size={20} />
                                <FaStar color="yellow" size={20} />
                                <FaStar color="yellow" size={20} />
                                <FaStar color="yellow" size={20} />
                                <FaStar color="gray" size={20} />
                            </div>
                            <div className="flex items-center justify-center w-full pt-6 text-white">
                                <div className="flex items-center">
                                    <BiDollar size={20} />
                                    <p>500.00</p>
                                </div>
                                <GoDash />
                                <div className="flex items-center">
                                    <BiDollar size={20} />
                                    <p>590.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[33%] w-full flex flex-col gap-7'>
                    <div className="glowing-pink-border w-full flex flex-col gap-5 p-4 bg-[#28202f] rounded-2xl relative overflow-hidden">
                        <div className="w-full relative h-[250px] border-b-[1px] border-b-gray-500">
                            <Image className="object-cover" src="/home-3-shop.jpg" alt="home3" sizes='fill' fill priority />
                        </div>
                        <div className="w-full flex flex-col items-center justify-center pt-3 pb-5">
                            <p className="text-[20px] text-white font-bold">HoloQuest VR Headset</p>
                            <div className="w-full flex items-center justify-center gap-1 pt-4">
                                <FaStar color="yellow" size={20} />
                                <FaStar color="yellow" size={20} />
                                <FaStar color="yellow" size={20} />
                                <FaStar color="yellow" size={20} />
                                <FaStar color="gray" size={20} />
                            </div>
                            <div className="flex items-center justify-center w-full pt-6 text-white">
                                <div className="flex items-center">
                                    <BiDollar size={20} />
                                    <p>320.00</p>
                                </div>
                                <GoDash />
                                <div className="flex items-center">
                                    <BiDollar size={20} />
                                    <p>375.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[33%] w-full flex flex-col gap-7'>
                    <div className="glowing-pink-border w-full flex flex-col gap-5 p-4 bg-[#28202f] rounded-2xl relative overflow-hidden">
                        <div className="w-full relative h-[250px] border-b-[1px] border-b-gray-500">
                            <Image className="object-cover" src="/shop-1-1.jpg" alt="shop1" sizes='fill' fill priority />
                        </div>
                        <div className="w-full flex flex-col items-center justify-center pt-3 pb-5">
                            <p className="text-[20px] text-white font-bold">Touch Controller</p>
                            <div className="w-full flex items-center justify-center gap-1 pt-4">
                                <FaStar color="yellow" size={20} />
                                <FaStar color="yellow" size={20} />
                                <FaStar color="yellow" size={20} />
                                <FaStar color="yellow" size={20} />
                                <FaStar color="gray" size={20} />
                            </div>
                            <div className="flex items-center justify-center w-full pt-6 text-white">
                                <div className="flex items-center">
                                    <BiDollar size={20} />
                                    <p>40.00</p>
                                </div>
                                <GoDash />
                                <div className="flex items-center">
                                    <BiDollar size={20} />
                                    <p>50.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discover