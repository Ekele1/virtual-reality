import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#201823] flex flex-col gap-5 items-center justify-center pt-10 pb-10'>
        <div className='w-[95%] flex flex-col lg:flex-row justify-between gap-5 lg:gap-0'>
            <div className='lg:w-[20%] w-full'>
                <p className='text-[25px] font-bold text-purple-700'>Information</p>
                <div className='pt-5 text-white flex flex-col gap-3'>
                    <p>History</p>
                    <p>Careers</p>
                    <p>Press and Media</p>
                    <p>Brand Partners</p>
                    <p>Affiliates</p>
                </div>
            </div>
            <div className='lg:w-[20%] w-full'>
                <p className='text-[25px] font-bold text-purple-700'>Usefull Links</p>
                <div className='pt-5 text-white flex flex-col gap-3'>
                    <p>Partner Program</p>
                    <p>Affiliate Program</p>
                    <p>App Developers</p>
                    <p>Investors</p>
                    <p>Recent Blogs</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className='lg:w-[30%] w-full'>
                <p className='text-[25px] font-bold text-purple-700'>VR-World</p>
                <div className='pt-5 text-white flex flex-col gap-3'>
                    <p className='text-sm'>Donec lobortis varius est. Nulla ullamcorper sapien bibendum erat ornare congue. Sed tempus elementum ex convallis bibendum.</p>
                    <div className='w-full h-[200px] relative'>
                        <Image src="/footer-img.png" alt='pics' fill priority sizes='fill'/>
                    </div>
                </div>

            </div>
            <div className='lg:w-[20%] w-full'>
                <p className='text-[25px] font-bold text-purple-700'>Support</p>
                <div className='pt-5 text-white flex flex-col gap-3'>
                    <p>Shop E-Scooters</p>
                    <p>Sustainability</p>
                    <p>Waranty Information</p>
                    <p>Product Registration</p>
                    <p>User Manuals</p>
                </div>
            </div>
        </div>
        <div className='w-full pt-10 border-t-1 border-purple-700 p-4 flex'>
            <p className='text-white'>Copyright @ VR-World.com, All Right Reserved © 2025 </p>
        </div>
    </div>
  )
}

export default Footer