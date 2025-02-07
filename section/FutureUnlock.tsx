import Button from '@/components/Button'
import React, { FC } from 'react'
import futureUnlockLogo from '@/assets/futureunlockLogo.png'
import Image from 'next/image'
import Futurecard from '@/components/Futurecard'

const SanityUnlock: FC = () => {
  return (
    <div className=' container  bg-[rgb(255,246,245)] py-28 '>
      <div className='flex justify-center'>

        <div className='flex flex-col items-start gap-10 '>
          <div >
            <h3 className=' text-4xl font-extrabold tracking-wide text-[rgb(243,100,88)]'>Join a thriving community</h3>
            <h1 className='text-6xl md:text-7xl '>Building the <span className='font-bold'>future of content</span></h1>
          </div>
          <div className='flex max-sm:flex-col gap-16 max-sm:gap-4 justify-center'>
            <Image src={futureUnlockLogo} alt='futureunlock' width={600} />
            <div className='flex flex-col justify-center max-w-[500px]'>
              <p className='text-2xl'>Sanity Content Operating System isn&#8217;t just a solution for your business—it&#8217;s a movement supported by thousands of developers, content creators, and digital strategists.</p>
              <Button className="mt-12" variant='primary'>Join our community</Button>
            </div>
          </div>
          <div className='flex gap-4 justify-center flex-wrap '>
            <Futurecard heading='Be inspired' button='Explore projects'>See how teams build remarkable experiences with composable content.</Futurecard>
            <Futurecard heading='Extend Sanity' button='Browse Exchange'>Enhance your content architecture and workflows with an extensive selection of integrations, client libraries, and plugins.</Futurecard>
            <Futurecard heading='Attend event' button='Join us on Meetup'>Join us for conversations with industry leaders and partners and discover how they power their content centered experiences.</Futurecard>
            <Futurecard heading='Stay updated' button='Sign up for newsletter'>Catch up on Sanity news, and go behind the scenes of product development.</Futurecard>
          </div>


        </div>

      </div>
    </div>

  )
}

export default SanityUnlock