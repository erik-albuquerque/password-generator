import { useNodesState } from 'reactflow'

import { NodeCustomProps } from '../@types'
import { useFlow } from './useFlow'

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
