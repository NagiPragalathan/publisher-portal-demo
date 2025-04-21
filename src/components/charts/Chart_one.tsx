import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../css/ChartStyles.module.css'

const Chart_one = () => {
  return (
    <div className={`relative w-full px-6 mt-12 flex flex-col items-center ${styles.container}`}>   
    {/* Node Group 1 - Academic Profile */}
    <div className="relative w-full max-w-[280px] flex flex-col items-center">
      {/* Student Image */}
        <Image
          src="/image/girlimage.png"
          alt="Student"
          width={120}
          height={120}
          className={`object-contain h-[100%] w-[55%] mt-[-55px] ${styles.studentImage}`}
        />

      {/* Button */}
      <Link href="/form/current-grade">
        <button className={`w-[37vh] h-[7vh] py-3 px-4 rounded-xl text-white font-medium shadow-lg ${styles.gradientButton}`}>
          Your Academic Profile
        </button>
      </Link>
    </div>

    {/* Curved Path with Nodes */}
    <div className="relative mt-4 h-[200px] w-full flex justify-center">
        <Image
          src="/image/progress_dotted.png"
          alt="Progress Path"
          fill
          className="object-contain !h-[240%]"
        />
    </div>
  </div>
  )
}

export default Chart_one
