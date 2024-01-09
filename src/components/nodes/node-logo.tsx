import clsx from 'clsx'
import { NodeProps, Position } from 'reactflow'

import { Dot, Overwrite } from '../../types'
import { DotHandle } from './components'

type NodeLogoProps = Overwrite<
  NodeProps,
  {
    data: {
      className?: string
      dots: Dot[]
      children?: React.ReactNode
    }
  }
>

const NodeLogo: React.FC<NodeLogoProps> = ({ data }: NodeLogoProps) => {
  return (
    <>
      <div className={clsx(data.className)}>{data.children}</div>

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

export { NodeLogo }
