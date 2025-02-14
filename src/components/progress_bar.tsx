import React from 'react'

const ProgressBar = ({progress}: {progress: number}) => {
    let progress_data = (progress || 86);
    return (
        <div className='w-full flex flex-col justify-center items-center px-6'>
            <div className='w-full gap-3 flex flex-col justify-center items-start p-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg bg-gradient-to-r from-[#1976d236] to-[#a855f747]'>
                <h1 className='text-white text-[16px] font-[600]'>{progress_data}% completed</h1>
                <div className='w-full h-[8.67px] bg-[#385682] rounded-full'>
                    <div className={`flex flex-row justify-end items-center h-[8.67px] bg-[#68FF6E] rounded-full`} style={{width: `${progress_data}%`}}>
                        <div className='w-[5px] h-[5px] bg-[#68FF6E] rounded-full shadow-[0px_0px_11px_7px_#68FF6E]'>

                        </div>
                    </div>
                </div>
                <p className='text-white text-[13px] font-[500]'>Your Dream College is Within Reach  Keep Going!</p>
            </div>
        </div>
  )
}

export default ProgressBar;
