import { useCallback } from 'react'
import { useEdgesState, Connection, addEdge } from 'reactflow'
import { INITIALS_EDGES } from '../constants'

const useEdges = () => {
  const [edges, setEdges, onEdgesChange] = useEdgesState(INITIALS_EDGES)

  const onConnect = useCallback((connection: Connection) => {
    return setEdges((edges) => addEdge(connection, edges))
  }, [])

  return {
    edges,
    setEdges,
    onEdgesChange,
    onConnect
  }
}

export { useEdges }
