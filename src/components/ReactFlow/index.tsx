import ReactFlowRoot from 'reactflow'
import 'reactflow/dist/style.css'

import { Background, Controls } from './components'

type RootProps = {
  children: React.ReactNode
}

const Root: React.FC<RootProps> = ({ children }: RootProps) => {
  return (
    <div className="w-screen h-screen">
      <ReactFlowRoot>{children}</ReactFlowRoot>
    </div>
  )
}

const ReactFlow = {
  Root,
  Background,
  Controls
}

export { ReactFlow }
