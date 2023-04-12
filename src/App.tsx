import { ConnectionMode } from 'reactflow'
import { ReactFlow } from './components'
import { NODE_TYPES, EDGE_TYPES } from './constants'
import { useEdges, useNodes } from './hooks'

const App = () => {
  const { edges, onEdgesChange, onConnect } = useEdges()
  const { nodes, onNodesChange } = useNodes()

  return (
    <ReactFlow.Root
      nodeTypes={NODE_TYPES}
      edgeTypes={EDGE_TYPES}
      nodes={nodes}
      edges={edges}
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
