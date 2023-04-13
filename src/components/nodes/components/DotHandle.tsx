import { HTMLAttributes } from 'react'
import { Handle, HandleProps } from 'reactflow'

import clsx from 'clsx'

type DotHandleProps = HTMLAttributes<HTMLDivElement> & HandleProps

const DotHandle = ({ position, type, ...rest }: DotHandleProps) => {
  return (
    <Handle
      id={position}
      type={type}
      position={position}
      className={clsx(
        'w-2 h-2 bg-gray-400 border-none',
        `-${position}-2`
      )}
      {...rest}
    />
  )
}

export { DotHandle }
