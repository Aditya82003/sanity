
import React, { ButtonHTMLAttributes, FC } from 'react'
import { twMerge } from 'tailwind-merge'
type ButtonProps={
  variant : "primary" |"secondary"
}& ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<ButtonProps> = ({children,className,variant}) => {
  return (
    <button className={twMerge('w-full sm:w-[200px]  px-4 py-3 rounded-md font-medium',
      variant ==='primary'&& 'bg-black text-white',
      variant ==='secondary' && 'bg-white  border border-[rgb(241,112,100)]',
     className
    )}>{children}</button>
  )
}

export default Button