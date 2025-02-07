'use client'

import Link from 'next/link'
import React, { FC, useState } from 'react'
import rightArrow from '@/assets/icons8-arrow-50.png'
import Image from 'next/image'

type CardProps = {
    heading: string,
    button: string,
    children: string
}

const Futurecard: FC<CardProps> = ({ heading, button, children }) => {
    const[enter,setEnter]=useState<boolean>(false)


    return (
        <div className='flex flex-col w-[300px] min-h-[250px] bg-white justify-between p-6 rounded-sm hover:outline hover:outline-offset-0 hover:outline-[rgb(255,206,202)]' onMouseEnter={()=>setEnter(true)} onMouseLeave={()=>setEnter(false)}>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-xl'>{heading}</h1>
                <p className='tracking-tight'>{children}</p>
            </div>
            <div className='flex '>
                <Link className='font-semibold inline-block' href="@">{button}<Image className={` ml-1 h-4 w-4 inline-block  transition delay-100 ${enter?"ml-3":""}`} src={rightArrow} alt='right arrow' /></Link>
            </div>

        </div>
    )
}

export default Futurecard