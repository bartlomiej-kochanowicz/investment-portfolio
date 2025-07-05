import type { Dispatch, SetStateAction } from 'react'

import Button from '@/components/Button'

type ToggleOption<T> = {
  label: string
  value: T
}

type Props<T> = {
  options: ToggleOption<T>[]
  value: T
  setValue: Dispatch<SetStateAction<T>>
}

const ToggleButtons = <T,>({ options, value, setValue }: Props<T>) => (
  <div className="space-x-2">
    {options.map((option) => (
      <Button
        key={String(option.value)}
        onClick={() => setValue(option.value)}
        disabled={value === option.value}
      >
        {option.label}
      </Button>
    ))}
  </div>
)

export { ToggleButtons }
