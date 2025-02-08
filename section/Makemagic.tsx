import Image from 'next/image'
import React, { FC } from 'react'
import image1 from '@/assets/image1.png'

const Makemagic:FC = () => {
  return (
    <div className='h-screen bg-[rgb(13,14,18)] overflow-hidden'>
        <div className='flex gap-1'>
            <Image src={image1} alt='image1' height={200}/>
        </div>
    </div>
  )
}

export default Makemagic