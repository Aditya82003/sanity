import Button from '@/components/Button'
import React, { FC } from 'react'
import futureUnlockLogo from '@/assets/futureunlockLogo.png'
import Image from 'next/image'

const SanityUnlock: FC = () => {
  return (
    <div className=' container h-screen bg-[rgb(255,246,245)] py-36'>
      <div className='flex flex-col items-center gap-10 '>
        <div className=''>
        <h3 className=' text-4xl font-extrabold tracking-wide text-[rgb(243,100,88)]'>Join a thriving community</h3>
        <h1 className='text-6xl md:text-7xl font-medium'>Building the <span className='font-bold'>future of content</span></h1>
        </div>
        <div className='flex max-sm:flex-col gap-16 max-sm:gap-4 justify-center'>
          <Image src={futureUnlockLogo} alt='futureunlock' width={500} />
          <div className='max-w-[400px]'>
            <p className='text-2xl'>Sanity Content Operating System isn’t just a solution for your business—it’s a movement supported by thousands of developers, content creators, and digital strategists.</p>
            <Button className="mt-24" variant='primary'>Join our community</Button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default SanityUnlock