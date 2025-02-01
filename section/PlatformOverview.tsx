import React, { FC } from 'react'
import platformFirst from '@/assets/platformFirst.png'
import platformSec from '@/assets/platformSec.png'
import Image from 'next/image'

const PlatformOverview: FC = () => {
  return (
    <section className='relative bg-black h-screen py-20 text-center'>
      <h1 className='text-center font-bold text-3xl text-[rgb(235,120,109)]'>Platform Overview</h1>
      <h1 className='text-center my-1 text-white text-4xl lg:text-5xl xl:text-6xl  tracking-normal'>Sanity Content Operating System</h1>
      <Image className=' absolute hidden xl:block  right-0' src={platformFirst} height={600} alt="1image" />
      <Image className=' absolute hidden xl:block left-0' src={platformSec} height={600} alt='2image' />
      <div className='my-16 [perspective:800px] [transform-style:preserve-3d]'>
        {/* <div className=' mx-auto h-48 w-48 bg-white rotate-45 ' > */}
        <div className="flex flex-col gap-4  bg-[rgb(39,42,46)] hover:bg-white transition mx-auto h-48 w-48 my-5 overflow-hidden " style={{ transform: "rotateX(60deg) rotate(-45deg)" }}>
          <div className=' flex w-full h-1'>
            <div className='bg-[rgb(243,100,88)] w-3 h-3'></div>
            <div className='bg-[rgb(26,28,31)] w-full h-3'></div>
          </div>
          <div className='flex gap-2 h-full p-2 '>
            <div className=' flex flex-col gap-1 w-1/5 py-2 bg-[rgb(63,67,74)] hover:bg-slate-200 '>
              <div className='w-full h-[6px] bg-[rgb(86,93,103)] hover:bg-black'></div>
              <div className='w-full h-[6px] bg-[rgb(86,93,103)] hover:bg-black'></div>
              <div className='w-full h-[6px] bg-[rgb(86,93,103)] hover:bg-black'></div>
              <div className='w-full h-[6px] bg-[rgb(86,93,103)] hover:bg-black'></div>
              <div className='w-full h-[6px] bg-[rgb(86,93,103)] hover:bg-black'></div>
              <div className='w-full h-[6px] bg-[rgb(86,93,103)] hover:bg-black'></div>
              <div className='w-[70%] h-[6px] bg-[rgb(86,93,103)] hover:bg-black'></div>
            
            </div>
            <div className='w-4/5 bg-[rgb(63,67,74)]'></div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default PlatformOverview