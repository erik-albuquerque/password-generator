import { ReactFlow } from './components'
import colors from 'tailwindcss/colors'

const App = () => {
  return (
    <ReactFlow.Root>
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
