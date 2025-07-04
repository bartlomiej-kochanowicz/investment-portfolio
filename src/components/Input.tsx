import React from 'react'

import { cn } from '@/utils/cn'

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'block w-full rounded-lg bg-white px-3 py-1.5 text-base text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:ring-black focus:ring-2',
        className,
      )}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input
