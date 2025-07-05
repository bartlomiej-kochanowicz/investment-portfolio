import React from 'react'

import { cn } from '@/utils/cn'

type Props = React.HTMLAttributes<HTMLTableSectionElement> & {
  children: React.ReactNode
}

const THead = ({ children, className, ...rest }: Props) => (
  <thead
    className={cn('text-xs text-gray-700 uppercase bg-gray-50', className)}
    {...rest}
  >
    <tr>{children}</tr>
  </thead>
)

export { THead }
