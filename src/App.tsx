import { ReactFlow } from './components'
import { NODE_TYPES, INITIALS_NODES } from './constants'

const App = () => {
  return (
    <ReactFlow.Root
      nodeTypes={NODE_TYPES}
      nodes={INITIALS_NODES}
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
