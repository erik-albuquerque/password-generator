import { EdgeProps, getSmoothStepPath } from 'reactflow'

const DefaultEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd
}: EdgeProps) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  })

  return (
    <path
      id={id}
      style={style}
      className='react-flow__edge-path stroke-2 stroke-gray-400'
      d={edgePath}
      markerEnd={markerEnd}
    />
  )
}

export { DefaultEdge }
