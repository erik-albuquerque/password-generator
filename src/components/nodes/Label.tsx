import { NodeProps, Position } from 'reactflow'
import { Overwrite } from '../../@types'
import { Dot } from './@types'
import { DotHandle } from './components'
import clsx from 'clsx'

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
          'bg-gray-800 border border-gray-700 font-semibold text-white py-[14px] px-4 rounded-full',
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
