import { ReactFlow } from './components'

const App = () => {
  return (
    <ReactFlow.Root>
      <ReactFlow.Background 
        gap={12}
        size={2}
        color="#393939"
      />
      <ReactFlow.Controls />
    </ReactFlow.Root>
  )
}

export { App }
