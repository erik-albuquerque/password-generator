import ReactFlowRoot, { ReactFlowProps } from 'reactflow'
import 'reactflow/dist/style.css'

import { Background, Controls } from './components'

type RootProps = ReactFlowProps & {
  children: React.ReactNode
}

const Root: React.FC<RootProps> = ({ children, ...rest }: RootProps) => {
  return (
    <div className="w-screen h-screen">
      <ReactFlowRoot {...rest}>{children}</ReactFlowRoot>
    </div>
  )
}

const ReactFlow = {
  Root,
  Background,
  Controls
}

export { ReactFlow }
