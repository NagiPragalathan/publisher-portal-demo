import Profile from '@/components/profile';
import ProgressBar from '@/components/progress_bar';
import React from 'react'
import { field_of_interest } from '@/components/constants/form_data';

const FieldInterest = () => {

    return (
        <>
            <Profile />
            <ProgressBar progress={24} completed_steps={[1, 1, 0, 0, 0]} />
            <div className='w-full px-6 mt-12 flex flex-col justify-center items-center'>   
                <div className='w-full max-w-[400px] flex flex-col justify-center items-center p-6 bg-[#9f9f9f87] backdrop-blur-md rounded-[20px] shadow-lg mb-6'>
                    <h1 className='text-[#FFFFFF] text-[24px] font-[600] text-center mb-6'>
                        Primary field of interest
                    </h1>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                        {field_of_interest.map((item, index) => (
                            <a href="/form/specialization" className='w-full h-auto flex flex-col justify-between items-start bg-[#EEEEEE] rounded-lg p-4 shadow-md mb-4 gap-3 hover:bg-[#FFD777] cursor-pointer'>
                                <div className='w-full flex flex-col justify-between items-start'>
                                    <h1 className='text-[#000000] text-[13.33px] font-[500]'>
                                        {item.name}
                                    </h1>
                                    <p className='text-[#717171] text-[13.33px] font-[500]'>
                                        {item.courses} Courses
                                    </p>
                                </div>
                                <div className='w-full h-[44px] rounded-full flex justify-end items-end p-2'>
                                    <img src={item.icon} alt={item.name} className='w-[70%] h-fit object-cover' />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FieldInterest;
