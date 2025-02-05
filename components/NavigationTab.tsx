import React, { FC, useState } from 'react'
import { PlatformTabs } from '@/constants/PlatformTabsDetails'
import Image from 'next/image'

const NavigationTab: FC = () => {
    const [tab, setTab] = useState<"Studio" | "APIs" | "Content Lake">("Studio")

    return (
        <>
            <div className='inline-block text-white bg-[rgb(27,29,32)] rounded-full mt-36  '>
                {PlatformTabs.map((item) => (
                    <button
                        key={item.id}
                        className={`font-bold  rounded-full px-4 py-2 ${tab === item.id ? 'bg-[rgb(243,100,88)]' : ''}`}
                        onClick={() => setTab(item.id as "Studio" | "APIs" | "Content Lake")}
                    >
                        {item.id}
                    </button>
                ))}
            </div>
            <div>{PlatformTabs.map((item,index) => (<>
                <h1 key={index}  className={`text-white font-semibold text-4xl md:text-5xl my-10 ${tab === item.id ? "" : "hidden"}`}>{item.heading}</h1>
                <div className='flex max-sm:flex-col-reverse justify-center gap-28'>
                    <div className='flex flex-col justify-between'>
                        <div className={`text-white max-w-[400px] text-start text-lg font-semibold ${tab === item.id ? "" : "hidden"}`}>{item.content}</div>
                        <button className={`inline-block text-white border border-1 border-[rgb(37,40,55)]  hover:bg-[rgb(37,40,55)] max-w-[300px] p-4 rounded-md ${tab === item.id ? "" : "hidden"}`} >{item.button}</button>
                    </div> 
                    <Image className={`  bg-white text-lg font-semibold ${tab === item.id ? "" : "hidden"}`} src={item.image.src} alt={item.id} width={600} height={600}/>
                </div>

            </>
            ))}</div>
        </>
    )
}

export default NavigationTab
