import { useCallback } from 'react'
import { useEdgesState, Edge, Connection, addEdge } from 'reactflow'

const initialsEdges = [] satisfies Edge[]

const useEdges = () => {
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialsEdges)

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
