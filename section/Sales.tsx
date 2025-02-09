import React, { FC } from 'react'

const Sales: FC = () => {
    return (
        <section className=' flex  flex-col items-center max-sm:items-start h-screen bg-[rgb(13,14,18)] text-white py-20 px-4 gap-8'>
            <div className='flex flex-col items-start md:items-center'>
                <h1 className='text-[rgb(247,119,105)] text-3xl font-bold'>Built for the enterprise</h1>
                <h1 className='text-4xl  tracking-tight'>Embrace complexity with composability</h1>
            </div>
            <p className='text-3xl tracking-tighter max-w-[850px] sm:text-start md:text-center'>Sanity drives critical business operations for Fortune 500 companies to host and deliver content across brands, verticals, locales, and more.</p>
        </section>
    )
}

export default Sales