import Link from 'next/link'
import React, { FC } from 'react'

type CardProps={
    heading:string,
    button:string,
    children:string
}

const Futurecard:FC<CardProps> = ({heading,button,children}) => {
  return (
    <div className='flex flex-col w-[300px] min-h-[250px] bg-white justify-between p-6  hover:outline hover:outline-4 hover:outline-[rgb(218,191,189)]'>
        <div className='flex flex-col gap-2'>
        <h1 className='font-semibold text-xl'>{heading}</h1>
        <p className='tracking-tight'>{children}</p>
        </div>
        <Link className='font-semibold' href="@">{button}</Link>

    </div>
  )
}

export default Futurecard