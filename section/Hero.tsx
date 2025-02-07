import Button from '@/components/Button'
import HorizontalMarquee from '@/components/HorizontalMarquee'
import React, { FC } from 'react'

const Hero: FC = () => {
  return (
    <section className='container  py-[72px] overflow-hidden'>
      <div className='sm:flex sm:flex-col  sm:items-center sm:text-center '>
        <div className='flex text-6xl sm:text-7xl xl:text-8xl  lg:max-w-[1200px] '>
          <h1 className='leading-tight font-[350] tracking-tighter  break-words'>Make <span className='bg-[rgb(243,100,88)] text-white px-3 laptop:px-5 '>content</span>&nbsp;your <span className='font-bold'>competitive advantage</span></h1>
        </div>
        <div className='max-w-[800px]'>
          <p className='text-2xl tablet:text-3xl font-[425]  leading-snug tracking-tight my-8'>Expect more from your CMS:Treat content as data --actionable, scalable, and ready to drive your business  forward  with Sanity  Content Operating System.</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Button variant='primary'>Start Building</Button>
          <Button variant='secondary'>Book a Demo</Button>
        </div>
        <p className='text-center my-10 tracking-widest font-thin'><span className=' inline-block w-8 h-8 p-1 text-[rgb(113,239,241)] mr-5 font-semibold text-lg rounded-full'> &#36;</span><code>npm create sanity@latest</code></p>
      </div>
      <div className='mx-auto sm:w-5/6  overflow-hidden py-2  '>
      <HorizontalMarquee/>
      <HorizontalMarquee/>

      </div>
    </section>
  )
}

export default Hero