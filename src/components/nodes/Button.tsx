import { NodeProps, Position } from 'reactflow'
import { Overwrite } from '../../@types'
import { Dot } from './@types'
import { DotHandle } from './components'
import clsx from 'clsx'

type ButtonProps = Overwrite<
  NodeProps,
  {
    data: {
      action?: () => unknown
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
          'flex flex-row items-center gap-1 font-semibold text-white transition-colors py-[14px] px-4 rounded-full',
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
