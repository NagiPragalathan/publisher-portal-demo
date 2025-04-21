"use client";

import React from 'react';
import Image from 'next/image';
import styles from './css/ProgressBar.module.css';
import { useRouter } from 'next/navigation';

const ProgressBar = ({progress, completed_steps}: {progress: number, completed_steps: number[]}) => {
    const router = useRouter();
    const progress_data = (progress || 86);
    const fake_value: number[] = (completed_steps || [1,0,0,0,0]);
    
    const handleClick = (value: number, index: number) => {
        if (value === 1) {
            router.push(`/flow-chart/${index + 1}`);
        }
    };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4 p-1">
            <div className="w-full flex flex-col justify-center items-center px-6">
                <div className="w-full gap-3 flex flex-col justify-center items-start p-4 
                    bg-white bg-opacity-20 backdrop-blur-lg rounded-lg 
                    bg-gradient-to-r from-[#1976d236] to-[#a855f747]">
                    
                    {/* Percentage Text with Animation */}
                    <h1 className="text-white text-[16px] font-[600] relative group">
                        <span className="animate-slideIn">{progress_data}% completed</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#68FF6E] 
                            group-hover:w-full transition-all duration-300"></span>
                    </h1>

                    {/* Progress Bar with Animation */}
                    <div className="w-full h-[8.67px] bg-[#385682] rounded-full">
                        <div className={`relative flex flex-row justify-end items-center h-[8.67px] 
                            bg-[#68FF6E] rounded-full ${styles.progressBarFill}`} 
                            style={{"--progress-width": `${progress_data}%`} as React.CSSProperties}>
                            {/* Animated pointer dot */}
                            <div className={`absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2
                                !w-[11px] !h-[11px] rounded-full border-[3px] border-[#68FF6E] right-[3px]
                                ${styles.progressDot}`}>
                            </div>
                        </div>
                    </div>

                    {/* Motivational Text with Animation */}
                    <p className="text-white text-[13px] font-[500] animate-fadeIn">
                        Your Dream College is Within Reach — Keep Going!
                    </p>
                </div>
            </div>

            {/* Steps Progress */}
            <div className="w-[90%] flex flex-row justify-between items-center gap-4 relative">
                {/* Animated Dashed Line */}
                <div className="absolute w-full h-[3px] rounded-full top-1/2 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 border-b-2 border-dashed border-white
                    animate-dashedLine"></div>

                {/* Step Circles */}
                {fake_value.map((value, index) => (
                    <div key={index} 
                        className={`relative w-[45px] h-[45px] border-[2.5px] rounded-full p-1 
                        flex justify-center items-center z-10 bg-[#79797900] backdrop-blur-lg 
                        ${value === 1 ? 'border-[#68FF6E]' : 'border-white'}
                        transform hover:scale-110 transition-transform duration-200
                        animate-fadeInScale`}
                        style={{animationDelay: `${index * 200}ms`}}>
                        <button
                            onClick={() => handleClick(value, index)}
                            className={`w-full h-full rounded-full font-bold text-black 
                            ${value === 1 ? 'bg-[#FFBD58]' : 'bg-white'}
                            transition-all duration-300 hover:shadow-lg
                            ${value === 1 ? 'hover:bg-[#FFD58A]' : 'hover:bg-gray-100'}
                            ${value === 1 ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                        >
                            {index + 1}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;
