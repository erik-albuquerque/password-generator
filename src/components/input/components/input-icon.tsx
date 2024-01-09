import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

type InputIconProps = {
  children: ReactNode
}

const InputIcon: React.FC<InputIconProps> = ({ children }: InputIconProps) => {
  return <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>
}

export { InputIcon }
