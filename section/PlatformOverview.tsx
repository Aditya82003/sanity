'use client'

import React, { FC, useState } from 'react'
import platformFirst from '@/assets/platformFirst.png'
import platformSec from '@/assets/platformSec.png'
import Image from 'next/image'
import NavigationTab from '@/components/NavigationTab'

const PlatformOverview: FC = () => {
  const [mouseOver, setMouseOver] = useState<boolean>(false)

  const sampleArray: number[] = Array.from({ length: 99 }, (_, i) => i + 1);

  return (
    <section className='relative bg-[rgb(13,14,18)]  py-20 px-4 text-center'>
      <h1 className='text-center font-bold text-3xl text-[rgb(235,120,109)]'>Platform Overview</h1>
      <h1 className='text-center my-1 text-white text-4xl lg:text-5xl xl:text-6xl  tracking-normal'>Sanity Content Operating System</h1>
      <Image className=' absolute hidden xl:block  right-0' src={platformFirst} height={600} alt="1image" />
      <Image className=' absolute hidden xl:block left-0' src={platformSec} height={600} alt='2image' />
      <div className='flex flex-col justify-center relative my-16 max-h-[500px] [perspective:800px] [transform-style:preserve-3d]'>

        <div className=' relative inline-flex'>
          <div className="flex-col inline-flex gap-4  bg-[rgb(39,42,46)]  transition mx-auto h-48 w-48  overflow-hidden " style={{ transform: "rotateX(56deg) rotate(-45deg)" }} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
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
          <div className='absolute hidden md:block pl-8 left-[70%] xl:left-[60%] max-w-[300px]'>
            <h5 className=' max-w-[100px] text-white bg-[rgb(19,20,27)] hover:bg-gray-800 px-4 py-2 rounded-full tracking-tighter font-semibold mb-4 '>Studio</h5>
            <p className=' text-white text-start '>  A fully customizable content workspace that mirrors your business and unleashes velocity and creativity.</p>
          </div>
        </div>

        <div>
          <div className='max-sm:hidden absolute top-[70%] left-[5%] xl:left-[25%] flex flex-col gap-2 items-end max-w-[200px] '>
            <h5 className='  max-w-[100px] text-white bg-[rgb(19,20,27)] hover:bg-gray-800 px-4 py-2 rounded-full tracking-tighter font-semibold '>API</h5>
            <p className='  text-white text-end'>
              Powerful and intuitive interfaces that are the fabric of your content operating system</p>
          </div>
          <div className='max-sm:absolute top-[40%] left-[28%]  sm:mx-auto flex flex-row gap-1  flex-wrap  w-48 h-48 bg-[rgb(13,14,18)] transition p-1 -z-20' style={{ transform: "rotateX(60deg) rotate(-45deg)" }}>
            {sampleArray.map((value, index) => {
              return <div className='h-2 w-2 bg-[rgb(110,118,131)] rounded-full m-[2px] hover:scale-[2]' key={index}></div>
            })}

          </div>
        </div>
        <div className=''>
          <div className='absolute  top-[80%] left-[26%] sm:left-[38%] lg:left-[40%] xl:left-[45%] -z-30' >
            <div className=' absolute w-48 h-48 left-[45%] bg-[rgb(13,14,18)] rounded-3xl  z-[9]' style={{ transform: "rotateX(56deg) rotate(-45deg)" }}></div>
            <div className=' absolute w-48 h-48 left-[45%] top-[10px] bg-[rgb(110,118,131)] rounded-3xl z-[8]' style={{ transform: "rotateX(56deg) rotate(-45deg)" }}></div>
            <div className=' absolute w-48 h-48 left-[45%] top-[20px] bg-[rgb(13,14,18)] rounded-3xl z-[7] ' style={{ transform: "rotateX(56deg) rotate(-45deg)" }}></div>
            <div className=' absolute w-48 h-48 left-[45%] top-[30px] bg-[rgb(86,93,103)] rounded-3xl z-[6] ' style={{ transform: "rotateX(56deg) rotate(-45deg)" }}></div>
            <div className=' absolute w-48 h-48 left-[45%] top-[40px] bg-[rgb(13,14,18)] rounded-3xl z-[5] ' style={{ transform: "rotateX(56deg) rotate(-45deg)" }}></div>
            <div className=' absolute w-48 h-48 left-[45%] top-[50px] bg-[rgb(63,67,74)] rounded-3xl z-[4] ' style={{ transform: "rotateX(56deg) rotate(-45deg)" }}></div>
            <div className=' absolute w-48 h-48 left-[45%] top-[60px] bg-[rgb(13,14,18)] rounded-3xl z-[3] ' style={{ transform: "rotateX(56deg) rotate(-45deg)" }}></div>
            <div className=' absolute w-48 h-48 left-[45%] top-[70px] bg-[rgb(39,42,46)] rounded-3xl z-[2]' style={{ transform: "rotateX(56deg) rotate(-45deg)" }}></div>
            <div className=' absolute w-48 h-48 left-[45%] top-[80px] bg-[rgb(13,14,18)] rounded-3xl z-[1] ' style={{ transform: "rotateX(56deg) rotate(-45deg)" }}></div>
            <div className=' absolute w-48 h-48 left-[45%] top-[90px] bg-[rgb(110,118,131)] rounded-3xl z-0 ' style={{ transform: "rotateX(56deg) rotate(-45deg)" }}></div>
          </div>
          <div className='absolute pl-8 left-[70%] xl:left-[60%] max-w-[300px]'>
            <h5 className='hidden md:block max-w-[100px] text-white bg-[rgb(19,20,27)] hover:bg-gray-800 px-4 py-2 rounded-full tracking-tighter font-semibold mb-4 '>Content</h5>
            <p className='hidden md:block  text-white text-start '>  A fully customizable content workspace that mirrors your business and unleashes velocity and creativity.</p>
          </div>

        </div>

      </div>



      <div className=' min-h-[600px] my-44'>
        <NavigationTab />
      </div>


      <h1 className='text-5xl sm:text-7xl font-normal text-white mt-48 tracking-tighter mb-16'>Welcome to the Composable Era</h1>
      <div className='flex max-sm:flex-col gap-4 justify-center px-4'>
        <div className='flex flex-col gap-8 bg-[rgb(19,20,27)] p-6 text-white max-w-[450px] text-start hover:bg-[rgb(37,40,55)] transition delay-150'>
          <div>
            <h4 className='text-2xl font-bold'>Exceed</h4>
            <p className='text-2xl'>customer expectation</p>
          </div>
          <div>
            <p>Unleash your team&#8217;s creative expression to deliver experiences that drive customer engagement and sustain greater revenue.</p>
          </div>
        </div>
        <div className='flex flex-col gap-8 bg-[rgb(19,20,27)] p-6 text-white max-w-[450px] text-start  hover:bg-[rgb(37,40,55)] transition delay-150'>
          <div>
            <h4 className='text-2xl font-bold text-[rgb(243,100,88)]'>Level up</h4>
            <p className='text-2xl'>content velocity</p>
          </div>
          <div>
            <p>Centralize content for stakeholders across your business to resolve silos, maximize reuse, and ensure trustworthy content.</p>
          </div>
        </div>
        <div className='flex flex-col gap-8 bg-[rgb(19,20,27)] p-6 text-white max-w-[450px] text-start  hover:bg-[rgb(37,40,55)] transition delay-150'>
          <div>
            <h4 className='text-2xl font-bold text-[rgb(144,236,249)]'>Future-proof</h4>
            <p className='text-2xl'>your enterprise</p>
          </div>
          <div>
            <p>Adopt a truly composable content architecture that&#8217;s interoperable with tomorrow&#8217;s disruptive tech.</p>
          </div>
        </div>

      </div>
    </section >
  )
}

export default PlatformOverview