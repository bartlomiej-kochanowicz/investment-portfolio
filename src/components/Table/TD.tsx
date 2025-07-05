import React from 'react'

import { cn } from '@/utils/cn'

type Props = React.HTMLAttributes<HTMLTableCellElement>

const TD = ({ className, ...rest }: Props) => (
  <td className={cn('px-6 py-4', className)} {...rest} />
)

export { TD }
