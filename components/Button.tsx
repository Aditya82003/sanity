
import React, { ButtonHTMLAttributes, FC } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps={
  variant : "primary" |"secondary"
}& ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<ButtonProps> = ({children,className,variant}) => {
  return (
    <button className={twMerge('w-full sm:w-[200px]  px-4 py-3 rounded-md font-medium',
      variant ==='primary'&& 'bg-black text-white hover:outline hover:outline-offset-0 hover:outline-cyan-500 hover:text-[rgb(190,241,242)]',
      variant ==='secondary' && 'bg-white  border border-[rgb(241,112,100)] hover:outline hover:outline-offset-0 hover:outline-[rgb(255,206,202)]',
     className
    )}>{children}</button>
  )
}

export default Button