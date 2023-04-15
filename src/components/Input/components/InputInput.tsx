import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

type InputInputProps = InputHTMLAttributes<HTMLInputElement> &
  Record<string, unknown>

const InputInput: React.FC<InputInputProps> = ({
  className,
  ...rest
}: InputInputProps) => {
  return (
    <input
      className={clsx(
        'bg-transparent border-none flex-1 outline-none text-base',
        className
      )}
      {...rest}
    />
  )
}

export { InputInput }
