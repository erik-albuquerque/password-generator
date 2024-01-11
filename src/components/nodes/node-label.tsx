import { NodeProps, Position } from 'reactflow'
import { useRecoilValue } from 'recoil'

import { errorsState } from '../../recoil'
import { Dot, Overwrite } from '../../types'
import { cn } from '../../utils'
import { DotHandle } from './components'

type NodeLabelProps = Overwrite<
  NodeProps,
  {
    data: {
      className?: string
      dots: Dot[]
      children: React.ReactNode
    }
  }
>

const NodeLabel: React.FC<NodeLabelProps> = ({ data }: NodeLabelProps) => {
  const errors = useRecoilValue(errorsState)

  return (
    <>
      <div
        className={cn(
          'bg-gray-800 border border-gray-700 font-medium text-white py-3 px-4 rounded-full focus-within:border-purple-500 transition-colors',
          data.className,
          errors?.type === 'input-length-error' && 'focus-within:border-red-500'
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

export { NodeLabel }
