import clsx from 'clsx'
import { NodeProps, Position } from 'reactflow'

import { Dot, Overwrite } from '../../types'
import { DotHandle } from './components'

type LabelProps = Overwrite<
  NodeProps,
  {
    data: {
      className?: string
      dots: Dot[]
      children: React.ReactNode
    }
  }
>

const Label: React.FC<LabelProps> = ({ data }: LabelProps) => {
  return (
    <>
      <div
        className={clsx(
          'bg-gray-800 border border-gray-700 font-medium text-white py-3 px-4 rounded-full focus-within:border-purple-500 transition-colors',
          data.className
        )}
      >
        {data.children}
      </div>

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

export { Label }
