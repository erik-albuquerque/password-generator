import { useNodesState } from 'reactflow'
import { useFlow } from './useFlow'
import { NodeCustomProps } from '../@types'

const useNodes = () => {
  const { INITIALS_NODES } = useFlow()

  const [nodes, setNodes, onNodesChange] = useNodesState(
    INITIALS_NODES as NodeCustomProps[]
  )

  return {
    nodes,
    setNodes,
    onNodesChange
  }
}

export { useNodes }
