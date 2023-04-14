import { NodeProps, Position } from 'reactflow'
import { Overwrite } from '../../@types'
import { DotHandle } from './components'
import { Dot } from './@types'

type RectangleProps = Overwrite<
  NodeProps,
  {
    data: {
      width: number
      height: number
      dots?: Dot[]
      children: React.ReactNode
      title: string
    }
  }
>

const Rectangle: React.FC<RectangleProps> = ({ data }: RectangleProps) => {
  return (
    <>
      <div
        className='flex flex-col items-center gap-4 bg-gray-800 rounded-2xl border border-gray-700 w-full h-full min-w-[200px] min-h-[100px]'
        style={{ width: `${data.width}px`, height: `${data.height}px` }}
      >
        <header className='mt-2'>
          <span className='text-sm font-medium text-white'>{data.title}</span>
        </header>

        {data.children}
      </div>

      {data.dots?.map((dot) => (
        <DotHandle
          key={dot.id}
          id={dot.id}
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

export { Rectangle }
