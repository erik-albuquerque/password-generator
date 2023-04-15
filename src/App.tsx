import { ConnectionMode } from 'reactflow'
import { ReactFlow } from './components'
import { useEdges, useNodes } from './hooks'
import { useFlow } from './hooks/useFlow'

const App = () => {
  const { NODE_TYPES, EDGE_TYPES } = useFlow()

  const { edges, onEdgesChange, onConnect } = useEdges()
  const { nodes, onNodesChange } = useNodes()

  return (
    <ReactFlow.Root
      nodeTypes={NODE_TYPES}
      edgeTypes={EDGE_TYPES}
      edges={edges}
      nodes={nodes}
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      connectionMode={ConnectionMode.Loose}
      defaultEdgeOptions={{
        type: 'default'
      }}
    >
      <ReactFlow.Controls />
    </ReactFlow.Root>
  )
}

export { App }
