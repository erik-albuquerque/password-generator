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
      height: 100,
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Bottom',
          left: 20
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Left',
          top: 20
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Right',
          top: 70
        }
      ]
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
      height: 143,
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Top',
          left: 200
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Bottom',
          left: 60
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Right'
        }
      ]
    }
  }
] satisfies Node[]

const EDGE_TYPES = {
  default: DefaultEdge
}

export { NODE_TYPES, EDGE_TYPES, INITIALS_NODES }
