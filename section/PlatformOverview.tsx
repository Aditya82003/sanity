'use client'

import React, { FC, useState } from 'react'
import platformFirst from '@/assets/platformFirst.png'
import platformSec from '@/assets/platformSec.png'
import Image from 'next/image'

const PlatformOverview: FC = () => {
  const [mouseOver, setMouseOver] = useState<boolean>(false)

  return (
    <section className='relative bg-black h-screen py-20 text-center'>
      <h1 className='text-center font-bold text-3xl text-[rgb(235,120,109)]'>Platform Overview</h1>
      <h1 className='text-center my-1 text-white text-4xl lg:text-5xl xl:text-6xl  tracking-normal'>Sanity Content Operating System</h1>
      <Image className=' absolute hidden xl:block  right-0' src={platformFirst} height={600} alt="1image" />
      <Image className=' absolute hidden xl:block left-0' src={platformSec} height={600} alt='2image' />
      <div className='relative my-16 max-h-[500px] [perspective:800px] [transform-style:preserve-3d]'>
        <div className="flex flex-col gap-4  bg-[rgb(39,42,46)]  transition mx-auto h-48 w-48  overflow-hidden " style={{ transform: "rotateX(56deg) rotate(-45deg)" }} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
          <div className=' flex w-full h-1'>
            <div className='bg-[rgb(243,100,88)] w-3 h-3'></div>
            <div className='bg-[rgb(26,28,31)] w-full h-3'></div>
          </div>
          <div className={`flex gap-2 h-full p-[10px] ${mouseOver ? "bg-[rgb(246,246,248)]" : ""} `}>
            <div className={`flex flex-col gap-1 w-1/5  bg-[rgb(63,67,74)] ${mouseOver ? "bg-slate-300" : ""}`}>
              <div className={`w-full h-[6px] bg-[rgb(86,93,103)]  ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`} />
              <div className={`w-full h-[6px] bg-[rgb(86,93,103)]  ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`} />
              <div className={`w-full h-[6px] bg-[rgb(86,93,103)]  ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`} />
              <div className={`w-full h-[6px] bg-[rgb(86,93,103)]  ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`} />
              <div className={`w-full h-[6px] bg-[rgb(86,93,103)]  ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`} />
              <div className={`w-full h-[6px] bg-[rgb(86,93,103)]  ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`} />
              <div className={`w-[70%] h-[6px] bg-[rgb(86,93,103)] ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`} />
            </div>
            <div className={`flex flex-col gap-1 w-4/5 bg-[rgb(63,67,74)]  ${mouseOver ? "bg-slate-300" : ""}`}>
              <div className={`w-full h-[6px] bg-[rgb(86,93,103)] ${mouseOver ? "bg-slate-400" : ""} hover:bg-black `}></div>
              <div className={`w-full h-[6px] bg-[rgb(86,93,103)] ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`}></div>
              <div className={`w-full h-[6px] bg-[rgb(86,93,103)] ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`}></div>
              <div className={`w-[70%] h-[6px] bg-[rgb(86,93,103)] ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`}></div>
              <div className={`w-full h-[40px] bg-[rgb(86,93,103)] ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`}></div>
              <div className={`w-full h-[6px] bg-[rgb(86,93,103)]  ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`}></div>
              <div className={`w-[86%] h-[6px] bg-[rgb(86,93,103)] ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`}></div>
              <div className={`w-full h-[6px] bg-[rgb(86,93,103)] ${mouseOver ? "bg-slate-400" : ""} hover:bg-black`}></div>
            </div>
          </div>
        </div>
        <div className='max-sm:absolute top-20 left-24  md:mx-auto flex flex-row gap-1  flex-wrap  w-48 h-48 bg-white transition p-1'  style={{ transform: "rotateX(60deg) rotate(-45deg)" }}>
        
      </div>
      </div>
    </section >
  )
}

export default PlatformOverview