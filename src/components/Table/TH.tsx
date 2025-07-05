import React from 'react'

import { cn } from '@/utils/cn'

type Props = React.ThHTMLAttributes<HTMLTableCellElement>

const TH: React.FC<Props> = ({ className, scope, ...rest }) => (
  <th
    className={cn(
      'px-6 py-3',
      scope === 'row' && 'py-4 font-medium text-gray-900 whitespace-nowrap',
      className,
    )}
    {...rest}
  />
)

export { TH }
