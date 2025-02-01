import Image from 'next/image'
import React, { FC } from 'react'
import pumaLogo from '@/assets/puma-seeklogo.png'


const HorizontalMarquee:FC = () => {
  return (
    <div className='relative flex  gap-4 h-10 sm:h-20 sm:gap-8 my-5 MyGradient '>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        <Image src={pumaLogo} alt='pumaLogo'/>
        
    </div>
  )
}

export default HorizontalMarquee