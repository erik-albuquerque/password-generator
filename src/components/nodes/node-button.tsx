import { NodeProps, Position } from 'reactflow'

import { Dot, Overwrite } from '../../types'
import { cn } from '../../utils'
import { DotHandle } from './components'

type NodeButtonProps = Overwrite<
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

const NodeButton: React.FC<NodeButtonProps> = ({ data }: NodeButtonProps) => {
  return (
    <>
      <div
        className={cn(
          'flex flex-row items-center gap-1 font-medium text-white transition-colors',
          data.className
        )}
        onClick={data?.action}
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

export { NodeButton }
