import { Node } from 'reactflow'
import { Rectangle, DefaultEdge } from '../components'

const NODE_TYPES = {
  rectangle: Rectangle
}

const INITIALS_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'rectangle',
    position: {
      x: 200,
      y: 400
    },
    data: {
      width: 200,
      height: 100
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'rectangle',
    position: {
      x: 600,
      y: 400
    },
    data: {
      width: 281,
      height: 143
    }
  }
] satisfies Node[]

const EDGE_TYPES = {
  default: DefaultEdge
}

export { NODE_TYPES, EDGE_TYPES, INITIALS_NODES }