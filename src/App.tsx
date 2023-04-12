import { ReactFlow } from './components'
import colors from 'tailwindcss/colors'

const App = () => {
  return (
    <ReactFlow.Root>
      <ReactFlow.Background 
        gap={12}
        size={2}
        color={colors.gray[700]}
      />
      <ReactFlow.Controls />
    </ReactFlow.Root>
  )
}

export { App }
