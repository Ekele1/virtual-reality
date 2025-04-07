import React from 'react'

const Coins = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#201823] pt-15 pb-15'>
        <div className='w-[95%] p-5 bg-[#894eaa] flex flex-col lg:flex-row rounded-2xl gap-7 lg:gap-0'>
            <div className='lg:w-[30%] w-full text-white'>
                <p className='font-bold text-[30px]'>Earn Coins on Your Purchase</p>
            </div>
            <div className='lg:w-[25%] w-full text-white'>
                <p>Tempus congue dui pretium ac pulvinar tempor volutpat. Finibus aptent maecenas taciti libero ipsum magna diam rutrum.</p>
            </div>
            <div className='lg:w-[45%] w-full lg:pl-7 flex items-center justify-between'>
                <div className='w-[20%] flex flex-col items-center justify-center text-white border-r-[1px] border-white'>
                    <p className='font-bold lg:text-[40px] text-[20px]'>163</p>
                    <p>Days</p>
                </div>
                <div className='w-[20%] flex flex-col items-center justify-center text-white border-r-[1px] border-white'>
                    <p className='font-bold lg:text-[40px] text-[20px]'>22</p>
                    <p>DHrs</p>
                </div>
                <div className='w-[20%] flex flex-col items-center justify-center text-white border-r-[1px] border-white'>
                    <p className='font-bold lg:text-[40px] text-[20px]'>36</p>
                    <p>Mins</p>
                </div>
                <div className='w-[20%] flex flex-col items-center justify-center text-white'>
                    <p className='font-bold lg:text-[40px] text-[20px]'>27</p>
                    <p>Secs</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coins