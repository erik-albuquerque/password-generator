import { NodeProps, Handle, Position } from 'reactflow'
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
    >
      <Handle 
        id="top" 
        type="source" 
        position={Position.Top}
        className="-top-2 w-2 h-2 bg-gray-400 border-none"
      />

      <Handle 
        id="right" 
        type="source" 
        position={Position.Right} 
        className="-right-2 w-2 h-2 bg-gray-400 border-none"
      />

      <Handle 
        id="left" 
        type="source" 
        position={Position.Left} 
        className="-left-2 w-2 h-2 bg-gray-400 border-none"
      />

      <Handle 
        id="bottom" 
        type="source" 
        position={Position.Bottom} 
        className="-bottom-2 w-2 h-2 bg-gray-400 border-none"
      />
    </div>
  )
}

export { Rectangle }
