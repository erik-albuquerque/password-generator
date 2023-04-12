import { ConnectionMode } from 'reactflow'
import { ReactFlow } from './components'
import { NODE_TYPES } from './constants'
import { useEdges, useNodes } from './hooks'

const App = () => {
  const { edges, onEdgesChange, onConnect } = useEdges()
  const { nodes, setNodes, onNodesChange } = useNodes()

  return (
    <ReactFlow.Root
      nodeTypes={NODE_TYPES}
      nodes={nodes}
      edges={edges}
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      connectionMode={ConnectionMode.Loose}
    >
      <ReactFlow.Controls />
    </ReactFlow.Root>
  )
}

export { App }
