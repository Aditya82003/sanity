import React, { FC } from 'react'

const Sales: FC = () => {
    return (
        <section className=' flex  flex-col items-center max-sm:items-start  bg-[rgb(13,14,18)] text-white py-20 px-4 gap-8'>
            <div className='flex flex-col items-start md:items-center'>
                <h1 className='text-[rgb(247,119,105)] text-3xl font-bold'>Built for the enterprise</h1>
                <h1 className='text-4xl  tracking-tight'>Embrace complexity with composability</h1>
            </div>
            <p className='text-3xl tracking-tighter max-w-[850px] sm:text-start md:text-center'>Sanity drives critical business operations for Fortune 500 companies to host and deliver content across brands, verticals, locales, and more.</p>
            <div className='flex flex-wrap justify-evenly w-full  py-12'>
                <div>
                    <h1 className='text-7xl md:text-9xl '>500<span className='text-[rgb(247,119,105)] font-bold'>K</span></h1>
                    <p className='text-center text-[rgb(143,147,167)]'>project built</p>
                </div>
                <div>
                    <h1 className='text-7xl md:text-9xl'>50<span className='text-[rgb(247,119,105)] font-bold'>M</span></h1>
                    <p className='text-center text-[rgb(143,147,167)]'>document created</p>
                </div>
                <div>
                    <h1 className='text-7xl md:text-9xl '>20<span className='text-[rgb(247,119,105)] font-bold'>B</span></h1>
                    <p className='text-center text-[rgb(143,147,167)]'>API/CDN request</p>
                </div>
                <div>
                    <h1 className='text-7xl md:text-9xl '>1<span className='text-[rgb(247,119,105)] font-bold'>PB</span></h1>
                    <p className='text-center text-[rgb(143,147,167)]'>content served</p>
                </div>

            </div>
            <div className='flex flex-wrap justify-center  gap-4'>
                <div className='w-[400px] bg-[rgb(19,20,27)] p-4 rounded-sm font-bold text-xl'>
                    <p className='text-[rgb(143,147,167)] font-medium'>G2 2023 Ranking</p>
                    <p className='text-[rgb(247,119,105)]'>Leader of CMS</p>
                    <p className='mt-8 text-sm'>Reade Reviews</p>
                </div>
                <div className='w-[400px] bg-[rgb(19,20,27)] p-4 rounded-sm font-bold text-xl'>
                    <p className='text-[rgb(143,147,167)] font-medium'>State of Web Development 2023</p>
                    <p className='text-[rgb(247,119,105)]'>Highest satisfaction scrore of any CMS</p>
                    <p className='mt-8 text-sm'>open report</p>
                </div>
                <div className='w-[400px] bg-[rgb(19,20,27)] p-4 rounded-sm font-bold text-xl'>
                    <p className='text-[rgb(143,147,167)] font-medium'>SOC 2 Type 2</p>
                    <p className='text-[rgb(247,119,105)]'>High secruity complaint</p>
                    <p className='mt-8 text-sm'>view complaince</p>
                </div>
                

            </div>
            <div className='flex flex-col md:flex-row gap-4 mt-20 mx-auto'>
                <button className='min-w-[250px] bg-[rgb(247,119,105)] text-black font-medium tracking-wide rounded-md px-6 py-4 hover:text-white'>Sanity for enterprise</button>
                <button className='min-w-[250px] bg-[rgb(13,14,18)] text-white border-2 border-[rgb(247,119,105)]  font-medium tracking-wide rounded-md px-6 py-4 hover:bg-[rgba(247,119,105,0.23)]'>Contact sales</button>
            </div>
        </section>
    )
}

export default Sales