import { ConnectionMode } from 'reactflow'
import { RecoilRoot } from 'recoil'
import { ReactFlow } from './components'
import { NODE_TYPES, EDGE_TYPES } from './constants'
import { useEdges, useNodes } from './hooks'

const App = () => {
  const { edges, onEdgesChange, onConnect } = useEdges()
  const { nodes, onNodesChange } = useNodes()

  return (
    <RecoilRoot>
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
    </RecoilRoot>
  )
}

export { App }
