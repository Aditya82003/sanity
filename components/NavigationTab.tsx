import React, { FC, useState } from 'react'
import { PlatformTabs } from '@/constants/PlatformTabsDetails'

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
            <div>{PlatformTabs.map((item, index) => (<>
                <h1 className={`text-white font-semibold text-4xl md:text-5xl my-10 ${tab === item.id ? "" : "hidden"}`}>{item.heading}</h1>
                <div className='flex max-sm:flex-col-reverse justify-center gap-28'>
                    <div>
                        <div className={`text-white max-w-[400px] text-start text-lg font-semibold ${tab === item.id ? "" : "hidden"}`}>{item.content}</div>
                    </div> 
                    <div className={` min-w-[300px] h-[400px] bg-white text-lg font-semibold ${tab === item.id ? "" : "hidden"}`}>image</div>
                </div>

            </>
            ))}</div>
        </>
    )
}

export default NavigationTab
