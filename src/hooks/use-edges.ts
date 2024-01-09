import { useCallback } from 'react'
import { addEdge, Connection, useEdgesState } from 'reactflow'

import { useFlow } from './use-flow'

const useEdges = () => {
  const { INITIALS_EDGES } = useFlow()

  const [edges, setEdges, onEdgesChange] = useEdgesState(INITIALS_EDGES)

  const onConnect = useCallback(
    (connection: Connection) => {
      return setEdges((edges) => addEdge(connection, edges))
    },
    [setEdges]
  )

  return {
    edges,
    setEdges,
    onEdgesChange,
    onConnect
  }
}

export { useEdges }
