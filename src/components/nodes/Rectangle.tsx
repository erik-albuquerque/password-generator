import { NodeProps } from 'reactflow'
import clsx from 'clsx'
import { Overwrite } from '../../@types'

type RectangleProps = Overwrite<NodeProps, {
  data: {
    width: number
    height: number
  }
}>

const Rectangle: React.FC<RectangleProps> = ({ data }: RectangleProps) => {
  return (
    <div
      className={clsx(
        "bg-gray-800 rounded-lg border border-gray-700",
        data.width ? `w-[${data.width}px]` : "w-[200px]",
        data.height ? `h-[${data.height}px]` : "h-[100px]"
      )}
    />
  )
}

export { Rectangle }
