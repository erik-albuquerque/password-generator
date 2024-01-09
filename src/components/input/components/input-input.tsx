import { InputHTMLAttributes } from 'react'

import { cn } from '../../../utils'

type InputInputProps = InputHTMLAttributes<HTMLInputElement> &
  Record<string, unknown>

const InputInput: React.FC<InputInputProps> = ({
  className,
  ...rest
}: InputInputProps) => {
  return (
    <input
      className={cn(
        'bg-transparent border-none flex-1 outline-none text-base',
        className
      )}
      {...rest}
    />
  )
}

export { InputInput }
