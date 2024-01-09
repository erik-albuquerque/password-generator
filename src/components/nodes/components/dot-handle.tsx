import { HTMLAttributes } from 'react'
import { Handle, HandleProps } from 'reactflow'

import { cn } from '../../../utils'

type DotHandleProps = HTMLAttributes<HTMLDivElement> & HandleProps

const DotHandle = ({ position, type, ...rest }: DotHandleProps) => {
  return (
    <Handle
      id={position}
      type={type}
      position={position}
      className={cn(
        'w-2 h-2 bg-gray-400 border-none',
        position === 'top' && '-top-2',
        position === 'left' && '-left-2',
        position === 'right' && '-right-2',
        position === 'bottom' && '-bottom-2'
      )}
      {...rest}
    />
  )
}

export { DotHandle }
