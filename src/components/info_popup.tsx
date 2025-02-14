import React from 'react'
import { IoClose } from "react-icons/io5";


const InfoPopup = () => {
  return (
    <div className='w-full px-6 mt-12'>   
        <div className='w-full flex flex-col justify-center items-center px-6 bg-[#FFFFFFE3] rounded-md'>
            <div className='w-full flex flex-row justify-end items-end'>
                <IoClose />
            </div>
            <h1 className='text-[#131313] text-[22px] font-[600]'>
                Important Information Before You Begin
            </h1>
            <ul>
                <li>This roadmap will guide you in choosing the right path and achieving your goals.</li>
                <li>Use it to make informed decisions and confidently navigate your way forward.</li>
                <li>It helps you stay organized by breaking down your journey into clear, manageable steps.</li>
                <li>Start your roadmap today and take the first step toward success!</li>
            </ul>
        </div>
    </div>
  )
}

export default InfoPopup;
