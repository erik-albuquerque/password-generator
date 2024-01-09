import clsx from 'clsx'
import { ReactNode } from 'react'

import { InputIcon, InputInput } from './components'

type InputRootProps = {
  className?: string
  children: ReactNode
}

const InputRoot: React.FC<InputRootProps> = ({
  children,
  className
}: InputRootProps) => {
  return (
    <div className={clsx('flex items-center gap-3 rounded w-full', className)}>
      {children}
    </div>
  )
}

const Input = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon
}

export { Input }
