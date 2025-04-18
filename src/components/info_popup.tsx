import React from 'react'

const InfoPopup = () => {
  return (
    <div className='w-full px-6 mt-12'>   
        <div className='relative w-full flex flex-col justify-center items-center p-6 bg-[#FFFFFFE3] rounded-md'>
            <h1 className='text-[#131313] text-[22px] font-[600] text-center mb-2'>
                Important Information Before You Begin
            </h1>
            <ul className='flex flex-col gap-2'>
                <li className='text-[#131313] text-[13.33px] font-[500] flex flex-row items-start gap-2'><div className='w-[15px] h-[8px] bg-[#FFBD58] rounded-full mt-[6px]'></div>This roadmap will guide you in choosing the right path and achieving your goals.</li>
                <li className='text-[#131313] text-[13.33px] font-[500] flex flex-row items-start gap-2'><div className='w-[15px] h-[8px] bg-[#FFBD58] rounded-full mt-[6px]'></div>Use it to make informed decisions and confidently navigate your way forward.</li>
                <li className='text-[#131313] text-[13.33px] font-[500] flex flex-row items-start gap-2'><div className='w-[15px] h-[8px] bg-[#FFBD58] rounded-full mt-[6px]'></div>It helps you stay organized by breaking down your journey into clear, manageable steps.</li>
                <li className='text-[#131313] text-[13.33px] font-[500] flex flex-row items-start gap-2'><div className='w-[15px] h-[8px] bg-[#FFBD58] rounded-full mt-[6px]'></div>Start your roadmap today and take the first step toward success!</li>
            </ul>
            <a 
                href="/flow-chart" 
                className='mt-6 px-8 py-2 bg-[#FFBD58] text-black font-semibold rounded-full hover:bg-[#e5aa4f] transition-colors'
            >
                Start Now
            </a>
        </div>
    </div>
  )
}

export default InfoPopup;
