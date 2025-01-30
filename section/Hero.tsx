import React, { FC } from 'react'

const Hero:FC = () => {
  return (
    <section className='container mx-auto  h-screen  py-16'>
        <div className='tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:text-center min-h-[calc(100%-50px)]'>
          <div className='flex text-6xl laptop:text-7xl desktop:text-8xl  pb-7 tablet:max-w-[1200px] '>
            <div className='leading-tight font-[350]'>Make <div className='inline-block bg-[rgb(243,100,88)] text-white px-3 laptop:px-5 '>content</div> your <span className='font-bold'>competitive advantage</span></div>
          </div>
          <div className='max-w-[800px]'>
            <p className='text-2xl tablet:text-3xl font-[425]  leading-snug '>Expect more from your CMS:Treat content as data --actionable, scalable, and ready to drive your business  forward  with Sanity  Content Operating System.</p>
          </div>

        </div>
    </section>
  )
}

export default Hero