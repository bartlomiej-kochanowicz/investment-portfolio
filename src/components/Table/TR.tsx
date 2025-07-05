import React from 'react'

import { cn } from '@/utils/cn'

type Props = React.HTMLAttributes<HTMLTableRowElement>

const TR = ({ className, ...rest }: Props) => (
  <tr
    className={cn('bg-white border-b border-gray-200', className)}
    {...rest}
  />
)

export { TR }
