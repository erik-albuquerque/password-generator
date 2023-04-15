import clsx from 'clsx'
import { NodeProps, Position } from 'reactflow'

import { Dot, Overwrite } from '../../@types'
import { DotHandle } from './components'

type ButtonProps = Overwrite<
  NodeProps,
  {
    data: {
      action?: () => void
      className?: string
      dots: Dot[]
      children?: React.ReactNode
    }
  }
>

const Button: React.FC<ButtonProps> = ({ data }: ButtonProps) => {
  return (
    <>
      <button
        type='button'
        className={clsx(
          'flex flex-row items-center gap-1 font-medium text-white transition-colors py-3 px-4 rounded-full',
          data.className
        )}
        onClick={data?.action}
      >
        {data.children}
      </button>

      {data.dots.map((dot) => (
        <DotHandle
          key={dot.id}
          type={dot.type}
          position={Position[dot.position]}
          style={{
            left: dot.left,
            right: dot.right,
            top: dot.top,
            bottom: dot.bottom
          }}
        />
      ))}
    </>
  )
}

export { Button }
