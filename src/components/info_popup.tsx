import React from 'react'
import styles from './css/InfoPopup.module.css'

const InfoPopup = () => {
  return (
    <div className={`w-full px-6 mt-12 ${styles.fadeIn}`}>   
        <div className={`relative w-full flex flex-col justify-center items-center p-6 bg-[#FFFFFFE3] rounded-md ${styles.popupContainer}`}>
            <h1 className={`text-[#131313] text-[22px] font-[600] text-center mb-2 ${styles.title}`}>
                Important Information Before You Begin
            </h1>
            <ul className='flex flex-col gap-2'>
                {[
                    "This roadmap will guide you in choosing the right path and achieving your goals.",
                    "Use it to make informed decisions and confidently navigate your way forward.",
                    "It helps you stay organized by breaking down your journey into clear, manageable steps.",
                    "Start your roadmap today and take the first step toward success!"
                ].map((text, index) => (
                    <li key={index} className={`text-[#131313] text-[13.33px] font-[500] flex flex-row items-start gap-2 ${styles.listItem}`}
                        style={{ animationDelay: `${index * 200}ms` }}>
                        <div className={`w-[15px] h-[8px] bg-[#FFBD58] rounded-full mt-[6px] ${styles.bullet}`}></div>
                        {text}
                    </li>
                ))}
            </ul>
            <a 
                href="/flow-chart/1" 
                className={`mt-6 px-8 py-2 bg-[#FFBD58] text-black font-semibold rounded-full ${styles.startButton}`}
            >
                Start Now
            </a>
        </div>
    </div>
  )
}

export default InfoPopup;
