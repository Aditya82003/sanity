"use client"
import Image from 'next/image'
import React, { FC, useState } from 'react'
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import image7 from '@/assets/image7.png';
import image8 from '@/assets/image8.png';


const Makemagic: FC = () => {
    const [enter, setEnter] = useState<boolean>(false)
    return (
        <div className='h-screen bg-[rgb(13,14,18)] overflow-hidden'>
            <div className='flex gap-4 p-4 justify-center'>
                <div className='flex gap-4 h-[150px] '>
                    <div className='relative ml-10 w-[170px]  overflow-hidden ' onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)}>
                        <div className={`absolute h-full w-full bg-[rgb(13,14,18)]  opacity-85 z-30 ${enter ? "hidden" : ""}`}></div>
                        <Image className={`scale-150 ${enter ? "scale-100" : ""} transition`} src={image1} alt='image1' />
                    </div>
                    <div className=' w-[100px] h-[150px] overflow-hidden grayscale hover:grayscale-0'>
                        <Image className='scale-150 hover:scale-100 transition' src={image2} alt='image2' />
                    </div>
                    <div className=' w-[300px] h-[150px]  overflow-hidden grayscale hover:grayscale-0'>
                        <Image className='scale-150 hover:scale-100 transition' src={image3} alt='image3' />
                    </div>
                    <div className=' w-[250px] h-[150px] overflow-hidden grayscale hover:grayscale-0'>
                        <Image className='scale-150 hover:scale-100 transition' src={image4} alt='image4' />
                    </div>
                    <div className=' w-[200px] h-[150px]  overflow-hidden grayscale hover:grayscale-0'>
                        <Image className='scale-150 hover:scale-105 transition' src={image5} alt='image5' />
                    </div>
                    <div className=' w-[250px] h-[150px]  overflow-hidden grayscale hover:grayscale-0'>
                        <Image className='scale-150 hover:scale-105 transition' src={image6} alt='image6' />
                    </div>
                    <div className=' w-[220px] h-[150px]  overflow-hidden grayscale hover:grayscale-0'>
                        <Image className='scale-150 hover:scale-105 transition' src={image7} alt='image7' />
                    </div>
                    <div className=' w-[150px] h-[150px]  overflow-hidden grayscale hover:grayscale-0'>
                        <Image className='scale-150 hover:scale-105 transition' src={image8} alt='image8' />
                    </div>
                </div>
                {/* <Image src={image2} alt='image2' height={200} />
                <Image src={image3} alt='image3' height={200} />
                <Image src={image5} alt='image5' height={200} />
                <Image src={image6} alt='image6' height={200} />
                <Image src={image7} alt='image7' height={200} />
                <Image src={image8} alt='image8' height={200} /> */}

            </div>
        </div>
    )
}

export default Makemagic