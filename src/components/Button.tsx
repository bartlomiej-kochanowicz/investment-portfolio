import React from 'react'

import { cn } from '@/utils/cn'

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center rounded-lg border border-transparent bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 focus:ring-2 focus:ring-black focus:outline-none focus:ring-offset-2 cursor-pointer',
      className,
    )}
    {...props}
  />
))

Button.displayName = 'Button'

export default Button
