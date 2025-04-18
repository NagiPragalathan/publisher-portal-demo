import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Chart_one = () => {
  return (
    <div className='relative w-full px-6 mt-12 flex flex-col items-center'> 
        {/* Curved Path with Nodes */}
    <div className="relative mt-4 h-[200px] w-full flex justify-center">
        <Image
          src="/image/progress_dotted_two.png"
          alt="Progress Path"
          fill
          className="object-contain !h-[93vh] mt-[-5vh]"
        />
    </div>  
    {/* Node Group 1 - Academic Profile */}
    <div className="relative w-full max-w-[280px] flex flex-col items-center">
      {/* Student Image */}
        <Image
          src="/image/boyimage.png"
          alt="Student"
          width={120}
          height={120}
          className="object-contain h-[23vh] w-[32vh] mt-[-12vh] ml-[-21vh]"
        />

      {/* Button */}
      <Link href="/form/current-grade">
        <button className="w-[37vh] h-[7vh] py-3 px-4 rounded-xl text-white 
          font-medium shadow-lg" style={{ background: 'linear-gradient(153deg, rgb(179 121 223 / 99%) 0%, rgb(255 189 88 / 68%) 100%)' }}>
          Your Academic Profile
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Chart_one
