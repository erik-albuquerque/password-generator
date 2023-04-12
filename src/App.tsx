import { ConnectionMode } from 'reactflow'
import { ReactFlow } from './components'
import { NODE_TYPES, INITIALS_NODES } from './constants'
import { useEdges } from './hooks'

const App = () => {
  const { edges, onEdgesChange, onConnect } = useEdges()

  return (
    <ReactFlow.Root
      nodeTypes={NODE_TYPES}
      nodes={INITIALS_NODES}
      edges={edges}
      onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      connectionMode={ConnectionMode.Loose}
    >
      <ReactFlow.Background 
        gap={12}
        size={2}
        color="transparent"
      />
      <ReactFlow.Controls />
    </ReactFlow.Root>
  )
}

export { App }
