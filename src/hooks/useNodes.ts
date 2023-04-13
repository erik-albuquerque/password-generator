import { useNodesState } from 'reactflow'
import { INITIALS_NODES } from '../constants'

const useNodes = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIALS_NODES)

  return {
    nodes,
    setNodes,
    onNodesChange
  }
}

export { useNodes }
